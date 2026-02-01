import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigationContext } from '../context/NavigationContext';

/**
 * useNavigation Hook
 * 
 * Provides enhanced navigation capabilities:
 * - Access to custom history stack
 * - Smart "Back" logic
 * - Helper for active route detection
 */
const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { goBack, history } = useNavigationContext();

  const navigateTo = (path, options = {}) => {
    navigate(path, options);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isRoot = location.pathname === '/' || location.pathname === '/home';

  return {
    currentPath: location.pathname,
    navigateTo,
    goBack,
    isActive,
    isRoot,
    history
  };
};

export default useNavigation;
