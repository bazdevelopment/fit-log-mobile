import { useLanguage } from "context/language-context/language-context";
import { Button, Text, View } from "react-native";

const LanguagePreference = () => {
  const { language, onChangeLanguagePreference } = useLanguage();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Current Language: {language}</Text>
      <Button title="Set English" onPress={() => onChangeLanguagePreference("en")} />
      <Button title="Set romanian" onPress={() => onChangeLanguagePreference("ro")} />
    </View>
  );
};

export default LanguagePreference;
