import { router } from "expo-router";
import { View } from "react-native";

import Button from "../../components/atoms/button/button";
import Label from "../../components/atoms/label";
import CodeInput from "../../components/molecules/otp-code-inputs";
import ScreenWrapper from "../../components/templates/screen-wrapper";

/**
 * Screen used handle otp verification in the forgot password flow
 */
const ForgotPasswordCodeVerification = () => {
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
          numberOfCodeInputs={6}
          onComplete={() => {
            router.navigate("/create-new-password");
          }}
        />
        <View className="mt-12">
          <Label labelText="Didn't received the code or expired?" as="h4" additionalLabelStyle="text-gray-600" />
          <Button buttonText="Resend code" size="lg" variant="link" onPress={() => {}} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPasswordCodeVerification;
