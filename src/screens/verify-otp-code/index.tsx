import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { useVerifyOtpCode } from "../../api/auth/auth.hooks";
import { IErrorResponse, ISuccessResponse } from "../../api/auth/auth.types";
import Button from "../../components/atoms/button/button";
import Label from "../../components/atoms/label";
import CodeInput from "../../components/molecules/otp-code-inputs";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { useShakeAnimation } from "../../hooks/use-shake-animation/use-shake-animation";
import { wait } from "../../utilities/wait";

/**
 * Screen used handle otp verification
 */
const VerifyOtpCodeScreen = () => {
  const { email } = useLocalSearchParams();
  const { setOptions } = useNavigation();

  const handleOnSuccess = (data: ISuccessResponse) => {
    showMessage({
      message: data.message,
      type: "success",
      duration: 5000,
    });

    wait(1500).then(() => router.navigate("/sign-in"));
  };

  const handleOnError = (error: IErrorResponse) => {
    triggerShake();
    showMessage({
      message: error.message,
      type: "danger",
      duration: 10000,
    });
  };
  const { triggerShake, animationValue } = useShakeAnimation();
  const { mutateAsync: onVerifyOtpCode } = useVerifyOtpCode({
    onError: handleOnError,
    onSuccess: handleOnSuccess,
  });

  useEffect(() => {
    setOptions({ gestureEnabled: false });
  }, [setOptions]);

  return (
    <ScreenWrapper isScrollEnabled={false} isBackNavigationEnabled>
      <View className="mt-20 flex-col items-center">
        <View className="flex-col items-center">
          <Label labelText="Verify code" as="h1" additionalLabelStyle="font-primary-semi-bold text-gray-800 mb-4" />
          <Label
            labelText="Please enter the code we sent via your email"
            as="h4"
            additionalLabelStyle="text-gray-600"
          />
          <Label labelText="example@gmail.com" as="h4" additionalLabelStyle="text-gray-600" />
        </View>
      </View>
      <View className="mt-10 items-center justify-center">
        <CodeInput
          animationValue={animationValue}
          numberOfCodeInputs={6}
          onComplete={(otpCode: string) => onVerifyOtpCode({ otpCode, email })}
        />
        <View className="mt-12">
          <Label labelText="Didn't received the code or expired?" as="h4" additionalLabelStyle="text-gray-600" />
          <Button buttonText="Resend code" size="lg" variant="link" onPress={() => {}} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default VerifyOtpCodeScreen;
