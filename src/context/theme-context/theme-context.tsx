import { THEME } from "enums/theme";
import { createContext, useContext } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "styles/theme";
import { ITheme } from "types/theme.interface";

import { IThemeProviderProps } from "./theme-context.interface";

export const ThemeContext = createContext<ITheme>(lightTheme);

/**
 * The `ThemeProvider` component is a React functional component used for providing theme context to its child components. It dynamically determines the theme based on the color scheme of the user's device using the `useColorScheme` hook, and then sets up the theme context using the `ThemeContext.Provider`.
 */
export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const theme = useColorScheme();

  const themeValue = getTheme(!theme ? THEME.LIGHT : theme);

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};
/**
 * Function used to get the correct theme schema
 */
function getTheme(theme: ColorSchemeName) {
  return theme === THEME.LIGHT ? lightTheme : darkTheme;
}
/* The `useTheme` function is a custom React hook used for accessing the current theme within a React application. It utilizes the `useContext` hook to retrieve the theme context provided by a `ThemeContext` provider.  */
export const useTheme = () => useContext(ThemeContext);
