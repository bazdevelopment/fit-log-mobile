/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily: {
        primary: "Primary-Regular",
        "primary-bold": "Primary-Bold",
        "primary-semi-bold": "Primary-Semi-Bold",
        "primary-medium": "Primary-Medium",
        "primary-light": "Primary-Light",
        "primary-italic": "Primary-Italic",
        "primary-bold-italic": "Primary-Bold-Italic",
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
