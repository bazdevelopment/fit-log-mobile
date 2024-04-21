import { ReactNode } from "react";
import { View } from "react-native";

import { useThemeScheme } from "../../hooks/use-theme-scheme/use-theme-scheme";
import { themes_tw } from "../../styles/theme";

/**
 * The `ThemeProvider` component is a React functional component used for providing theme context to its child components. It dynamically determines the theme based on the color scheme of the user's device using the `useColorScheme` hook, and then sets up the theme context using the `ThemeContext.Provider`.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { colorScheme } = useThemeScheme();

  return (
    <View style={themes_tw[colorScheme]} className="flex-1">
      {children}
    </View>
  );
};
