import { View } from "react-native";

import Button from "../../components/atoms/button/button";
import Label from "../../components/atoms/label";
import CustomTextInput from "../../components/molecules/custom-text-input";
import ScreenWrapper from "../../components/templates/screen-wrapper";

/**
 * Sign in screen that displays two inputs (email and password)
 * If the user forgot his password he can press the forgot password button
 * if he user already has an account he can navigate directly to sign up page by pressing sign up button
 */
const SignInScreen = () => {
  return (
    <ScreenWrapper keyboardAvoiding keyboardVerticalOffset={10}>
      <View className="mt-20 flex-col items-center">
        <View className="flex-col items-center">
          <Label labelText="Sign in" as="h1" additionalLabelStyle="font-primary-semi-bold text-gray-800 mb-4" />
          <Label labelText="Hi. 👋 Welcome to the FitLog App" as="h4" additionalLabelStyle="text-gray-600" />
        </View>

        <View className="mt-16 w-[90%] gap-6">
          <CustomTextInput type="email" placeholder="example@gmail.com" label="Email" />
          <CustomTextInput type="password" placeholder="*********" label="Password" />
        </View>
        <View className="mr-1 mt-3 w-full flex-row justify-end">
          <Button buttonText="Forgot password?" size="md" variant="link" onPress={() => {}} />
        </View>
        <Button
          buttonText="Sign in"
          onPress={() => console.log("Sign in!")}
          variant="primary"
          size="lg"
          additionalContainerStyle="mt-10 w-full px-6"
        />
      </View>
      <View className="mt-20 flex-row items-center justify-center">
        <Label labelText="Don't have an account?" as="h4" additionalLabelStyle="text-gray-600" />
        <Button buttonText="Sign up" size="lg" variant="link" onPress={() => {}} additionalContainerStyle="ml-1" />
      </View>
    </ScreenWrapper>
  );
};

export default SignInScreen;
