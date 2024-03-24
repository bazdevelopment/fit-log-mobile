import { TInputType } from "../../../constants/input-type";

export interface ICustomTextInput {
  placeholder: string;
  type: TInputType;
  label?: string;
  labelInfo?: string;
  error?: string;
}
