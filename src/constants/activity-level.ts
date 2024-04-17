export const ACTIVITY_LEVEL = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
} as const;

export type TActivityLevel = (typeof ACTIVITY_LEVEL)[keyof typeof ACTIVITY_LEVEL];
