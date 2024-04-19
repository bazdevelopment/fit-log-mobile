export interface IOtpCodeInputs {
  numberOfCodeInputs: number;
  onComplete: (values: string) => void;
}

export interface IUseOtpCodeInputs {
  numberOfCodeInputs: number;
  onComplete: (codes: string) => void;
  triggerShake: () => void;
}
