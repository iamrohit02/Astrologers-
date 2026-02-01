import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * SafeArea Component
 * Wraps content to ensure it respects device safe areas (notches, home indicators).
 * 
 * @param {boolean} top - Apply top padding (status bar)
 * @param {boolean} bottom - Apply bottom padding (home indicator)
 */
const SafeArea = ({ 
  children, 
  className, 
  top = true, 
  bottom = true 
}) => {
  return (
    <div 
      className={cn(
        "w-full",
        top && "pt-[env(safe-area-inset-top)]",
        bottom && "pb-[env(safe-area-inset-bottom)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SafeArea;
