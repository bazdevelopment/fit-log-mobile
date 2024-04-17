import { useRef } from "react";
import { Animated, View } from "react-native";

import Label from "../label";
import { IProgressBar } from "./ProgressBar.interface";

/**
 *  Component which displays a progress bar which is filed dynamically depending on the number of steps
 */
const ProgressBar = ({ currentStep, totalSteps }: IProgressBar) => {
  const progress = useRef(new Animated.Value(0)).current;

  Animated.timing(progress, {
    toValue: (currentStep / totalSteps) * 100,
    duration: 400 /* Adjust the duration as needed */,
    useNativeDriver: false,
  }).start();

  return (
    <View className="flex-1 flex-row items-center">
      <View className=" ml-2 h-2 flex-1 flex-row items-center overflow-hidden rounded bg-slate-100">
        <Animated.View
          className="h-full bg-primary-default"
          style={{
            width: progress.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        />
      </View>
      <Label
        labelText={`${currentStep}/${totalSteps}`}
        additionalLabelStyle="text-center text-[10px] font-primary text-primary-default"
        additionalContainerStyle="ml-2"
      />
    </View>
  );
};

export default ProgressBar;
