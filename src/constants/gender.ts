export const GENDER = {
  MALE: "Male",
  FEMALE: "Female",
} as const;

export type TGender = (typeof GENDER)[keyof typeof GENDER];
