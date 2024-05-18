import { View } from "react-native";

import CodeInput from "../code-input";
import { useOtpCodeInputs } from "./hooks/use-opt-code-inputs.tsx/use-otp-code-inputs";
import { IOtpCodeInputs } from "./OtpCodeInputs.interface";

/**
 * Component used to display a number of input boxed in order to validate the OTP code
 */
const OtpCodeInputs = ({ numberOfCodeInputs, onComplete, animationValue }: IOtpCodeInputs) => {
  const { otpCode, isOtpCodeIncomplete, errorRef, successRef, currentActiveIndex, handleTextChange, inputsRef } =
    useOtpCodeInputs({
      numberOfCodeInputs,
      onComplete,
    });

  return (
    <View className="flex-row justify-center">
      {otpCode.map((digit: string, index: number) => (
        <CodeInput
          key={index}
          index={index}
          isOtpCodeIncomplete={isOtpCodeIncomplete}
          handleTextChange={handleTextChange}
          digit={digit}
          error={!!errorRef.current}
          success={!!successRef.current}
          animationValue={animationValue}
          ref={inputsRef.current[index]}
          inputsRef={inputsRef}
          currentActiveIndex={currentActiveIndex}
        />
      ))}
    </View>
  );
};
export default OtpCodeInputs;
