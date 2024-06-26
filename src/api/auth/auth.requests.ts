import { API_AXIOS_CLIENT } from "../common/client";
import {
  ILoginFields,
  ILoginSuccessResponse,
  IRegisterUserFields,
  IResisterUserResponse,
  ISuccessResponse,
  IVerifiedOtpCodePayload,
} from "./auth.types";

/** --------- AUTH REQUESTS--------- */
export const register = async (registerUserFields: IRegisterUserFields): Promise<IResisterUserResponse> => {
  try {
    const { data }: { data: IResisterUserResponse } = await API_AXIOS_CLIENT.post(
      "/api/auth/register",
      registerUserFields
    );
    return data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};

/**
 * function used to perform the login request with the mandatory fields
 */
export const login = async (loginFields: ILoginFields): Promise<ILoginSuccessResponse> => {
  try {
    const { data }: { data: ILoginSuccessResponse } = await API_AXIOS_CLIENT.post("/api/auth/login", loginFields);
    return data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};

/**
 * function used to refresh token
 */
export const generateRefreshToken = async (oldRefreshToken: string) => {
  try {
    const { data }: { data: any } = await API_AXIOS_CLIENT.post("/api/auth/refresh-token", {
      refreshToken: oldRefreshToken,
    });
    return data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};
/** --------- VERIFY OTP REQUESTS--------- */
export const verifyOptCode = async ({ email, otpCode }: IVerifiedOtpCodePayload): Promise<ISuccessResponse> => {
  try {
    const response = await API_AXIOS_CLIENT.post("/api/auth/verify-otp", { email, otpCode });
    return response.data;
  } catch (error) {
    throw error.response.data; // Rethrow the error to be caught by the caller
  }
};
