import { generateStarPercentages } from "./generate-star-percentages";

describe("generateStarPercentages", () => {
  it("should return an array with percentages based on a provided rating", () => {
    const percentages = generateStarPercentages(3.7);
    expect(percentages).toEqual([100, 100, 100, 70, 0]);
  });
});
