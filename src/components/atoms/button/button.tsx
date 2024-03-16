import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { POSITIONS } from "../../../enums/positions";
import { IButton } from "./button.interface";
import { getButtonStyles } from "./button.styles";

/**
 * Button Component
The Button component is a customizable button element designed for use in React Native applications. It provides flexibility in appearance and behavior to suit various use cases.

* Props
buttonText (required): The text to display on the button.
onPress (required): Function to be called when the button is pressed.
variant: Specifies the visual variant of the button. Defaults to "primary".
disabled: Determines whether the button is disabled. Defaults to false.
size: Specifies the size of the button. Defaults to "lg" (large).
icon: Optional icon to display alongside the button text.
iconPosition: Determines the position of the icon relative to the button text. Defaults to "right".
isLoading: Determines whether the button is in a loading state, displaying an activity indicator instead of the text.
 *
 */

const Button = ({
  buttonText,
  onPress,
  variant = "primary",
  disabled,
  size = "lg",
  icon,
  iconPosition = POSITIONS.right,
  isLoading,
}: IButton) => {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} disabled={disabled}>
      {({ pressed }) => (
        <View className={getButtonStyles(variant, size, "wrapper", pressed)}>
          {iconPosition === POSITIONS.left && !isLoading && icon}
          {isLoading ? (
            <ActivityIndicator color="blue" className="p-3" testID="loading-indicator" />
          ) : (
            <Text className={getButtonStyles(variant, size, "text", pressed)}>{buttonText}</Text>
          )}
          {iconPosition === POSITIONS.right && !isLoading && icon}
        </View>
      )}
    </Pressable>
  );
};

export default Button;
