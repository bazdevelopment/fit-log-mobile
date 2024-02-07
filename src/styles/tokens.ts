export const colors = {
  // primary
  primary: "#6843fe",
  // secondary
  secondary: "#6b5bab",
  // success
  success: "#00ac86",
  // error
  error: "#c50707",
  // warning
  warning: "#ffc107",
  // cancel
  cancel: "#eae6fc",
  // utility
  transparent: "transparent",
  white: "#fff",
  black: "#000",
  grey: "#dee1e6",
  greyDark: "#878787",
  greyLight: "#cecece",
  blue: "#6843fe",
  red: "#d43f19",
  lightBlack: "#424040",
  greyLighter: "#f0f0f0",
} as const;

export const fontSize = {
  _2xs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  _2xl: 22,
  _3xl: 26,
  _4xl: 32,
  _5xl: 40,
} as const;

export const lineHeight = {
  none: 1,
  normal: 1.5,
  relaxed: 1.625,
} as const;

export const borderRadius = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  full: 999,
} as const;

export const fontWeight = {
  normal: "400",
  semibold: "600",
  bold: "900",
} as const;

export const space = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  _2xl: 24,
  _3xl: 28,
  _4xl: 32,
  _5xl: 40,
} as const;

export type TColor = keyof typeof colors;
export type TSpace = keyof typeof space;
export type TFontSize = keyof typeof fontSize;
export type TLineHeight = keyof typeof lineHeight;
export type TBorderRadius = keyof typeof borderRadius;
export type TFontWeight = keyof typeof fontWeight;
