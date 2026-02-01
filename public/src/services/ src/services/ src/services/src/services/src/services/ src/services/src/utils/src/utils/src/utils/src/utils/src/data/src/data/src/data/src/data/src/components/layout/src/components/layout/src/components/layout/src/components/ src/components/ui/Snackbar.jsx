import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Snackbar = ({ message, isOpen, duration = 3000, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] min-w-[200px]"
        >
          <div className="bg-slate-800/90 text-white text-sm px-4 py-3 rounded-full shadow-lg text-center backdrop-blur-md border border-white/10">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Snackbar;
