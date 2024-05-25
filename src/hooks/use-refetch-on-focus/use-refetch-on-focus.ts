import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useRef } from "react";
/**
 * Custom hook useful for refetching a query when the screen is focused
 * first time when a screen is focused the query by default will run
 * second time is not running and this is where the useRefreshOnFocus doest the magic
 * firstTimeRef is set to true just to not interfere with the call that is made by default
 */
export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = useRef(true);
  useFocusEffect(
    useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }
      refetch();
    }, [refetch])
  );
}
