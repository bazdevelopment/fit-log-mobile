import { i18n } from "@lingui/core";
import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { IErrorResponse } from "../../api/auth/auth.types";
import { queryClient } from "../../api/common";
import { getStorageItem } from "../../api/common/storage";
import { useRegisterGymVisit, useTodayGymVisit } from "../../api/membership-card/membership-card.hooks";
import Label from "../../components/atoms/label";
import LanguagePreference from "../../components/language-preferrence";
import ContentScroller from "../../components/organisms/content-scroller";
import { useScrollContext } from "../../context/scroll-context";
import useArduinoSocket from "../../hooks/use-arduino-socket";
import { useThemeScheme } from "../../hooks/use-theme-scheme/use-theme-scheme";
import { playSound } from "../../utilities/play-sound";

i18n.loadAndActivate({ locale: "ro", messages: undefined });

const handleOnSuccess = data => {
  playSound("success");
  showMessage({
    message: data.message,
    type: "success",
    duration: 5000,
  });

  queryClient.invalidateQueries({ queryKey: ["verify-today-gym-visit-key"] });
};

const handleOnError = (error: IErrorResponse) => {
  playSound("error");
  showMessage({
    message: error.message,
    type: "danger",
    duration: 10000,
  });
};

export default function Root() {
  const { resetHeader } = useScrollContext();
  const { mutateAsync: handleRegisterGymVisit } = useRegisterGymVisit({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  useArduinoSocket({ onSubmitMembershipCardId: () => null, handleRegisterGymVisit });
  const { data } = useTodayGymVisit();
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
    <View className="mt-0 flex-1">
      <ContentScroller
        ref={scrollViewRef}
        isCardScannedToday={!!data?.record?.cardMembershipId}
        cardScannedDate={data?.record?.createdAt}
      />

      {/* <LanguagePreference />
      <TouchableOpacity accessibilityRole="button" onPress={toggleColorScheme}>
        <Text>Toggle light/dark mode</Text>
      </TouchableOpacity> */}
    </View>
  );
}
