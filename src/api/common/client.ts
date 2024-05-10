import axios from "axios";
// import { Env } from '@env';

/** Configure axios client */
export const API_AXIOS_CLIENT = axios.create({
  /**
   * TODO: to be added API URL from .env file
   */
  baseURL: "ENV.API_URL",
});
