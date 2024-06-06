import { ISet } from "../../../../context/workout-context/workout-context.interface";

export interface IWorkoutExerciseRow {
  additionalContainerStyle: string;
  set: ISet;
  index: number;
  isEditable: boolean;
  workoutExerciseId: string;
  handleAddSetToWorkoutExercise: (fields) => void;
  handleUpdateSet: (fields) => void;
}
