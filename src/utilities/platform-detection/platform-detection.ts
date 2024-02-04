import { PLATFORM_TYPE } from "enums/platform-type";
import { Platform } from "react-native";

export const isIOS = Platform.OS === PLATFORM_TYPE.IOS;
export const isAndroid = Platform.OS === PLATFORM_TYPE.ANDROID;
