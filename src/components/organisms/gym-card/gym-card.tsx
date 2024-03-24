/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import { Ionicons } from "@expo/vector-icons";
import { Image, View } from "react-native";

import { Colors } from "../../../styles/colors";
import Label from "../../atoms/label/label";
import StarRating from "../../molecules/star-rating/star-rating";
import Card from "../card/card";
import { IGymCard, IGymCardBody, IGymCardHeader } from "./gym-card.interface";

/**
 * Renders the header section of the Gym Card, displaying the gym's image.
 */
const GymCardHeader = ({ imageSource, layout }: IGymCardHeader) => {
  return (
    <View>
      <Image
        className={`rounded-t-xl ${layout === "row" ? "mr-4 h-[100px] w-[120px] rounded-b-xl" : "h-[100px]"}`}
        source={{ uri: imageSource }}
      />
    </View>
  );
};
/**
 * Renders the body section of the Gym Card, displaying the gym's details such as title, subtitle, rating, and number of reviews.
 */
const GymCardBody = ({ title, subtitle, rating, numReviews, layout }: IGymCardBody) => (
  <View className={`pb-1 pt-2 ${layout === "row" ? "flex-1 px-1" : "w-full px-2"}`}>
    <Label labelText={title} additionalLabelStyle="text-lg font-inter-medium" />
    <Label
      icon={<Ionicons name="location" size={20} color={Colors.primary} />}
      labelText={subtitle}
      additionalLabelStyle="text-gray-500 mb-1 font-inter-regular mt-1 text-sm"
      additionalContainerStyle={`${layout === "column" ? "w-11/12" : "w-full"}`}
    />
    {rating && numReviews && (
      <View className="ml-[-5px] max-w-[200px]">
        <StarRating rating={rating} reviewsNumber={numReviews} />
      </View>
    )}
  </View>
);

/**
 * The Gym Card component is a reusable React Native component designed to display information about gyms or fitness centers in a visually appealing manner.
 * It consists of a header section displaying an image, and a body section containing details such as the gym's title, subtitle, rating, and number of reviews.
 */
const GymCard = ({ imageSource, title, subtitle, rating, numReviews, layout = "row", onSaveToFavorite }: IGymCard) => {
  return (
    <Card onSaveToFavorite={onSaveToFavorite}>
      <View className={`${layout === "row" ? "flex-row p-2" : "flex-col"}`}>
        <GymCardHeader layout={layout} imageSource={imageSource} />
        <GymCardBody title={title} subtitle={subtitle} rating={rating} numReviews={numReviews} layout={layout} />
      </View>
    </Card>
  );
};

export default GymCard;
