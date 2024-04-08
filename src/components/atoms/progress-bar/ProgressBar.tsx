import { View } from "react-native";

import Label from "../label/label";
import { IProgressBar } from "./ProgressBar.interface";

/**
 *  Component which displays a progress bar which is filed dynamically depending on the number of steps
 */
const ProgressBar = ({ currentStep, totalSteps }: IProgressBar) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <View className="flex-row items-center">
      <View className=" ml-2 h-2 w-3/4 flex-row items-center overflow-hidden rounded bg-slate-100">
        <View className="h-full bg-primary-default" style={{ width: `${progress}%` }} />
      </View>
      <Label
        labelText={`${currentStep}/${totalSteps}`}
        additionalLabelStyle="text-center text-[10px] font-inter-medium text-primary-default"
        additionalContainerStyle="ml-2"
      />
    </View>
  );
};

export default ProgressBar;
