import { Dispatch } from "react";

import { IFitnessExercise } from "../../../../__mocks__/fitness-exercises";
import { TWorkoutAction } from "../../../../context/workout-context/workout-context.interface";
import { IWorkoutInputChanged } from "../workout-selected-exercise-list/WorkoutSelectedExerciseList.interface";

export interface IWorkoutSelectedExercise {
  exercise: IFitnessExercise;
  groupName: string;
  dispatch: Dispatch<TWorkoutAction>;
  isEditable: boolean;
  onUpdateInputs: (record: IWorkoutInputChanged) => void;
}
