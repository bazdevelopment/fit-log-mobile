import { ReactNode } from "react";
import { Animated } from "react-native";

export interface ISwipeableRow {
  renderRightActions: (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => ReactNode;
  children: ReactNode;
  isSwipeEnabled?: boolean;
}
