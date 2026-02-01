import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppShell from '../components/layout/AppShell';
import SplashScreen from '../components/splash/SplashScreen'; // We will create this later
import LoadingOverlay from '../components/common/LoadingOverlay'; // We will create this later

// Lazy Load Pages for Performance
const OnboardingPage = lazy(() => import('../pages/OnboardingPage'));
const ProfileSetupPage = lazy(() => import('../pages/ProfileSetupPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const PalmScanPage = lazy(() => import('../pages/PalmScanPage'));
const PalmResultPage = lazy(() => import('../pages/PalmResultPage'));
const ChatPage = lazy(() => import('../pages/ChatPage'));
const TarotPage = lazy(() => import('../pages/TarotPage'));
const TarotResultPage = lazy(() => import('../pages/TarotResultPage'));
const DailyGuidancePage = lazy(() => import('../pages/DailyGuidancePage'));
const HoroscopePage = lazy(() => import('../pages/HoroscopePage'));
const HoroscopeResultPage = lazy(() => import('../pages/HoroscopeResultPage'));
const LoveReadingPage = lazy(() => import('../pages/LoveReadingPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const LanguagePage = lazy(() => import('../pages/LanguagePage'));

// Wrapper for AnimatePresence to work with Routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Splash & Intro */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/language" element={
          <Suspense fallback={<LoadingOverlay />}>
            <LanguagePage />
          </Suspense>
        } />
        <Route path="/onboarding" element={
          <Suspense fallback={<LoadingOverlay />}>
            <OnboardingPage />
          </Suspense>
        } />
        <Route path="/profile-setup" element={
          <Suspense fallback={<LoadingOverlay />}>
            <ProfileSetupPage />
          </Suspense>
        } />

        {/* Main App Routes (Wrapped in Shell) */}
        <Route element={<AppShell />}>
          <Route path="/home" element={
            <Suspense fallback={<LoadingOverlay />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/palm/scan" element={
            <Suspense fallback={<LoadingOverlay />}>
              <PalmScanPage />
            </Suspense>
          } />
          <Route path="/palm/result" element={
            <Suspense fallback={<LoadingOverlay />}>
              <PalmResultPage />
            </Suspense>
          } />
          <Route path="/chat" element={
            <Suspense fallback={<LoadingOverlay />}>
              <ChatPage />
            </Suspense>
          } />
          <Route path="/tarot" element={
            <Suspense fallback={<LoadingOverlay />}>
              <TarotPage />
            </Suspense>
          } />
          <Route path="/tarot/result" element={
            <Suspense fallback={<LoadingOverlay />}>
              <TarotResultPage />
            </Suspense>
          } />
          <Route path="/daily" element={
            <Suspense fallback={<LoadingOverlay />}>
              <DailyGuidancePage />
            </Suspense>
          } />
          <Route path="/horoscope" element={
            <Suspense fallback={<LoadingOverlay />}>
              <HoroscopePage />
            </Suspense>
          } />
          <Route path="/horoscope/result" element={
            <Suspense fallback={<LoadingOverlay />}>
              <HoroscopeResultPage />
            </Suspense>
          } />
          <Route path="/love" element={
            <Suspense fallback={<LoadingOverlay />}>
              <LoveReadingPage />
            </Suspense>
          } />
          <Route path="/settings" element={
            <Suspense fallback={<LoadingOverlay />}>
              <SettingsPage />
            </Suspense>
          } />
          <Route path="/privacy" element={
            <Suspense fallback={<LoadingOverlay />}>
              <PrivacyPolicyPage />
            </Suspense>
          } />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
