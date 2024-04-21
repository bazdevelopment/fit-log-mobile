import { LayoutChangeEvent } from "react-native";

export interface IHeaderLayoutContext {
  headerHeight: number;
  handleLayout: (event: LayoutChangeEvent) => void;
}
