import dayjs from "dayjs";
import { useEffect, useState } from "react";

import useInterval from "../use-interval/use-interval";
import { IUseWorkoutTimer } from "./use-workout-timer.interface";
/**
 * Custom hook used to count the time spent on the workout
 */
function useWorkoutTimer({ startDateTime, endDateTime }: IUseWorkoutTimer) {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(startDateTime && !endDateTime);

  useEffect(() => {
    if (isRunning) {
      setTimer(dayjs().diff(dayjs(startDateTime), "minute") || 0);
    } else {
      /** if the the workout is not running set update the workout time based on start/end date time subtraction */
      setTimer(dayjs(endDateTime).diff(startDateTime, "minute") || 0);
    }
  }, [endDateTime, isRunning, startDateTime]);

  useInterval(
    () => {
      if (isRunning) {
        setTimer(prevTimer => prevTimer + 1);
      }
    },
    isRunning ? 60000 : null
  );

  const startWorkoutTime = () => {
    setIsRunning(true);
  };

  const stopWorkoutTime = () => {
    setIsRunning(false);
  };

  return {
    timer,
    isRunning,
    startWorkoutTime,
    stopWorkoutTime,
  };
}

export default useWorkoutTimer;
