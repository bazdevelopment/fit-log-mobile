import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { useLogin } from "../../api/auth/auth.hooks";
import { IErrorResponse, ILoginSuccessResponse } from "../../api/auth/auth.types";
import { getStorageBoolean, setStorageItem } from "../../api/common/storage";
import Button from "../../components/atoms/button/button";
import Label from "../../components/atoms/label";
import CustomInput from "../../components/molecules/custom-input";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";

/**
 * Sign in screen that displays two inputs (email and password)
 * If the user forgot his password he can press the forgot password button
 * if he user already has an account he can navigate directly to sign up page by pressing sign up button
 */
const SignInScreen = () => {
  const { setOptions } = useNavigation();
  const isUserOnboardedLocal = getStorageBoolean("is_onboarded_local");
  const redirectPath = isUserOnboardedLocal ? "(tabs)" : "/onboarding-first-flow";

  const handleOnSuccess = (data: ILoginSuccessResponse) => {
    showMessage({
      message: data.message,
      type: "success",
      duration: 5000,
    });

    setStorageItem("access_token", data.record.accessToken);
    setStorageItem("refresh_token", data.record.refreshToken);
    setStorageItem("is_authenticated", "true");

    router.navigate(redirectPath);
  };

  const handleOnError = (error: IErrorResponse) => {
    showMessage({
      message: error.message,
      type: "danger",
      duration: 10000,
    });
  };
  const { mutate: handleLogin } = useLogin({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setLoginCredentials(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    setOptions({ gestureEnabled: false });
  }, [setOptions]);
  return (
    <ScreenWrapper keyboardAvoiding keyboardVerticalOffset={10}>
      <View className="mt-20 flex-col items-center">
        <View className="flex-col items-center">
          <Label labelText="Sign in" as="h1" additionalLabelStyle="font-primary-semi-bold text-gray-800 mb-4" />
          <Label labelText="Hi. 👋 Welcome to the FitLog App" as="h4" additionalLabelStyle="text-gray-600" />
        </View>

        <View className="mt-16 w-[90%] gap-6">
          <CustomInput
            isEditable
            type="email"
            placeholder="example@gmail.com"
            placeholderTextColor={Colors.grey}
            label="Email"
            value={loginCredentials.email}
            onChangeText={(text: string) => handleInputChange("email", text)}
            className="h-12  flex-1 pb-2 pl-3 font-primary text-lg tracking-wide text-gray-700"
          />
          <CustomInput
            isEditable
            type="password"
            placeholder="*********"
            placeholderTextColor={Colors.grey}
            label="Password"
            value={loginCredentials.password}
            onChangeText={(text: string) => handleInputChange("password", text)}
            className="h-12  flex-1 pb-2 pl-3 font-primary text-lg tracking-wide text-gray-700"
          />
        </View>
        <View className="mr-1 mt-3 w-full flex-row justify-end">
          <Button buttonText="Forgot password?" size="md" variant="link" onPress={() => {}} />
        </View>
        <Button
          buttonText="Sign in"
          onPress={() => handleLogin({ email: loginCredentials.email, password: loginCredentials.password })}
          variant="primary"
          size="lg"
          additionalContainerStyle="mt-10 w-full px-6"
          disabled={!(loginCredentials.email && loginCredentials.password)}
        />
      </View>
      <View className="mt-20 flex-row items-center justify-center">
        <Label labelText="Don't have an account?" as="h4" additionalLabelStyle="text-gray-600" />
        <Button
          buttonText="Sign up"
          size="lg"
          variant="link"
          onPress={() => router.navigate("/sign-up")}
          additionalContainerStyle="ml-1"
        />
      </View>
    </ScreenWrapper>
  );
};

export default SignInScreen;
