import { useColorScheme as useNativewindColorScheme } from "nativewind";

import { THEME } from "../../enums/theme";
/**
 * This custom hook provides functionality for managing the color scheme of a web application, integrating with the NativeWind library.
 * It enables the easy toggling between light and dark color schemes.

 */
export const useThemeScheme = () => {
  const { colorScheme, setColorScheme } = useNativewindColorScheme();
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };
  return {
    colorScheme: colorScheme ?? THEME.LIGHT,
    isDarkColorScheme: colorScheme === THEME.DARK,
    setColorScheme,
    toggleColorScheme,
  };
};
