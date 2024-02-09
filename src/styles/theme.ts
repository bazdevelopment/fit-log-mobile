import { THEME } from "enums/theme";
import { ITheme } from "types/theme.interface";

import { typography } from "./typography";

export const lightTheme: ITheme = {
  colorScheme: THEME.LIGHT,
  palette: {
    default: {
      background: "",
      backgroundLight: '"',
      text: "",
      textLight: "",
      textInverted: "",
      link: "",
      border: "",
      borderDark: "",
      icon: "",

      // non-standard
      textVeryLight: "",
      replyLine: "",
      replyLineDot: "",
      unreadNotifBg: "",
      unreadNotifBorder: "",
      postCtrl: "",
      brandText: "",
      emptyStateIcon: "",
      borderLinkHover: "",
    },
    primary: {
      background: "",
      backgroundLight: "",
      text: "",
      textLight: "",
      textInverted: "",
      link: "",
      border: "",
      borderDark: "",
      icon: "",
    },
    secondary: {
      background: "",
      backgroundLight: "",
      text: "",
      textLight: "",
      textInverted: "",
      link: "",
      border: "",
      borderDark: "",
      icon: "",
    },
    inverted: {
      background: "",
      backgroundLight: "",
      text: "",
      textLight: "",
      textInverted: "",
      link: "",
      border: "",
      borderDark: "",
      icon: "",
    },
    error: {
      background: "",
      backgroundLight: "",
      text: "",
      textLight: "",
      textInverted: "",
      link: "",
      border: "",
      borderDark: "",
      icon: "",
    },
  },
  typography,
} as const;

export const darkTheme = {
  ...lightTheme,
  colorScheme: THEME.DARK,
  palette: {
    ...lightTheme.palette,
    default: {
      background: "",
      backgroundLight: "",
      text: "",
      textLight: "",
      textInverted: "",
      link: "",
      border: "",
      borderDark: "",
      icon: "",

      // non-standard
      textVeryLight: "",
      replyLine: "",
      replyLineDot: "",
      unreadNotifBg: "",
      unreadNotifBorder: "",
      postCtrl: "",
      brandText: "",
      emptyStateIcon: "",
      borderLinkHover: "",
    },
    primary: {
      ...lightTheme.palette.primary,
      textInverted: "",
    },
    secondary: {
      ...lightTheme.palette.secondary,
      textInverted: "",
    },
    inverted: {
      background: "",
      backgroundLight: "",
      text: "",
      textLight: "",
      textInverted: "",
      link: "",
      border: "",
      borderDark: "",
      icon: "",
    },
  },
} as const;
