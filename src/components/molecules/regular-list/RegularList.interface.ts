/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

import { IRadioButton } from "../../atoms/radio-button/RadioButton.interface";
import { IOnboardingSlide } from "../onboarding-slide/OnboardingSlide.interface";

export interface IRegularList {
  items: any[];
  itemComponent: ComponentType<IOnboardingSlide> | ComponentType<IRadioButton>;
  additionalContainerStyle: string;
}
