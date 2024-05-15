import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { showMessage } from "react-native-flash-message";

import { wait } from "../../utilities/wait";
import { registerUser } from "./auth.requests";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onError: error =>
      showMessage({
        message: error.message,
        type: "danger",
        duration: 4000,
        // floating: true,
      }),
    onSuccess(data) {
      if (data.success && !data.record.isVerifiedOtp) {
        wait(1000).then(() => router.navigate("/verify-otp-code"));
      }
    },
  });
};
