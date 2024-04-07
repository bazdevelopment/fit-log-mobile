/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

import { IOnboardingSlide } from "../onboarding-slide/onboarding-slide.interface";

export interface IRegularList {
  items: any[];
  itemComponent: ComponentType<IOnboardingSlide>;
  additionalContainerStyle: string;
}
