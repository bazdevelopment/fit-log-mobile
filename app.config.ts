import type { ConfigContext, ExpoConfig } from "@expo/config";

import { Env } from "./env";
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  slug: "fit-log-mobile",
  scheme: Env.SCHEME,
  version: Env.VERSION.toString(),
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: Env.BUNDLE_ID,
    userInterfaceStyle: "automatic",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: Env.PACKAGE,
    userInterfaceStyle: "automatic",
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  plugins: [
    "expo-router",
    [
      "app-icon-badge",
      {
        enabled: true,
        badges: [
          {
            type: "banner",
            color: "white",
            text: "Development",
          },
          {
            text: "V1.1.0",
            type: "ribbon",
            color: "white",
          },
        ],
      },
    ],
  ],
});
