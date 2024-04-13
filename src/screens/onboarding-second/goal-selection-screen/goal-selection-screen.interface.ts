import { IOnboardingSecondData } from "../../../components/templates/onboarding-second-flow/onboarding-second-flow.interface";

export interface IGoalSelectionScreen {
  goToNext: (data: IOnboardingSecondData) => void;
  onboardingData: IOnboardingSecondData;
}
