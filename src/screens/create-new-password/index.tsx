import { router } from "expo-router";
import { Alert, View } from "react-native";

import NewPasswordIllustration from "../../assets/images/illustrations/NewPassword";
import Button from "../../components/atoms/button/button";
import Label from "../../components/atoms/label";
import CustomTextInput from "../../components/molecules/custom-text-input";
import ScreenWrapper from "../../components/templates/screen-wrapper";
/**
 * Create new password screen
 * This screen is part of forgot password flow
 */
const CreateNewPassword = () => {
  return (
    <ScreenWrapper isBackNavigationEnabled keyboardAvoiding isScrollEnabled title="Forgot Password">
      <View className="mt-20 flex-col items-center">
        <NewPasswordIllustration width={300} height={250} marginTop={-50} />
        <Label
          labelText="Your new password must be different from previously used passwords"
          as="h4"
          additionalLabelStyle="text-gray-600 px-2 text-center"
        />

        <View className="mt-12 w-[90%] gap-6">
          <CustomTextInput type="password" placeholder="*********" label="New password" />
          <CustomTextInput type="password" placeholder="*********" label="Confirm password" />
        </View>
        <Button
          buttonText="Submit"
          onPress={() => {
            Alert.alert("New password created!");
            router.navigate("(tabs)");
          }}
          variant="primary"
          size="lg"
          additionalContainerStyle="mt-10 w-[90%]"
        />
      </View>
    </ScreenWrapper>
  );
};

export default CreateNewPassword;
