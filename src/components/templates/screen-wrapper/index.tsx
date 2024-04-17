import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { DEVICE_TYPE } from "../../../constants/device-type";
import { Colors } from "../../../styles/colors";
import { IScreenWrapper } from "./ScreenWrapper.interface";

/**
 * Wrapper for the screen in order to hide the keyboard when the screen is pressed
 * When the keyboard covers any input at the bottom of the screen the wrapper will help us to push the content up
 */
export default function ScreenWrapper({
  backgroundColor = Colors.white,
  children,
  keyboardAvoiding = false,
  keyboardVerticalOffset = undefined,
}: IScreenWrapper) {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor }}>
      <KeyboardAvoidingView
        behavior={DEVICE_TYPE.IOS ? "padding" : "height"}
        enabled={keyboardAvoiding}
        keyboardVerticalOffset={keyboardVerticalOffset}
        className="flex-1"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
