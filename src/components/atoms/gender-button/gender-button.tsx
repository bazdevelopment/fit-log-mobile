import { TouchableOpacity } from "react-native";

import FemaleIcon from "../../../assets/icons/FemaleIcon";
import MaleIcon from "../../../assets/icons/MaleIcon";
import { GENDER } from "../../../constants/gender";
import { Colors } from "../../../styles/colors";
import Icon from "../icon/icon";
import Label from "../label/label";
import { IGenderButton } from "./gender-button.interface";

/**
 * Component used to display the gender button
 */
const GenderButton = ({ gender, onPress, isSelected }: IGenderButton) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      className={`size-36 flex-col items-center justify-center gap-2 rounded-full ${!isSelected ? " bg-slate-100" : "bg-primary-default"}`}
      onPress={onPress}
    >
      <Icon
        additionalInnerClassName="bg-none p-0"
        onPress={onPress}
        iconElement={
          gender === GENDER.Male ? (
            <MaleIcon color={isSelected ? Colors.white : Colors.blackPantone} width={50} height={50} />
          ) : (
            <FemaleIcon color={isSelected ? Colors.white : Colors.blackPantone} width={50} height={50} />
          )
        }
      />
      <Label labelText={gender} additionalLabelStyle={`${!isSelected ? "text-black" : "text-white"}`} />
    </TouchableOpacity>
  );
};

export default GenderButton;
