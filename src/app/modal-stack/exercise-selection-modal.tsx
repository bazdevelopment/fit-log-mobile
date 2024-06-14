/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { IErrorResponse } from "../../api/auth/auth.types";
import { queryClient } from "../../api/common";
import { useExercisesByMuscleTarget } from "../../api/exercise/exercise.hooks";
import { IExerciseResponse } from "../../api/exercise/exercise.types";
import { useAddMultipleExercisesToWorkout } from "../../api/workout/workout.hooks";
import { IAddMultipleExercisesToWorkoutSuccessResponse } from "../../api/workout/workout.types";
import HorizontalLine from "../../components/atoms/horizontal-line";
import Icon from "../../components/atoms/icon";
import Image from "../../components/atoms/image";
import Label from "../../components/atoms/label";
import { Colors } from "../../styles/colors";
import SpinnerScreen from "../../screens/spinner-screen";

const handleOnSuccess = (data: IAddMultipleExercisesToWorkoutSuccessResponse) => {
  showMessage({
    message: data.message,
    type: "success",
    duration: 5000,
  });

  router.back();
  queryClient.invalidateQueries({ queryKey: ["user-workouts-by-date"] });
};

const handleOnError = (error: IErrorResponse) => {
  showMessage({
    message: error.message,
    type: "danger",
    duration: 10000,
  });
};

export default function Modal() {
  const { musclesGroupTarget, workoutId } = useLocalSearchParams();
  const { data } = useExercisesByMuscleTarget(JSON.stringify(musclesGroupTarget?.split(",")), 100, 0);

  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const { mutate: handleAddExercisesToWorkout } = useAddMultipleExercisesToWorkout({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  const toggleSelectedExercises = (exerciseId: string) => {
    if (selectedExercises.includes(exerciseId)) {
      setSelectedExercises(selectedExercises.filter(existingExerciseId => existingExerciseId !== exerciseId));
    } else {
      setSelectedExercises(prevSelectedExercises => [...prevSelectedExercises, exerciseId]);
    }
  };

  const isSelected = (exerciseId: string) => selectedExercises.includes(exerciseId);

  return (
    <View className="mt-6 flex-1">
      <StatusBar style="light" />
      <SpinnerScreen/>
      <Stack.Screen
        options={{
          title: musclesGroupTarget,
          headerRight: () =>
            Boolean(selectedExercises.length) && (
              <View className="flex-row items-center gap-4">
                <Label
                  as="h4"
                  labelText={`🏋️‍♂️ ${selectedExercises.length}`}
                  additionalLabelStyle="text-white font-primary-bold"
                />
                <Icon
                  iconElement={<FontAwesome5 name="check" size={12} color={Colors.white} testID="search-icon" />}
                  additionalInnerClassName="p-[4px] border-[1.25px] border-white"
                  onPress={() => handleAddExercisesToWorkout({ workoutId, exercisesIds: selectedExercises })}
                />
              </View>
            ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {data?.record.map((exercise: IExerciseResponse) => (
          <TouchableOpacity
            accessibilityRole="button"
            key={exercise.id}
            // ${isSelected(exercise.name) && "bg-primary-default opacity-85"}
            className={`flex-col ${isSelected(exercise.name) && "bg-slate-100"}`}
            onPress={() => toggleSelectedExercises(exercise.id)}
          >
            <View className="m-1 flex-row justify-between p-1">
              <View className="flex-1 flex-row items-center">
                <View>
                  <Image source={{ uri: exercise.gifUrl }} className="size-[40px] rounded-full" />
                  {isSelected(exercise.id) && (
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(103,57,255,0.75)",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1,
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                      }}
                    >
                      <Icon
                        iconElement={<FontAwesome5 name="check" size={20} color={Colors.white} testID="search-icon" />}
                        withBackground={false}
                        additionalInnerClassName="p-0"
                        onPress={() => toggleSelectedExercises(exercise.id)}
                      />
                    </View>
                  )}
                </View>

                <Label
                  labelText={exercise.name}
                  as="h5"
                  additionalContainerStyle="w-[85%]"
                  additionalLabelStyle="text-gray-900 font-primary-semi-bold ml-2"
                />
              </View>
              <Icon
                iconElement={<Ionicons name="eye-outline" size={24} color={Colors.primary} testID="search-icon" />}
                withBackground={false}
                additionalInnerClassName="p-0"
                onPress={() =>
                  router.push({
                    pathname: "/modal-stack/exercise-details-modal",
                    params: {
                      exerciseName: exercise.name,
                    },
                  })
                }
              />
            </View>

            <HorizontalLine thickness="sm" color="light" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
