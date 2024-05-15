import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { useCreateUser } from "../../api/auth/auth.hooks";
import Button from "../../components/atoms/button/button";
import Checkbox from "../../components/atoms/checkbox";
import Label from "../../components/atoms/label";
import CustomInput from "../../components/molecules/custom-input";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";
import SpinnerScreen from "../spinner-screen";
/**
 * Sign in screen that displays inputs for username, email and password
 * user has to accept terms and conditions to be able to create an account
 * if he user already has an account he can navigate directly to sign in page by pressing sign in button
 */
const SignUpScreen = () => {
  const { mutate } = useCreateUser();

  const [registerCredentials, setRegisterCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [areConditionsAccepted, setAreConditionsAccepted] = useState(false);

  const handleConditionsCheckbox = (isAccepted: boolean) => {
    setAreConditionsAccepted(isAccepted);
  };
  const handleInputChange = (fieldName: string, value: string) => {
    setRegisterCredentials(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const areInputsFilled = Object.values(registerCredentials).every(inputFilled => inputFilled);
  const canSubmit = areInputsFilled && areConditionsAccepted;

  return (
    <ScreenWrapper keyboardAvoiding keyboardVerticalOffset={10}>
      <SpinnerScreen />
      <View className="mt-20 flex-col items-center">
        <View className="flex-col items-center">
          <Label labelText="Create account" as="h1" additionalLabelStyle="font-primary-semi-bold text-gray-800 mb-4" />
          <Label labelText="Fill in the fields below" as="h4" additionalLabelStyle="text-gray-600" />
        </View>
        <View className="mt-16 w-[90%] gap-6">
          <CustomInput
            isEditable
            type="default"
            placeholder="John Doe"
            placeholderTextColor={Colors.grey}
            label="Username"
            value={registerCredentials.userName}
            onChangeText={(text: string) => handleInputChange("userName", text)}
            className="h-12  flex-1 pb-2 pl-3 font-primary text-lg tracking-wide text-gray-700"
          />
          <CustomInput
            isEditable
            type="email"
            placeholder="example@gmail.com"
            placeholderTextColor={Colors.grey}
            label="Email"
            value={registerCredentials.email}
            onChangeText={(text: string) => handleInputChange("email", text)}
            className="h-12  flex-1 pb-2 pl-3 font-primary text-lg tracking-wide text-gray-700"
          />
          <CustomInput
            isEditable
            type="password"
            placeholder="*********"
            placeholderTextColor={Colors.grey}
            label="Password"
            value={registerCredentials.password}
            onChangeText={(text: string) => handleInputChange("password", text)}
            className="h-12  flex-1 pb-2 pl-3 font-primary text-lg tracking-wide text-gray-700"
          />
        </View>
        <View className="mr-1 mt-4 w-[90%] flex-row items-center justify-start gap-1">
          <Checkbox onChangeCheckbox={handleConditionsCheckbox} checkboxText="Agree with" />
          <Button buttonText="Terms and conditions" size="lg" variant="link" onPress={() => {}} />
        </View>
        <Button
          buttonText="Sign up"
          onPress={() => mutate(registerCredentials)}
          variant="primary"
          size="lg"
          additionalContainerStyle="mt-10 w-full px-6"
          disabled={!canSubmit}
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
