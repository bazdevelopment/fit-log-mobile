import { Animated } from "react-native";

export interface IOtpCodeInputs {
  numberOfCodeInputs: number;
  onComplete: (values: string) => Promise<void>;
  animationValue: Animated.Value;
}

export interface IUseOtpCodeInputs {
  numberOfCodeInputs: number;
  onComplete: (codes: string) => Promise<void>;
}
