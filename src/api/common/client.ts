import axios from "axios";

/** Configure axios client */
export const API_AXIOS_CLIENT = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});
