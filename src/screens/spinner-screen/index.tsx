import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { Modal } from "react-native";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

import { Colors } from "../../styles/colors";

/** Custom screen for showing an activity indicator as an overlay when a request is performed */
const SpinnerScreen = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const isRequesting = Boolean(isFetching) || Boolean(isMutating);

  return (
    <Modal transparent animationType="fade" visible={isRequesting} statusBarTranslucent>
      <View className="absolute z-10 flex size-full items-center justify-center  bg-black  opacity-75">
        <ActivityIndicator size="small" color={Colors.secondary} />
      </View>
    </Modal>
  );
};

export default SpinnerScreen;
