import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import dayjs from "dayjs";
import { useCallback, useRef } from "react";
import { SectionList, View } from "react-native";

import { IWorkoutItem, IWorkoutSection, workoutSections } from "../../../__mocks__/workout-schedule-mock";
import { useCurrentWeeklyWorkouts } from "../../../api/workout/workout.hooks";
import HorizontalLine from "../../../components/atoms/horizontal-line";
import Label from "../../../components/atoms/label";
import WorkoutOverviewCard from "../../../components/molecules/workout-overview-card";
import WeekBlock from "../../../components/organisms/week-block";
import { useWeekNavigation } from "../../../components/organisms/week-block/hooks/use-week-navigation/use-week-navigation";
import { useScrollContext } from "../../../context/scroll-context";
import { useRefreshOnFocus } from "../../../hooks/use-refetch-on-focus/use-refetch-on-focus";
import SpinnerScreen from "../../../screens/spinner-screen";

const Page = () => {
  const { resetHeader } = useScrollContext();

  const scrollViewRef = useRef<SectionList>(null);
  const {
    weekOffset,
    segmentedDays,
    interval,
    weekNumber,
    currentMonth,
    currentYear,
    initialDayFocused,
    changeWeekOffset,
    startOfWeek,
    endOfWeek,
  } = useWeekNavigation();

  const { data, refetch: onRefetchWeeklyWorkouts } = useCurrentWeeklyWorkouts(
    startOfWeek.format("YYYY-MM-DD"),
    endOfWeek.format("YYYY-MM-DD")
  );
  const sections =
    data?.record &&
    Object.entries(data.record).map(([month, days]) => {
      const sectionData = Object.entries(days).map(([day, workouts]) => ({
        day,
        data: workouts ? workouts : null,
      }));

      return {
        month,
        data: sectionData,
      };
    });

  useScrollToTop(scrollViewRef);

  useFocusEffect(
    useCallback(() => {
      resetHeader();
    }, [])
  );

  useRefreshOnFocus(onRefetchWeeklyWorkouts);

  const onScrollToIndex = (sectionIndex: number, itemIndex: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToLocation({ sectionIndex, itemIndex });
    }
  };

  const renderWorkoutItem = ({ item }: { item: IWorkoutItem }) => {
    return (
      <>
        <WorkoutOverviewCard workout={item} />
        <HorizontalLine thickness="sm" color="light" />
      </>
    );
  };

  const renderSectionHeader = ({ section }: { section: IWorkoutSection }) => {
    return (
      <Label
        labelText={dayjs(section.month).format("MMMM, YYYY")}
        as="h3"
        additionalLabelStyle="bg-slate-100 px-4 py-4 text-lg font-primary-bold"
      />
    );
  };

  return (
    <View className="mt-28 flex-1">
      <SpinnerScreen />
      <WeekBlock
        workoutSections={workoutSections}
        onScrollToIndex={onScrollToIndex}
        weekOffset={weekOffset}
        initialDayFocused={initialDayFocused}
        changeWeekOffset={changeWeekOffset}
        weekNumber={weekNumber}
        currentMonth={currentMonth}
        interval={interval}
        currentYear={currentYear}
        segmentedDays={segmentedDays}
      />

      {!!sections && (
        <SectionList
          contentContainerStyle={{
            paddingBottom: 500,
          }}
          showsVerticalScrollIndicator={false}
          className="mt-4 flex-1"
          ref={scrollViewRef}
          keyExtractor={item => String(item.day)}
          renderItem={renderWorkoutItem}
          renderSectionHeader={renderSectionHeader}
          sections={sections}
        />
      )}
    </View>
  );
};

export default Page;
