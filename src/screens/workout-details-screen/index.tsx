import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import EditIcon from "../../assets/icons/Edit";
import SquatsIllustration from "../../assets/images/illustrations/Squats";
import HorizontalLine from "../../components/atoms/horizontal-line";
import Icon from "../../components/atoms/icon";
import Label from "../../components/atoms/label";
import EdgeCaseTemplate from "../../components/templates/edge-case-template";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import { useWorkout } from "../../context/workout-context";
import WorkoutSelectedExerciseList from "../workout-reps-details-screen/components/workout-selected-exercise-list";

/**
 * Screen used to display an overview with the workout that the user created for a specific day
 * if there are no workouts created, a placeholder will be displayed
 */
const WorkoutDetailScreen = () => {
  const { day } = useLocalSearchParams();
  const {
    state: { exercises },
    dispatch,
  } = useWorkout();

  const selectedMuscleGroups = Object.keys(exercises);

  return (
    <ScreenWrapper
      isScrollEnabled
      handleGoBack={() => router.navigate("/schedule")}
      isBackNavigationEnabled
      title={day as string}
    >
      {Boolean(selectedMuscleGroups.length) && (
        <Icon
          additionalClassName="absolute right-2 top-2"
          onPress={() => {
            router.push({
              pathname: "workout-reps-details",
              params: {
                selectedMuscleGroups,
              },
            });
          }}
          additionalInnerClassName="bg-black"
          iconElement={<EditIcon width={22} height={22} color={Colors.white} />}
        />
      )}

      {Boolean(selectedMuscleGroups.length) ? (
        <View className="w-[85%] self-center">
          {selectedMuscleGroups.map((muscleGroup: string, index: number) => (
            <>
              <Label
                key={index}
                labelText={muscleGroup}
                as="h2"
                additionalLabelStyle="font-primary-bold text-gray-800 mt-4 text-primary-default"
              />
              <WorkoutSelectedExerciseList
                key={index}
                groupName="Legs"
                exercises={exercises[muscleGroup]}
                dispatch={dispatch}
                isEditable={false}
              />
              <HorizontalLine thickness="sm" color="light" additionalClassName="mt-4" />
            </>
          ))}
        </View>
      ) : (
        <EdgeCaseTemplate
          image={<SquatsIllustration width={300} height={300} />}
          title="Empty workout zone"
          message="Time to break a sweat! Tap below to create a new workout."
          actionLabel="Create workout 💪"
          onActionPress={() => router.navigate("muscle-group-selection")}
        />
      )}

      {/* TODO: add a short overview of the workout here
    if the user wants to edit it he can do it by pressing an edit button, and be redirected to the more detailed screen
    */}
    </ScreenWrapper>
  );
};

export default WorkoutDetailScreen;
