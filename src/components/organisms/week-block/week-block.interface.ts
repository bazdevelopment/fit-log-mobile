import { IWorkoutSection } from "../../../__mocks__/workout-schedule-mock";

export interface IWeekBlock {
  workoutSections: IWorkoutSection[];
  onScrollToIndex: (sectionIndex: number, itemIndex: number) => void;
}
