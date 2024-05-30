import { API_AXIOS_CLIENT } from "../common/client";

/**
 * Function used to fetch exercises from db
 */
export const getExercises = async () => {
  try {
    const { data } = await API_AXIOS_CLIENT.get("/api/exercises?limit=10&offset=0");
    return data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};

/**
 * Function used to fetch exercised by muscle target
 */
export const getExercisesByMuscleTarget = async (muscleTarget: string[], limit: number, offset: number) => {
  try {
    const { data } = await API_AXIOS_CLIENT.get(
      `/api/exercises/target?target=${muscleTarget}&limit=${limit}&offset=${offset}`
    );
    return data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};
