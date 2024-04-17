import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, TextInput as RNTextInput, View } from "react-native";

import { INPUT_TYPE } from "../../../constants/input-type";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";
import InputIcons from "../input-icons";
import { ICustomTextInput } from "./CustomTextInput.interface";

/**
 *CustomTextInput Component
 The CustomTextInput component is a customizable input field that supports various features such as labels, placeholders, input types, error handling, and additional label information.
 */
const CustomTextInput = ({ label, labelInfo, placeholder, type, error }: ICustomTextInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const hideShowPassword = () => {
    setShowPassword(false);
  };

  const handleChangeText = (text: string) => {
    setInputValue(text.trim());
    if (!text && type === INPUT_TYPE.PASSWORD) hideShowPassword();
  };

  const handleResetInput = () => {
    setInputValue("");
  };

  return (
    <View>
      <View className="mb-1 flex-row items-center">
        {!!label && (
          <Label labelText={label} additionalLabelStyle="text-md mr-1 tracking-wide font-primary-semi-bold" />
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
          <InputIcons position="front" type={type} inputValue={inputValue} handleResetInput={handleResetInput} />
        </View>
        <RNTextInput
          className={`h-12 flex-1 pb-2  pl-3 font-primary text-lg tracking-wide text-gray-700 ${type === "password" && !inputValue ? "pt-3" : ""} `}
          value={inputValue}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.grey}
          autoCapitalize="none"
          secureTextEntry={type === INPUT_TYPE.PASSWORD && !showPassword}
          spellCheck
          autoCorrect
          multiline={false}
        />
        <InputIcons
          position="end"
          type={type}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          handleResetInput={handleResetInput}
          inputValue={inputValue}
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
    </View>
  );
};

export default CustomTextInput;
