import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav'; // Will be created in File 64
import { hasBottomNav } from '../../router/routes';
import useNetworkStatus from '../../hooks/useNetworkStatus';
import OfflineIndicator from '../common/OfflineIndicator'; // Will be created in File 68

const AppShell = () => {
  const location = useLocation();
  const showNav = hasBottomNav(location.pathname);
  const { isOnline } = useNetworkStatus();

  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-hidden bg-cosmic-900 text-white">
      
      {/* Network Status Banner */}
      {!isOnline && <OfflineIndicator />}

      {/* Main Page Content Area */}
      {/* We add padding bottom if the nav bar is visible so content isn't hidden behind it */}
      <main className={`flex-1 w-full relative z-0 ${showNav ? 'pb-[90px]' : 'pb-safe'}`}>
        <Outlet />
      </main>

      {/* Navigation Bar (Conditional) */}
      {showNav && <BottomNav />}
      
      {/* Global Background Elements (Stars/Glows) */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>
    </div>
  );
};

export default AppShell;
