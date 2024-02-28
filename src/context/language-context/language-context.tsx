/* eslint-disable @typescript-eslint/no-misused-promises */
import { useLanguagePreference } from "hooks/use-language-preference/use-language-preference";
import { createContext, useContext } from "react";

interface LanguageContextType {
  language: string; // Assuming language is a string, you can replace it with the appropriate type
  onChangeLanguagePreference: (newLanguage: string) => void; // Assuming changeLanguagePreference takes a string parameter
}

const defaultValue: LanguageContextType = {
  language: "",
  onChangeLanguagePreference: () => null,
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const LanguageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { language, changeLanguagePreference } = useLanguagePreference();
  return (
    <LanguageContext.Provider value={{ language, onChangeLanguagePreference: changeLanguagePreference }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
