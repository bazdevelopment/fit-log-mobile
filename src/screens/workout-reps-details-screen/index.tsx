import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import CloseIcon from "../../assets/icons/Close";
import ThickIcon from "../../assets/icons/ThickIcon";
import Button from "../../components/atoms/button/button";
import HorizontalLine from "../../components/atoms/horizontal-line";
import Icon from "../../components/atoms/icon";
import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { useWorkout } from "../../context/workout-context";
import { ISet } from "../../context/workout-context/workout-context.interface";
import { Colors } from "../../styles/colors";
import WorkoutSelectedExerciseList from "./components/workout-selected-exercise-list";
import { IWorkoutInputChanged } from "./components/workout-selected-exercise-list/WorkoutSelectedExerciseList.interface";
/**
 * Screen used to display the muscle groups selected together with exercises linked to each group
 * The user has possibility to add the number of sets/reps for each exercise
 */
const WorkoutRepsDetailsScreen = () => {
  const { selectedMuscleGroups } = useLocalSearchParams();
  const muscleGroups = selectedMuscleGroups.split(",");
  const {
    state: { exercises },
    dispatch,
  } = useWorkout();

  const [inputs, setInputs] = useState<ISet | {}>({});

  const onUpdateInputs = ({ groupName, setId, field, newValue }: IWorkoutInputChanged) => {
    setInputs(prevState => ({
      ...prevState,
      [setId]: { ...prevState[setId], [field]: newValue, group: groupName },
    }));
  };

  /**
   * Function to handle button click
   * Dispatch an action to update sets in Redux
   */
  const onEditInputs = () => {
    Object.entries(inputs).forEach(([setId, changedFields]) => {
      dispatch({
        type: "UPDATE_SET",
        payload: {
          setId,
          group: changedFields.group,
          weight: changedFields.weight || "0",
          reps: changedFields.reps || "0",
        },
      });
    });
    // Reset inputsChanged after update
    setInputs({});

    router.push({
      pathname: "workout-details-screen",
      params: {
        day: "20 Apr - Saturday",
      },
    });
  };

  return (
    <ScreenWrapper isScrollEnabled keyboardAvoiding title="Workout">
      <View className="absolute right-4 top-3 z-10 mb-2 flex-row gap-3">
        <Icon
          //TODO :display an alert to inform the user that the data is not saved yet and if he want to leave the screen
          onPress={() =>
            router.push({
              pathname: "workout-details-screen",
              params: {
                day: "20 Apr - Saturday",
              },
            })
          }
          additionalInnerClassName="bg-black"
          iconElement={<CloseIcon width={16} height={16} fill={Colors.white} />}
        />
        {Boolean(Object.values(exercises).length) && (
          <Icon
            onPress={onEditInputs}
            additionalInnerClassName="bg-black"
            iconElement={<ThickIcon width={16} height={16} color={Colors.white} />}
          />
        )}
      </View>
      <View className="px-6">
        {muscleGroups.map((groupName: string, muscleGroupIndex: number) => {
          const selectedExercises = exercises[groupName];
          const hasExerciseSelected = Boolean(selectedExercises?.length);

          return (
            <>
              <Label
                key={muscleGroupIndex}
                labelText={groupName}
                as="h2"
                additionalLabelStyle="font-primary-bold mt-4 text-primary-default"
              />
              {!hasExerciseSelected && (
                <Label labelText="No exercises." as="h5" additionalLabelStyle="font-primary text-gray-800" />
              )}
              {hasExerciseSelected && (
                <WorkoutSelectedExerciseList
                  groupName={groupName}
                  exercises={selectedExercises}
                  dispatch={dispatch}
                  isEditable={true}
                  onUpdateInputs={onUpdateInputs}
                />
              )}

              <Button
                buttonText="Add exercise 🏋️"
                variant="primary"
                size="md"
                onPress={() =>
                  router.push({
                    pathname: "/modal-stack/exercise-selection-modal",
                    params: {
                      groupName,
                    },
                  })
                }
                additionalContainerStyle="w-[160px] right-[-40px] self-end my-5"
              />
              <HorizontalLine thickness="sm" color="light" />
            </>
          );
        })}
      </View>
    </ScreenWrapper>
  );
};

export default WorkoutRepsDetailsScreen;
