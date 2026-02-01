import React from 'react';
import { WifiOff } from 'lucide-react';

const OfflineIndicator = () => {
  return (
    <div className="w-full bg-red-500/90 text-white px-4 py-2 flex items-center justify-center space-x-2 text-sm font-medium backdrop-blur-sm relative z-50 animate-slide-up">
      <WifiOff size={16} />
      <span>You are offline. AI features are unavailable.</span>
    </div>
  );
};

export default OfflineIndicator;
