import { API_AXIOS_CLIENT } from "../common/client";

/**
 * Function used to assign to a user the membership card id after scanning the card
 * it also updated the User table, every membership card id is unique
 */
export const submitMembershipCard = async (membershipCardId: string) => {
  try {
    const { data } = await API_AXIOS_CLIENT.post("/api/membership-card", { cardNumber: membershipCardId });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

/**
 * Function used to register the gym visit by scanning membership card id
 */
export const registerGymVisit = async (membershipCardId: string) => {
  try {
    const { data } = await API_AXIOS_CLIENT.post("/api/membership-card/visit", { cardNumber: membershipCardId });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

/**
 * Function used to verify today's gym visit
 */
export const verifyTodayVisit = async () => {
  try {
    const { data } = await API_AXIOS_CLIENT.get("/api/membership-card/visit");
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
