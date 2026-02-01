import React, { useEffect } from 'react';
import AppProvider from './context/AppProvider';
import AppRouter from './router/AppRouter';
import { Toaster } from 'react-hot-toast';

function App() {
  // Prevent context menu (right click) for app-like feel
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <AppProvider>
      <AppRouter />
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: 'rgba(30, 41, 59, 0.9)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            fontSize: '14px',
          },
        }}
      />
    </AppProvider>
  );
}

export default App;
