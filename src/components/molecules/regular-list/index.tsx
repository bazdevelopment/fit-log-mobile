import { View } from "react-native";

import { IRegularList } from "./RegularList.interface";

/**
 * Component used to display a list o items and displaying a dynamic child component for each item in the list
 */
const RegularList = ({ items, itemComponent: ItemComponent, additionalContainerStyle }: IRegularList) => {
  return (
    <View className={`flex-row ${additionalContainerStyle}`}>
      {items.map((item, index: number) => (
        <ItemComponent key={index} {...item} />
      ))}
    </View>
  );
};

export default RegularList;
