import type { StorybookConfig } from "@storybook/react-webpack5";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config: StorybookConfig = {
  stories: [
    // "../src/components/**/*.mdx",
    "../src/components/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-react-native-web",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

};
export default config;

