import { useMutation, useQuery } from "@tanstack/react-query";

import { IErrorResponse, ISuccessResponse } from "../auth/auth.types";
import { createWorkout, getUserWeeklyWorkouts, getUserWorkoutsByDate } from "./workout.requests";
import { ICreateWorkoutOptions } from "./workout.types";

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
