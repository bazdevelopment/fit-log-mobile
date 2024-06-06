import { TExerciseWithSets } from "../../../../api/workout/workout.types";
import { ISet } from "../../../../context/workout-context/workout-context.interface";

export interface IWorkoutSelectedExerciseList {
  exercises: TExerciseWithSets[];
  isEditable: boolean;
  isSwipeEnabled: boolean;
}

export interface IWorkoutInputChanged {
  workoutExerciseId: string;
  setId: string;
  field: keyof ISet;
  newValue: string;
}
