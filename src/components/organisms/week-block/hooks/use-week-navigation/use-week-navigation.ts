import { useState } from "react";

import { POSITIONS, TPositions } from "../../../../../constants/positions";
import { IDayOfWeek } from "../../../../../types/date-time.types";
import {
  getCurrentDay,
  getCurrentMonth,
  getDaysOfWeek,
  getSegmentedDays,
  getWeekInterval,
  getWeekNumber,
  getYearFromWeekOffset,
} from "../../../../../utilities/date-time-helpers";

/**
 * Custom hook used to handle the navigation between weeks
 */
export const useWeekNavigation = () => {
  const [weekOffset, setWeekOffset] = useState<number>(0);

  const weekNumber: number = getWeekNumber(weekOffset);
  const currentYear = getYearFromWeekOffset(weekOffset);
  const weekDates: IDayOfWeek[] = getDaysOfWeek(weekNumber, currentYear);
  const currentMonth = getCurrentMonth(currentYear, weekNumber);
  const segmentedDays = getSegmentedDays(weekDates);
  const interval = getWeekInterval(currentYear, weekNumber);
  const currentDay = getCurrentDay();
  const initialDayFocused = segmentedDays.find(day => day.title === currentDay);

  const changeWeekOffset = (iconPosition: TPositions) => {
    if (iconPosition === POSITIONS.LEFT) {
      setWeekOffset(prevOffset => prevOffset - 1);
    }

    if (iconPosition === POSITIONS.RIGHT) {
      setWeekOffset(prevOffset => prevOffset + 1);
    }
  };

  return {
    weekOffset,
    segmentedDays,
    interval,
    weekNumber,
    currentMonth,
    currentYear,
    currentDay,
    changeWeekOffset,
    initialDayFocused,
  };
};
