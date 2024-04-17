import { Redirect, useNavigationContainerRef } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

/** While navigation is still loading show an activity indicator
 * when navigation mounted, based on a condition if the user did the onboarding low he wil be redirect to onboarding screens / root screens
 */
export default function Page() {
  const isOnboardingDone = false;
  const navigation = useNavigationContainerRef();
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    if (!navigation?.isReady) return;

    setTimeout(() => setReady(true), 2000);
  }, [navigation?.isReady]);

  //  todo: use the condition below after second onboarding floe is ready
  //if (ready) return <Redirect href={isOnboardingDone ? "(tabs)" : "/onboarding"} />;
  if (ready) return <Redirect href={isOnboardingDone ? "/onboarding-first-flow" : "/onboarding-second-flow"} />;

  return <ActivityIndicator style={{ marginTop: 100, width: 100, height: 100 }} />;
}
