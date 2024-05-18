import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { showMessage } from "react-native-flash-message";

import { wait } from "../../utilities/wait";
import { login, register, verifyOptCode } from "./auth.requests";
import {
  IErrorResponse,
  ILoginSuccessResponse,
  IResisterUserResponse,
  ISuccessResponse,
  IUseVerifyOtpCodeOptions,
} from "./auth.types";

/** custom hook for handling user registration mutation */
export const useCreateUser = () => {
  return useMutation({
    mutationFn: register,
    onError: (error: IErrorResponse) =>
      showMessage({
        message: error.message,
        type: "danger",
        duration: 10000,
      }),
    onSuccess(data: IResisterUserResponse) {
      if (data.success && !data.record.isVerifiedOtp) {
        wait(1000).then(() =>
          router.push({
            pathname: "/verify-otp-code",
            params: {
              email: data.record.email,
            },
          })
        );
      }
    },
  });
};

export const useLogin = options => {
  return useMutation({
    mutationFn: login,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data: ILoginSuccessResponse) {
      options.onSuccess(data);
    },
  });
};

/** custom hook for handling verification otp mutation */
export const useVerifyOtpCode = (options: IUseVerifyOtpCodeOptions) => {
  return useMutation({
    mutationFn: verifyOptCode,
    onError: (error: IErrorResponse) => {
      options.onError(error);
    },
    onSuccess(data: ISuccessResponse) {
      options.onSuccess(data);
    },
  });
};
