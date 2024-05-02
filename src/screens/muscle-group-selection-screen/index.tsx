import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";

/**
 * Screen used to select one or multiple muscle groups
 */
const MuscleGroupSelectionScreen = () => {
  return (
    <ScreenWrapper isScrollEnabled={false} isBackNavigationEnabled title="Pick you muscle groups">
      <Label labelText="Pick your muscle groups" />
    </ScreenWrapper>
  );
};

export default MuscleGroupSelectionScreen;
