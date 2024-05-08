/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

import { DEVICE_DIMENSIONS } from "../../../constants/device-dimensions";
import { isOdd } from "../../../utilities/is-odd";
import Image from "../../atoms/image";
import Label from "../../atoms/label";
import { IOnboardingSlide } from "./OnboardingSlide.interface";

/**
 *  Slide that display only a title, a description and an image
 */
const OnboardingSlide = ({ title, description, image }: IOnboardingSlide) => {
  return (
    <View className="items-center justify-center" style={{ width: DEVICE_DIMENSIONS.DEVICE_WIDTH }}>
      <Image source={image} className="h-[400px] w-full" contentFit="scale-down" />
      <View className="mt-6 flex-row flex-wrap justify-center px-4">
        {title.split(" ").map((word: string, index: number) => {
          const color = isOdd(index) ? "text-primary-default" : "text-gray-800";
          const style = twMerge("font-primary-bold", color);
          return <Label key={`${index}-${word.length}`} labelText={word + " "} additionalLabelStyle={style} as="h2" />;
        })}
        <Label
          labelText={description}
          additionalContainerStyle="mt-4 px-10"
          additionalLabelStyle="text-center text-gray-600"
          as="h5"
        />
      </View>
    </View>
  );
};

export default OnboardingSlide;
