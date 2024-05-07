import React from "react";
import { TextInputProps } from "react-native";

export interface ICustomTextInputProps extends TextInputProps {
  accessibilityLabel?: string;
  accessibilityHint?: string;
  placeholder?: string;
  ref?: React.Ref<any>;
  className?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  keyboardType?: TextInputProps["keyboardType"];
  returnKeyType?: TextInputProps["returnKeyType"];
  autoFocus?: boolean;
  placeholderTextColor?: string;
  onFocus?: () => void;
  type?: string;
  showPassword?: boolean;
  multiline?: boolean;
  isEditable?: boolean;
}
