import { getHeaderTitle } from "@react-navigation/elements";
import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ICustomHeader } from "./CustomHeader.interface";
import { styles } from "./CustomHeader.styles";
import { useHeaderAnimation } from "./hooks/use-header-animation/use-header-animation";

/**
 * Custom Header component
 */
export const CustomScreenHeader = ({ route, options, onLayout }: ICustomHeader) => {
  const { top } = useSafeAreaInsets();
  const title = getHeaderTitle(options, route.name);

  const { animatedStyle, animatedTextStyle } = useHeaderAnimation();

  return (
    <Animated.View style={[styles.root, { paddingTop: Math.max(top, 16) }, animatedStyle]}>
      <BlurView style={[StyleSheet.absoluteFill, styles.background]} />
      <Animated.View style={animatedTextStyle} className="flex-row items-center" onLayout={onLayout}>
        {Boolean(options.headerLeft) && <View className="flex-1">{options.headerLeft()}</View>}
        <View className="flex-1" style={styles.padding}>
          <Animated.Text style={styles.title}>{title}</Animated.Text>
        </View>
        {Boolean(options.headerRight) && <View className="flex-1 flex-row justify-end">{options.headerRight()}</View>}
      </Animated.View>
    </Animated.View>
  );
};
