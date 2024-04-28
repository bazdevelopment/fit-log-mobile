import { ISegmentedControlOption } from "../../SegmentedControl.interface";

export interface ISegmentedControlTab {
  option: ISegmentedControlOption;
  onPress: (option: ISegmentedControlOption) => void;
  isActive: boolean;
  tabWidth: number;
  tabInactiveColor?: string;
  borderColor?: string;
  withBorder?: boolean;
}
