import { ReactElement } from "react";

import { TGender } from "../../../constants/gender";
import { Nullable } from "../../../types/general.types";

export interface IOnboardingSecondFlow {
  children: ReactElement[];
  onNext: (stepData: IOnboardingSecondData) => void;
  onBack: () => void;
  currentIndex: number;
  onFinish: () => void;
  onboardingData: IOnboardingSecondData;
}

export interface IOnboardingSecondData {
  gender?: Nullable<TGender>;
  age?: Nullable<number>;
  weight?: Nullable<number>;
  height?: Nullable<number>;
  goal?: Nullable<string>;
  activityLevel?: Nullable<string>;
}
