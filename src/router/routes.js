export const ROUTES = {
  // Public
  SPLASH: '/',
  LANGUAGE: '/language',
  ONBOARDING: '/onboarding',
  PROFILE_SETUP: '/profile-setup',

  // Protected / Main
  HOME: '/home',
  
  // Palm Reading
  PALM_SCAN: '/palm/scan',
  PALM_RESULT: '/palm/result',

  // Chat
  CHAT: '/chat',

  // Tarot
  TAROT_DECK: '/tarot',
  TAROT_RESULT: '/tarot/result',

  // Daily Guidance
  DAILY: '/daily',

  // Horoscope
  HOROSCOPE: '/horoscope',
  HOROSCOPE_RESULT: '/horoscope/result',

  // Love Reading
  LOVE: '/love',

  // Settings
  SETTINGS: '/settings',
  PRIVACY: '/privacy',
};

// Helper to check if a route requires bottom navigation
export const hasBottomNav = (pathname) => {
  const navRoutes = [
    ROUTES.HOME,
    ROUTES.CHAT,
    ROUTES.TAROT_DECK,
    ROUTES.HOROSCOPE,
    ROUTES.SETTINGS
  ];
  return navRoutes.includes(pathname);
};
