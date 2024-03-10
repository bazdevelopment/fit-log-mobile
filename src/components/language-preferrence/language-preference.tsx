import { Button, Text, View } from "react-native";

import { useLanguage } from "../../context/language-context/language-context";

const LanguagePreference = () => {
  const { language, onChangeLanguagePreference } = useLanguage();

  return (
    <View className="flex justify-center items-center flex-column mt-20">
      <Text>Current Language: {language}</Text>
      <Button title="Set English" onPress={() => onChangeLanguagePreference("en")} />
      <Button title="Set romanian" onPress={() => onChangeLanguagePreference("ro")} />
    </View>
  );
};

export default LanguagePreference;
