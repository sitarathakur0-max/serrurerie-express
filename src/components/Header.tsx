import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/90 shadow-lg shadow-black/40'
          : 'bg-slate-950/80 backdrop-blur-xs border-b border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Serrurerie Express - Accueil"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <Shield className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors">
                Serrurerie <span className="text-amber-400">Express</span>
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Marseille • 13001
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Phone Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-500/50 text-sm font-semibold transition-all group"
              title="Appeler Serrurerie Express à Marseille"
            >
              <Phone className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-slate-100">{BUSINESS_INFO.phone.display}</span>
            </a>

            {/* Nous contacter CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>{BUSINESS_INFO.ctas.primary}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Phone + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              aria-label={`Appeler ${BUSINESS_INFO.phone.display}`}
              className="p-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center shadow-md shadow-amber-500/20"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 px-4 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm text-center shadow-md shadow-amber-500/20"
            >
              {BUSINESS_INFO.ctas.primary}
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-slate-400">
            📍 52 Boulevard National, 13001 Marseille
          </div>
        </div>
      )}
    </header>
  );
}
