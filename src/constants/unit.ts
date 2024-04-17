export const UNIT = {
  KG: "kg",
  CM: "cm",
} as const;

export type TUnit = (typeof UNIT)[keyof typeof UNIT];
