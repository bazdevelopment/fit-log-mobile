import { forwardRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { Text } from "react-native-svg";

import { useContentScroller } from "../../../hooks/use-content-scroller/use-content-scroller";
import WelcomeMessage from "../../molecules/welcome-message";

const ContentScroller = forwardRef((_, ref) => {
  const { contentContainerStyle, scrollHandler } = useContentScroller();

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      style={styles.root}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      onScroll={scrollHandler}
      showsVerticalScrollIndicator={false}
      ref={ref}
    >
      <WelcomeMessage username="Marian" />
      <View className="mt-4">
        {data.map((item, index) => (
          <View key={index} style={{ height: 300 }}>
            <Text style={{ color: item.color }}>{item.text}</Text>
            <Image style={{ width: "100%", height: 200 }} source={{ uri: "https://picsum.photos/200/300" }} />
          </View>
        ))}
      </View>
    </Animated.ScrollView>
  );
});

export default ContentScroller;

const data = [
  { id: 1, text: "Item 1", color: "red" },
  { id: 2, text: "Item 2", color: "red" },
  { id: 3, text: "Item 3", color: "red" },
  { id: 4, text: "Item 4", color: "red" },
  { id: 5, text: "Item 4", color: "red" },
  { id: 6, text: "Item 4", color: "red" },
  { id: 7, text: "Item 4", color: "red" },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
});
