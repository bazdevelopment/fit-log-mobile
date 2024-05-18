import { API_AXIOS_CLIENT } from "../common/client";

/**
 * Function used to fetch exercises from db
 */
export const getExercises = async () => {
  try {
    const { data } = await API_AXIOS_CLIENT.get("/api/exercises?limit=10&offset=0");
    console.log("data from get exercisese", data);
    return data;
  } catch (error) {
    console.log("error from getting exercises", error);

    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};
