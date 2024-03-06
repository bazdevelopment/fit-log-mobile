/* eslint-disable @typescript-eslint/no-floating-promises */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { TAppLanguage } from "../../enums/app-language";

const defaultLanguage = "en";

/**
 * Custom hook used to select a specific language for the entire app
 */
export const useLanguagePreference = () => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    loadLanguagePreference();
  }, []);

  /** load the saved language from  async storage */
  const loadLanguagePreference = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage !== null) {
        setLanguage(savedLanguage as TAppLanguage);
      }
    } catch (error) {
      console.error("Error loading language preference:", error);
    }
  };

  /**change the language and save it to async storage */
  const changeLanguagePreference = async (selectedLanguage: string) => {
    try {
      await AsyncStorage.setItem("language", selectedLanguage);
      setLanguage(selectedLanguage as TAppLanguage);
    } catch (error) {
      console.error("Error saving language preference:", error);
    }
  };

  return { language, changeLanguagePreference };
};
