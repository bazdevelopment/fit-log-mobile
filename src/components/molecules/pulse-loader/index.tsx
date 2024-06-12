import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { twMerge } from "tailwind-merge";

import { Colors } from "../../../styles/colors";

const PulseLoader = ({ additionalClassName }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const containerStyle = twMerge("flex-1 items-center justify-center", additionalClassName);

  const pulse = Animated.loop(
    Animated.parallel([
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 700,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false,
        }),
      ]),
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ])
  );
  pulse.start();

  const loaderColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.secondary, Colors.error], // Change colors here
  });

  return (
    <View className={containerStyle}>
      <Animated.View style={[styles.loader, { transform: [{ scale: scaleAnim }], backgroundColor: loaderColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

export default PulseLoader;
