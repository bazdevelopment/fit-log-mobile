import { View } from "react-native";

import Button from "../../../components/atoms/button/button";
import Label from "../../../components/atoms/label";
import { TYPOGRAPHY_ELEMENTS } from "../../../constants/typography-elements";
import { onLogout } from "../../../utilities/logout";

const Page = () => {
  return (
    <View className="mt-32">
      <Label labelText="This is the profile page" as={TYPOGRAPHY_ELEMENTS.p} />
      <Button buttonText="Log out" variant="primary" onPress={onLogout} />
    </View>
  );
};

export default Page;
