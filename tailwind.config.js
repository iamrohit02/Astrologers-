/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme: Dark Astrology / Cosmic / Premium
        cosmic: {
          950: '#0B0F19', // Darker midnight
          900: '#0f172a', // Midnight Blue (Base Bg)
          800: '#1e1b4b', // Deep Purple
          700: '#312e81', // Indigo
          600: '#4338ca', // Violet
          500: '#6366f1', // Primary Brand Color
          400: '#818cf8', // Soft Blue
          300: '#a5b4fc', // Light Violet
          100: '#e0e7ff', // Pale Blue
        },
        accent: {
          cyan: '#06b6d4', // Soft Cyan
          neon: '#00f2ff', // Neon Blue Glow
          gold: '#fbbf24', // Stars/Tarot accents
          purple: '#d946ef', // Mystic accents
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom right, #0f172a, #1e1b4b, #312e81)',
        'mystic-glow': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '-200% 0' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
