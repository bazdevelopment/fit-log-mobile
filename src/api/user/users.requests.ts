import { ISuccessResponse } from "../auth/auth.types";
import { API_AXIOS_CLIENT } from "../common/client";
import { ICurrentUserResponse, IUserPartiallyFields } from "./user.types";

/**hook used to perform a mutation for user table using partial fields */
export const updateUserPartially = async (fields: IUserPartiallyFields): Promise<ISuccessResponse> => {
  try {
    const { data }: { data: ISuccessResponse } = await API_AXIOS_CLIENT.patch(`/api/user/${fields.userId}`, fields);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

/**Hook used to query the current logged in user */
export const getCurrentUser = async (): Promise<ICurrentUserResponse> => {
  try {
    const { data }: { data: ICurrentUserResponse } = await API_AXIOS_CLIENT.get("/api/user/currentUser");
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
