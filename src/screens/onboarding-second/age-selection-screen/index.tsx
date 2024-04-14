import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label/label";
import WheelPicker from "../../../components/organisms/wheel-picker/wheel-picker";
import { WHEEL_PICKER_OPTIONS } from "../../../constants/wheel-picker-options";
import { generateCustomRangeArray } from "../../../utilities/generatee-cusom-range-array";
import { IAgeSelectionScreen } from "./age-selection-screen.interface";

/**
 * Component used to display the selection age screen
 */

const DEFAULT_AGE = 25;
export default function AgeSelectionScreen({ goToNext, onboardingData }: IAgeSelectionScreen) {
  const [age, setAge] = useState(onboardingData.age || DEFAULT_AGE);

  return (
    <>
      <View className="flex-1 items-center">
        <Label labelText="How old are you?" as="h2" additionalLabelStyle="font-bold font-inter-semi-bold mb-4" />
        <Label
          labelText="This helps us to create your personalized plan"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
        <WheelPicker
          selectedIndex={age}
          values={generateCustomRangeArray(
            WHEEL_PICKER_OPTIONS.DEFAULT_START_RANGE_INDEX_AGE,
            WHEEL_PICKER_OPTIONS.DEFAULT_END_RANGE_INDEX_AGE
          )}
          onChange={(value: number) => setAge(value)}
        />
      </View>

      <View className="h-28 rounded-xl bg-white px-10 pt-5 shadow">
        <Button buttonText="Next" onPress={() => goToNext({ age })} variant="primary" />
      </View>
    </>
  );
}
