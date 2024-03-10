import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

import Label from "../../components/atoms/label/label";
import LanguagePreference from "../../components/language-preferrence/language-preference";
import { useTheme } from "../../context/theme-context/theme-context";
import { POSITIONS } from "../../enums/positions";
import { TYPOGRAPHY_ELEMENTS } from "../../enums/typography-elements";
import { useTodoMutation } from "../../mutations/use-todo-mutation/use-todo-mutation";
import { useTodoQuery } from "../../queries/hooks/use-todo-query/use-todo-query";
import { queryClient } from "../../queries/query-client/query-client";

export const Test = () => {
  const { data, isLoading, isError } = useTodoQuery();

  const { mutate } = useTodoMutation(1, {});

  return (
    <View className="flex justify-center flex-row mb-10">
      <TouchableOpacity onPress={() => mutate()} accessibilityRole="button">
        <Text>
          <Trans>Press to trigger todo mutation</Trans>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

i18n.loadAndActivate({ locale: "ro", messages: undefined });

export default function Root() {
  useReactQueryDevTools(queryClient);

  const theme = useTheme();

  return (
    <>
      <LanguagePreference />
      <Test />
      <View className="flex items-center">
        <Text>
          <Trans>This is the first build for FitLog app!</Trans>
          <Label
            labelText="This is a label component"
            as={TYPOGRAPHY_ELEMENTS.p}
            iconPosition={POSITIONS.left}
            additionalLabelStyle="text-black"
          />
        </Text>
        <Link href="/explore">Go to explore</Link>
        <Link href="/favorite">Go to favorite</Link>
        <StatusBar />
      </View>
    </>
  );
}
