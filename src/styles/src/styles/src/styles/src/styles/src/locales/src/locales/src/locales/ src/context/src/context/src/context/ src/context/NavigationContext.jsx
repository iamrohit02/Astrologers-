import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationContext = createContext();

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [backPressCount, setBackPressCount] = useState(0);

  // Track navigation history
  useEffect(() => {
    setHistory(prev => {
      // Don't add duplicate consecutive entries
      if (prev.length > 0 && prev[prev.length - 1] === location.pathname) {
        return prev;
      }
      return [...prev, location.pathname];
    });
  }, [location.pathname]);

  const goBack = () => {
    if (history.length > 1) {
      navigate(-1);
    } else {
      // If no history, go home or exit
      if (location.pathname !== '/home') {
        navigate('/home');
      }
    }
  };

  const resetBackPress = () => setBackPressCount(0);

  const incrementBackPress = () => {
    setBackPressCount(prev => prev + 1);
    // Reset counter after 2 seconds
    setTimeout(() => setBackPressCount(0), 2000);
  };

  const value = {
    history,
    goBack,
    backPressCount,
    incrementBackPress,
    resetBackPress,
    currentPath: location.pathname
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
