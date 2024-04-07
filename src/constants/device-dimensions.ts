import { Dimensions } from "react-native";
/*
 - utility object which holds device width/height and ca be called everywhere in the app
 */
const { width, height } = Dimensions.get("window");

export const DeviceDimensions = {
  deviceWidth: width,
  deviceHeight: height,
};
