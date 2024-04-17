import { Octicons } from "@expo/vector-icons";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import { ICardBase } from "./Card.interface";

/**
 * The Card component is a customizable wrapper component designed to encapsulate content within a card-like container.
 *  It provides functionality for displaying children components, adding additional styling classes, and optionally including a favorite icon for user interaction.
 * This component is commonly used to present various types of content in a visually organized manner.
 */
const Card = ({ children, additionalClassName, onSaveToFavorite }: ICardBase) => {
  const style = twMerge("bg-gray-light shadow-inner border-[0.25px] border-slate-400 rounded-xl", additionalClassName);
  return (
    <View className={style}>
      {!!onSaveToFavorite && (
        <Icon
          iconElement={<Octicons name="heart" size={18} color={Colors.primary} />}
          additionalClassName="absolute right-0 z-10 top-2 right-2 opacity-85"
          withBackground={true}
        />
      )}
      {children}
    </View>
  );
};

export default Card;
