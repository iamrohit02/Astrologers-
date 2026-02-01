import React from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

const LoadingOverlay = ({ message }) => {
  const { t } = useTranslation();
  const displayMessage = message || t('common.loading');

  // Render to body to ensure it sits on top of everything
  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cosmic-950/80 backdrop-blur-sm animate-fade-in">
      
      {/* Spinning Orb */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-t-transparent border-r-cyan-400 border-b-transparent border-l-purple-400 rounded-full animate-spin-slow reverse"></div>
        
        {/* Glowing Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse"></div>
        </div>
      </div>

      {/* Message */}
      <h3 className="text-xl font-display font-medium text-white tracking-wide animate-pulse">
        {displayMessage}
      </h3>
      <p className="mt-2 text-sm text-slate-400">
        Aligning energy...
      </p>

    </div>,
    document.body
  );
};

export default LoadingOverlay;
