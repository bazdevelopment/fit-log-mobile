import { router } from "expo-router";
import { View } from "react-native";

import Button from "../../components/atoms/button/button";
import Label from "../../components/atoms/label";
import Checkbox from "../../components/molecules/checkbox";
import CustomTextInput from "../../components/molecules/custom-text-input";
import ScreenWrapper from "../../components/templates/screen-wrapper";
/**
 * Sign in screen that displays inputs for username, email and password
 * user has to accept terms and conditions to be able to create an account
 * if he user already has an account he can navigate directly to sign in page by pressing sign in button
 */
const SignUpScreen = () => {
  return (
    <ScreenWrapper keyboardAvoiding keyboardVerticalOffset={10}>
      <View className="mt-20 flex-col items-center">
        <View className="flex-col items-center">
          <Label labelText="Create account" as="h1" additionalLabelStyle="font-primary-semi-bold text-gray-800 mb-4" />
          <Label labelText="Fill in the fields below" as="h4" additionalLabelStyle="text-gray-600" />
        </View>
        <View className="mt-16 w-[90%] gap-6">
          <CustomTextInput type="default" placeholder="John Doe" label="Username" />
          <CustomTextInput type="email" placeholder="example@gmail.com" label="Email" />
          <CustomTextInput type="password" placeholder="*********" label="Password" />
        </View>
        <View className="mr-1 mt-4 w-[90%] flex-row items-center justify-start gap-1">
          <Checkbox checkboxText="Agree with" />
          <Button buttonText="Terms and conditions" size="lg" variant="link" onPress={() => {}} />
        </View>
        <Button
          buttonText="Sign up"
          onPress={() => console.log("Sign up!")}
          variant="primary"
          size="lg"
          additionalContainerStyle="mt-10 w-full px-6"
        />
      </View>
      <View className="mt-20 flex-row items-center justify-center">
        <Label labelText="Already have an account?" as="h4" additionalLabelStyle="text-gray-600" />
        <Button
          buttonText="Sign in"
          size="lg"
          variant="link"
          onPress={() => router.navigate("/sign-in")}
          additionalContainerStyle="ml-1"
        />
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;
