import { router, useLocalSearchParams } from "expo-router";
import { ReactElement, useState } from "react";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { IMuscleGroup, muscleGroups } from "../../__mocks__/muscle-groups";
import { IErrorResponse, ISuccessResponse } from "../../api/auth/auth.types";
import { useCreateWorkout } from "../../api/workout/workout.hooks";
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
import CustomInput from "../../components/molecules/custom-input";
import MuscleGroupCard from "../../components/molecules/muscle-group-card";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";
import { wait } from "../../utilities/wait";
import SpinnerScreen from "../spinner-screen";
/**
 * Screen used to select one or multiple muscle groups
 */
const MuscleGroupSelectionScreen = () => {
  const { day } = useLocalSearchParams();
  const [musclesGroupTarget, setMusclesGroupTarget] = useState<string[]>([]);
  const [workoutName, setWorkoutName] = useState<string>("");

  const handleOnSuccess = (data: ISuccessResponse) => {
    showMessage({
      message: data.message,
      type: "success",
      duration: 5000,
    });

    wait(1500).then(() => {
      router.push({
        pathname: "workout-reps-details",
        params: {
          day,
        },
      });
    });
  };

  const handleOnError = (error: IErrorResponse) => {
    showMessage({
      message: error.message,
      type: "danger",
      duration: 10000,
    });
  };

  const { mutate: handleCreateWorkout } = useCreateWorkout({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  const toggleMuscleGroupTargetSelection = (selectedMuscleGroup: string) => {
    if (musclesGroupTarget.includes(selectedMuscleGroup)) {
      setMusclesGroupTarget(
        musclesGroupTarget.filter(muscleGroupAlreadySelected => muscleGroupAlreadySelected !== selectedMuscleGroup)
      );
    } else {
      setMusclesGroupTarget(prevMuscleGroupTarget => [...prevMuscleGroupTarget, selectedMuscleGroup]);
    }
  };

  return (
    <ScreenWrapper isScrollEnabled keyboardAvoiding isBackNavigationEnabled title="Pick you muscle groups">
      <SpinnerScreen />
      <View className="mt-10 w-full flex-1 flex-row flex-wrap gap-[15px] p-[24px]">
        {muscleGroups.map((muscleGroup: IMuscleGroup) => (
          <MuscleGroupCard
            key={muscleGroup.id}
            isSelected={musclesGroupTarget.includes(muscleGroup.groupName)}
            title={muscleGroup.groupName}
            onPress={() => toggleMuscleGroupTargetSelection(muscleGroup.groupName)}
            icon={muscleIcons[muscleGroup.groupName]}
          />
        ))}
      </View>
      <View className="px-5">
        <CustomInput
          isEditable
          type="email"
          placeholder="Type in a workout name"
          placeholderTextColor={Colors.grey}
          value={workoutName}
          onChangeText={(text: string) => setWorkoutName(text)}
          className="h-12 flex-1 pb-2 pl-3 font-primary text-lg tracking-wide text-gray-700"
        />
      </View>
      <View className="w-full flex-row justify-center">
        <Button
          buttonText="Choose exercises 🏋️"
          variant="primary"
          disabled={!(musclesGroupTarget.length && workoutName.length)}
          onPress={() => handleCreateWorkout({ musclesGroupTarget, name: workoutName, creationDate: day })}
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
