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
  onUpdateInputs,
}: IWorkoutExerciseRow) => {
  const defaultWeight = Boolean(+set.weight) ? String(set.weight) : "-";
  const defaultReps = Boolean(+set.reps) ? String(set.reps) : "-";

  const [localSets, setLocalSets] = useState<ISet>({
    [set.id]: { weight: defaultWeight, reps: defaultReps },
  });

  const handleFocus = (setId: string, field: keyof ISet) => {
    if (localSets[setId][field] === "-") {
      setLocalSets(prevState => ({
        ...prevState,
        [setId]: { ...prevState[setId], [field]: "" },
      }));
    }
  };

  const handleBlur = (setId: string, field: keyof ISet) => {
    if (!localSets[setId][field]) {
      setLocalSets(prevState => ({
        ...prevState,
        [setId]: { ...prevState[setId], [field]: "-" },
      }));
    }
  };

  const handleChangeText = (groupName, setId: string, field: keyof ISet, newValue: string) => {
    setLocalSets(prevState => ({
      ...prevState,
      [setId]: { ...prevState[setId], [field]: newValue },
    }));
    onUpdateInputs({ groupName, setId, field, newValue });
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
            value={localSets[set.id].weight}
            maxLength={3}
            isEditable={isEditable}
            onFocus={() => handleFocus(set.id, "weight")}
            onBlur={() => handleBlur(set.id, "weight")}
            onChangeText={(newValue: string) => handleChangeText(groupName, set.id, "weight", newValue)}
          />
        </View>
        <View className="flex-1">
          <CustomInput
            accessibilityLabel="Text input field"
            accessibilityHint="Text input field"
            className={`w-[50px] self-center rounded py-[2px] text-center font-primary-semi-bold text-base leading-[0px] ${isEditable ? "border border-gray-300" : "border-none"}`}
            keyboardType="numeric"
            value={localSets[set.id].reps}
            maxLength={3}
            isEditable={isEditable}
            onFocus={() => handleFocus(set.id, "reps")}
            onBlur={() => handleBlur(set.id, "reps")}
            onChangeText={(newValue: string) => handleChangeText(groupName, set.id, "reps", newValue)}
          />
        </View>
      </View>
    </View>
  );
};

export default WorkoutExerciseRow;
