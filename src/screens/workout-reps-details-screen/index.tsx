import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Keyboard, View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { IErrorResponse, ISuccessResponse } from "../../api/auth/auth.types";
import { useUserWorkoutsByDate } from "../../api/workout/workout.hooks";
import CloseIcon from "../../assets/icons/Close";
import ThickIcon from "../../assets/icons/ThickIcon";
import Button from "../../components/atoms/button/button";
import HorizontalLine from "../../components/atoms/horizontal-line";
import Icon from "../../components/atoms/icon";
import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { Colors } from "../../styles/colors";
import { wait } from "../../utilities/wait";
import WorkoutSelectedExerciseList from "./components/workout-selected-exercise-list";
/**
 * Screen used to display the muscle groups selected together with exercises linked to each group
 * The user has possibility to add the number of sets/reps for each exercise
 */
const WorkoutRepsDetailsScreen = () => {
  const { day } = useLocalSearchParams();

  const { data } = useUserWorkoutsByDate(day as string);
  const workouts = data?.record;

  /**
   * Function to handle button click
   * Dispatch an action to update sets in Redux
   */
  const onEditInputs = () => {
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
          onPress={() => {
            // !the code above is an workaround to see the updated reps/weight in the previus screen
            Keyboard.isVisible() && Keyboard.dismiss();
            wait(200).then(() =>
              router.push({
                pathname: "workout-details-screen",
                params: {
                  day,
                },
              })
            );
          }}
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
                <WorkoutSelectedExerciseList exercises={selectedExercises} isEditable isSwipeEnabled />
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
