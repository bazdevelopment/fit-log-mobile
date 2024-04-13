import { Pressable, View } from "react-native";
import { twMerge } from "tailwind-merge";

import { debounce } from "../../../utilities/debounce";
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
const Icon = ({
  iconElement,
  heading,
  textSize,
  onPress,
  additionalClassName,
  additionalInnerClassName,
  disabled,
  isHidden,
}: IIcon) => {
  const style = twMerge(
    `flex flex-col justify-center items-center ${isHidden ? "opacity-0" : "opacity-100"} `,
    additionalClassName
  );
  // onPress={debounce(onPress, 150)}
  return (
    <Pressable
      accessibilityRole="button"
      className={style}
      disabled={disabled}
      onPress={onPress}
      testID="icon-pressable-id"
    >
      <View className={`rounded-full ${additionalInnerClassName ? `${additionalInnerClassName} p-3` : "bg-white p-4"}`}>
        {iconElement}
      </View>
      {heading && (
        <Label labelText={heading} additionalLabelStyle={`text-${textSize as string} mt-1 font-inter-medium`} />
      )}
    </Pressable>
  );
};

export default Icon;
