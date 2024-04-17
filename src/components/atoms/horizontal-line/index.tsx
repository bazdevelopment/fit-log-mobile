import { View } from "react-native";
import { twMerge } from "tailwind-merge";

import { IHorizontalLine } from "./HorizontalLine.interface";
import { colorClass, thicknessClass } from "./HorizontalLine.styles";

/**
 * The Horizontal Line component is a customizable React component designed to render a horizontal line with dynamic thickness and color.
 * It provides a simple way to add horizontal separators or dividers to user interfaces.
 */
const HorizontalLine = ({ thickness, color, additionalClassName }: IHorizontalLine) => {
  return (
    <View
      className={twMerge(thicknessClass[thickness], colorClass[color], `rounded-full w-full`, additionalClassName)}
      testID="horizontal-line"
    />
  );
};

export default HorizontalLine;
