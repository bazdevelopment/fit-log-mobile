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
import { IWeekBlock } from "./week-block.interface";

/**
 * Component used do display segmented tab bar for handling weekly navigation
 */
const WeekBlock = ({
  workoutSections,
  onScrollToIndex,
  weekOffset,
  initialDayFocused,
  changeWeekOffset,
  weekNumber,
  currentMonth,
  interval,
  currentYear,
  segmentedDays,
}: IWeekBlock) => {
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
        const indexes = findSectionIndexToScroll(initialDayFocused?.subtitle, workoutSections);

        /**
         *  Delay added to ensure the UI has time to update before scrolling
         * TODO: maybe the check ofr indexes && can be replace with something more specific
         */
        wait(500).then(() => onScrollToIndex(indexes[0]?.sectionIndex, indexes[0]?.itemIndex));
      }
    };
    handleWeekOffsetChange();
  }, [weekOffset, workoutSections?.length]);

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

          const indexes = findSectionIndexToScroll(`${option.month}-${option.subtitle}`, workoutSections);
          indexes?.length && onScrollToIndex(indexes[0].sectionIndex, indexes[0].itemIndex);
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
 * slice(8) to extract the last 2 characters from "20-12-22"
 */
const findSectionIndexToScroll = (
  selectedDayTitle: string,
  workoutSections: IWorkoutSection[]
): { sectionIndex: number; itemIndex: number }[] => {
  const indexesFound = workoutSections?.map((section, sectionIndex) =>
    section.data
      .map((item, itemIndex) => ({ sectionIndex, itemIndex: itemIndex + 1, day: item.day }))
      .find(item => item.day.includes(selectedDayTitle))
  );

  return indexesFound?.filter(Boolean);
};
