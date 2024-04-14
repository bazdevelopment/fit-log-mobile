import { TouchableOpacity } from "react-native";

import Label from "../../atoms/label/label";
import { IWheelPickerElement } from "./wheel-picker-element.interface";

/**
 * WheelPickerElement Component
 * Represents an individual selectable item within the WheelPicker component.
 * Each element typically displays a value along with an optional unit.
 */
const WheelPickerElement = ({ value, onScrollToIndex, isSelected, maximumWidth = 100, unit }: IWheelPickerElement) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => onScrollToIndex(value)}
      className="h-[60px] flex-row items-center justify-center"
      style={{
        width: maximumWidth,
      }}
    >
      <Label
        labelText={value.toString()}
        additionalLabelStyle={`text-center text-[28px] ${isSelected ? "font-inter-bold text-[32px] text-primary-default mt-1" : "font-inter-medium"}`}
        as="h1"
      />
      {!!unit && (
        <Label
          labelText={unit}
          additionalLabelStyle={`${isSelected ? "font-inter-bold text-primary-default" : ""}`}
          additionalContainerStyle="mt-2 ml-2"
          as="h5"
        />
      )}
    </TouchableOpacity>
  );
};

export default WheelPickerElement;
