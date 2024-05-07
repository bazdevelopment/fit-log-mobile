import { View } from "react-native";

import Label from "../../../../components/atoms/label";
import { IWorkoutExerciseHeader } from "./WorkoutExerciseHeader.interface";

/**
 * Component used to display the exercise header : PrevResult / Weight / Reps
 */
const WorkoutExerciseHeader = ({ title, additionalLabelStyle }: IWorkoutExerciseHeader) => {
  return (
    <View className="flex-1">
      <Label
        labelText={title}
        as="h5"
        additionalLabelStyle={`text-center font-primary-regular text-gray-600 ${additionalLabelStyle}`}
      />
    </View>
  );
};

export default WorkoutExerciseHeader;
