import { router } from "expo-router";
import { View } from "react-native";

import MailIcon from "../../assets/icons/Mail";
import ForgotPassword from "../../assets/images/illustrations/ForgotPassword";
import Button from "../../components/atoms/button/button";
import Icon from "../../components/atoms/icon";
import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";
/**
 * Screen used to select the option for sending the otp cove (via email/later via phone number)
 */
const ForgotPasswordOptions = () => {
  return (
    <ScreenWrapper isBackNavigationEnabled isScrollEnabled={false} title="Forgot Password">
      <View className="mt-20 flex-col items-center">
        <ForgotPassword width={400} height={350} marginTop={-130} />

        <Label
          labelText="For resetting the password we will send you an OTP code. Please check your inbox"
          as="h4"
          additionalLabelStyle="text-gray-600 px-2 text-center"
        />

        <View className="mt-6 w-[90%] flex-row justify-start rounded-xl border-2 border-primary-default p-6">
          <Icon
            iconElement={<MailIcon width={25} height={25} fill={Colors.primary} />}
            additionalInnerClassName="bg-slate-100 w-[70px] h-[70px]"
          />
          <View className="ml-5 justify-center">
            <Label labelText="via Email" as="h5" additionalLabelStyle="text-gray-600" />
            <Label labelText="example@email.com" as="h4" additionalLabelStyle="text-gray-800 font-primary-bold" />
          </View>
        </View>

        <Button
          buttonText="Continue"
          onPress={() => router.navigate("/forgot-password-code-verification")}
          variant="primary"
          size="lg"
          additionalContainerStyle="mt-10 w-[90%]"
        />
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPasswordOptions;
