import { StyleSheet } from "react-native";

import { Colors } from "../../styles/colors";

export const getTabBarStyles = (isDarkColorScheme: boolean) =>
  StyleSheet.create({
    tabBarContainer: {
      borderRadius: 20,
      borderLeftColor: isDarkColorScheme ? Colors.blackPantone : Colors.lightGrey,
      borderRightColor: isDarkColorScheme ? Colors.blackPantone : Colors.lightGrey,
      borderRightWidth: isDarkColorScheme ? 0.5 : 1.5,
      borderLeftWidth: isDarkColorScheme ? 0.5 : 1.5,
      left: -1,
      right: -1,
      bottom: -1,
      position: "absolute",
      height: 85,
      paddingTop: 5,
      borderTopWidth: 1.25,
    },
  });
