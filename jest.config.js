module.exports = {
  preset: "jest-expo", // jest-expo is not working for now
  roots: ["<rootDir>"],
  verbose: true,
  globals: {
    "ts-jest": {
      diagnostics: false /* being set to false, when running the tests, typescript errors are avoided */,
      babelConfig: true,
      tsconfig: "tsconfig.json",
    },
  },

  cacheDirectory: ".jest/cache",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["./storybook", "./libs", "<rootDir>/src/assets", "<rootDir>/src/types"],
  modulePaths: ["<rootDir>"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|expo|@react-native-community|@react-navigation|(@react-native|react-native)|@expo/vector-icons/)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
