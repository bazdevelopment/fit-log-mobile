import { MaterialIcons } from "@expo/vector-icons";
import { Alert, TextInput as RNTextInput, View } from "react-native";

import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";
import InputIcons from "../input-icons";
import { ICustomTextInputProps } from "./CustomInput.interface";
/**
 * Custom input component
 */
const CustomInput = ({
  accessibilityLabel,
  label,
  labelInfo,
  accessibilityHint,
  placeholder,
  ref,
  className,
  onChangeText,
  onReset,
  error,
  value,
  maxLength,
  keyboardType,
  returnKeyType,
  autoFocus,
  placeholderTextColor,
  onFocus,
  type,
  showPassword,
  onToggleShowPassword,
  multiline = false,
  defaultValue,
  isEditable = false,
  onBlur,
}: ICustomTextInputProps) => {
  return (
    <View className="flex-col">
      <View className="mb-1 flex-row items-center">
        {!!label && (
          <Label labelText={label} additionalLabelStyle="text-base mr-1 tracking-wide font-primary-semi-bold" />
        )}
        {!!labelInfo && (
          <Icon
            iconElement={<MaterialIcons name="info" size={22} color={Colors.information} />}
            withBackground={false}
            onPress={() => Alert.alert(labelInfo)}
          />
        )}
      </View>
      <View className={`flex-row rounded-lg bg-slate-100 ${error ? "border-[1.5px] border-red-500" : ""}`}>
        <View className={type ? "mr-2" : ""}>
          <InputIcons position="front" type={type} inputValue={value} handleResetInput={onReset} />
        </View>
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
        <InputIcons
          position="end"
          type={type}
          showPassword={showPassword}
          toggleShowPassword={onToggleShowPassword}
          handleResetInput={onReset}
          inputValue={value}
          additionalInnerIconStyle="p-0"
        />
      </View>

      {!!error && (
        <Label
          labelText={error}
          additionalLabelStyle="text-red-500 font-primary-bold text-sm"
          additionalContainerStyle="mt-1"
          icon={<MaterialIcons name="error" size={22} color={Colors.error} />}
        />
      )}
      {/* </View> */}
    </View>
  );
};

export default CustomInput;
