import { ReactNode } from "react";

export interface ICardBase {
  children: ReactNode;
  additionalClassName?: string;
  onSaveToFavorite?: () => void;
}
