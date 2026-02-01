import React from 'react';
import { cn } from '../../utils/helpers';

const Input = React.forwardRef(({ 
  label, 
  error, 
  icon: Icon,
  className,
  containerClassName,
  ...props 
}, ref) => {
  return (
    <div className={cn("w-full space-y-2", containerClassName)}>
      {label && (
        <label className="block text-sm font-medium text-slate-300 ml-1">
          {label}
        </label>
      )}
      
      <div className="relative group">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-400 transition-colors">
            <Icon size={18} />
          </div>
        )}
        
        <input
          ref={ref}
          className={cn(
            "w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 text-white placeholder:text-slate-500",
            "focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50",
            "transition-all duration-200",
            Icon ? "pl-10 pr-4" : "px-4",
            error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
      </div>

      {error && (
        <p className="text-xs text-red-400 ml-1 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
