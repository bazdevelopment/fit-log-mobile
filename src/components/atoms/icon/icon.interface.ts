import React from "react";

export interface IIcon {
  iconElement: React.ReactNode;
  heading?: string;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "base";
  withBackground?: boolean;
  onPress?: () => void;
  additionalClassName?: string;
  additionalInnerClassName?: string;
}
