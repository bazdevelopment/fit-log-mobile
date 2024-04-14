export const UNIT = {
  kg: "kg",
  cm: "cm",
} as const;

export type TUnit = keyof typeof UNIT;
