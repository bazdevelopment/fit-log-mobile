/**
 * The clamp function ensures that a given value falls within a specified range defined by a minimum and maximum value.
 * @param value
 * @param min
 * @param max
 * @returns clamp(15, 0, 10) clampedValue is 10
 */
export const clamp = (value: number, min: number, max: number) => {
  "worklet";
  return Math.max(min, Math.min(max, value));
};
