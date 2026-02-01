import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

const GlassCard = ({ 
  children, 
  className, 
  onClick,
  variant = 'default', // default, strong, light
  hoverEffect = false,
  animate = false,
  delay = 0
}) => {
  
  const variants = {
    default: "bg-white/5 border-white/10 shadow-lg backdrop-blur-md",
    strong: "bg-slate-900/60 border-white/10 shadow-xl backdrop-blur-xl",
    light: "bg-white/10 border-white/20 shadow-md backdrop-blur-sm",
    gradient: "bg-gradient-to-br from-white/10 to-transparent border-white/10 shadow-lg backdrop-blur-md"
  };

  const Wrapper = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: delay * 0.1 }
  } : {};

  return (
    <Wrapper
      onClick={onClick}
      className={cn(
        "relative rounded-2xl border overflow-hidden transition-all duration-300",
        variants[variant],
        hoverEffect && "hover:bg-white/10 hover:-translate-y-1 hover:shadow-purple-500/10 cursor-pointer",
        className
      )}
      {...animationProps}
    >
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Wrapper>
  );
};

export default GlassCard;
