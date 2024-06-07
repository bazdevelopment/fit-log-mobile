import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React, { forwardRef } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

import { useUserWorkoutsByDate } from "../../../api/workout/workout.hooks";
import SquatsIllustration from "../../../assets/images/illustrations/Squats";
import { useContentScroller } from "../../../hooks/use-content-scroller/use-content-scroller";
import { getCurrentDay } from "../../../utilities/date-time-helpers";
import Button from "../../atoms/button/button";
import HorizontalLine from "../../atoms/horizontal-line";
import Image from "../../atoms/image";
import Label from "../../atoms/label";
import WelcomeMessage from "../../molecules/welcome-message";
import EdgeCaseTemplate from "../../templates/edge-case-template";

const scanCardAnimation = require("../../../assets/animations/scan-card-animation.json");
const ContentScroller = forwardRef(({ cardScanned }: { cardScanned: string }, ref) => {
  const { contentContainerStyle, scrollHandler } = useContentScroller();
  const dot = <View className="size-[8px] rounded-full bg-secondary-default" />;

  const currentDayDate = getCurrentDay("YYYY-MM-DD");
  const { data } = useUserWorkoutsByDate("2024-06-03");

  const dailyWorkouts = data?.record;

  const isScanned = cardScanned?.length;
  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      style={styles.root}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      onScroll={scrollHandler}
      showsVerticalScrollIndicator={false}
      ref={ref}
    >
      <WelcomeMessage username="Marian" />
      {!isScanned && (
        <View className="mt-16 items-center justify-center">
          <LottieView loop autoPlay source={scanCardAnimation} style={{ width: 200, height: 200 }} />
          <Label
            labelText="Scan card membership to see you workouts planned for today"
            as="h3"
            additionalLabelStyle="text-gray-800 font-primary-bold ml-2 mt-4 text-center"
          />
        </View>
      )}

      {!dailyWorkouts?.length && !!isScanned && (
        <EdgeCaseTemplate
          image={<SquatsIllustration width={300} height={300} />}
          title="Empty workout zone"
          message="You don't have any workout planned for today."
        />
      )}

      {Boolean(dailyWorkouts?.length) && isScanned ? (
        <View className="w-[90%] self-center">
          {dailyWorkouts?.map(({ name: workoutName, id: workoutId, exercises, musclesGroupTarget }) => (
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

              {exercises.map(exerciseDetails => (
                <View className="left-[-15px] mt-4 flex-row items-center" key={exerciseDetails.id}>
                  <Pressable
                    accessibilityRole="button"
                    onPress={() =>
                      router.push({
                        pathname: "/modal-stack/exercise-details-modal",
                        params: {
                          exerciseName: exerciseDetails.exercise.name,
                        },
                      })
                    }
                  >
                    <Image source={{ uri: exerciseDetails.exercise.gifUrl }} className="size-[50px]" />
                  </Pressable>
                  <Label
                    labelText={exerciseDetails.exercise.name}
                    as="h3"
                    additionalLabelStyle="text-gray-800 font-primary-bold ml-2"
                  />
                </View>
              ))}

              <Button buttonText="Start workout" onPress={() => {}} variant="primary" additionalContainerStyle="mt-6" />
              <HorizontalLine thickness="sm" color="light" additionalClassName="mt-4" />
            </React.Fragment>
          ))}
        </View>
      ) : null}
    </Animated.ScrollView>
  );
});

export default ContentScroller;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
});
