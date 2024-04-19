import { useCallback, useRef } from "react";
import { Animated } from "react-native";

/**
 * This custom hook enables the creation of a shake animation using the Animated module from React Native. It returns an animation value and a function to trigger the shake animation.
 */
export const useShakeAnimation = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const triggerShake = useCallback(() => {
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, [animationValue]);

  return { animationValue, triggerShake };
};
