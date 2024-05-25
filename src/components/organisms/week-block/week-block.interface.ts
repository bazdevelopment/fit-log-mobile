import { IWorkoutSection } from "../../../__mocks__/workout-schedule-mock";
import { TPositions } from "../../../constants/positions";
import { Nullable } from "../../../types/general.types";
import { ISegmentedControlOption } from "../segmented-control/SegmentedControl.interface";

export interface IWeekBlock {
  workoutSections: IWorkoutSection[];
  onScrollToIndex: (sectionIndex: number, itemIndex: number) => void;
  weekOffset: number;
  initialDayFocused: Nullable<ISegmentedControlOption>;
  changeWeekOffset: (direction: TPositions) => void;
  weekNumber: number;
  currentMonth: string;
  interval: string;
  currentYear: number;
  segmentedDays: ISegmentedControlOption[];
}
