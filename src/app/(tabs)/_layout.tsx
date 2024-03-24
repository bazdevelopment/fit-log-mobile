/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from "expo-router";

import TabBarIcon from "../../components/atoms/tab-bar-icon/tab-bar-icon";
import { useThemeScheme } from "../../hooks/use-theme-scheme/use-theme-scheme";
import { tabScreens } from "../../navigation/tabs";
import { getTabBarStyles } from "../../navigation/tabs/tabs.styles";
import { Colors } from "../../styles/colors";

export default function TabLayout() {
  const { isDarkColorScheme } = useThemeScheme();
  const styles = getTabBarStyles(isDarkColorScheme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        /**TODO: consider to create a custom top navigation bar */
        header: () => null,
        tabBarStyle: styles.tabBarContainer,
      }}
    >
      {tabScreens.map((screen, index) => (
        <Tabs.Screen
          key={index}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <TabBarIcon icon={screen.icon(color)} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
