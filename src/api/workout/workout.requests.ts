import { API_AXIOS_CLIENT } from "../common/client";
import {
  IAddMultipleExercisesToWorkoutSuccessResponse,
  ICreateWorkoutFields,
  ICreateWorkoutSuccessResponse,
  IDailyUserWorkoutsByDate,
  IDateInterval,
  IUserWeeklyWorkoutsResponse,
} from "./workout.types";

/**function create a new workout and add it in db */
export const createWorkout = async (
  fields: Omit<ICreateWorkoutFields, "userId">
): Promise<ICreateWorkoutSuccessResponse> => {
  try {
    const { data }: { data: ICreateWorkoutSuccessResponse } = await API_AXIOS_CLIENT.post("/api/workout", fields);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
/** function used to get the user workouts from an date interval */
export const getUserWeeklyWorkouts = async (dateInterval: IDateInterval): Promise<IUserWeeklyWorkoutsResponse> => {
  try {
    const { data }: { data: IUserWeeklyWorkoutsResponse } = await API_AXIOS_CLIENT.get(
      `/api/workout/user-workouts?startDate=${dateInterval.startDate}&endDate=${dateInterval.endDate}`
    );

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

/** function used to get the user workouts by date */
export const getUserWorkoutsByDate = async (date: string): Promise<IDailyUserWorkoutsByDate> => {
  try {
    const { data }: { data: IDailyUserWorkoutsByDate } = await API_AXIOS_CLIENT.get(
      `/api/workout/user-workouts/${date}`
    );

    return data;
  } catch (error) {
    throw error.response.data;
  }
};

/** function used to get the user workout by id
 * TODO add types
 */
export const getUserWorkoutById = async (workoutId: string) => {
  try {
    const { data } = await API_AXIOS_CLIENT.get(`/api/workout/${workoutId}`);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

/**function used to add multiple exercises to an workout */
export const addMultipleExercisesToWorkout = async ({
  workoutId,
  exercisesIds,
}: {
  workoutId: string;
  exercisesIds: string[];
}): Promise<IAddMultipleExercisesToWorkoutSuccessResponse> => {
  try {
    const { data }: { data: IAddMultipleExercisesToWorkoutSuccessResponse } = await API_AXIOS_CLIENT.post(
      `/api/workout/${workoutId}/exercises`,
      { exercisesIds }
    );
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
