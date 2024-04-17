import { TActivityLevel } from "../../../constants/activity-level";

export interface IRadioButton {
  isSelected: boolean;
  onPress: (level: TActivityLevel) => void;
  text: TActivityLevel;
  hasBorder: boolean;
}
