import dayjs from "dayjs";
import { Redirect, useNavigationContainerRef } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { useCurrentUser } from "../api/user/user.hooks";
import { useAuth } from "../hooks/use-auth/use-auth";

/** While navigation is still loading show an activity indicator
 * when navigation mounted, based on a condition if the user did the onboarding low he wil be redirect to onboarding screens / root screens
 */
export default function Page() {
  const { data } = useCurrentUser();
  const { isAuthenticated } = useAuth();
  const navigation = useNavigationContainerRef();

  const [ready, setReady] = useState(false);

  const isUserOnboarded = data?.record.isOnboarded;
  const redirectPath = isAuthenticated ? (isUserOnboarded ? "(tabs)" : "/onboarding-first-flow") : "/sign-in";

  useEffect(() => {
    if (!navigation?.isReady) return;

    setTimeout(() => setReady(true), 2000);
  }, [navigation?.isReady]);

  if (ready) return <Redirect href={redirectPath} />;

  return <ActivityIndicator style={{ marginTop: 100, width: 100, height: 100 }} />;
}
