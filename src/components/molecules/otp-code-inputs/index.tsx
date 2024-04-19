import { View } from "react-native";

import { useShakeAnimation } from "../../../hooks/use-shake-animation/use-shake-animation";
import Label from "../../atoms/label";
import CodeInput from "../code-input";
import { useOtpCodeInputs } from "./hooks/use-opt-code-inputs.tsx/use-otp-code-inputs";
import { IOtpCodeInputs } from "./OtpCodeInputs.interface";

/**
 * Component used to display a number of input boxed in order to validate the OTP code
 */
const OtpCodeInputs = ({ numberOfCodeInputs, onComplete }: IOtpCodeInputs) => {
  const { triggerShake, animationValue } = useShakeAnimation();

  const { otpCode, errorRef, currentActiveIndex, handleTextChange, inputsRef } = useOtpCodeInputs({
    numberOfCodeInputs,
    onComplete,
    triggerShake,
  });

  return (
    <>
      {!!errorRef.current && <Label labelText={errorRef.current} as="h5" additionalLabelStyle="color-red-500" />}
      <View className="flex-row justify-center">
        {otpCode.map((digit: string, index: number) => (
          <CodeInput
            key={index}
            index={index}
            handleTextChange={handleTextChange}
            digit={digit}
            error={!!errorRef.current}
            animationValue={animationValue}
            ref={inputsRef.current[index]}
            inputsRef={inputsRef}
            currentActiveIndex={currentActiveIndex}
          />
        ))}
      </View>
    </>
  );
};
export default OtpCodeInputs;
