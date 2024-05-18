import { API_AXIOS_CLIENT } from "../common/client";
import { IRegisterUserFields, IResisterUserResponse, ISuccessResponse, IVerifiedOtpCodePayload } from "./auth.types";

/** --------- AUTH REQUESTS--------- */
export const registerUser = async (registerUserFields: IRegisterUserFields): Promise<IResisterUserResponse> => {
  try {
    const { data }: { data: IResisterUserResponse } = await API_AXIOS_CLIENT.post(
      "/api/auth/register",
      registerUserFields,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};
/** --------- VERIFY OTP REQUESTS--------- */
export const verifyOptCode = async ({ email, otpCode }: IVerifiedOtpCodePayload): Promise<ISuccessResponse> => {
  try {
    const response = await API_AXIOS_CLIENT.post(
      "/api/auth/verify-otp",
      { email, otpCode },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};
