import { IOnboardingSecondData } from "../../../components/templates/onboarding-second-flow/onboarding-second-flow.interface";

export interface IHeightSelectionScreen {
  goToNext: (data: IOnboardingSecondData) => void;
  onboardingData: IOnboardingSecondData;
}
