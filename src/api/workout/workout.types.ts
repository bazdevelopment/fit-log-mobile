import { IErrorResponse, ISuccessResponse } from "../auth/auth.types";
import { IExerciseResponse } from "../exercise/exercise.types";

interface ICreateWorkoutResponse {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface ICreateWorkoutSuccessResponse extends ISuccessResponse {
  record: ICreateWorkoutResponse;
}

export interface ICreateWorkoutFields {
  userId: string;
  name: string;
  musclesGroupTarget: string[];
  creationDate?: string;
}

export interface IUserWeeklyWorkouts {
  [month: string]: {
    [day: string]: ICreateWorkoutResponse[] | null;
  };
}

export interface IUserWeeklyWorkoutsResponse extends ISuccessResponse {
  record: IUserWeeklyWorkouts;
}

export interface IDailyUserWorkoutsByDate extends ISuccessResponse {
  record: TWorkoutSetAndExercisesResponse[];
}

export interface IDateInterval {
  startDate: string;
  endDate: string;
}

export type TWorkoutSetAndExercisesResponse = ICreateWorkoutResponse & {
  exercises: TExerciseWithSets[];
};

export type TExerciseWithSets = {
  id: string;
  set: any; //TODO change the type here
  workoutId: string;
  exercise: IExerciseResponse;
  exerciseId: string;
};

export interface ICreateWorkoutOptions {
  onError: (error: IErrorResponse) => void;
  onSuccess: (data: ISuccessResponse) => void;
}
