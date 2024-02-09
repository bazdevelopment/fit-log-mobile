import { THEME } from "enums/theme";
import { createContext, useContext } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "styles/theme";
import { ITheme } from "types/theme.interface";

import { IThemeProviderProps } from "./theme-context.interface";

export const ThemeContext = createContext<ITheme>(lightTheme);

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const theme = useColorScheme();

  const themeValue = getTheme(!theme ? THEME.LIGHT : theme);

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};

function getTheme(theme: ColorSchemeName) {
  return theme === THEME.LIGHT ? lightTheme : darkTheme;
}

export const useTheme = () => useContext(ThemeContext);
