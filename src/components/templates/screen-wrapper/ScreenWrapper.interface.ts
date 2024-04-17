import { ReactNode } from "react";

export interface IScreenWrapper {
  backgroundColor?: string;
  children: ReactNode;
  keyboardAvoiding?: boolean;
  keyboardVerticalOffset?: number;
}
