import React from 'react';
import { cn } from '../../utils/helpers';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', // primary, secondary, outline, ghost, danger
  size = 'md', // sm, md, lg, icon
  isLoading = false,
  fullWidth = false,
  className, 
  disabled,
  type = 'button',
  ...props 
}, ref) => {
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/25 text-white border-none",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/5",
    outline: "bg-transparent border border-white/20 hover:border-white/40 text-white hover:bg-white/5",
    ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border-none",
    danger: "bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20",
    cosmic: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 border-none"
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10 p-2 flex items-center justify-center"
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
      
      {/* Glossy Effect Overlay */}
      {variant === 'primary' && !disabled && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white/10 pointer-events-none" />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
