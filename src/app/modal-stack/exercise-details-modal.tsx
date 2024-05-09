/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import { fitnessExercises } from "../../__mocks__/fitness-exercises";
import Image from "../../components/atoms/image";
import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";

/** Modal used to display the exercise details */
const ExerciseDetailsModal = () => {
  const { exerciseName } = useLocalSearchParams();
  const exercise = fitnessExercises.find(ex => ex.name === exerciseName);
  return (
    <ScreenWrapper>
      <Stack.Screen
        options={{
          title: exerciseName as string,
        }}
      />

      <View className="mb-[500px] flex-1 p-4">
        <Label labelText={exerciseName as string} as="h3" additionalLabelStyle="font-primary-bold" />
        <Label labelText={`${exercise?.bodyPart} - ${exercise?.target}`} additionalLabelStyle="text-gray-600" />
        {exercise?.gifUrl && <Image source={{ uri: exercise.gifUrl }} className="size-full" />}

        <View className="mt-4">
          <Label as="h3" labelText="Instructions:" additionalLabelStyle="font-primary-bold" />
          {exercise?.instructions.map((instruction, index) => (
            <Label key={index} labelText={`  ${index + 1}. ${instruction}`} additionalLabelStyle="mt-2 text-gray-800" />
          ))}
        </View>

        <View className="mt-4">
          <Label as="h3" labelText="Secondary Muscles:" additionalLabelStyle="font-primary-bold" />
          {exercise?.secondaryMuscles.map((muscle, index) => (
            <Label key={index} labelText={muscle} additionalLabelStyle="mt-1 text-gray-800" />
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ExerciseDetailsModal;
