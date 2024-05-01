import { useEffect } from "react";
import { View } from "react-native";

import { IWorkoutSection } from "../../../__mocks__/workout-schedule-mock";
import ChevronLeftRounded from "../../../assets/icons/ChevronLeftRounded";
import ChevronRightRounded from "../../../assets/icons/ChevronRightRounded";
import { useSegmentedSelection } from "../../../hooks/use-segmented-selection/use-segmented-selection";
import { Colors } from "../../../styles/colors";
import { wait } from "../../../utilities/wait";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";
import SegmentedControl from "../segmented-control";
import { ISegmentedControlOption } from "../segmented-control/SegmentedControl.interface";
import { useWeekNavigation } from "./hooks/use-week-navigation/use-week-navigation";
import { IWeekBlock } from "./week-block.interface";

/**
 * Component used do display segmented tab bar for handling weekly navigation
 */
const WeekBlock = ({ workoutSections, onScrollToIndex }: IWeekBlock) => {
  const {
    weekOffset,
    segmentedDays,
    interval,
    weekNumber,
    currentMonth,
    currentYear,
    initialDayFocused,
    changeWeekOffset,
  } = useWeekNavigation();

  const { checkIsActive, handleChangeSelection, selectedOption } = useSegmentedSelection(initialDayFocused);

  /**
   * When user navigation to the current week I want the current day to be selected
   */
  useEffect(() => {
    const handleWeekOffsetChange = () => {
      if (weekOffset !== 0) {
        handleChangeSelection(null);
        onScrollToIndex(0, 0);
      } else {
        handleChangeSelection(initialDayFocused as ISegmentedControlOption);
        const indexes = findSectionIndexToScroll(initialDayFocused.id, workoutSections);
        /**
         *  Delay added to ensure the UI has time to update before scrolling
         * TODO: maybe the check ofr indexes && can be replace with something more specific
         */
        indexes && wait(500).then(() => onScrollToIndex(indexes.sectionIndex, indexes.itemIndex));
      }
    };
    handleWeekOffsetChange();
  }, [weekOffset]);

  return (
    <View>
      <View className="mb-4 flex-row items-center justify-between">
        <Icon
          iconElement={<ChevronLeftRounded width={20} height={20} />}
          onPress={() => changeWeekOffset("left")}
          additionalInnerClassName="p-0 ml-1"
        />
        <View className="items-center justify-center">
          <Label labelText={interval} as="h4" additionalLabelStyle="font-primary-bold" />
          <Label
            labelText={`Week ${weekNumber} - ${currentMonth} ${currentYear}`}
            as="h4"
            additionalLabelStyle="font-primary"
          />
        </View>
        <Icon
          iconElement={<ChevronRightRounded width={20} height={20} />}
          onPress={() => changeWeekOffset("right")}
          additionalInnerClassName="p-0 mr-1"
        />
      </View>
      <SegmentedControl
        options={segmentedDays}
        selectedOption={selectedOption as ISegmentedControlOption}
        onOptionPress={option => {
          handleChangeSelection(option);
          const indexes = findSectionIndexToScroll(option?.id, workoutSections);
          indexes && onScrollToIndex(indexes.sectionIndex, indexes.itemIndex);
        }}
        withBorder
        borderColor={Colors.primary}
        spacing={5}
        checkIsActive={checkIsActive}
      />
    </View>
  );
};

export default WeekBlock;

/**
 * Utility function used to find the section index and element index to scroll
 */
const findSectionIndexToScroll = (
  selectedDayId: number,
  workoutSections: IWorkoutSection[]
): { sectionIndex: number; itemIndex: number } | undefined => {
  const indexesFound = workoutSections
    .flatMap((section: IWorkoutSection, sectionIndex: number) =>
      section.data.map((item, itemIndex) => ({ sectionIndex, itemIndex: itemIndex + 1, id: item.id }))
    )
    .find(item => item.id === selectedDayId);

  return indexesFound;
};
