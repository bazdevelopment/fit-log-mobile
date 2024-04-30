import { useMemo } from "react";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useHeaderLayout } from "../../context/header-layout-context";
import { useScrollContext } from "../../context/scroll-context";
import { clamp } from "../../utilities/clamp";

const SCROLL_DISTANCE = 200;

/**
 * This custom hook provides functionality to manage scrolling behavior and compute styles for a content container, typically used in conjunction with a FlatList/ScrollView component.
 * it should be used like this
 *   <Animated.FlatList
      style={{flex:1}}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      data={data}
      renderItem={}
      onScroll={scrollHandler}
      showsVerticalScrollIndicator={false}
    />
 */
export const useContentScroller = () => {
  /**
   * scrollValue is extracted from the useScrollContext() hook, presumably representing the current scroll position.
 . . top and bottom are extracted using useSafeAreaInsets(), providing padding values for the safe area insets at the top and bottom of the screen.
     headerHeight is obtained using useHeaderLayout(), likely representing the height of the header component.
   */
  const { scrollValue } = useScrollContext();
  const { top, bottom } = useSafeAreaInsets();
  const { headerHeight } = useHeaderLayout();
  /**
   * previousScrollValue is initialized as a shared value using useSharedValue(0). It likely stores the previous scroll position to calculate the delta change in scroll position.
     scrollHandler is created using useAnimatedScrollHandler, a Reanimated hook. It takes a function as an argument, which is called whenever a scroll event occurs.
     This function updates the scrollValue based on the scroll position, ensuring it stays within the range [0, 1]. The clamp function is used to limit the value within this range.
   */
  const previousScrollValue = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(
    event => {
      const { y } = event.contentOffset;
      const { contentSize, layoutMeasurement } = event;
      /** calculate the maximum scroll offset */
      const maxScrollOffset = contentSize.height - layoutMeasurement.height;

      if (y < 0 || y > event.contentSize.height) {
        return;
      }
      /**
       * Check if the user is not at the bottom of the screen
       */
      if (y < maxScrollOffset) {
        /* logic for header show/hide animation here */
        scrollValue.value = clamp(scrollValue.value + (y - previousScrollValue.value) / SCROLL_DISTANCE, 0, 1);
        previousScrollValue.value = y;
      }
    },
    [bottom]
  );
  /**
   * contentContainerStyle is calculated using useMemo, a React hook that memoizes the value to prevent unnecessary recalculations. It computes the padding for the content container of the FlatList based on the header height, top safe area inset, and bottom safe area inset.
   */
  const contentContainerStyle = useMemo(
    () => ({ paddingTop: 16 + headerHeight + top, paddingBottom: 16 + bottom + 40 }),
    [headerHeight, top, bottom]
  );

  return { contentContainerStyle, scrollHandler };
};
