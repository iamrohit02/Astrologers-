import { useEffect } from 'react';
import useNavigation from './useNavigation';
import useToast from './useToast'; // Will be created in File 42
import { useNavigationContext } from '../context/NavigationContext';

const useBackHandler = (isHome) => {
  const { goBack } = useNavigation();
  const { incrementBackPress, backPressCount, resetBackPress } = useNavigationContext();
  const { showToast } = useToast();

  useEffect(() => {
    // Only active on Home screen
    if (!isHome) return;

    const handlePopState = (event) => {
      // Prevent default back behavior immediately
      event.preventDefault();

      if (backPressCount === 0) {
        // First press: Push state back in so we stay on page
        window.history.pushState(null, '', window.location.pathname);
        incrementBackPress();
        showToast('Press back again to exit', 'info');
      } else {
        // Second press: Allow exit (or close window if installed PWA)
        resetBackPress();
        // Try to close if standalone, otherwise let history pop normally
        if (window.matchMedia('(display-mode: standalone)').matches) {
          window.close();
        } else {
          window.history.go(-2); // Go back to whatever was before the app
        }
      }
    };

    // Push a dummy state when mounting Home so we have something to pop
    window.history.pushState(null, '', window.location.pathname);
    
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      // Clean up dummy state if leaving component normally
      // Note: This is complex to get perfect in all browsers, 
      // but this covers the main PWA use case.
    };
  }, [isHome, backPressCount, incrementBackPress, resetBackPress, showToast]);
};

export default useBackHandler;
