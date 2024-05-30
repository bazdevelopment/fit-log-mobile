import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

import { useUserWorkoutsByDate } from "../../api/workout/workout.hooks";
import CloseIcon from "../../assets/icons/Close";
import ThickIcon from "../../assets/icons/ThickIcon";
import Button from "../../components/atoms/button/button";
import HorizontalLine from "../../components/atoms/horizontal-line";
import Icon from "../../components/atoms/icon";
import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";
import WorkoutSelectedExerciseList from "./components/workout-selected-exercise-list";
import { IWorkoutInputChanged } from "./components/workout-selected-exercise-list/WorkoutSelectedExerciseList.interface";
/**
 * Screen used to display the muscle groups selected together with exercises linked to each group
 * The user has possibility to add the number of sets/reps for each exercise
 */
const WorkoutRepsDetailsScreen = () => {
  const { day } = useLocalSearchParams();

  const { data } = useUserWorkoutsByDate(day as string);
  const workouts = data?.record;

  const [inputs, setInputs] = useState<Record<string, { weight: string; reps: string; group: string }>>({});

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
        day,
      },
    });
  };

  return (
    <ScreenWrapper isScrollEnabled keyboardAvoiding title={workouts?.length > 0 ? "Workouts" : "Workout"}>
      <View className="absolute right-4 top-3 z-10 mb-2 flex-row gap-3">
        <Icon
          onPress={() =>
            router.push({
              pathname: "workout-details-screen",
              params: {
                day,
              },
            })
          }
          additionalInnerClassName="bg-black"
          iconElement={<CloseIcon width={16} height={16} fill={Colors.white} />}
        />
        {/* {Boolean(Object.values(exercises).length) && ( */}
        <Icon
          onPress={onEditInputs}
          additionalInnerClassName="bg-black"
          iconElement={<ThickIcon width={16} height={16} color={Colors.white} />}
        />
        {/* )} */}
      </View>
      <View className="px-6">
        {workouts?.map(({ name: workoutName, id: workoutId, exercises: workoutExercises, musclesGroupTarget }) => {
          const selectedExercises = workoutExercises;
          const hasExerciseSelected = Boolean(workoutExercises?.length);

          return (
            <React.Fragment key={workoutId}>
              <Label
                labelText={workoutName}
                as="h2"
                additionalLabelStyle="font-primary-bold mt-4 text-primary-default"
              />
              {!hasExerciseSelected && (
                <Label labelText="No exercises." as="h5" additionalLabelStyle="font-primary text-gray-800" />
              )}
              {hasExerciseSelected && (
                <WorkoutSelectedExerciseList
                  exercises={selectedExercises}
                  isEditable
                  isSwipeEnabled
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
                      musclesGroupTarget,
                      workoutId,
                    },
                  })
                }
                additionalContainerStyle="w-[160px] right-[-40px] self-end my-5"
              />
              <HorizontalLine thickness="sm" color="light" />
            </React.Fragment>
          );
        })}
      </View>
    </ScreenWrapper>
  );
};

export default WorkoutRepsDetailsScreen;
