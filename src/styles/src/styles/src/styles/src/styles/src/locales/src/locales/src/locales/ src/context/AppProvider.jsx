import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeContext';
import { NavigationProvider } from './NavigationContext';

/**
 * AppProvider
 * 
 * A Composition Component that wraps the application in all necessary
 * global context providers. This ensures strictly ordered initialization.
 * 
 * Order of wrapping:
 * 1. Language (Lowest level, needed for text)
 * 2. Theme (Visuals)
 * 3. User (Personal data)
 * 4. Navigation (State of UI flow)
 */
const AppProvider = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <UserProvider>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </UserProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default AppProvider;
