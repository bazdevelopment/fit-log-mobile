import { IOnboardingSecondData } from "../../../components/templates/onboarding-second-flow/onboarding-second-flow.interface";

export interface IAgeSelectionScreen {
  goToNext: (data: IOnboardingSecondData) => void;
  onBoardingData: IOnboardingSecondData;
}
