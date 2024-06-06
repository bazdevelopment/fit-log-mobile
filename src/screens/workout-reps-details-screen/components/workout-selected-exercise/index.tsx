/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

import Button from "../../../../components/atoms/button/button";
import Image from "../../../../components/atoms/image";
import Label from "../../../../components/atoms/label";
import WorkoutExerciseHeader from "../workout-exercise-header";
import WorkoutExerciseSetList from "../workout-exercise-set-list";
import { IWorkoutSelectedExercise } from "./WorkoutSelectedExercise.interface";

const defaultSetsHere = [
  { weight: 0, reps: 0 },
  { weight: 0, reps: 0 },
  { weight: 0, reps: 0 },
];

/**
 * Component used to display the selected exercises with the header / sets / add set button
 */
const WorkoutSelectedExercise = ({ exerciseDetails, isEditable, isSwipeEnabled }: IWorkoutSelectedExercise) => {
  const [defaultSets, setDefaultSets] = useState(defaultSetsHere);

  const { exercise, set, id: workoutExerciseId } = exerciseDetails;

  const [storedSets, setStoredSets] = useState(set || []);

  const handleAddNewSet = () => {
    if (storedSets.length) {
      setStoredSets(prevSets => [...prevSets, { weight: 0, reps: 0 }]);
    }

    setDefaultSets(prevSets => [...prevSets, { weight: 0, reps: 0 }]);
  };

  const [showSetInputs, setShowSetInputs] = useState(Boolean(set.length));

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
      {!showSetInputs && (
        <View className="flex-row items-center justify-center">
          <Label labelText="No set added!" as="h5" additionalLabelStyle="text-gray-800 text-center" />
          {isEditable && (
            <Button
              additionalContainerStyle="ml-2"
              variant="link"
              size="md"
              buttonText="Add sets"
              onPress={() => setShowSetInputs(true)}
            />
          )}
        </View>
      )}
      {showSetInputs && (
        <View className="mb-2 w-[85%] flex-row self-end">
          <WorkoutExerciseHeader title="Prev. result" />
          <WorkoutExerciseHeader title="Weight (kg)" />
          <WorkoutExerciseHeader title="Reps" />
        </View>
      )}
      {showSetInputs && (
        <WorkoutExerciseSetList
          sets={storedSets.length ? storedSets : defaultSets}
          workoutExerciseId={workoutExerciseId}
          isEditable={isEditable}
          isSwipeEnabled={isSwipeEnabled}
        />
      )}

      {isEditable && showSetInputs && (
        <Button
          additionalContainerStyle="flex-row self-end mt-4 mr-2"
          variant="link"
          size="md"
          buttonText="Add set"
          onPress={handleAddNewSet}
        />
      )}
    </>
  );
};

export default WorkoutSelectedExercise;
