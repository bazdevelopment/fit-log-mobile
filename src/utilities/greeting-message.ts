import { GREETINGS } from "../constants/greetings";

/**
 * Utility function that return a greeting message depending on daily hour
 */
const MORNING_END = 12;
const AFTERNOON_END = 18;

export const getGreetingMessage = (hour: number): string => {
  return hour < MORNING_END
    ? GREETINGS.MORNING
    : hour >= MORNING_END && hour <= AFTERNOON_END
      ? GREETINGS.AFTERNOON
      : GREETINGS.EVENING;
};
