import React from "react";
import { View } from "react-native";

import ArrowLeft from "../../../assets/icons/ArrowLeft";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon/icon";
import ProgressBar from "../../atoms/progress-bar/ProgressBar";
import { IOnboardingSecondData, IOnboardingSecondFlow } from "./onboarding-second-flow.interface";

/**
 * Wrapper for second onboarding flow where top navigation and progress bar are displayed by default all over the screens
 */
const OnboardingSecondFlow = ({
  children,
  onNext,
  onBack,
  currentIndex,
  onFinish,
  onboardingData,
}: IOnboardingSecondFlow) => {
  const totalSteps = React.Children.toArray(children).length;
  const isFirstScreenDisplayed = currentIndex === 0;

  const goToNext = (stepData: IOnboardingSecondData) => {
    onNext(stepData);
  };
  const currentChild = React.Children.toArray(children)[currentIndex];
  const wrappedCurrentChild = React.isValidElement(currentChild)
    ? currentIndex === totalSteps - 1
      ? React.cloneElement(currentChild, { goToNext, onFinish, onboardingData })
      : React.cloneElement(currentChild, { goToNext, onboardingData })
    : currentChild;

  return (
    <>
      <View className="mb-10 ml-5 mt-20 w-full flex-row items-center gap-10">
        <Icon
          iconElement={<ArrowLeft width={23} height={23} color={Colors.blackPantone} />}
          additionalInnerClassName="border-slate-400 border-[1px]"
          onPress={onBack}
          disabled={isFirstScreenDisplayed}
          isHidden={isFirstScreenDisplayed}
        />

        <View className="h-10 w-[200px]">
          <ProgressBar currentStep={currentIndex + 1} totalSteps={totalSteps} />
        </View>
      </View>
      {wrappedCurrentChild}
    </>
  );
};

export default OnboardingSecondFlow;
