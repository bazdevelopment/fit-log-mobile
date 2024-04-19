import { createRef, useRef, useState } from "react";
import { TextInput } from "react-native";

import { TextInputRef } from "../../../code-input/CodeInput.interface";
import { IUseOtpCodeInputs } from "../../OtpCodeInputs.interface";

/**
 * The useOtpCodeInputs custom hook manages the state and behavior of the OTP code inputs.
 * It handles inputs changes, error checking, and focus management for a set of OTP code input fields.
 */
export const useOtpCodeInputs = ({ numberOfCodeInputs, onComplete, triggerShake }: IUseOtpCodeInputs) => {
  const [otpCode, setCode] = useState(new Array(numberOfCodeInputs).fill(""));
  const errorRef = useRef("");
  const inputsRef = useRef<TextInputRef>(otpCode.map(() => createRef<TextInput>()));

  const currentActiveIndex = otpCode.findIndex(value => value === "");

  const resetCode = () => setCode(new Array(numberOfCodeInputs).fill(""));

  const resetError = () => (errorRef.current = "");

  const focusNextInput = (index: number) => {
    if (index < numberOfCodeInputs - 1) {
      inputsRef.current[index + 1].current?.focus();
      Boolean(errorRef.current) && resetError();
    } else {
      inputsRef.current[0].current?.focus();
      Boolean(errorRef.current) && resetCode();
    }
  };

  const validateOtpCode = (codeArray: string[]) => {
    const isComplete = codeArray.every(digit => digit.trim() !== "");
    if (isComplete) {
      try {
        errorRef.current = "";
        onComplete(codeArray.join(""));
      } catch (error: any) {
        errorRef.current = error.message;
        triggerShake();
      }
    }
  };

  const handleTextChange = (filledCode: string, index: number) => {
    const newCode = [...otpCode];
    newCode[index] = filledCode;
    setCode(newCode);

    if (filledCode) {
      focusNextInput(index);
    }
    validateOtpCode(newCode);
  };

  return { otpCode, errorRef, currentActiveIndex, handleTextChange, inputsRef };
};
