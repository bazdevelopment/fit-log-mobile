import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { SectionList, View } from "react-native";

import { IWorkoutItem, IWorkoutSection, workoutSections } from "../../../__mocks__/workout-schedule-mock";
import HorizontalLine from "../../../components/atoms/horizontal-line";
import Label from "../../../components/atoms/label";
import WorkoutOverviewCard from "../../../components/molecules/workout-overview-card";
import WeekBlock from "../../../components/organisms/week-block";
import { useScrollContext } from "../../../context/scroll-context";

const Page = () => {
  const { resetHeader } = useScrollContext();

  const scrollViewRef = useRef<SectionList>(null);

  useScrollToTop(scrollViewRef);

  useFocusEffect(
    useCallback(() => {
      resetHeader();
    }, [])
  );

  const onScrollToIndex = (sectionIndex: number, itemIndex: number) => {
    if (scrollViewRef !== null && scrollViewRef.current?.scrollToLocation !== null) {
      scrollViewRef.current?.scrollToLocation({ sectionIndex, itemIndex });
    }
  };

  const renderWorkoutItem = ({ item }: { item: IWorkoutItem }) => (
    <>
      <WorkoutOverviewCard workout={item} />
      <HorizontalLine thickness="sm" color="light" />
    </>
  );

  const renderSectionHeader = ({ section }: { section: IWorkoutSection }) => {
    return (
      <Label
        labelText={section.month}
        as="h3"
        additionalLabelStyle="bg-slate-100 px-4 py-4 text-lg font-primary-bold"
      />
    );
  };

  return (
    <View className="mt-28 flex-1">
      <WeekBlock workoutSections={workoutSections} onScrollToIndex={onScrollToIndex} />

      <SectionList
        contentContainerStyle={{
          paddingBottom: 500,
        }}
        showsVerticalScrollIndicator={false}
        className="mt-4 flex-1"
        ref={scrollViewRef}
        keyExtractor={item => String(item.id)}
        renderItem={renderWorkoutItem}
        renderSectionHeader={renderSectionHeader}
        sections={workoutSections}
      />
    </View>
  );
};

export default Page;
