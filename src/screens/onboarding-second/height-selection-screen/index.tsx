import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label";
import WheelPicker from "../../../components/organisms/wheel-picker";
import { UNIT } from "../../../constants/unit";
import { WHEEL_PICKER_OPTIONS } from "../../../constants/wheel-picker-options";
import { generateCustomRangeArray } from "../../../utilities/generate-custom-range-array";
import { IHeightSelectionScreen } from "./HeightSelectionScreen.interface";

/**
 * Component used to display the height selection screen
 */
const DEFAULT_HEIGHT = 150;
export default function HeightSelectionScreen({ goToNext, onboardingData }: IHeightSelectionScreen) {
  const [height, setHeight] = useState(onboardingData.height || DEFAULT_HEIGHT);

  return (
    <>
      <View className="flex-1 items-center">
        <Label labelText="What's your height?" as="h2" additionalLabelStyle="font-bold font-primary-bold mb-4" />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
        <WheelPicker
          selectedIndex={height}
          values={generateCustomRangeArray(
            WHEEL_PICKER_OPTIONS.DEFAULT_START_RANGE_INDEX_HEIGHT,
            WHEEL_PICKER_OPTIONS.DEFAULT_END_RANGE_INDEX_HEIGHT
          )}
          onChange={(value: number) => setHeight(value)}
          unit={UNIT.CM}
        />
      </View>
      <Button
        buttonText="Continue"
        onPress={() => goToNext({ height })}
        variant="primary"
        additionalContainerStyle="h-28 rounded-xl px-10 pt-5"
      />
    </>
  );
}
