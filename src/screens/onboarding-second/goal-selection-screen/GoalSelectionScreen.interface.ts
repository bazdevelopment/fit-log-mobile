import { IOnboardingSecondData } from "../../../components/templates/onboarding-second-flow/OnboardingSecondFlow.interface";

export interface IGoalSelectionScreen {
  goToNext: (data: IOnboardingSecondData) => void;
  onboardingData: IOnboardingSecondData;
}
