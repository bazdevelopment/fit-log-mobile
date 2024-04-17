import { TUnit } from "../../../constants/unit";

export interface IWheelPicker {
  selectedIndex: number;
  onChange: (index: number) => void;
  values: number[] | string[];
  unit?: TUnit;
}
