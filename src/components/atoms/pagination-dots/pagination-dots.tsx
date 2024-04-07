import { View } from "react-native";

import { IPaginationDots } from "./pagination-dots.interface";

const PaginationDots = ({ activeIndex, totalDots }: IPaginationDots) => (
  <View className="flex-row">
    {Array.from({ length: totalDots }, (_, i: number) => (
      <View
        key={`pagination-dot-${i}`}
        className={`${i === activeIndex ? "bg-primary-default" : "bg-slate-200"} mx-1 rounded-full p-1.5`}
      />
    ))}
  </View>
);

export default PaginationDots;
