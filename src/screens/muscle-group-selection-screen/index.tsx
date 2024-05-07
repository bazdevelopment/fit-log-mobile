import { router } from "expo-router";
import { ReactElement } from "react";
import { View } from "react-native";

import { IMuscleGroup, muscleGroups } from "../../__mocks__/muscle-groups";
import AbsIcon from "../../assets/icons/muscle-groups/Abs";
import BackIcon from "../../assets/icons/muscle-groups/Back";
import BicepsIcon from "../../assets/icons/muscle-groups/Biceps";
import CardioIcon from "../../assets/icons/muscle-groups/Cardio";
import ChestIcon from "../../assets/icons/muscle-groups/Chest";
import LegsIcon from "../../assets/icons/muscle-groups/Legs";
import ShoulderIcon from "../../assets/icons/muscle-groups/Shoulders";
import StretchingIcon from "../../assets/icons/muscle-groups/Stretching";
import TricepsIcon from "../../assets/icons/muscle-groups/Triceps";
import Button from "../../components/atoms/button/button";
import MuscleGroupCard from "../../components/molecules/muscle-group-card";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { useWorkout } from "../../context/workout-context";
import { Colors } from "../../styles/colors";
/**
 * Screen used to select one or multiple muscle groups
 */
const MuscleGroupSelectionScreen = () => {
  const { dispatch, state } = useWorkout();
  const selectedMuscleGroups = state.muscleGroups;
  return (
    <ScreenWrapper isScrollEnabled={false} isBackNavigationEnabled title="Pick you muscle groups">
      <View className="mt-10 w-full flex-1 flex-row flex-wrap gap-[15px] p-[24px]">
        {muscleGroups.map((muscleGroup: IMuscleGroup) => (
          <MuscleGroupCard
            key={muscleGroup.id}
            isSelected={selectedMuscleGroups.includes(muscleGroup.groupName)}
            title={muscleGroup.groupName}
            onPress={() => dispatch({ type: "ADD_MUSCLE_GROUP", payload: muscleGroup.groupName })}
            icon={muscleIcons[muscleGroup.groupName]}
          />
        ))}
      </View>
      <View className="w-full flex-row justify-center">
        <Button
          buttonText="Choose exercises 🏋️"
          variant="primary"
          disabled={!selectedMuscleGroups.length}
          onPress={() => {
            router.push({
              pathname: "workout-reps-details",
              params: {
                selectedMuscleGroups,
              },
            });
          }}
          additionalContainerStyle="w-[200px] mt-10"
        />
      </View>
    </ScreenWrapper>
  );
};

export default MuscleGroupSelectionScreen;

interface IMuscleIcons {
  [key: string]: ReactElement;
}

const muscleIcons: IMuscleIcons = {
  Chest: <ChestIcon width={60} height={60} color={Colors.primary} />,
  Back: <BackIcon width={60} height={60} color={Colors.primary} />,
  Shoulders: <ShoulderIcon width={60} height={60} color={Colors.primary} />,
  Biceps: <BicepsIcon width={60} height={60} color={Colors.primary} />,
  Triceps: <TricepsIcon width={60} height={60} color={Colors.primary} />,
  Legs: <LegsIcon width={60} height={60} color={Colors.primary} />,
  Cardio: <CardioIcon width={60} height={60} color={Colors.primary} />,
  Abs: <AbsIcon width={60} height={60} color={Colors.primary} />,
  Stretching: <StretchingIcon width={60} height={60} color={Colors.primary} />,
};
