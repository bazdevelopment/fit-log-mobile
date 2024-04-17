import { IOnboardingSecondData } from "../../../components/templates/onboarding-second-flow/OnboardingSecondFlow.interface";

export interface IHeightSelectionScreen {
  goToNext: (data: IOnboardingSecondData) => void;
  onboardingData: IOnboardingSecondData;
}
