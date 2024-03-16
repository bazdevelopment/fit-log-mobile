/**
  generateStarPercentages

Description:
  The generateStarPercentages function calculates and returns an array of star percentages based on a given starAverage rating value. Each element in the array represents the percentage filled for each star in a 5-star rating system.

Parameters:
  - starAverage: A number representing the average star rating. For example, 4.3 would represent a rating of 4.3 stars.

Returns:
  An array of numbers representing the percentage filled for each star. Each element in the array corresponds to a star in a 5-star rating system. A value of 100 indicates a full star, while a value of 0 indicates an empty star. Decimal values between 0 and 100 indicate partially filled stars.

 */
export function generateStarPercentages(starAverage: number): number[] {
  // Calculate the number of full stars (integer part of starAverage)
  // e.g. 4.3 wil be 4
  const fullStars = Math.floor(starAverage);

  // Calculate the partial star (decimal part of starAverage)
  // e.g 4.3-4 = 0.3
  const partialStar = starAverage - fullStars;

  // Create an array to hold full stars, filled with 1s
  // e.g. if fullStars 4, the array will be [100,100,100,100]
  const starArr: number[] = Array(fullStars).fill(100);

  // If there is a partial star, add it to the array
  if (partialStar > 0) {
    starArr.push(Math.round(partialStar * 100));
  }
  // Fill the remaining slots with empty stars (0s)
  //e.g if starArr.length =4, the last element of the array will be 0
  const emptyStarsCount = 5 - starArr.length;
  const emptyStars: number[] = Array(emptyStarsCount).fill(0);
  // Concatenate the arrays of full stars, partial star (if any), and empty stars
  return starArr.concat(emptyStars);
}
