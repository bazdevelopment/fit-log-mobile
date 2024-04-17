export const ACTIVITY_LEVEL = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCE: "Advance",
} as const;

export type TActivityLevel = (typeof ACTIVITY_LEVEL)[keyof typeof ACTIVITY_LEVEL];
