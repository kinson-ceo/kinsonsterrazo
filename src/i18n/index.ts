import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslation from "./locales/en.json";
import swTranslation from "./locales/sw.json";

// Define the available languages
export const languages = {
  en: { name: "English", code: "en", flag: "🇬🇧" },
  sw: { name: "Swahili", code: "sw", flag: "🇰🇪" },
};

// Define all translation resources
const resources = {
  en: {
    translation: enTranslation,
  },
  sw: {
    translation: swTranslation,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  });

export default i18n;
