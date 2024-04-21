import { StyleSheet } from "nativewind";

import { Colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBlockColor: Colors.grey,
  },
  padding: { paddingTop: 8, paddingHorizontal: 16, paddingBottom: 16 },
  title: { fontSize: 16, fontWeight: "600", textAlign: "center" },
  background: {
    backgroundColor: "rgba(255,255,255,0.85)", // or "transparent" if you want to see blurry content behind background
  },
});
