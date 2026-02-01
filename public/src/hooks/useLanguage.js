import { useTranslation } from 'react-i18next';
import { useLanguageContext } from '../context/LanguageContext';

/**
 * useLanguage Hook
 * 
 * Abstraction layer over i18next and our custom LanguageContext.
 * Provides easy access to translation functions and language switching.
 */
const useLanguage = () => {
  const { t, i18n } = useTranslation();
  const { currentLanguage, changeLanguage, isRTL } = useLanguageContext();

  // Helper to get current language name for UI
  const getLanguageName = (code) => {
    switch (code) {
      case 'en': return 'English';
      case 'bn': return 'বাংলা';
      default: return 'English';
    }
  };

  return {
    t, // The translation function: t('key')
    currentLanguage,
    changeLanguage,
    isRTL,
    getLanguageName,
    availableLanguages: ['en', 'bn']
  };
};

export default useLanguage;
