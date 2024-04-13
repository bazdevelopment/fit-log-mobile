import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import { IActivityLevelScreen } from "./activity-level-screen.interface";

/**
 * Component used to display the activity level screen
 */
export default function ActivityLevelScreen({ goToNext }: IActivityLevelScreen) {
  const [activityLevel, setActivityLevel] = useState("Beginner");
  return (
    <>
      <View className="flex-1 items-center">
        <Label
          labelText="Tell us about your regular physical activity level"
          as="h2"
          additionalLabelStyle="font-bold font-inter-semi-bold mb-4 text-center"
          additionalContainerStyle="px-6"
        />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Next" onPress={() => goToNext({ activityLevel })} variant="primary" />
      </View>
    </>
  );
}
