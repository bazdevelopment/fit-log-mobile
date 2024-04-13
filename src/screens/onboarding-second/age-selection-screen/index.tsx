import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import { IAgeSelectionScreen } from "./age-selection-screen.interface";

/**
 * Component used to display the selection age screen
 */
export default function AgeSelectionScreen({ goToNext, onBoardingData }: IAgeSelectionScreen) {
  const [age, setAge] = useState(25);
  return (
    <>
      <View className="flex-1 items-center ">
        <Label labelText="How old are you?" as="h2" additionalLabelStyle="font-bold font-inter-semi-bold mb-4" />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Next" onPress={() => goToNext({ age })} variant="primary" />
      </View>
    </>
  );
}
