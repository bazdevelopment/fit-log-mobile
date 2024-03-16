import { TPositions } from "../../../enums/positions";

export interface IButton {
  buttonText: string;
  onPress: () => void;
  variant: TVariant;
  disabled?: boolean;
  size?: TSize;
  icon?: React.ReactNode;
  iconPosition?: TPositions;
  isLoading?: boolean;
}

export type TVariant = "default" | "primary" | "secondary" | "outlined" | "destructive" | "link";
export type TSize = "sm" | "md" | "lg" | "xl";
export type TElement = "text" | "wrapper";
