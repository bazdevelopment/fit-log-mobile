/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { router } from "expo-router";
import { Pressable, View } from "react-native";

import Button from "../../../../components/atoms/button/button";
import Image from "../../../../components/atoms/image";
import Label from "../../../../components/atoms/label";
import WorkoutExerciseHeader from "../workout-exercise-header";
import WorkoutExerciseSetList from "../workout-exercise-set-list";
import { IWorkoutSelectedExercise } from "./WorkoutSelectedExercise.interface";

/**
 * Component used to display the selected exercises with the header / sets / add set button
 */
const WorkoutSelectedExercise = ({
  exerciseDetails,
  isEditable,
  onUpdateInputs,
  isSwipeEnabled,
}: IWorkoutSelectedExercise) => {
  const { exercise, set } = exerciseDetails;
  return (
    <>
      <View className="left-[-15px] mt-4 flex-row items-center">
        <Pressable
          accessibilityRole="button"
          onPress={() =>
            router.push({
              pathname: "/modal-stack/exercise-details-modal",
              params: {
                exerciseName: exercise.name,
              },
            })
          }
        >
          <Image source={{ uri: exercise.gifUrl }} className="size-[50px]" />
        </Pressable>
        <Label labelText={exercise.name} as="h3" additionalLabelStyle="text-gray-800 font-primary-bold" />
      </View>
      {!Boolean(set.length) && (
        <View className="flex-row items-center justify-center">
          <Label labelText="No set added!" as="h5" additionalLabelStyle="text-gray-800 text-center" />
          {isEditable && (
            <Button
              additionalContainerStyle="ml-2"
              variant="link"
              size="md"
              buttonText="Add set"
              onPress={() => console.log("add set")}
            />
          )}
        </View>
      )}
      {Boolean(set.length) && (
        <View className="mb-2 w-[85%] flex-row self-end">
          <WorkoutExerciseHeader title="Prev. result" />
          <WorkoutExerciseHeader title="Weight (kg)" />
          <WorkoutExerciseHeader title="Reps" />
        </View>
      )}
      {Boolean(set.length) && (
        <WorkoutExerciseSetList
          sets={set}
          isEditable={isEditable}
          onUpdateInputs={onUpdateInputs}
          isSwipeEnabled={isSwipeEnabled}
        />
      )}

      {isEditable && Boolean(set.length) && (
        <Button
          additionalContainerStyle="flex-row self-end mt-4 mr-2"
          variant="link"
          size="md"
          buttonText="Add set"
          onPress={() => console.log("add set")}
        />
      )}
    </>
  );
};

export default WorkoutSelectedExercise;
