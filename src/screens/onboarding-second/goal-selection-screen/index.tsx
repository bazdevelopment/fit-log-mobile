import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import { IGoalSelectionScreen } from "./goal-selection-screen.interface";

/**
 * Component used to display the goal selection screen
 */
export default function GoalSelectionScreen({ goToNext, onboardingData }: IGoalSelectionScreen) {
  const [goal, setGoal] = useState("Get Fitter");
  return (
    <>
      <View className="flex-1 items-center ">
        <Label labelText="What's your goal?" as="h2" additionalLabelStyle="font-bold font-inter-semi-bold mb-4" />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Next" onPress={() => goToNext({ goal })} variant="primary" />
      </View>
    </>
  );
}
