import { Button, Text, View } from "react-native";

import { useLanguage } from "../../context/language-context/language-context";

const LanguagePreference = () => {
  const { language, onChangeLanguagePreference } = useLanguage();

  return (
    <View className="flex-column mt-20 flex items-center justify-center">
      <Text>Current Language: {language}</Text>
      <Button title="Set English" onPress={() => onChangeLanguagePreference("en")} />
      <Button title="Set romanian" onPress={() => onChangeLanguagePreference("ro")} />
    </View>
  );
};

export default LanguagePreference;
