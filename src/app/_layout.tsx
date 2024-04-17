// Import your global CSS file
import "../../global.css";

// import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
// import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { Theme as ITheme, ThemeProvider as NavigationTeamProvider } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

import { STATUS_BAR_STYLE } from "../constants/status-bar";
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

export const unstable_settings = {
  initialRouteName: "onboarding/index",
};
export default function AppLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Primary-Regular": require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    "Primary-Bold": require("../assets/fonts/HankenGrotesk-Bold.ttf"),
    "Primary-Light": require("../assets/fonts/HankenGrotesk-Light.otf"),
    "Primary-Italic": require("../assets/fonts/HankenGrotesk-Italic.ttf"),
    "Primary-Bold-Italic": require("../assets/fonts/HankenGrotesk-BoldItalic.ttf"),
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
              <StatusBar style={isDarkColorScheme ? STATUS_BAR_STYLE.light : STATUS_BAR_STYLE.dark} />
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
              </Stack>
            </I18nProvider>
          </LanguageContextProvider>
        </ThemeProvider>
      </NavigationTeamProvider>
    </QueryClientProvider>
  );
}
