import axios from "axios";
import { router } from "expo-router";

import { generateRefreshToken } from "../auth/auth.requests";
import { getStorageItem, removeStorageItem, setStorageItem } from "./storage";

export const API_AXIOS_CLIENT = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

API_AXIOS_CLIENT.interceptors.response.use(
  response => response, // directly return the succesful responses
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

      try {
        const refreshToken = getStorageItem("refresh_token");
        const { record } = await generateRefreshToken(refreshToken);

        // ! a new refreshToken IS NOT generated again, we generate a new refresh token only at login phase
        setStorageItem("access_token", record.accessToken);
        setStorageItem("refresh_token", record.refreshToken);
        setStorageItem("is_authenticated", "true");

        API_AXIOS_CLIENT.defaults.headers.common.Authorization = `Bearer ${record.accessToken}`;
        return API_AXIOS_CLIENT(originalRequest); // Retry the original request with the new access token.
      } catch (refreshTokenError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        removeStorageItem("access_token");
        removeStorageItem("refresh_token");
        setStorageItem("is_authenticated", "false");
        /**Redirect to the sign in screen if the refresh token is expired */
        router.navigate("/");
        return Promise.reject(refreshTokenError);
      }
    }
    return Promise.reject(error);
  }
);
