import toast from 'react-hot-toast';

/**
 * useToast Hook
 * 
 * Centralized toast notification handler.
 * Enforces consistent styling (Glassmorphism) and behavior across the app.
 */
const useToast = () => {
  
  const showToast = (message, type = 'default') => {
    // Dismiss all existing toasts to prevent stacking on mobile
    toast.dismiss();

    const styles = {
      style: {
        background: 'rgba(15, 23, 42, 0.95)', // Cosmic 900
        color: '#fff',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 16px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        maxWidth: '90vw',
      },
    };

    switch (type) {
      case 'success':
        toast.success(message, {
          ...styles,
          iconTheme: {
            primary: '#10b981', // Emerald 500
            secondary: '#fff',
          },
        });
        break;
      
      case 'error':
        toast.error(message, {
          ...styles,
          iconTheme: {
            primary: '#ef4444', // Red 500
            secondary: '#fff',
          },
        });
        break;
      
      case 'loading':
        return toast.loading(message, {
          ...styles,
          style: {
            ...styles.style,
            border: '1px solid rgba(99, 102, 241, 0.3)', // Indigo border
          }
        });

      case 'info':
      default:
        toast(message, {
          ...styles,
          icon: '✨',
        });
        break;
    }
  };

  const dismissToast = (toastId) => {
    toast.dismiss(toastId);
  };

  return {
    showToast,
    dismissToast
  };
};

export default useToast;
