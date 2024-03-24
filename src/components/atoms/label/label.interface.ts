import { ReactElement } from "react";

import { TEllipsizeMode } from "../../../constants/ellipsize-mode";
import { TPositions } from "../../../constants/positions";

export interface ILabel {
  labelText: string;
  additionalLabelStyle?: string;
  additionalContainerStyle?: string;
  numberOfLinesDisplayed?: number;
  ellipsizeMode?: TEllipsizeMode;
  allowFontScaling?: boolean;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5";
  icon?: ReactElement;
  iconPosition?: TPositions;
}

export interface IDefaultStylesType {
  p: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
}
