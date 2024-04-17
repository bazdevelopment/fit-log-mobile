import { Text as RNText, View } from "react-native";

import { POSITIONS } from "../../../constants/positions";
import { TYPOGRAPHY_ELEMENTS } from "../../../constants/typography-elements";
import { ILabel } from "./Label.interface";
import { defaultStyles } from "./Label.styles";

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
  numberOfLinesDisplayed = 100,
  allowFontScaling = true,
  as = TYPOGRAPHY_ELEMENTS.p,
  icon,
  iconPosition = POSITIONS.LEFT,
}: ILabel) => {
  const iconElement = <View className="mr-2">{icon}</View>;
  return (
    <View
      className={
        icon ? `flex flex-row items-center ${additionalContainerStyle as string}` : (additionalContainerStyle as string)
      }
    >
      {iconPosition === POSITIONS.LEFT && iconElement}
      <RNText
        testID="label-id"
        allowFontScaling={allowFontScaling}
        className={`${defaultStyles[as]} ${additionalLabelStyle as string}`}
        numberOfLines={numberOfLinesDisplayed}
        ellipsizeMode={ellipsizeMode}
      >
        {labelText}
      </RNText>
      {iconPosition === POSITIONS.RIGHT && iconElement}
    </View>
  );
};

export default Label;
