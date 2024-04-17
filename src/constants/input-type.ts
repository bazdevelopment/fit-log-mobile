export const INPUT_TYPE = {
  DEFAULT: "default",
  PASSWORD: "password",
  EMAIL: "email",
  SEARCH: "search",
} as const;

export type TInputType = (typeof INPUT_TYPE)[keyof typeof INPUT_TYPE];
