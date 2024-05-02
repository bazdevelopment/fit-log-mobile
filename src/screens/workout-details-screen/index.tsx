import { router, useLocalSearchParams } from "expo-router";

import SquatsIllustration from "../../assets/images/illustrations/Squats";
import EdgeCaseTemplate from "../../components/templates/edge-case-template";
import ScreenWrapper from "../../components/templates/screen-wrapper";

/**
 * Screen used to display an overview with the workout that the user created for a specific day
 * if there are no workouts created, a placeholder will be displayed
 */
const WorkoutDetailScreen = () => {
  const { day } = useLocalSearchParams();

  return (
    <ScreenWrapper isScrollEnabled={false} isBackNavigationEnabled title={day as string}>
      <EdgeCaseTemplate
        image={<SquatsIllustration width={300} height={300} />}
        title="Empty workout zone"
        message="Time to break a sweat! Tap below to create a new workout."
        actionLabel="Create workout 💪"
        onActionPress={() => router.navigate("muscle-group-selection")}
      />
    </ScreenWrapper>
  );
};

export default WorkoutDetailScreen;
