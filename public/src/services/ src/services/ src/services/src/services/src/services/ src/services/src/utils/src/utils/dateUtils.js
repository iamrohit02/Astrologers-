import { format, isValid, parseISO, differenceInYears } from 'date-fns';
import { enUS, bn } from 'date-fns/locale';

/**
 * Formats a date string into a readable format based on language.
 * @param {string|Date} date - The date to format
 * @param {string} language - 'en' or 'bn'
 * @param {string} formatStr - Format string (default: 'PPP')
 */
export const formatDate = (date, language = 'en', formatStr = 'PPP') => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) return '';

  return format(dateObj, formatStr, {
    locale: language === 'bn' ? bn : enUS
  });
};

/**
 * Calculates age from date of birth
 */
export const calculateAge = (dob) => {
  if (!dob) return 0;
  const date = typeof dob === 'string' ? parseISO(dob) : dob;
  return differenceInYears(new Date(), date);
};

/**
 * Get greeting based on time of day
 */
export const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};
