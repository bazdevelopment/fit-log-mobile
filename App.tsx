import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import { QueryClientProvider } from "@tanstack/react-query";
import LanguagePreference from "components/language-preferrence/language-preference";
import { LanguageContextProvider } from "context/language-context/language-context";
import { ThemeProvider, useTheme } from "context/theme-context/theme-context";
import { StatusBar } from "expo-status-bar";
import I18nProvider from "locale/i18n-provider";
import { useTodoMutation } from "mutations/use-todo-mutation/use-todo-mutation";
import { useTodoQuery } from "queries/hooks/use-todo-query/use-todo-query";
import { queryClient } from "queries/query-client/query-client";
import { Text, TouchableOpacity, View } from "react-native";
import { atoms } from "styles/atoms";

export const Test = () => {
  const { data, isLoading, isError } = useTodoQuery();

  const { mutate } = useTodoMutation(1, {});

  return (
    <View style={[atoms.justify_center, atoms.flex_row, atoms.mt_5xl]}>
      <TouchableOpacity onPress={() => mutate()} accessibilityRole="button">
        <Text>
          <Trans>Press to trigger todo mutation</Trans>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

i18n.loadAndActivate({ locale: "ro", messages: undefined });

export default function App() {
  useReactQueryDevTools(queryClient);

  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageContextProvider>
          <I18nProvider>
            <LanguagePreference />

            <Test />
            <View style={[atoms.flex_1, atoms.align_center]}>
              <Text>
                <Trans>This is the first build for FitLog app!</Trans>
              </Text>
              <StatusBar style="auto" />
            </View>
          </I18nProvider>
        </LanguageContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
