import { IFitnessExercise } from "../../__mocks__/fitness-exercises";

export interface ISet {
  weight: string;
  reps: string;
  id: string;
}

interface IWorkoutExercise extends IFitnessExercise {
  sets: ISet[];
}

export interface IWorkoutState {
  muscleGroups: string[];
  exercises: Record<string, IWorkoutExercise[]>;
}

export type TWorkoutAction =
  | { type: "ADD_MUSCLE_GROUP"; payload: string }
  | { type: "ADD_EXERCISE"; payload: { group: string; exercise: IWorkoutExercise } }
  | { type: "ADD_SET"; payload: { group: string; exerciseName: string; set: ISet } }
  | { type: "UPDATE_SET"; payload: { setId: string; group: string; weight: string; reps: string } };
