import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import { IWeightSelectionScreen } from "./weight-selection-screen.interface";

/**
 * Component used for selecting the user's weight
 */
export default function WeightSelectionScreen({ goToNext, onboardingData }: IWeightSelectionScreen) {
  const [weight, setWeight] = useState(198);
  return (
    <>
      <View className="flex-1 items-center ">
        <Label labelText="What's your weight?" as="h2" additionalLabelStyle="font-bold font-inter-semi-bold mb-4" />
        <Label
          labelText="You can also change it later"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Next" onPress={() => goToNext({ weight })} variant="primary" />
      </View>
    </>
  );
}
