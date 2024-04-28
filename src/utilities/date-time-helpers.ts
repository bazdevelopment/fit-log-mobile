import { ISegmentedControlOption } from "../components/organisms/segmented-control/SegmentedControl.interface";
import dayjs from "../lib/dayjs";
import { IDayOfWeek } from "../types/date-time.types";

/**
 * Utility function used to get the week number based on week offset
 */
export const getWeekNumber = (weekOffset: number): number => {
  const currentDate = dayjs();
  const targetDate = currentDate.add(weekOffset, "week");
  return targetDate.isoWeek();
};

/**
 * Function to get an array of abbreviated day names for a specific week number and offset
 * The array will look like [{"Mon":28}, {"Tue":"29"}, ...]
 *
 */
export const getDaysOfWeek = (weekNumber: number, year: number): IDayOfWeek[] => {
  const startOfWeek = dayjs().year(year).isoWeek(weekNumber).startOf("isoWeek"); // Get the start of the specified week with offset
  const endOfWeek = dayjs().year(year).isoWeek(weekNumber).endOf("isoWeek"); // Get the end of the specified week with offset: ;
  const daysOfWeek = [];

  let currentDay = startOfWeek;
  while (currentDay.isSameOrBefore(endOfWeek)) {
    daysOfWeek.push({
      [currentDay.format("ddd")]: currentDay.date(), // Abbreviated day name as key, day number as value
    });
    currentDay = currentDay.add(1, "day"); // Move to the next day
  }

  return daysOfWeek;
};

/**
 * Utility function used to get a specific year based on week offset
 */
export const getYearFromWeekOffset = (weekOffset: number): number => {
  const date = dayjs().add(weekOffset, "weeks");
  return date.isoWeekYear();
};

/**
 * Utility function used to create a basic structure by mapping all the days from a week
 */
export const getSegmentedDays = (weekDates: IDayOfWeek[]): ISegmentedControlOption[] => {
  const mappedDays = weekDates.map((day, index) => {
    const [dayName, dayNumber] = Object.entries(day)[0];
    return {
      title: dayName,
      subtitle: String(dayNumber),
      id: index,
    };
  });
  return mappedDays;
};

/**
 * Utility function used to get the current month of the current week also considering year
 */
export const getCurrentMonth = (year: number, weekNumber: number): string => {
  const currentDate = dayjs().year(year).week(weekNumber);
  return currentDate.format("MMMM");
};

/**
 * Utility function which returns a string with the interval of the week
 * E.g for the week between 22 and 28 april it will show => 22.04 - 28.04
 */
export const getWeekInterval = (year: number, weekNumber: number): string => {
  const startOfWeek = dayjs().year(year).isoWeek(weekNumber).startOf("isoWeek"); // Get the start of the specified week with offset
  const endOfWeek = dayjs().year(year).isoWeek(weekNumber).endOf("isoWeek"); // Get the end of the specified week with offset: ;

  const formatStartOfWeek = startOfWeek.format("DD.MM");
  const formatEndOfWeek = endOfWeek.format("DD.MM");

  return `${formatStartOfWeek} - ${formatEndOfWeek}`;
};

/**
 * Utility function used to get the current day in ddd format like "Mon"
 */
export const getCurrentDay = (): string => dayjs().format("ddd");
