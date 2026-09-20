import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PageId } from './types';
import { BUSINESS_INFO } from './data/businessData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync state with URL hash for clean internal linking & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'services' || hash === 'about' || hash === 'contact' || hash === 'home') {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content View */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Fixed Bottom Phone Bar (High-Conversion Locksmith Feature) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 md:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="text-left leading-tight pl-1">
          <span className="block text-[11px] uppercase tracking-wider text-amber-400 font-bold">
            Serrurier Marseille
          </span>
          <span className="text-xs text-slate-300 font-medium">
            52 Bd National (13001)
          </span>
        </div>

        <a
          href={`tel:${BUSINESS_INFO.phone.raw}`}
          className="py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Appeler</span>
        </a>
      </div>
    </div>
  );
}
