import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, TextInput as RNTextInput, View } from "react-native";

import { INPUT_TYPE } from "../../../constants/input-type";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon/icon";
import Label from "../../atoms/label/label";
import InputIcons from "../input-icons/input-icons";
import { ICustomTextInput } from "./custom-text-input.interface";

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

  const handleChangeText = (text: string) => {
    setInputValue(text);
    if (!text && type === INPUT_TYPE.password) toggleShowPassword();
  };

  const handleResetInput = () => {
    setInputValue("");
  };

  return (
    <View>
      <View className="mb-1 flex-row items-center">
        {!!label && <Label labelText={label} additionalLabelStyle="text-[13px] mr-1 tracking-wide" />}
        {!!labelInfo && (
          <Icon
            iconElement={<MaterialIcons name="info" size={22} color={Colors.information} />}
            withBackground={false}
            onPress={() => Alert.alert(labelInfo)}
          />
        )}
      </View>

      <View
        className={`flex-row items-center rounded-lg bg-gray-100 px-2 py-1.5 ${error ? "border-[1.5px] border-red-500" : ""}`}
      >
        <View className={type ? "mr-2" : ""}>
          <InputIcons position="front" type={type} inputValue={inputValue} handleResetInput={handleResetInput} />
        </View>
        <RNTextInput
          className="h-9 flex-1 font-primary tracking-wide text-gray-700"
          value={inputValue}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.grey}
          autoCapitalize="none"
          secureTextEntry={type === INPUT_TYPE.password && !showPassword}
          spellCheck={true}
          autoCorrect={true}
        />
        <InputIcons
          position="end"
          type={type}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          handleResetInput={handleResetInput}
          inputValue={inputValue}
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
