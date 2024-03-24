module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react-native-a11y/ios",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["react", "react-native", "react-hooks", "prettier", "@typescript-eslint", "simple-import-sort", "lingui"],
  rules: {
    "no-unused-vars": 0,
    "no-irregular-whitespace": 0,
    "no-useless-escape": 0,
    "no-extra-boolean-cast": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": 1, // to be changed with 2(error) in the future, now is 1 for the git commit command to work
    "react-hooks/exhaustive-deps": 1,
    "react/display-name": 0,
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react/jsx-no-bind": 0,
    "react/jsx-boolean-value": 0,
    "react/self-closing-comp": ["error", { component: true }],
    "react/react-in-jsx-scope": 0,
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true, argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/unbound-method": 0,
    "prettier/prettier": 1,
    "react-native/no-unused-styles": 0, // cannot handle dynamic stylesheet(e.g. for the case when we use theme in Stylesheet.create)
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 0,
    "react-native/no-single-element-style-arrays": 2,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
