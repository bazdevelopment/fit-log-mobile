import React from "react";
import { TextInputProps } from "react-native";

import { TInputType } from "../../../constants/input-type";

export interface ICustomTextInputProps extends TextInputProps {
  label?: string;
  labelInfo?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  placeholder?: string;
  ref?: React.Ref<any>;
  onReset?: () => void;
  error?: string;
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
  onToggleShowPassword?: () => void;
  type: TInputType;
  showPassword?: boolean;
  multiline?: boolean;
  isEditable?: boolean;
}
