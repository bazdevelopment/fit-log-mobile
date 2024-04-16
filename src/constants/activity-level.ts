export const ACTIVITY_LEVEL = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advance: "Advance",
} as const;

export type TActivityLevel = (typeof ACTIVITY_LEVEL)[keyof typeof ACTIVITY_LEVEL];
