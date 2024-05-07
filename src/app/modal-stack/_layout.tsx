import { router } from "expo-router";
import { Stack } from "expo-router/stack";

import Button from "../../components/atoms/button/button";
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
      {/* <Stack.Screen name="modal-screen-2" /> */}
    </Stack>
  );
}
