export interface IWheelPickerElement {
  value: number;
  onScrollToIndex: (index: number) => void;
  isSelected: boolean;
  maximumWidth?: number;
  unit?: "cm" | undefined;
}
