import React from 'react';
import { toast } from 'react-hot-toast';
import { X } from 'lucide-react';

/**
 * Custom Toast UI Component
 * Used when we need a complex notification (with images/actions)
 * instead of just text.
 */
const Toast = ({ t, title, message, icon }) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-cosmic-900 border border-white/10 shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5 text-2xl">
            {icon || '✨'}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">
              {title}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-white/10">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-slate-400 hover:text-white focus:outline-none"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
