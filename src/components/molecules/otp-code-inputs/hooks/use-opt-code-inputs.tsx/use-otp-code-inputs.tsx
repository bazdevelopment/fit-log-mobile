import { createRef, useCallback, useRef, useState } from "react";
import { TextInput } from "react-native";

import { TextInputRef } from "../../../code-input/CodeInput.interface";
import { IUseOtpCodeInputs } from "../../OtpCodeInputs.interface";

/**
 * The useOtpCodeInputs custom hook manages the state and behavior of the OTP code inputs.
 * It handles inputs changes, error checking, and focus management for a set of OTP code input fields.
 */
export const useOtpCodeInputs = ({ numberOfCodeInputs, onComplete }: IUseOtpCodeInputs) => {
  const [otpCode, setCode] = useState(new Array(numberOfCodeInputs).fill(""));
  const errorRef = useRef("");
  const successRef = useRef("");
  const inputsRef = useRef<TextInputRef>(otpCode.map(() => createRef<TextInput>()));
  const currentActiveIndex = otpCode.findIndex(value => value === "");

  const resetCode = () => setCode(new Array(numberOfCodeInputs).fill(""));
  const resetError = () => (errorRef.current = "");
  const resetSuccessMsg = () => (successRef.current = "");

  const focusNextInput = (index: number) => {
    if (index < numberOfCodeInputs - 1) {
      inputsRef.current[index + 1].current?.focus();
      Boolean(errorRef.current) && resetError();
      Boolean(successRef.current) && resetSuccessMsg();
    } else {
      // inputsRef.current[0].current?.focus();
      Boolean(errorRef.current) && resetCode();
    }
  };

  const validateOtpCode = useCallback((codeArray: string[]) => {
    const isComplete = codeArray.every(digit => digit.trim() !== "");
    if (isComplete) {
      errorRef.current = "";
      onComplete(codeArray.join(""))
        .then(data => {
          if (data.success) {
            successRef.current = data.message;
          }
        })
        .catch(error => {
          errorRef.current = error.message;
          inputsRef.current[0].current?.focus();
          resetCode();
        });
    }
  }, []);

  const handleTextChange = (filledCode: string, index: number) => {
    if (isOtpComplete(otpCode)) return;
    const newUpdatedCode = updateOtpCode(otpCode, filledCode, index);

    setCode(newUpdatedCode);
    if (isOtpComplete(newUpdatedCode)) {
      validateOtpCode(newUpdatedCode);
    }
    filledCode !== "" && focusNextInput(index);
  };

  return {
    otpCode,
    isOtpCodeIncomplete: otpCode.every(digit => digit === ""),
    errorRef,
    successRef,
    currentActiveIndex,
    handleTextChange,
    inputsRef,
  };
};

// Helper function to check if the OTP is complete
const isOtpComplete = (code: string[]) => {
  return code.every(digit => digit !== "");
};

// Helper function to update the OTP code at a specific index
const updateOtpCode = (code: string[], value: string, index: number) => {
  const newCode = [...code];
  newCode[index] = value;
  return newCode;
};
