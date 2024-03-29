import { vars } from "nativewind";

import { Colors } from "./colors";

export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)",
    border: Colors.lightGrey,
    card: "hsl(0 0% 100%)",
    notification: "hsl(0 84.2% 60.2%)",
    primary: "hsl(240 5.9% 10%)",
    text: "hsl(240 10% 3.9%)",
  },
  dark: {
    background: "hsl(240 10% 3.9%)",
    border: "hsl(240 3.7% 15.9%)",
    card: "hsl(240 10% 3.9%)",
    notification: "hsl(0 72% 51%)",
    primary: "hsl(0 0% 98%)",
    text: "hsl(0 0% 98%)",
  },
};

export const themes_tw = {
  light: vars({
    "--color-primary-default": Colors.primary,
    "--color-secondary-default": Colors.secondary,
    "--color-tertiary-default": Colors.tertiary,
    "--color-grey-default": Colors.grey,
  }),
  dark: vars({
    "--color-primary-default": "#402580",
    "--color-secondary-default": "#c6432c",
    "--color-tertiary-default": "#05070a",
    "--color-grey-default": "#595959",
  }),
};
