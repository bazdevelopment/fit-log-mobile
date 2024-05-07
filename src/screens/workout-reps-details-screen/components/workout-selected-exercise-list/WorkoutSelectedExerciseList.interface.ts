import { Dispatch } from "react";

import { IFitnessExercise } from "../../../../__mocks__/fitness-exercises";
import { ISet, TWorkoutAction } from "../../../../context/workout-context/workout-context.interface";

export interface IWorkoutSelectedExerciseList {
  groupName: string;
  exercises: IFitnessExercise[];
  dispatch: Dispatch<TWorkoutAction>;
  isEditable: boolean;
  onUpdateInputs: (record: IWorkoutInputChanged) => void;
}

export interface IWorkoutInputChanged {
  groupName: string;
  setId: string;
  field: keyof ISet;
  newValue: string;
}
