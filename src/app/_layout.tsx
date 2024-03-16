// Import your global CSS file
import "../../global.css";

// import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
// import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { ThemeProvider as NavigationTeamProvider } from "@react-navigation/native";
import { Theme as ITheme } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
// import { useNavigationContainerRef } from "expo-router";
import { Stack } from "expo-router/stack";

import { LanguageContextProvider } from "../context/language-context/language-context";
import { ThemeProvider } from "../context/theme-context/theme-context";
import { useThemeScheme } from "../hooks/use-theme-scheme/use-theme-scheme";
import I18nProvider from "../locale/i18n-provider";
import { queryClient } from "../queries/query-client/query-client";
import { NAV_THEME } from "../styles/theme";

const LIGHT_THEME: ITheme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: ITheme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export default function AppLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
  });

  /**
   * TODO to be enabled later on
 *    const navigationRef = useNavigationContainerRef();
   useReactNavigationDevTools(navigationRef);
   useReactQueryDevTools(queryClient);
 */

  const { isDarkColorScheme } = useThemeScheme();

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationTeamProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <ThemeProvider>
          <LanguageContextProvider>
            <I18nProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </I18nProvider>
          </LanguageContextProvider>
        </ThemeProvider>
      </NavigationTeamProvider>
    </QueryClientProvider>
  );
}
