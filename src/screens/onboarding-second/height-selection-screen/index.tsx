import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import { IHeightSelectionScreen } from "./height-selection-screen.interface";

/**
 * Component used to display the height selection screen
 */
export default function HeightSelectionScreen({ goToNext, onboardingData }: IHeightSelectionScreen) {
  const [height, setHeight] = useState(120);
  return (
    <>
      <View className="flex-1 items-center ">
        <Label labelText="What's your height?" as="h2" additionalLabelStyle="font-bold font-inter-semi-bold mb-4" />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Next" onPress={() => goToNext({ height })} variant="primary" />
      </View>
    </>
  );
}
