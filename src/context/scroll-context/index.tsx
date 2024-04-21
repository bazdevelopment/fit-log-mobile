import React, { createContext, useContext } from "react";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";

import { ScrollContextTuple } from "./scroll-context.interface";

const INITIAL_VALUE: ScrollContextTuple = { scrollValue: 0, handleReset: () => {} };
/** Context declaration */
export const ScrollContext = createContext<ScrollContextTuple>(INITIAL_VALUE);
/** Context provider */
export const ScrollContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const scrollValue = useSharedValue(0);

  const handleReset = () => {
    scrollValue.value = withTiming(0, { duration: 150, easing: Easing.out(Easing.cubic) });
  };

  return <ScrollContext.Provider value={{ scrollValue, handleReset }}>{children}</ScrollContext.Provider>;
};
/** Utility function for accessing context */
export const useScrollContext = () => useContext(ScrollContext);
