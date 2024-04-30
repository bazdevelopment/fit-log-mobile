import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { LayoutChangeEvent } from "react-native";

export interface ICustomHeader extends BottomTabHeaderProps {
  onLayout: (event: LayoutChangeEvent) => void;
  isHeaderCollapsed: boolean;
}
