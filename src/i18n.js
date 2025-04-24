import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import bs from "./locales/bs/translation.json";

i18n
  .use(LanguageDetector) // 👈 Add this
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      bs: { translation: bs },
    },
    fallbackLng: "en", // 👈 fallback if detected language isn't supported
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // Detect language from these sources
      caches: ["localStorage"], // Save selected language
    },
  });

export default i18n;
