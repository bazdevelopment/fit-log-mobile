import { getStorageItem } from "../../api/common/storage";

/**
 * Custom hook used to store authentication state
 */
export const useAuth = () => {
  const authenticationState = JSON.parse(getStorageItem("is_authenticated"));
  const accessToken = getStorageItem("access_token");
  const refreshToken = getStorageItem("refresh_token");

  const isAuthenticated = Boolean(authenticationState) && Boolean(accessToken) && Boolean(refreshToken);
  return { isAuthenticated };
};
