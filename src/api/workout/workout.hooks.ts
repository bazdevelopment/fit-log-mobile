import { useMutation, useQuery } from "@tanstack/react-query";

import { IErrorResponse, ISuccessResponse } from "../auth/auth.types";
import {
  addMultipleExercisesToWorkout,
  addMultipleSetsToWorkoutExercise,
  addSetToWorkoutExercise,
  createWorkout,
  getUserWeeklyWorkouts,
  getUserWorkoutsByDate,
  updateSetBySetId,
} from "./workout.requests";
import {
  IAddMultipleExercisesToWorkout,
  IAddMultipleExercisesToWorkoutSuccessResponse,
  IAddMultipleSetsToWorkoutExercise,
  IAddSetToWorkoutExercise,
  ICreateWorkoutOptions,
} from "./workout.types";

/**
 * utility hook used to partially update fields from user table
 */
export const useCreateWorkout = (options: ICreateWorkoutOptions) => {
  return useMutation({
    mutationFn: createWorkout,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data: ISuccessResponse) {
      options.onSuccess(data);
    },
  });
};

/**
 * Utility hook used to fetch the user workouts from an interval
 */
export const useCurrentWeeklyWorkouts = (startDate: string, endDate: string) =>
  useQuery({
    queryKey: ["user-weekly-workouts", startDate, endDate],
    queryFn: () => getUserWeeklyWorkouts({ startDate, endDate }),
  });

/**
 * Utility hook used to fetch the user workouts by date
 */
export const useUserWorkoutsByDate = (date: string) =>
  useQuery({
    queryKey: ["user-workouts-by-date", date],
    queryFn: () => getUserWorkoutsByDate(date),
  });

/**
 * Utility hook add multiple exercises to an workout
 */
export const useAddMultipleExercisesToWorkout = (options: IAddMultipleExercisesToWorkout) =>
  useMutation({
    mutationFn: addMultipleExercisesToWorkout,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data: IAddMultipleExercisesToWorkoutSuccessResponse) {
      options.onSuccess(data);
    },
  });

/**
 * Utility hook add a set (weight, reps) to an existing workout exercise
 */
export const useAddSetToWorkoutExercise = (options: IAddSetToWorkoutExercise) =>
  useMutation({
    mutationFn: addSetToWorkoutExercise,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data) {
      options.onSuccess(data);
    },
  });

/**
 * Utility hook add a set (weight, reps) to an existing workout exercise
 */
export const useAddMultipleSetsToWorkoutExercise = (options: IAddMultipleSetsToWorkoutExercise) =>
  useMutation({
    mutationFn: addMultipleSetsToWorkoutExercise,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data) {
      options.onSuccess(data);
    },
  });

/**
 * Utility hook add a set (weight, reps) to an existing workout exercise
 */
export const useUpdateSet = options =>
  useMutation({
    mutationFn: updateSetBySetId,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data) {
      options.onSuccess(data);
    },
  });
