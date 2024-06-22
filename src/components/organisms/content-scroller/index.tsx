import dayjs from "dayjs";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import Animated from "react-native-reanimated";

import { queryClient } from "../../../api/common";
import { useCurrentUser } from "../../../api/user/user.hooks";
import { useUserWorkoutsByDate, useWorkoutAction } from "../../../api/workout/workout.hooks";
import { WORKOUT_ACTION } from "../../../api/workout/workout.types";
import CardIcon from "../../../assets/icons/Card";
import ChevronIcon from "../../../assets/icons/SvgExample";
import SquatsIllustration from "../../../assets/images/illustrations/Squats";
import { useContentScroller } from "../../../hooks/use-content-scroller/use-content-scroller";
import SpinnerScreen from "../../../screens/spinner-screen";
import { Colors } from "../../../styles/colors";
import { getCurrentDay } from "../../../utilities/date-time-helpers";
import HorizontalLine from "../../atoms/horizontal-line";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";
import WelcomeMessage from "../../molecules/welcome-message";
import WorkoutActionCard from "../../molecules/workout-action-card";
import EdgeCaseTemplate from "../../templates/edge-case-template";

const scanCardAnimation = require("../../../assets/animations/scan-card-animation.json");

const handleOnSuccessWorkoutAction = data => {
  showMessage({
    message: data.message,
    type: "success",
    duration: 5000,
  });

  queryClient.invalidateQueries({ queryKey: ["user-workouts-by-date"] });
};

const handleOnErrorWorkoutAction = error => {
  showMessage({
    message: error.message,
    type: "danger",
    duration: 10000,
  });
};

const ContentScroller = forwardRef(
  ({ isCardScannedToday, cardScannedDate }: { isCardScannedToday: Boolean; cardScannedDate: Date }, ref) => {
    const { contentContainerStyle, scrollHandler } = useContentScroller();

    const currentDayDate = getCurrentDay("YYYY-MM-DD");
    const { data } = useUserWorkoutsByDate(currentDayDate);
    const { mutate: handleWorkoutAction } = useWorkoutAction({
      onSuccess: handleOnSuccessWorkoutAction,
      onError: handleOnErrorWorkoutAction,
    });
    const { data: currentUserResponse } = useCurrentUser();

    const dailyWorkouts = data?.record;
    const userName = currentUserResponse?.record.userName;

    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        style={styles.root}
        contentContainerStyle={[styles.container, contentContainerStyle]}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        ref={ref}
      >
        <WelcomeMessage username={userName} />
        <SpinnerScreen />
        {isCardScannedToday && (
          <>
            <View className="my-2 flex-row rounded-md bg-primary-default px-4 py-1">
              <Label
                labelText={`Gym pass scanned today at ${dayjs(cardScannedDate).format("hh:mm A")}`}
                as="h5"
                icon={<CardIcon fill={Colors.grey} width={20} height={20} />}
                additionalLabelStyle="text-white font-primary text-center ml-2"
              />
              <Icon
                iconElement={<ChevronIcon width={14} height={14} fill={Colors.white} />}
                additionalInnerClassName="bg-none ml-4"
                onPress={() => router.navigate("/gym-visit")}
              />
            </View>
            <HorizontalLine color="light" thickness="sm" additionalClassName="mt-2" />
          </>
        )}
        {!isCardScannedToday && (
          <View className="mt-16 items-center justify-center">
            <LottieView loop autoPlay source={scanCardAnimation} style={{ width: 200, height: 200 }} />
            <Label
              labelText="Scan card membership to see you workouts planned for today"
              as="h3"
              additionalLabelStyle="text-gray-800 font-primary-bold ml-2 mt-4 text-center"
            />
          </View>
        )}

        {!dailyWorkouts?.length && isCardScannedToday && (
          <EdgeCaseTemplate
            image={<SquatsIllustration width={300} height={300} />}
            title="Empty workout zone"
            message="You don't have any workout planned for today."
            actionLabel="Create workout 💪"
            onActionPress={() => {
              router.push({
                pathname: "muscle-group-selection",
                params: {
                  day: currentDayDate,
                },
              });
            }}
          />
        )}

        {Boolean(dailyWorkouts?.length) && isCardScannedToday ? (
          <View>
            {dailyWorkouts?.map(
              ({ name: workoutName, id: workoutId, exercises, musclesGroupTarget, startDateTime, endDateTime }) => {
                const isWorkoutStarted = !!startDateTime;
                const isWorkoutCompleted = !!endDateTime;

                const btnText = isWorkoutStarted ? "Stop workout" : "Start workout";
                const workoutAction = isWorkoutStarted ? WORKOUT_ACTION.STOP : WORKOUT_ACTION.START;
                return (
                  <WorkoutActionCard
                    workoutName={workoutName}
                    exercises={exercises}
                    musclesGroupTarget={musclesGroupTarget}
                    key={workoutId}
                    workoutId={workoutId}
                    btnText={btnText}
                    workoutAction={workoutAction}
                    handleWorkoutAction={handleWorkoutAction}
                    isWorkoutCompleted={isWorkoutCompleted}
                    startDateTime={startDateTime}
                    endDateTime={endDateTime}
                  />
                );
              }
            )}
          </View>
        ) : null}
      </Animated.ScrollView>
    );
  }
);

export default ContentScroller;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
});
