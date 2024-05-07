// Import your global CSS file
import "../../global.css";

// import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
// import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { Theme as ITheme, ThemeProvider as NavigationTeamProvider } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { STATUS_BAR_STYLE } from "../constants/status-bar";
import { LanguageContextProvider } from "../context/language-context/language-context";
import { ScrollContextProvider } from "../context/scroll-context";
import { ThemeProvider } from "../context/theme-context/theme-context";
import { WorkoutContextProvider } from "../context/workout-context";
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

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    "Primary-Regular": require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    "Primary-Medium": require("../assets/fonts/HankenGrotesk-Medium.otf"),
    "Primary-Bold": require("../assets/fonts/HankenGrotesk-Bold.ttf"),
    "Primary-Semi-Bold": require("../assets/fonts/HankenGrotesk-SemiBold.otf"),
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

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollContextProvider>
        <NavigationTeamProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
          <ThemeProvider>
            <LanguageContextProvider>
              <WorkoutContextProvider>
                <I18nProvider>
                  <StatusBar style={isDarkColorScheme ? STATUS_BAR_STYLE.LIGHT : STATUS_BAR_STYLE.DARK} />
                  <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen
                      name="modal-stack"
                      options={{ headerShown: false, presentation: "modal", gestureEnabled: false }}
                    />
                  </Stack>
                </I18nProvider>
              </WorkoutContextProvider>
            </LanguageContextProvider>
          </ThemeProvider>
        </NavigationTeamProvider>
      </ScrollContextProvider>
    </QueryClientProvider>
  );
}
