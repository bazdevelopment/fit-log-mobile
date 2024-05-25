import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { useCallback, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { getStorageItem, setStorageItem } from "../../api/common/storage";
import Button from "../../components/atoms/button/button";
import Label from "../../components/atoms/label";
import LanguagePreference from "../../components/language-preferrence";
import ContentScroller from "../../components/organisms/content-scroller";
import { useScrollContext } from "../../context/scroll-context";
import useArduinoSocket from "../../hooks/use-arduino-socket";
import { useThemeScheme } from "../../hooks/use-theme-scheme/use-theme-scheme";
import { useTodoMutation } from "../../mutations/use-todo-mutation/use-todo-mutation";
import { useTodoQuery } from "../../queries/hooks/use-todo-query/use-todo-query";

export const Test = () => {
  const { data, isLoading, isError } = useTodoQuery();

  const { mutate } = useTodoMutation(1, {});

  return (
    <View className="mb-10 flex flex-row justify-center">
      <ContentScroller />
      <TouchableOpacity onPress={() => mutate()} accessibilityRole="button">
        <Text>
          <Trans>Press to trigger todo mutation</Trans>
        </Text>
        <Link href="/onboarding">About</Link>
      </TouchableOpacity>
    </View>
  );
};

i18n.loadAndActivate({ locale: "ro", messages: undefined });

export default function Root() {
  const { resetHeader } = useScrollContext();
  const { cardScanned } = useArduinoSocket();
  const scrollViewRef = useRef(null);

  const at = getStorageItem("access_token");
  console.log("at", at);
  useScrollToTop(scrollViewRef);

  useFocusEffect(
    useCallback(() => {
      resetHeader();
    }, [])
  );

  return (
    <View className="mt-28 flex-1">
      <Label labelText={cardScanned} as="h2" />

      <Button
        buttonText="Log out"
        variant="primary"
        onPress={() => {
          setStorageItem("access_token", null);
          setStorageItem("refresh_token", null);
          setStorageItem("is_authenticated", "false");
          router.navigate("/sign-in");

          showMessage({
            message: "Logged out",
            type: "danger",
            duration: 4000,
            floating: true,
          });
        }}
      />
      <Button
        variant="primary"
        onPress={() => {
          showMessage({
            message: "Simple message",
            type: "danger",
            duration: 4000,
            // floating: true,
          });
        }}
        buttonText="Request Details"
      />
      <ContentScroller ref={scrollViewRef} />

      {/* <LanguagePreference />
      <Test />
      <TouchableOpacity accessibilityRole="button" onPress={toggleColorScheme}>
        <Text>Toggle light/dark mode</Text>
      </TouchableOpacity> */}
    </View>
  );
}
