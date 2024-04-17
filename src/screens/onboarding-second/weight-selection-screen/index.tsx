import { useState } from "react";
import { View } from "react-native";
import { RulerPicker } from "react-native-ruler-picker";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label";
import { UNIT } from "../../../constants/unit";
import { Colors } from "../../../styles/colors";
import { IWeightSelectionScreen } from "./WeightSelectionScreen.interface";
import { styles } from "./WeightSelectionScreen.styles";

/**
 * Component used for selecting the user's weight
 */
const DEFAULT_WEIGHT = 75;
export default function WeightSelectionScreen({ goToNext, onboardingData }: IWeightSelectionScreen) {
  const [weight, setWeight] = useState(onboardingData.weight || DEFAULT_WEIGHT);

  return (
    <>
      <View className="flex-1 items-center">
        <Label labelText="What's your weight?" as="h2" additionalLabelStyle="font-bold font-primary-bold mb-4" />
        <Label
          labelText="You can also change it later"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />
        <View className="mt-20">
          <RulerPicker
            min={40}
            max={180}
            height={300}
            step={1}
            fractionDigits={0}
            initialValue={weight}
            onValueChangeEnd={(value: string) => setWeight(Number(value))}
            unit={UNIT.KG}
            valueTextStyle={styles.rullerText}
            unitTextStyle={styles.rullerUnit}
            indicatorColor={Colors.primary}
            shortStepColor={Colors.primary}
            longStepColor={Colors.primary}
          />
        </View>
      </View>
      <Button
        buttonText="Continue"
        onPress={() => goToNext({ weight })}
        variant="primary"
        additionalContainerStyle="h-28 rounded-xl px-10 pt-5"
      />
    </>
  );
}
