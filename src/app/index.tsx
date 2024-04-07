import { Redirect, useNavigationContainerRef } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";

export default function Page() {
  const isOnboardingDone = false;
  const navigation = useNavigationContainerRef();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!navigation?.isReady) return;

    setTimeout(() => setReady(true), 2000);
  }, [navigation?.isReady]);

  if (ready) return <Redirect href={isOnboardingDone ? "(tabs)" : "/onboarding"} />;

  return <ActivityIndicator style={{ marginTop: 100, width: 100, height: 100 }} />;
}
