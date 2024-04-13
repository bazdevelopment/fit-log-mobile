import { TGender } from "../../../constants/gender";

export interface IGenderButton {
  gender: TGender;
  onPress: () => void;
  isSelected: boolean;
}
