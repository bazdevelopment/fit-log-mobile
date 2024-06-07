import { router } from "expo-router";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";

import { setStorageItem } from "../../../api/common/storage";
import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label";
import { TYPOGRAPHY_ELEMENTS } from "../../../constants/typography-elements";

const Page = () => {
  return (
    <View>
      <Label labelText="This is the profile page" as={TYPOGRAPHY_ELEMENTS.p} />
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
    </View>
  );
};

export default Page;
