import { Pressable, View } from "react-native";

import Label from "../label/label";
import { IIcon } from "./icon.interface";

/**
 * Icon Component
 * The Icon component renders an icon element with an optional heading below it. It provides interactivity by allowing onPress functionality and supports customization of text size and background.
 *
 * Props
iconElement (required): The icon element to be rendered.
heading: A short description or heading to be displayed below the icon.
textSize: The size of the text for the heading. Defaults to "base".
onPress: Function to be called when the icon is pressed.
withBackground: Determines whether to display a background behind the icon. Defaults to true.
 */
const Icon = ({ iconElement, heading, textSize, onPress, withBackground = true }: IIcon) => {
  return (
    <Pressable
      accessibilityRole="button"
      className="flex flex-col justify-center items-center"
      onPress={onPress}
      testID="icon-pressable-id"
    >
      <View className={`rounded-full ${withBackground ? "bg-slate-100 p-4" : ""}`}>{iconElement}</View>
      {heading && (
        <Label labelText={heading} additionalLabelStyle={`text-${textSize as string} mt-1 font-inter-medium`} />
      )}
    </Pressable>
  );
};

export default Icon;
