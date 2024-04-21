import { Platform } from "react-native";
import { Easing, interpolate, useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";

import { useHeaderLayout } from "../../../../../context/header-layout-context";
import { useScrollContext } from "../../../../../context/scroll-context";

const TRANSITION_QUICK = {
  duration: 250,
  easing: Easing.out(Easing.cubic),
};

/**
 * Custom hook to handle the header logic when the screen is being scroller
 */
export const useHeaderAnimation = () => {
  const isTabBarCollapseEffectEnabled = false;
  const { scrollValue } = useScrollContext();
  const { headerHeight } = useHeaderLayout();
  // Derived animated values
  const easedValue = useDerivedValue(() => Easing.ease(scrollValue.value), [scrollValue]);
  const shownAmount = useDerivedValue(
    () => withTiming(scrollValue.value > 0.5 ? 1 : 0, TRANSITION_QUICK),
    [scrollValue]
  );
  const correctValue = useDerivedValue(
    () => (isTabBarCollapseEffectEnabled ? shownAmount.value : easedValue.value),
    [isTabBarCollapseEffectEnabled]
  );

  // Animated styles
  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: correctValue.value * -headerHeight }],
    }),
    [correctValue, headerHeight]
  );
  const animatedTextStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(correctValue.value, [0, 1], [1, Platform.OS === "android" ? 0.75 : 0]),
      transform:
        Platform.OS === "android"
          ? [
              { scale: interpolate(correctValue.value, [0, 1], [1, 0.75]) },
              { translateY: interpolate(correctValue.value, [0, 1], [0, 18]) },
            ]
          : undefined,
    }),
    [correctValue]
  );

  return { animatedStyle, animatedTextStyle };
};
