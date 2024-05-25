import { TExerciseWithSets } from "../../../../api/workout/workout.types";
import { ISet } from "../../../../context/workout-context/workout-context.interface";

export interface IWorkoutSelectedExerciseList {
  exercises: TExerciseWithSets[];
  isEditable: boolean;
  onUpdateInputs: (record: IWorkoutInputChanged) => void;
  isSwipeEnabled: boolean;
}

export interface IWorkoutInputChanged {
  groupName: string;
  setId: string;
  field: keyof ISet;
  newValue: string;
}
