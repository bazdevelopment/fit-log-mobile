import { API_AXIOS_CLIENT } from "../common/client";
export const registerUser = async userData => {
  try {
    const response = await API_AXIOS_CLIENT.post("/api/auth/register", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};
