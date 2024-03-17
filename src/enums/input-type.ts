export const INPUT_TYPE = {
  default: "default",
  password: "password",
  email: "email",
  search: "search",
} as const;

export type TInputType = keyof typeof INPUT_TYPE;
