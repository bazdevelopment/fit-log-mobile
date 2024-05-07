import { ISet } from "../../../../context/workout-context/workout-context.interface";
import { IWorkoutInputChanged } from "../workout-selected-exercise-list/WorkoutSelectedExerciseList.interface";

export interface IWorkoutExerciseRow {
  additionalContainerStyle: string;
  set: ISet;
  index: number;
  isEditable: boolean;
  groupName: string;
  onUpdateInputs: (record: IWorkoutInputChanged) => void;
}
