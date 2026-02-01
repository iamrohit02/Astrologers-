import React from 'react';
import useNavigation from '../../hooks/useNavigation';
import { ChevronLeft } from 'lucide-react';
import { cn } from '../../utils/helpers';

const Header = ({ 
  title, 
  showBack = true, 
  rightAction = null,
  transparent = false,
  className 
}) => {
  const { goBack } = useNavigation();

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300",
        transparent ? "bg-transparent" : "bg-cosmic-900/80 backdrop-blur-md border-b border-white/5",
        "pt-[calc(env(safe-area-inset-top)+12px)]", // Safe area for iPhone notch
        className
      )}
    >
      <div className="flex items-center w-1/4">
        {showBack && (
          <button 
            onClick={goBack}
            className="p-2 -ml-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Go Back"
          >
            <ChevronLeft size={28} />
          </button>
        )}
      </div>

      <div className="flex-1 text-center">
        <h1 className="text-lg font-display font-bold tracking-wide text-white animate-fade-in">
          {title}
        </h1>
      </div>

      <div className="flex items-center justify-end w-1/4">
        {rightAction}
      </div>
    </header>
  );
};

export default Header;
