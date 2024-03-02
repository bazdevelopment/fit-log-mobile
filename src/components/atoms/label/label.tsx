import { POSITIONS } from "enums/positions";
import { TYPOGRAPHY_ELEMENTS } from "enums/typography-elements";
import React from "react";
import { Text as RNText, View } from "react-native";
import { atoms } from "styles/atoms";

import { ILabel } from "./label.interface";
import { defaultStyles } from "./label.styles";

/**
 * A reusable component for displaying text labels with optional styling and ellipsis handling.
 *
 * @example
 * -- Basic usage --
 * <Label labelText="Hello World" />
 *
 * -- Usage with additional styles--
 * <Label
 *   labelText="Long text that might be truncated"
 *   additionalLabelStyle={{ color: 'red', fontSize: 16 }}
 *   additionalContainerStyle={{ backgroundColor: 'lightgray', padding: 8 }}
 * />
 */

const Label = ({
  labelText,
  additionalLabelStyle,
  additionalContainerStyle,
  ellipsizeMode,
  numberOfLinesDisplayed = 1,
  allowFontScaling = true,
  as = TYPOGRAPHY_ELEMENTS.p,
  icon,
  iconPosition = POSITIONS.left,
}: ILabel) => {
  const iconElement = <View style={atoms.mr_md}>{icon}</View>;
  return (
    <View
      style={
        icon ? [atoms.flex, atoms.flex_row, atoms.align_center, additionalContainerStyle] : additionalContainerStyle
      }
    >
      {iconPosition === POSITIONS.left && iconElement}
      <RNText
        allowFontScaling={allowFontScaling}
        style={[defaultStyles[as], additionalLabelStyle]}
        numberOfLines={numberOfLinesDisplayed}
        ellipsizeMode={ellipsizeMode}
      >
        {labelText}
      </RNText>
      {iconPosition === POSITIONS.right && iconElement}
    </View>
  );
};

export default Label;
