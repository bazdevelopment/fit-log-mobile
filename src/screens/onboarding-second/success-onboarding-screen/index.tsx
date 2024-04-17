import { View } from "react-native";

import CongratsIllustration from "../../../assets/images/illustrations/Congrats";
import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label";
import { ISuccessOnboardingScreen } from "./SuccessOnboardingScreen.interface";
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
        additionalLabelStyle="font-primary-bold text-primary-default text-center p-4"
      />

      <Label
        labelText="Tap the button below kickstart your transformation"
        as="h5"
        additionalLabelStyle="text-gray-500 px-8 text-center"
      />
      <Button
        buttonText="Get started! 💪"
        onPress={onFinish}
        variant="primary"
        additionalContainerStyle="top-8 w-1/2"
      />
    </View>
  );
}
