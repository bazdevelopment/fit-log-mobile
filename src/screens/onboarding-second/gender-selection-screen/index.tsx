import { useState } from "react";
import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import GenderButton from "../../../components/atoms/gender-button";
import Label from "../../../components/atoms/label";
import { GENDER, TGender } from "../../../constants/gender";
import { IGenderSelectionScreen } from "./GenderSelectionScreen.interface";

/**
 * Screen used for selecting the gender
 */
export default function GenderSelectionScreen({ goToNext, onboardingData }: IGenderSelectionScreen) {
  const [gender, setGender] = useState<TGender>(onboardingData.gender || GENDER.MALE);

  return (
    <>
      <View className="flex-1 items-center">
        <Label labelText="Tell us about yourself!" as="h2" additionalLabelStyle="font-primary-bold mb-4" />
        <Label
          labelText="To give you a better experience we need to know your gender"
          as="h5"
          additionalLabelStyle="text-gray-500 px-10 text-center"
        />

        <View className="mt-20 h-[280px] flex-col justify-between">
          <GenderButton
            onPress={() => setGender(GENDER.MALE)}
            gender={GENDER.MALE}
            isSelected={gender === GENDER.MALE}
          />
          <GenderButton
            onPress={() => setGender(GENDER.FEMALE)}
            gender={GENDER.FEMALE}
            isSelected={gender === GENDER.FEMALE}
          />
        </View>
      </View>
      <View className="bottom-10 px-10">
        <Button buttonText="Continue" onPress={() => goToNext({ gender })} variant="primary" />
      </View>
    </>
  );
}
