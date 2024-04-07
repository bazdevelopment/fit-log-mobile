import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import LanguagePreference from "../../components/language-preferrence/language-preference";
import { useThemeScheme } from "../../hooks/use-theme-scheme/use-theme-scheme";
import { useTodoMutation } from "../../mutations/use-todo-mutation/use-todo-mutation";
import { useTodoQuery } from "../../queries/hooks/use-todo-query/use-todo-query";

export const Test = () => {
  const { data, isLoading, isError } = useTodoQuery();

  const { mutate } = useTodoMutation(1, {});

  return (
    <View className="mb-10 flex flex-row justify-center">
      <TouchableOpacity onPress={() => mutate()} accessibilityRole="button">
        <Text>
          <Trans>Press to trigger todo mutation</Trans>
        </Text>
        <Link href="/onboarding">About</Link>
      </TouchableOpacity>
    </View>
  );
};

i18n.loadAndActivate({ locale: "ro", messages: undefined });

export default function Root() {
  const { toggleColorScheme } = useThemeScheme();
  return (
    <View className="flex-1 bg-white">
      <LanguagePreference />
      <Test />
      <TouchableOpacity accessibilityRole="button" onPress={toggleColorScheme}>
        <Text>Toggle light/dark mode</Text>
      </TouchableOpacity>
    </View>
  );
}
