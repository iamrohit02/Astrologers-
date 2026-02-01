import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.98
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9], // Custom cubic-bezier for "premium" feel
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const PageTransition = ({ children, className }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
