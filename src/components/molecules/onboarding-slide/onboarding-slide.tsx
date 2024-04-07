/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { Image, View } from "react-native";
import { twMerge } from "tailwind-merge";

import { DeviceDimensions } from "../../../constants/device-dimensions";
import { isOdd } from "../../../utilities/is-odd";
import Label from "../../atoms/label/label";
import { IOnboardingSlide } from "./onboarding-slide.interface";

/**
 *  Slide that display only a title, a description and an image
 */
const OnboardingSlide = ({ title, description, image }: IOnboardingSlide) => {
  return (
    <View className="items-center justify-center" style={{ width: DeviceDimensions.deviceWidth }}>
      <Image source={image} className="h-[400px] w-full" resizeMode="contain" />
      <View className="mt-6 flex-row flex-wrap justify-center px-4">
        {title.split(" ").map((word: string, index: number) => {
          const color = isOdd(index) ? "text-primary-default" : "text-gray-800";
          const style = twMerge("font-inter-semi-bold", color);
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
