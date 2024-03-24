import { colorClass, thicknessClass } from "./horizontal-line.styles";

export interface IHorizontalLine {
  thickness: keyof typeof thicknessClass;
  color: keyof typeof colorClass;
  additionalClassName?: string;
}
