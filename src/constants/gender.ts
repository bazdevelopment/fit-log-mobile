export const GENDER = {
  Male: "Male",
  Female: "Female",
} as const;

export type TGender = keyof typeof GENDER;
