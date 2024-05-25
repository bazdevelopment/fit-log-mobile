import { TExerciseWithSets } from "../../../../api/workout/workout.types";
import { IWorkoutInputChanged } from "../workout-selected-exercise-list/WorkoutSelectedExerciseList.interface";

export interface IWorkoutSelectedExercise {
  exerciseDetails: TExerciseWithSets;
  isEditable: boolean;
  onUpdateInputs: (record: IWorkoutInputChanged) => void;
  isSwipeEnabled: boolean;
}
