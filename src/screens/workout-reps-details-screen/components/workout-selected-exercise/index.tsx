/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { Image, View } from "react-native";

import Button from "../../../../components/atoms/button/button";
import Label from "../../../../components/atoms/label";
import { generateUniqueId } from "../../../../utilities/generate-unique-id";
import WorkoutExerciseHeader from "../workout-exercise-header";
import WorkoutExerciseSetList from "../workout-exercise-set-list";
import { IWorkoutSelectedExercise } from "./WorkoutSelectedExercise.interface";

/**
 * Component used to display the selected exercises with the header / sets / add set button
 */
const WorkoutSelectedExercise = ({
  exercise,
  groupName,
  dispatch,
  isEditable,
  onUpdateInputs,
}: IWorkoutSelectedExercise) => {
  return (
    <>
      <View className="left-[-15px] mt-4 flex-row items-center">
        <Image source={{ uri: exercise.gifUrl }} className=" size-[50px]" />
        <Label labelText={exercise.name} as="h3" additionalLabelStyle="text-gray-800 font-primary-bold" />
      </View>
      {Boolean(exercise.sets?.length) && (
        <View className="mb-2 w-[85%] flex-row self-end">
          <WorkoutExerciseHeader title="Prev. result" />
          <WorkoutExerciseHeader title="Weight (kg)" />
          <WorkoutExerciseHeader title="Reps" />
        </View>
      )}
      {Boolean(exercise.sets?.length) && (
        <WorkoutExerciseSetList
          sets={exercise.sets}
          groupName={groupName}
          isEditable={isEditable}
          onUpdateInputs={onUpdateInputs}
        />
      )}

      {isEditable && (
        <Button
          additionalContainerStyle="flex-row justify-end mt-4 mr-2"
          variant="link"
          size="md"
          buttonText="Add set"
          onPress={() =>
            dispatch({
              type: "ADD_SET",
              payload: {
                group: groupName,
                exerciseName: exercise.name,
                set: { weight: "0", reps: "0", id: generateUniqueId() },
              },
            })
          }
        />
      )}
    </>
  );
};

export default WorkoutSelectedExercise;
