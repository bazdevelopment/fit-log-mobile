import { TInputType } from "../../../constants/input-type";

export interface InputIconsProps {
  type: TInputType;
  inputValue: string;
  position: "front" | "end";
  toggleShowPassword?: () => void; // Function to toggle show/hide password (optional)
  showPassword?: boolean; // Boolean to indicate if password is shown (optional)
  handleResetInput: () => void;
}
