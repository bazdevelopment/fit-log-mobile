import axios from "axios";

/** Configure axios client */
export const API_AXIOS_CLIENT = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

// TODO: check if you can use only instance of axios and interceptors to be optionally
export const API_AXIOS_CLIENT_WITH_INTERCEPTOR = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

const accessToken = ""; //should be fetched from the secure storage

API_AXIOS_CLIENT_WITH_INTERCEPTOR.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
