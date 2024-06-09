import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { IErrorResponse } from "../../api/auth/auth.types";
import { useSubmitMembershipCardId } from "../../api/membership-card/membership-card.hooks";
import Label from "../../components/atoms/label";
import ScreenWrapper from "../../components/templates/screen-wrapper";
import useArduinoSocket from "../../hooks/use-arduino-socket";

const scanCardAnimation = require("../../assets/animations/scan-card-animation.json");

const handleOnSuccess = () => {
  router.navigate("(tabs)");
};

const handleOnError = (error: IErrorResponse) => {
  showMessage({
    message: error.message,
    type: "danger",
    duration: 10000,
  });
};

/**
 * Screen used to scan membership card after login
 */
const ScanMembershipCardScreen = () => {
  const { mutate: handleSubmitMembershipCardId } = useSubmitMembershipCardId({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  useArduinoSocket({ onSubmitMembershipCardId: handleSubmitMembershipCardId, handleRegisterGymVisit: null });
  return (
    <ScreenWrapper>
      <View className="mt-32 items-center justify-center">
        <LottieView loop autoPlay source={scanCardAnimation} style={{ width: 200, height: 200 }} />
        <Label
          labelText="Please scan the membership card!"
          as="h3"
          additionalLabelStyle="text-gray-800 font-primary-bold ml-2 mt-4 text-center"
        />
      </View>
    </ScreenWrapper>
  );
};

export default ScanMembershipCardScreen;
