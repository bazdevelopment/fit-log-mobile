import { Pressable } from "react-native";

import { DEVICE_DIMENSIONS } from "../../../constants/device-dimensions";
import Label from "../../atoms/label";
import { IMuscleGroupCard } from "./MuscleGroupCard.interface";

const boxWidth = DEVICE_DIMENSIONS.DEVICE_WIDTH / 3 - 26;

/**
 * Muscle group card used to display the muscle group and a suggestive image
 * The logic is adjusted to display 3 cards per row for each device
 */
const MuscleGroupCard = ({ title, icon, isSelected, onPress }: IMuscleGroupCard) => {
  return (
    <Pressable
      accessibilityRole="button"
      style={{ width: boxWidth, height: boxWidth }}
      className={`items-center justify-center gap-2 rounded-xl border-[1.5px]  ${isSelected ? "border-[3px] border-secondary-default bg-secondary-default" : "border-primary-default"}`}
      onPress={onPress}
    >
      <Label
        labelText={title}
        as="h5"
        additionalLabelStyle={`font-primary-bold ${isSelected ? "text-white" : "text-gray-800"}`}
      />

      {Boolean(icon) && icon}
    </Pressable>
  );
};

export default MuscleGroupCard;
