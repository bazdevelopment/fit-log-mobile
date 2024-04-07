import { router } from "expo-router";
import { useRef, useState } from "react";
import { ScrollView } from "react-native";

import { DeviceDimensions } from "../../../../../constants/device-dimensions";

/**
 * Custom hook used to isolate all the methods for a pagination logic
 */
export const usePagination = (pagesLength: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const lastPageIndex = pagesLength - 1;

  const scrollTo = (index: number) => {
    setActiveIndex(index);
    scrollViewRef.current?.scrollTo({ x: DeviceDimensions.deviceWidth * index, animated: true });
  };

  const handleChangeActiveIndex = (newActiveIndex: number) => setActiveIndex(newActiveIndex);

  const handleFinishOnboarding = () => {
    router.navigate("(tabs)");
  };

  const handleNextPress = () => {
    if (activeIndex === lastPageIndex) handleFinishOnboarding();
    if (activeIndex < lastPageIndex) {
      scrollTo(activeIndex + 1);
    }
  };
  const handleBackPress = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    }
  };

  return {
    handleBackPress,
    handleFinishOnboarding,
    handleNextPress,
    activeIndex,
    handleChangeActiveIndex,
    scrollViewRef,
    lastIndex: lastPageIndex,
  };
};
