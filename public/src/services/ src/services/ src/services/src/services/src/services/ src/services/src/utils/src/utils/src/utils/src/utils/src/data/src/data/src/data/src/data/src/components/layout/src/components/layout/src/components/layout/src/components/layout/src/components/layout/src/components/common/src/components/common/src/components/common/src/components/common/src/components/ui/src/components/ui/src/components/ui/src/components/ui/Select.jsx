import React from 'react';
import { cn } from '../../utils/helpers';
import { ChevronDown } from 'lucide-react';

const Select = React.forwardRef(({ 
  label, 
  error, 
  options = [], 
  placeholder = "Select an option",
  className,
  ...props 
}, ref) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-300 ml-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-white",
            "focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200",
            error && "border-red-500/50",
            className
          )}
          {...props}
        >
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
              {opt.label}
            </option>
          ))}
        </select>
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <ChevronDown size={16} />
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-400 ml-1">
          {error}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
