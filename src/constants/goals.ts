export const GOALS = {
  GET_FITTER: "Get fitter",
  GAIN_WEIGHT: "Gain weight",
  LOSE_WEIGHT: "Lose weight",
  BUILDING_MUSCLES: "Building muscles",
  IMPROVING_ENDURANCE: "Improving endurance",
  LEARN_BASICS: "Learn the basics",
} as const;

export type TGoal = (typeof GOALS)[keyof typeof GOALS];
