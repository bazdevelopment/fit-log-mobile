import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from "react-native";

import ArrowLeft from "../../../assets/icons/ArrowLeft";
import { DEVICE_TYPE } from "../../../constants/device-type";
import { Colors } from "../../../styles/colors";
import Icon from "../../atoms/icon";
import Label from "../../atoms/label";
import { IScreenWrapper } from "./ScreenWrapper.interface";

/**
 * Wrapper for the screen in order to hide the keyboard when the screen is pressed
 * When the keyboard covers any input at the bottom of the screen the wrapper will help us to push the content up
 */
export default function ScreenWrapper({
  children,
  keyboardAvoiding = false,
  keyboardVerticalOffset = undefined,
  isScrollEnabled = true,
  isBackNavigationEnabled = false,
  title,
  handleGoBack,
  canSwipeLeft = false,
}: IScreenWrapper) {
  const { setOptions } = useNavigation();

  useEffect(() => {
    setOptions({ gestureEnabled: canSwipeLeft });
  }, [setOptions, canSwipeLeft]);
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={DEVICE_TYPE.IOS ? "padding" : "height"}
        enabled={keyboardAvoiding}
        keyboardVerticalOffset={keyboardVerticalOffset}
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={isScrollEnabled}
          keyboardShouldPersistTaps="handled"
          className="flex-1"
        >
          <View className="flex-row items-center gap-5">
            {isBackNavigationEnabled && (
              <Icon
                iconElement={<ArrowLeft width={23} height={23} color={Colors.blackPantone} />}
                additionalInnerClassName="border-slate-300 border-[1px]"
                additionalClassName="items-start justify-start mt-2 ml-4"
                onPress={() => (handleGoBack ? handleGoBack() : router.canGoBack() && router.back())}
              />
            )}
            {Boolean(title) && (
              <Label
                labelText={title as string}
                as="h3"
                additionalLabelStyle="font-primary-semi-bold text-gray-900"
                additionalContainerStyle={`${!isBackNavigationEnabled && "mt-2 ml-5"}`}
              />
            )}
          </View>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
