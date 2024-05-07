import { ReactNode } from "react";

export interface IScreenWrapper {
  children: ReactNode;
  keyboardAvoiding?: boolean;
  keyboardVerticalOffset?: number;
  isScrollEnabled?: boolean;
  isBackNavigationEnabled?: boolean;
  title?: string;
  handleGoBack?: () => void;
}
