import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import RadioButton from "../../../components/atoms/radio-button";
import RegularList from "../../../components/molecules/regular-list/regular-list";
import { GOALS, TGoal } from "../../../constants/goals";
import { IGoalSelectionScreen } from "./goal-selection-screen.interface";

/**
 * Component used to display the goal selection screen
 */
export default function GoalSelectionScreen({ goToNext, onboardingData }: IGoalSelectionScreen) {
  const [selectedGoals, setSelectedGoals] = useState(onboardingData.goals || []);

  const toggleGoal = (goal: TGoal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(selectedGoal => selectedGoal !== goal));
    } else {
      setSelectedGoals(prevGoals => [...prevGoals, goal]);
    }
  };

  const goalsList = Object.values(GOALS).map(goal => ({
    text: goal,
    isSelected: selectedGoals.includes(goal as TGoal),
    onPress: () => toggleGoal(goal as TGoal),
    hasBorder: true,
  }));

  return (
    <>
      <View className="flex-1 items-center ">
        <Label labelText="What's your goal?" as="h2" additionalLabelStyle="font-bold font-inter-semi-bold mb-4" />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
        <RegularList
          items={goalsList}
          itemComponent={RadioButton}
          additionalContainerStyle="flex-col w-full gap-4 p-6 mt-10"
        />
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Continue" onPress={() => goToNext({ goals: selectedGoals })} variant="primary" />
      </View>
    </>
  );
}
