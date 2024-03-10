import { i18n } from "@lingui/core";
import { I18nProvider as DefaultI18nProvider } from "@lingui/react";
import React from "react";

import { useLocaleLanguage } from "../hooks/use-locale-language/use-locale-language";

/**
 *The `I18nProvider` function is a React component used for internationalization (i18n) in React applications.
  It is designed to wrap around other components to provide language localization capabilities.
 */
export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useLocaleLanguage();
  return <DefaultI18nProvider i18n={i18n}>{children}</DefaultI18nProvider>;
}
