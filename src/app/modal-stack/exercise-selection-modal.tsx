/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

import { fitnessExercises } from "../../__mocks__/fitness-exercises";
import HorizontalLine from "../../components/atoms/horizontal-line";
import Icon from "../../components/atoms/icon";
import Label from "../../components/atoms/label";
import { useWorkout } from "../../context/workout-context";
import { Colors } from "../../styles/colors";

export default function Modal() {
  const { groupName } = useLocalSearchParams();
  const { dispatch, state } = useWorkout();
  const selectedExercises = state.exercises[groupName] || [];
  const isSelected = (exerciseName: string) => Boolean(selectedExercises.filter(ex => ex.name === exerciseName).length);

  return (
    <View className="mt-6 flex-1">
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          title: groupName,
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
                  onPress={() => console.log("view exercise deails")}
                />
              </View>
            ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {fitnessExercises.map(exercise => (
          <TouchableOpacity
            accessibilityRole="button"
            key={exercise.id}
            // ${isSelected(exercise.name) && "bg-primary-default opacity-85"}
            className={`flex-col ${isSelected(exercise.name) && "bg-slate-100"}`}
            onPress={() => dispatch({ type: "ADD_EXERCISE", payload: { group: groupName, exercise } })}
          >
            <View className="m-1 flex-row justify-between p-1">
              <View className="flex-1 flex-row items-center">
                <View>
                  <Image
                    source={{ uri: exercise.gifUrl }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                    }}
                  />
                  {isSelected(exercise.name) && (
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
                        onPress={() => console.log("view exercise deails")}
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
                onPress={() => console.log("view exercise deails")}
              />
            </View>

            <HorizontalLine thickness="sm" color="light" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
