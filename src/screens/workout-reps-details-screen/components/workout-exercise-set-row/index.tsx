import { useState } from "react";
import { View } from "react-native";

import Label from "../../../../components/atoms/label";
import CustomInput from "../../../../components/molecules/custom-input";
import { ISet } from "../../../../context/workout-context/workout-context.interface";
import { IWorkoutExerciseRow } from "./WorkoutExerciseRow.interface";

/**
 * Component used to display the a new entry for a new set
 * The new entry will have contain the row number, prev results, weight and number of reps
 */
const WorkoutExerciseRow = ({
  additionalContainerStyle,
  set,
  index,
  isEditable,
  workoutExerciseId,
  handleAddSetToWorkoutExercise,
  handleUpdateSet,
}: IWorkoutExerciseRow) => {
  const defaultWeight = Boolean(+set.weight) ? String(set.weight) : "-";
  const defaultReps = Boolean(+set.reps) ? String(set.reps) : "-";
  const defaultSetId = set.id || undefined;

  const [localSets, setLocalSets] = useState({
    [workoutExerciseId]: { weight: defaultWeight, reps: defaultReps },
  });

  const handleFocus = (field: keyof ISet) => {
    if (localSets[workoutExerciseId][field] === "-") {
      setLocalSets(prevState => ({
        [workoutExerciseId]: { ...prevState[workoutExerciseId], [field]: "" },
      }));
    }
  };

  const handleBlur = (field: keyof ISet) => {
    if (!localSets[workoutExerciseId][field]) {
      setLocalSets(prevState => ({
        [workoutExerciseId]: { ...prevState[workoutExerciseId], [field]: "-" },
      }));
    }

    const { reps, weight } = localSets[workoutExerciseId] || {};
    if (reps && reps !== "-" && weight && weight !== "-") {
      defaultSetId
        ? handleUpdateSet({ setId: defaultSetId, reps: Number(reps), weight: Number(weight) })
        : handleAddSetToWorkoutExercise({ workoutExerciseId, reps: Number(reps), weight: Number(weight) });
    }
  };

  const handleChangeText = (field: keyof ISet, newValue: string) => {
    setLocalSets(prevState => ({
      [workoutExerciseId]: {
        ...prevState[workoutExerciseId],
        [field]: newValue,
      },
    }));
    // onUpdateInputs({ workoutExerciseId, field, newValue, uniqueKey: index });
  };

  return (
    <View className="mt-2">
      <Label
        labelText={`${index + 1}.`}
        as="h4"
        additionalLabelStyle="text-gray-800 font-primary-bold"
        additionalContainerStyle="absolute"
      />
      <View className={additionalContainerStyle}>
        <Label
          labelText="95kg x 12"
          as="h5"
          additionalLabelStyle="text-gray-600 font-primary text-center"
          additionalContainerStyle="flex-1"
        />
        <View className="flex-1">
          <CustomInput
            accessibilityLabel="Text input field"
            accessibilityHint="Text input field"
            className={`w-[50px] self-center rounded py-[2px] text-center font-primary-semi-bold text-base leading-[0px] ${isEditable ? "border border-gray-300" : "border-none"}`}
            keyboardType="numeric"
            value={localSets[workoutExerciseId].weight}
            maxLength={3}
            isEditable={isEditable}
            onFocus={() => handleFocus("weight")}
            onBlur={() => handleBlur("weight")}
            onChangeText={(newValue: string) => handleChangeText("weight", newValue)}
          />
        </View>
        <View className="flex-1">
          <CustomInput
            accessibilityLabel="Text input field"
            accessibilityHint="Text input field"
            className={`w-[50px] self-center rounded py-[2px] text-center font-primary-semi-bold text-base leading-[0px] ${isEditable ? "border border-gray-300" : "border-none"}`}
            keyboardType="numeric"
            value={localSets[workoutExerciseId].reps}
            maxLength={3}
            isEditable={isEditable}
            onFocus={() => handleFocus("reps")}
            onBlur={() => handleBlur("reps")}
            onChangeText={(newValue: string) => handleChangeText("reps", newValue)}
          />
        </View>
      </View>
    </View>
  );
};

export default WorkoutExerciseRow;
