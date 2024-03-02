import { TEllipsizeMode } from "enums/ellipsize-mode";
import { TPositions } from "enums/positions";
import { ReactElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface ILabel {
  labelText: string;
  additionalLabelStyle?: TextStyle;
  additionalContainerStyle?: ViewStyle;
  numberOfLinesDisplayed?: number;
  ellipsizeMode?: TEllipsizeMode;
  allowFontScaling?: boolean;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5";
  icon?: ReactElement;
  iconPosition?: TPositions;
}

export interface IDefaultStylesType {
  p: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
}
