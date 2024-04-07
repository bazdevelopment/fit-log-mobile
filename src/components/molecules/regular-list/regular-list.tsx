import { View } from "react-native";

import { IRegularList } from "./regular-list.interface";

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
