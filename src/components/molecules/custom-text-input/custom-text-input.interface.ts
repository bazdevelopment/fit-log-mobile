import { TInputType } from "../../../enums/input-type";

export interface ICustomTextInput {
  placeholder: string;
  type: TInputType;
  label?: string;
  labelInfo?: string;
  error?: string;
}
