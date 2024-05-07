import { ISet } from "../../../../context/workout-context/workout-context.interface";
import { IWorkoutInputChanged } from "../workout-selected-exercise-list/WorkoutSelectedExerciseList.interface";

export interface IWorkoutExerciseSetList {
  sets: ISet[];
  isEditable: boolean;
  groupName: string;
  onUpdateInputs: (record: IWorkoutInputChanged) => void;
  isSwipeEnabled: boolean;
}
