import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * Skeleton Loader Component
 * Displays a pulsating placeholder shape while data is loading.
 */
const SkeletonLoader = ({ 
  className, 
  width, 
  height, 
  variant = 'rect' // 'rect' | 'circle' | 'text'
}) => {
  const baseClasses = "bg-white/10 animate-pulse-slow";
  
  const variantClasses = {
    rect: "rounded-xl",
    circle: "rounded-full",
    text: "rounded h-4 w-full"
  };

  const style = {
    width: width,
    height: height
  };

  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], className)} 
      style={style}
    />
  );
};

export default SkeletonLoader;
