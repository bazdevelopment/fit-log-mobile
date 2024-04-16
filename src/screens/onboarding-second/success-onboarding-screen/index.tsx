import { View } from "react-native";

import CongratsIllustration from "../../../assets/images/illustrations/Congrats";
import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import { ISuccessOnboardingScreen } from "./success-onboarding-screen.interface";
/**
 * Component used to display the success onboarding screen
 */
export default function SuccessOnboardingScreen({ onFinish }: ISuccessOnboardingScreen) {
  return (
    <View className="flex-1 flex-col items-center justify-start">
      <CongratsIllustration width={350} height={300} />
      <Label
        labelText="Congratulations! 🏆"
        as="h1"
        additionalLabelStyle="font-inter-semi-bold text-primary-default text-center p-4"
      />

      <Label
        labelText="Tap the button below kickstart your transformation"
        as="h5"
        additionalLabelStyle="text-gray-500 px-8 text-center"
      />
      <View className="top-8 w-1/2">
        <Button buttonText="Get started! 💪" onPress={onFinish} variant="primary" />
      </View>
    </View>
  );
}
