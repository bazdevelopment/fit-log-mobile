/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from "expo-router";
import { useState } from "react";
import { LayoutChangeEvent, Text, View } from "react-native";

import TabBarIcon from "../../components/atoms/tab-bar-icon/tab-bar-icon";
import { CustomScreenHeader } from "../../components/organisms/custom-header";
import { HeaderLayoutProvider } from "../../context/header-layout-context";
import { useThemeScheme } from "../../hooks/use-theme-scheme/use-theme-scheme";
import { tabScreens } from "../../navigation/tabs";
import { ITabsNavigationScreen } from "../../navigation/tabs/tabs.interface";
import { getTabBarStyles } from "../../navigation/tabs/tabs.styles";
import { Colors } from "../../styles/colors";

export const DEFAULT_HEIGHT = 95;
export default function TabLayout() {
  const { isDarkColorScheme } = useThemeScheme();
  const styles = getTabBarStyles(isDarkColorScheme);

  const [headerHeight, setHeaderHeight] = useState(DEFAULT_HEIGHT);
  const handleLayout = (event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  };

  return (
    <HeaderLayoutProvider value={{ headerHeight, handleLayout }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          /**TODO: consider to create a custom top navigation bar */
          header: props => (
            <CustomScreenHeader
              {...props}
              options={{
                headerLeft: () => (
                  <View>
                    <Text>Header Left</Text>
                  </View>
                ),
                headerRight: () => (
                  <View>
                    <Text>Header Right</Text>
                  </View>
                ),
              }}
              onLayout={handleLayout}
            />
          ),
          tabBarStyle: styles.tabBarContainer,
        }}
      >
        {tabScreens.map((screen: ITabsNavigationScreen) => (
          <Tabs.Screen
            key={screen.id}
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
    </HeaderLayoutProvider>
  );
}
