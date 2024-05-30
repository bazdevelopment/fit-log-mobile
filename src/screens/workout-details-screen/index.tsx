import dayjs from "dayjs";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { useUserWorkoutsByDate } from "../../api/workout/workout.hooks";
import EditIcon from "../../assets/icons/Edit";
import SquatsIllustration from "../../assets/images/illustrations/Squats";
import Button from "../../components/atoms/button/button";
import HorizontalLine from "../../components/atoms/horizontal-line";
import Icon from "../../components/atoms/icon";
import Label from "../../components/atoms/label";
import EdgeCaseTemplate from "../../components/templates/edge-case-template";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import SpinnerScreen from "../spinner-screen";
import WorkoutSelectedExerciseList from "../workout-reps-details-screen/components/workout-selected-exercise-list";

/**
 * Screen used to display an overview with the workout that the user created for a specific day
 * if there are no workouts created, a placeholder will be displayed
 */
const WorkoutDetailScreen = () => {
  const { day } = useLocalSearchParams();

  const { data } = useUserWorkoutsByDate(day as string);
  const dayWorkouts = data?.record;
  const dot = <View className="size-[8px] rounded-full bg-secondary-default" />;

  return (
    <ScreenWrapper
      isScrollEnabled
      handleGoBack={() => router.navigate("/schedule")}
      isBackNavigationEnabled
      title={dayjs(day as string).format("MMMM DD - dddd")}
    >
      <SpinnerScreen />
      {Boolean(dayWorkouts?.length) && (
        <Icon
          additionalClassName="absolute right-2 top-2"
          onPress={() => {
            router.push({
              pathname: "workout-reps-details",
              params: {
                day,
              },
            });
          }}
          additionalInnerClassName="bg-black"
          iconElement={<EditIcon width={22} height={22} color={Colors.white} />}
        />
      )}

      {Boolean(dayWorkouts?.length) ? (
        <View className="w-[90%] self-center">
          {dayWorkouts?.map(({ name: workoutName, id: workoutId, exercises, musclesGroupTarget }) => (
            <React.Fragment key={workoutId}>
              <View>
                <Label
                  labelText={workoutName}
                  as="h2"
                  additionalLabelStyle="font-primary-bold text-gray-800 mt-4 text-primary-default"
                />
                <View className="flex-row items-center gap-4">
                  {musclesGroupTarget.map((muscleName: string, id: number) => (
                    <Label
                      key={`${muscleName}-${id}`}
                      labelText={muscleName}
                      additionalLabelStyle="font-primary-bold text-sm text-tertiary-default"
                      icon={dot}
                    />
                  ))}
                </View>
              </View>
              {!exercises.length && (
                <Label
                  labelText="No exercises yet"
                  additionalContainerStyle="mt-2"
                  as="h5"
                  additionalLabelStyle="font-primary-medium text-gray-800"
                />
              )}
              <WorkoutSelectedExerciseList exercises={exercises} isEditable={false} isSwipeEnabled={false} />
              <HorizontalLine thickness="sm" color="light" additionalClassName="mt-4" />
            </React.Fragment>
          ))}
          <Button
            buttonText="Add new workout"
            variant="primary"
            onPress={() =>
              router.push({
                pathname: "muscle-group-selection",
                params: {
                  day,
                },
              })
            }
            additionalContainerStyle="mt-6"
          />
        </View>
      ) : (
        <EdgeCaseTemplate
          image={<SquatsIllustration width={300} height={300} />}
          title="Empty workout zone"
          message="Time to break a sweat! Tap below to create a new workout."
          actionLabel="Create workout 💪"
          onActionPress={() => {
            router.push({
              pathname: "muscle-group-selection",
              params: {
                day,
              },
            });
          }}
        />
      )}

      {/* TODO: add a short overview of the workout here
    if the user wants to edit it he can do it by pressing an edit button, and be redirected to the more detailed screen
    */}
    </ScreenWrapper>
  );
};

export default WorkoutDetailScreen;
