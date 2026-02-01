import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, MessageCircle, Layers, Star, User } from 'lucide-react'; // Using Lucide icons temporarily until custom SVGs are ready
import { ROUTES } from '../../router/routes';

const NavItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300
      ${isActive ? 'text-purple-400' : 'text-slate-400 hover:text-slate-300'}
    `}
  >
    {({ isActive }) => (
      <>
        {/* Glowing background for active state */}
        {isActive && (
          <div className="absolute top-0 w-8 h-8 -mt-6 bg-purple-500/20 blur-xl rounded-full" />
        )}
        
        <Icon 
          size={24} 
          strokeWidth={isActive ? 2.5 : 2}
          className={`transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`}
        />
        
        <span className={`text-[10px] font-medium transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
          {label}
        </span>
      </>
    )}
  </NavLink>
);

const BottomNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 h-[80px] pb-safe bg-cosmic-950/90 backdrop-blur-xl border-t border-white/5 shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between h-full px-2 max-w-md mx-auto">
        
        <NavItem 
          to={ROUTES.HOME} 
          icon={Home} 
          label={t('nav.home')} 
        />
        
        <NavItem 
          to={ROUTES.CHAT} 
          icon={MessageCircle} 
          label={t('nav.chat')} 
        />
        
        <NavItem 
          to={ROUTES.TAROT_DECK} 
          icon={Layers} 
          label={t('nav.tarot')} 
        />
        
        <NavItem 
          to={ROUTES.HOROSCOPE} 
          icon={Star} 
          label={t('nav.horoscope')} 
        />
        
        <NavItem 
          to={ROUTES.SETTINGS} 
          icon={User} 
          label={t('nav.profile')} 
        />

      </div>
    </nav>
  );
};

export default BottomNav;
