import { ForwardedRef, MutableRefObject, RefObject } from "react";
import { Animated, TextInput } from "react-native";

export type TextInputRef = RefObject<TextInput>[];

export interface ICodeInput {
  index: number;
  currentActiveIndex: number;
  handleTextChange: (text: string, index: number) => void;
  digit: string;
  error: boolean;
  success: boolean;
  animationValue: Animated.Value;
  ref: ForwardedRef<TextInput>;
  inputsRef: MutableRefObject<TextInputRef>;
  isOtpCodeIncomplete: boolean;
}
