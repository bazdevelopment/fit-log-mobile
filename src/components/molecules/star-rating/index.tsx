import { View } from "react-native";

import StarIcon from "../../../assets/icons/Star";
import { generateStarPercentages } from "../../../utilities/generate-star-percentages";
import Label from "../../atoms/label";
import { IStarRating } from "./StarRating.interface";

/**
 * The StarRating component is a reusable React Native component used to display a star rating along with optional additional information such as the rating value and number of reviews.
 * It provides flexibility to display either a brief overview of the rating or a detailed breakdown of individual star ratings.
 */
const StarRating = ({ rating, reviewsNumber, isBriefModeEnabled = false }: IStarRating) => {
  const starRatingPercentages = generateStarPercentages(rating);

  const detailedRatingList = starRatingPercentages.map((ratingPercentage: number, index: number) => (
    <View key={`${index}-${ratingPercentage}`} className="flex flex-1 flex-row" testID="star-rating-detailed-id">
      <StarIcon percentFilled={ratingPercentage} />
    </View>
  ));

  return (
    <View className="flex flex-row items-center">
      {isBriefModeEnabled && <StarIcon percentFilled={100} />}

      {!isBriefModeEnabled && detailedRatingList}
      {!!rating && (
        <Label
          labelText={String(rating.toFixed(2))}
          additionalContainerStyle={`${!isBriefModeEnabled ? "pl-3 pr-1" : "pr-1"} mb-1`}
          additionalLabelStyle="text-gray-500 text-sm"
        />
      )}
      {!!reviewsNumber && (
        <Label labelText={`(${reviewsNumber} reviews)`} additionalLabelStyle="text-gray-500 mb-1 text-sm" />
      )}
    </View>
  );
};
export default StarRating;
