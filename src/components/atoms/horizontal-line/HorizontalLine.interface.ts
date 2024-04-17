import { colorClass, thicknessClass } from "./HorizontalLine.styles";

export interface IHorizontalLine {
  thickness: keyof typeof thicknessClass;
  color: keyof typeof colorClass;
  additionalClassName?: string;
}
