import { router } from "expo-router";
import { Stack } from "expo-router/stack";

import ArrowLeft from "../../assets/icons/ArrowLeft";
import Button from "../../components/atoms/button/button";
import Icon from "../../components/atoms/icon";
import { Colors } from "../../styles/colors";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="exercise-selection-modal"
        options={{
          headerTintColor: Colors.white,
          headerStyle: { backgroundColor: Colors.primary },
          headerLeft: () => <Button buttonText="Back" variant="primary" onPress={() => router.back()} />,
        }}
      />
      <Stack.Screen
        name="exercise-details-modal"
        options={{
          headerTintColor: Colors.white,
          headerStyle: { backgroundColor: Colors.primary },
          headerLeft: () => (
            <Icon
              iconElement={<ArrowLeft width={23} height={23} color={Colors.white} />}
              additionalInnerClassName="p-0"
              additionalClassName="ml-[-13px]"
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </Stack>
  );
}
