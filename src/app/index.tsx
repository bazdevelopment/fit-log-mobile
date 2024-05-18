import { Redirect, useNavigationContainerRef } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { useAuth } from "../hooks/use-auth/use-auth";

/** While navigation is still loading show an activity indicator
 * when navigation mounted, based on a condition if the user did the onboarding low he wil be redirect to onboarding screens / root screens
 */
export default function Page() {
  const isOnboardingDone = true;
  const navigation = useNavigationContainerRef();
  const [ready, setReady] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!navigation?.isReady) return;

    setTimeout(() => setReady(true), 2000);
  }, [navigation?.isReady]);

  //  todo: use the condition below after second onboarding floe is ready
  //if (ready) return <Redirect href={isOnboardingDone ? "(tabs)" : "/onboarding"} />;
  if (ready) return <Redirect href={isAuthenticated ? "(tabs)" : "/sign-up"} />;

  return <ActivityIndicator style={{ marginTop: 100, width: 100, height: 100 }} />;
}
