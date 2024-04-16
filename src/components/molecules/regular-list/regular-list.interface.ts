/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

import { IRadioButton } from "../../atoms/radio-button/radio-button.interface";
import { IOnboardingSlide } from "../onboarding-slide/onboarding-slide.interface";

export interface IRegularList {
  items: any[];
  itemComponent: ComponentType<IOnboardingSlide> | ComponentType<IRadioButton>;
  additionalContainerStyle: string;
}
