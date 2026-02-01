import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/helpers';

const Loader = ({ 
  size = 'md', // sm, md, lg
  className,
  text
}) => {
  
  const sizes = {
    sm: 16,
    md: 24,
    lg: 48
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Loader2 
        className={cn("animate-spin text-purple-500", className)} 
        size={sizes[size]} 
      />
      {text && (
        <p className="text-sm font-medium text-slate-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
