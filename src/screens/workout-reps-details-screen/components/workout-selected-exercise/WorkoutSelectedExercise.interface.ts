import { TExerciseWithSets } from "../../../../api/workout/workout.types";

export interface IWorkoutSelectedExercise {
  exerciseDetails: TExerciseWithSets;
  isEditable: boolean;
  isSwipeEnabled: boolean;
}
