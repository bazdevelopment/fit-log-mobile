import { ReactElement } from "react";

export interface IEdgeCaseTemplate {
  title?: string;
  image?: ReactElement;
  message?: string;
  actionLabel?: string;
  onActionPress?: () => void;
}
