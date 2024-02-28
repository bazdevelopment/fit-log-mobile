/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  catalogs: [
    {
      path: "<rootDir>/src/locale/{locale}/messages",
      include: ["<rootDir>"],
      exclude: ["**/node_modules/**"],
    },
  ],
  compileNamespace: "cjs",
  fallbackLocales: {},
  format: "po",
  locales: ["en", "ro"],
  orderBy: "messageId",
  pseudoLocale: "",
  rootDir: ".",
  runtimeConfigModule: ["@lingui/core", "i18n"],
  sourceLocale: "",
};
