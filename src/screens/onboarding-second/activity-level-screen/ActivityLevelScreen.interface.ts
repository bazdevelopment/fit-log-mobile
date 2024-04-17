import { IOnboardingSecondData } from "../../../components/templates/onboarding-second-flow/OnboardingSecondFlow.interface";

export interface IActivityLevelScreen {
  goToNext: (data: IOnboardingSecondData) => void;
  onboardingData: IOnboardingSecondData;
}
