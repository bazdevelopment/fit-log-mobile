import { View } from "react-native";

import { ITabBarIcon } from "./tab-bar-icon.interface";

/**
 * `TabBarIcon` component is a reusable component used for rendering icons in a tab bar. It provides functionality to display an icon with optional focus styling.
 */
const TabBarIcon = ({ icon, focused }: ITabBarIcon) => {
  return (
    <>
      {!!focused && <View className="absolute top-[-6px] h-[7px] w-[12px] rounded-b-[200] bg-primary-default" />}
      {icon}
    </>
  );
};

export default TabBarIcon;
