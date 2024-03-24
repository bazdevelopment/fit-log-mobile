import { i18n } from "@lingui/core";
import { useEffect } from "react";

import { APP_LANGUAGE, TAppLanguage } from "../../constants/app-language";
import { useLanguage } from "../../context/language-context/language-context";
import { messages as messagesEn } from "../../locale/en/messages.js";
import { messages as messagesRo } from "../../locale/ro/messages.js";

/**
 * custom hook used to activate a specific message together with the correct messages
 */
export function useLocaleLanguage() {
  const { language } = useLanguage();
  /**
   * Todo : add here the user language preference
   */
  useEffect(() => {
    dynamicActivateLocale(language);
  }, [language]);
}

export function dynamicActivateLocale(locale: TAppLanguage) {
  const localeMappings = {
    [APP_LANGUAGE.en]: { locale, messages: messagesEn },
    [APP_LANGUAGE.ro]: { locale, messages: messagesRo },
  };

  const { locale: selectedLocale, messages } = localeMappings[locale];

  i18n.loadAndActivate({ locale: selectedLocale, messages });
}
