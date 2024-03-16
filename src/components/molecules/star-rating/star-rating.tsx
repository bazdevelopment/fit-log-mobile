import { View } from "react-native";

import StarIcon from "../../../assets/icons/Star";
import { generateStarPercentages } from "../../../utilities/generate-star-percentages";
import Label from "../../atoms/label/label";
import { IStarRating } from "./star-rating.interface";

/**
 * The StarRating component is a reusable React Native component used to display a star rating along with optional additional information such as the rating value and number of reviews.
 * It provides flexibility to display either a brief overview of the rating or a detailed breakdown of individual star ratings.
 */
const StarRating = ({ rating, reviewsNumber, isBriefModeEnabled = false }: IStarRating) => {
  const starRatingPercentages = generateStarPercentages(rating);

  const detailedRatingList = starRatingPercentages.map((ratingPercentage: number, index: number) => (
    <View
      key={`${index}-${ratingPercentage}`}
      className="flex flex-row items-center max-w-7"
      testID="star-rating-detailed-id"
    >
      <StarIcon percentFilled={ratingPercentage} />
    </View>
  ));

  return (
    <View className="flex flex-row items-center">
      {isBriefModeEnabled && <StarIcon percentFilled={100} />}

      {!isBriefModeEnabled && detailedRatingList}
      {!!rating && (
        <Label
          labelText={rating.toString()}
          additionalContainerStyle={`${!isBriefModeEnabled ? "pl-3 pr-1" : "pr-1"} mb-1`}
          additionalLabelStyle="text-gray-500"
        />
      )}
      {!!reviewsNumber && (
        <Label labelText={`(${reviewsNumber.toString()} reviews)`} additionalLabelStyle="text-gray-500 mb-1" />
      )}
    </View>
  );
};
export default StarRating;
