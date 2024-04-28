import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import LanguagePreference from "../../components/language-preferrence";
import { ContentScroller } from "../../components/organisms/content-scroller";
import SegmentedControl from "../../components/organisms/segmented-control";
import { ISegmentedControlOption } from "../../components/organisms/segmented-control/SegmentedControl.interface";
import { useThemeScheme } from "../../hooks/use-theme-scheme/use-theme-scheme";
import { useTodoMutation } from "../../mutations/use-todo-mutation/use-todo-mutation";
import { useTodoQuery } from "../../queries/hooks/use-todo-query/use-todo-query";
import { Colors } from "../../styles/colors";

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

const options: ISegmentedControlOption[] = [
  { title: "Mon", subtitle: "1", id: 0 },
  { title: "Tue", subtitle: "2", id: 1 },
  { title: "Wed", subtitle: "3", id: 2 },
  { title: "Thu", subtitle: "4", id: 3 },
  { title: "Fri", subtitle: "5", id: 4 },
  { title: "Sat", subtitle: "6", id: 5 },
  { title: "Sun", subtitle: "7", id: 6 },
];
nt = 10; // Amount to decrease padding/margin by

export default function Root() {
  const { toggleColorScheme } = useThemeScheme();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const checkIsActive = (optionId: number) => {
    return selectedOption.id === optionId;
  };
  return (
    <View className="mt-28 flex-1">
      <SegmentedControl
        options={options}
        selectedOption={selectedOption}
        onOptionPress={setSelectedOption}
        withBorder
        borderColor={Colors.primary}
        spacing={2}
        checkIsActive={checkIsActive}
      />

      <ContentScroller />

      {/* <LanguagePreference />
      <Test />
      <TouchableOpacity accessibilityRole="button" onPress={toggleColorScheme}>
        <Text>Toggle light/dark mode</Text>
      </TouchableOpacity> */}
    </View>
  );
}
