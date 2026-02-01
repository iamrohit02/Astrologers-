import React from 'react';

const Spinner = () => {
  return (
    <div className="relative w-12 h-12">
      {/* Outer Ring */}
      <div className="absolute w-full h-full border-4 border-purple-500/30 rounded-full"></div>
      
      {/* Spinning Segment */}
      <div className="absolute w-full h-full border-4 border-t-purple-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      
      {/* Inner Dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></div>
    </div>
  );
};

export default Spinner;
