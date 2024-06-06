import { ISet } from "../../../../context/workout-context/workout-context.interface";

export interface IWorkoutExerciseSetList {
  sets: ISet[];
  isEditable: boolean;
  isSwipeEnabled: boolean;
  workoutExerciseId: string;
}
