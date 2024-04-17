import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label";
import RadioButton from "../../../components/atoms/radio-button";
import RegularList from "../../../components/molecules/regular-list";
import { ACTIVITY_LEVEL, TActivityLevel } from "../../../constants/activity-level";
import { IActivityLevelScreen } from "./ActivityLevelScreen.interface";

/**
 * Component used to display the activity level screen
 */
export default function ActivityLevelScreen({ goToNext, onboardingData }: IActivityLevelScreen) {
  const [activityLevel, setActivityLevel] = useState(onboardingData.activityLevel || ACTIVITY_LEVEL.BEGINNER);

  const checkIsActive = (level: TActivityLevel) => activityLevel === level;

  const handleActivityLevel = (level: TActivityLevel) => setActivityLevel(level);

  const options = [
    {
      text: ACTIVITY_LEVEL.BEGINNER,
      isSelected: checkIsActive(ACTIVITY_LEVEL.BEGINNER),
      onPress: handleActivityLevel,
      hasBorder: true,
    },
    {
      text: ACTIVITY_LEVEL.INTERMEDIATE,
      isSelected: checkIsActive(ACTIVITY_LEVEL.INTERMEDIATE),
      onPress: handleActivityLevel,
      hasBorder: true,
    },
    {
      text: ACTIVITY_LEVEL.ADVANCE,
      isSelected: checkIsActive(ACTIVITY_LEVEL.ADVANCE),
      onPress: handleActivityLevel,
      hasBorder: true,
    },
  ];
  return (
    <>
      <View className="flex-1 items-center">
        <Label
          labelText="Tell us about your regular physical activity level"
          as="h2"
          additionalLabelStyle="font-bold font-primary-bold mb-4 text-center"
          additionalContainerStyle="px-6"
        />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />

        <RegularList
          items={options}
          itemComponent={RadioButton}
          additionalContainerStyle="flex-col w-full gap-4 p-6 mt-20"
        />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Continue" onPress={() => goToNext({ activityLevel })} variant="primary" />
      </View>
    </>
  );
}
