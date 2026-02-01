import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Default to 'cosmic' (Dark Mode)
  const [theme, setTheme] = useState('cosmic');
  
  // Preference for reduced motion
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check system preference for motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    // For now, we only support cosmic, but structure allows expansion
    console.log('Theme is locked to Cosmic Dark Mode');
  };

  const value = {
    theme,
    toggleTheme,
    reduceMotion
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
