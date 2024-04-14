import { TUnit } from "../../../constants/unit";

export interface IWheelPickerElement {
  value: number;
  onScrollToIndex: (index: number) => void;
  isSelected: boolean;
  maximumWidth?: number;
  unit?: TUnit;
}
