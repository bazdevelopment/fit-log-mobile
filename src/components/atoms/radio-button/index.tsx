import { TouchableOpacity, View } from "react-native";

import Label from "../label";
import { IRadioButton } from "./RadioButton.interface";
/**
 * The RadioButton component is a reusable component designed to render a radio button with customizable appearance and behavior.
 * It allows users to select a single option from a list of choices.
 */
const RadioButton = ({ isSelected, onPress, text, hasBorder }: IRadioButton) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(text)}
      accessibilityRole="button"
      className={`w-full flex-row items-center gap-2 ${hasBorder ? (isSelected ? "rounded-lg border-[1.5px] border-primary-default p-3" : "rounded-lg border-[1.5px] border-slate-300 p-3") : ""}`}
    >
      <View
        className={`size-[19px] items-center justify-center rounded-full border-[1.5px] ${isSelected ? "border-primary-default" : "border-slate-200"}  bg-white`}
      >
        {isSelected && <View className="size-[9px] rounded-full bg-primary-default" />}
      </View>

      <Label labelText={text} as="h4" additionalLabelStyle="font-primary" />
    </TouchableOpacity>
  );
};

export default RadioButton;
