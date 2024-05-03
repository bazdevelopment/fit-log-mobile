import { useLocalSearchParams } from "expo-router";

import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";
/**
 * Screen used to display the muscle groups selected together with exercises linked to each group
 * The user has possibility to add the number of sets/reps for each exercise

 */
const WorkoutRepsDetailsScreen = () => {
  const { selectedMuscleGroups } = useLocalSearchParams();
  const muscleGroups = selectedMuscleGroups.split(",");
  return (
    <ScreenWrapper isScrollEnabled={false} isBackNavigationEnabled title="Workout">
      {muscleGroups.map((groupName: string, index: number) => (
        <Label key={index} labelText={groupName} />
      ))}
    </ScreenWrapper>
  );
};

export default WorkoutRepsDetailsScreen;
