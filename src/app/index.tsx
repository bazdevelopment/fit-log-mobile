import { Redirect, useNavigationContainerRef } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { useCurrentUser } from "../api/user/user.hooks";
import { useAuth } from "../hooks/use-auth/use-auth";

/** While navigation is still loading show an activity indicator
 * when navigation mounted, based on a condition if the user did the onboarding low he wil be redirect to onboarding screens / root screens
 */
export default function Page() {
  const { data: currenUser } = useCurrentUser();
  const userInfo = currenUser?.record;
  const { isAuthenticated } = useAuth();
  const navigation = useNavigationContainerRef();
  const [ready, setReady] = useState(false);

  const isUserOnboarded = userInfo?.isOnboarded;
  const isMembershipCardScanned = userInfo?.cardMembershipId;

  const redirectPath = isAuthenticated
    ? !isMembershipCardScanned
      ? "/scan-membership"
      : isUserOnboarded
        ? "(tabs)"
        : "/onboarding-first-flow"
    : "/sign-in";

  useEffect(() => {
    if (!navigation?.isReady) return;

    setTimeout(() => setReady(true), 2000);
  }, [navigation?.isReady]);

  if (ready) return <Redirect href={redirectPath} />;

  return <ActivityIndicator style={{ marginTop: 100, width: 100, height: 100 }} />;
}
