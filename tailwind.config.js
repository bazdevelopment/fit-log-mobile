/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily: {
        inter: "Inter-Regular",
        "inter-bold": "Inter-Bold",
        "inter-black": "Inter-Black",
        "inter-extra-bold": "Inter-ExtraBold",
        "inter-extra-light": "Inter-ExtraLight",
        "inter-light": "Inter-Light",
        "inter-medium": "Inter-Medium",
        "inter-semi-bold": "Inter-SemiBold",
        "inter-thin": "Inter-Thin",
      },
      colors: {
        primary: {
          default: "var(--color-primary-default)",
        },
        secondary: {
          default: "var(--color-secondary-default)",
        },
        tertiary: {
          default: "var(--color-tertiary-default)",
        },
        "gray-light": "#FEFEFE",
      },
    },
  },
  plugins: [],
};
