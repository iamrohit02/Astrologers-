import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes safely
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Delays execution (useful for simulating loading states)
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Generates a random ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Capitalizes the first letter
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Safe JSON parse
 */
export const safeParse = (str, fallback = null) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return fallback;
  }
};
