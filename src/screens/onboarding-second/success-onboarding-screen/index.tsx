import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import { ISuccessOnboardingScreen } from "./success-onboarding-screen.interface";

/**
 * Component used to display the success onboarding screen
 */
export default function SuccessOnboardingScreen({ onFinish }: ISuccessOnboardingScreen) {
  return (
    <>
      <View className="flex-1 items-center ">
        <Label labelText="Congratulations!" as="h2" additionalLabelStyle="font-bold font-inter-semi-bold mb-4" />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="🥳🚀" onPress={onFinish} variant="primary" />
      </View>
    </>
  );
}
