export const APP_LANGUAGE = {
  en: "en",
  ro: "ro",
} as const;

export type TAppLanguage = keyof typeof APP_LANGUAGE;

interface AppLanguageConfig {
  code2: TAppLanguage;
  name: string;
}

export const APP_LANGUAGES: AppLanguageConfig[] = [
  { code2: APP_LANGUAGE.en, name: "English" },
  { code2: APP_LANGUAGE.ro, name: "Romanian; Moldavian; Moldovan" },
];
