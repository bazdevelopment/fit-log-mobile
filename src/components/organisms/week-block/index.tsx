import { useEffect } from "react";
import { View } from "react-native";

import ChevronLeftRounded from "../../../assets/icons/ChevronLeftRounded";
import ChevronRightRounded from "../../../assets/icons/ChevronRightRounded";
import { useSegmentedSelection } from "../../../hooks/use-segmented-selection/use-segmented-selection";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";
import SegmentedControl from "../segmented-control";
import { ISegmentedControlOption } from "../segmented-control/SegmentedControl.interface";
import { useWeekNavigation } from "./hooks/use-week-navigation/use-week-navigation";

/**
 * Component used do display segmented tab bar for handling weekly navigation
 */
const WeekBlock = () => {
  const { checkIsActive, handleChangeSelection, selectedOption } = useSegmentedSelection();

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

  /**
   * When user navigation to the current week I want the current day to be selected
   */
  useEffect(() => {
    const handleWeekOffsetChange = () => {
      if (weekOffset !== 0) {
        handleChangeSelection(null);
      } else {
        handleChangeSelection(initialDayFocused as ISegmentedControlOption);
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
        onOptionPress={handleChangeSelection}
        withBorder
        borderColor={Colors.primary}
        spacing={5}
        checkIsActive={checkIsActive}
      />
    </View>
  );
};

export default WeekBlock;
