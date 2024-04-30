import { type SharedValue } from "react-native-reanimated";

export type ScrollContextTuple = { scrollValue: SharedValue<number>; resetHeader: () => void };
