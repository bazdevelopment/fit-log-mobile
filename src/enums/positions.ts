export const POSITIONS = {
  left: "left",
  right: "right",
} as const;

export type TPositions = keyof typeof POSITIONS;
