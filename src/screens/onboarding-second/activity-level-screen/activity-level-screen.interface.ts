import { IOnboardingSecondData } from "../../../components/templates/onboarding-second-flow/onboarding-second-flow.interface";

export interface IActivityLevelScreen {
  goToNext: (data: IOnboardingSecondData) => void;
}
