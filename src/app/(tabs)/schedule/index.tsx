import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { View } from "react-native";

import ContentScroller from "../../../components/organisms/content-scroller";
import WeekBlock from "../../../components/organisms/week-block";
import { useScrollContext } from "../../../context/scroll-context";

const Page = () => {
  const { resetHeader } = useScrollContext();

  const scrollViewRef = useRef(null);

  useScrollToTop(scrollViewRef);

  useFocusEffect(
    useCallback(() => {
      resetHeader();
    }, [])
  );

  return (
    <View className="mt-28 flex-1">
      <WeekBlock />
      <ContentScroller ref={scrollViewRef} />
    </View>
  );
};

export default Page;
