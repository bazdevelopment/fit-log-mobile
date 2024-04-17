import { useState } from "react";

import OnboardingSecondFlow from "../../components/templates/onboarding-second-flow";
import { IOnboardingSecondData } from "../../components/templates/onboarding-second-flow/OnboardingSecondFlow.interface";
import ActivityLevelScreen from "../../screens/onboarding-second/activity-level-screen";
import AgeSelectionScreen from "../../screens/onboarding-second/age-selection-screen";
import GenderSelectionScreen from "../../screens/onboarding-second/gender-selection-screen";
import GoalSelectionScreen from "../../screens/onboarding-second/goal-selection-screen";
import HeightSelectionScreen from "../../screens/onboarding-second/height-selection-screen";
import SuccessOnboardingScreen from "../../screens/onboarding-second/success-onboarding-screen";
import WeightSelectionScreen from "../../screens/onboarding-second/weight-selection-screen";

/**
 * Second onboarding flow
 * User to display different screens in order to collect personal information about the user
 * The information can be related to age, height, activity level, weight, goal
 */
export default function OnboardingSecondFlowPage() {
  const [onboardingData, setOnboardingData] = useState({
    gender: null,
    age: null,
    weight: null,
    height: null,
    goals: null,
    activityLevel: null,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNext = (stepData: IOnboardingSecondData) => {
    setOnboardingData(prevOnboardingData => ({ ...prevOnboardingData, ...stepData }));
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const handleOnBack = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const handleOnFinish = () => {
    console.log("Finish onboarding!!", onboardingData);
  };

  return (
    <OnboardingSecondFlow
      currentIndex={currentIndex}
      onNext={handleOnNext}
      onBack={handleOnBack}
      onFinish={handleOnFinish}
      onboardingData={onboardingData}
    >
      <GenderSelectionScreen />
      <AgeSelectionScreen />
      <WeightSelectionScreen />
      <HeightSelectionScreen />
      <GoalSelectionScreen />
      <ActivityLevelScreen />
      <SuccessOnboardingScreen />
    </OnboardingSecondFlow>
  );
}
