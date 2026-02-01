import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import bn from './bn';

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('app-language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: savedLanguage, // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false // Avoid hydration mismatch
    }
  });

export default i18n;
