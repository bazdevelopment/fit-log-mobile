import { ReactNode } from "react";

import { TPositions } from "../../../constants/positions";

export interface IButton {
  buttonText: string;
  onPress: () => void;
  variant: TVariant;
  disabled?: boolean;
  size?: TSize;
  icon?: ReactNode;
  iconPosition?: TPositions;
  isLoading?: boolean;
  additionalContainerStyle?: string;
}

export type TVariant = "default" | "primary" | "secondary" | "outlined" | "destructive" | "link";
export type TSize = "sm" | "md" | "lg" | "xl";
export type TElement = "text" | "wrapper";
