import { Text as RNText, View } from "react-native";

import { POSITIONS } from "../../../enums/positions";
import { TYPOGRAPHY_ELEMENTS } from "../../../enums/typography-elements";
import { ILabel } from "./label.interface";
import { defaultStyles } from "./label.styles";

/**
 *
 * A reusable component for displaying text labels with optional styling and ellipsis handling.
 *
 * @example
 * -- Basic usage --
 * <Label labelText="Hello World" />
 *
 * -- Usage with additional styles--
 * <Label
 *   labelText="Long text that might be truncated"
 *   additionalLabelStyle="tailwind classes"
 *   additionalContainerStyle="tailwind classes"
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
  const iconElement = <View className="mr-2">{icon}</View>;
  return (
    <View
      className={
        icon ? `flex flex-row items-center ${additionalContainerStyle as string}` : (additionalContainerStyle as string)
      }
    >
      {iconPosition === POSITIONS.left && iconElement}
      <RNText
        testID="label-id"
        allowFontScaling={allowFontScaling}
        className={`${defaultStyles[as]} ${additionalLabelStyle as string}`}
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
