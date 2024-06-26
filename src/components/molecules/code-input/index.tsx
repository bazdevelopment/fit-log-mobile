import { forwardRef } from "react";
import { Animated, TextInput } from "react-native";

import { Colors } from "../../../styles/colors";
import { ICodeInput } from "./CodeInput.interface";

/**
 * Component used to display an animate text box input used for validate the otp code
 */
const CodeInput = forwardRef<TextInput, ICodeInput>((props, ref) => {
  const {
    index,
    currentActiveIndex,
    handleTextChange,
    digit,
    error,
    animationValue,
    success,
    inputsRef,
    isOtpCodeIncomplete,
  } = props;

  return (
    <Animated.View
      key={index}
      style={{
        transform: [{ translateX: animationValue }],
      }}
    >
      <TextInput
        accessibilityLabel={`Code digit input ${index + 1}`}
        accessibilityHint="Enter the digit here"
        placeholder={currentActiveIndex !== index ? "-" : ""}
        ref={ref}
        className={`m-1 h-12 w-14 rounded-xl bg-slate-200 text-center font-primary text-xl ${error ? "border-2 border-red-500" : ""} ${success ? "border-2 border-green-600" : ""}`}
        onChangeText={text => handleTextChange(text, index)}
        value={digit}
        maxLength={1}
        keyboardType="number-pad"
        returnKeyType="default"
        autoFocus={index === 0}
        placeholderTextColor={Colors.blackPantone}
        onFocus={() => {
          if (index !== 0 && isOtpCodeIncomplete) {
            inputsRef.current[0].current?.focus();
          }
        }}
      />
    </Animated.View>
  );
});

export default CodeInput;
