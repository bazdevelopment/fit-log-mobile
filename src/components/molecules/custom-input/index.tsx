import { TextInput as RNTextInput } from "react-native";

import { ICustomTextInputProps } from "./CustomInput.interface";

const CustomInput = ({
  accessibilityLabel,
  accessibilityHint,
  placeholder,
  ref,
  className,
  onChangeText,
  value,
  maxLength,
  keyboardType,
  returnKeyType,
  autoFocus,
  placeholderTextColor,
  onFocus,
  type,
  showPassword,
  multiline = false,
  defaultValue,
  isEditable = false,
  onBlur,
}: ICustomTextInputProps) => {
  return (
    <RNTextInput
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      placeholder={placeholder}
      ref={ref}
      onBlur={onBlur}
      className={className}
      onChangeText={onChangeText}
      value={value}
      defaultValue={defaultValue}
      maxLength={maxLength}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      autoFocus={autoFocus}
      placeholderTextColor={placeholderTextColor}
      onFocus={onFocus}
      autoCapitalize="none"
      secureTextEntry={type === "password" && !showPassword}
      spellCheck
      autoCorrect
      multiline={multiline}
      editable={isEditable}
    />
  );
};

export default CustomInput;
