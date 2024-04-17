/**
 * generateCustomRangeArray
 * function that generates an array of numbers within a specified range. It creates an array containing numbers starting from a given start value up to an end value, inclusive.
 */
export const generateCustomRangeArray = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};
