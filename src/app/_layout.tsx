import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { QueryClientProvider } from "@tanstack/react-query";
import { useNavigationContainerRef } from "expo-router";
import { Stack } from "expo-router/stack";
import { Text, View } from "react-native";

import { LanguageContextProvider } from "../context/language-context/language-context";
import { ThemeProvider } from "../context/theme-context/theme-context";
import I18nProvider from "../locale/i18n-provider";
import { queryClient } from "../queries/query-client/query-client";

export default function AppLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageContextProvider>
          <I18nProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </I18nProvider>
        </LanguageContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
