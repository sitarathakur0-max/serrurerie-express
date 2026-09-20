import React from 'react';
import { Shield, Phone, MapPin, ChevronRight, Lock } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/businessData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Shield className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold text-slate-100">
                Serrurerie <span className="text-amber-400">Express</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {BUSINESS_INFO.shortDescription}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Artisan serrurier local à Marseille</span>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Plan du site
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Accueil</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Nos prestations en serrurerie</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>À propos de Serrurerie Express</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact et localisation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Domaines d'expertise */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Domaines d'intervention
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-left text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Coordonnées officielles */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Coordonnées
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300">
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone.raw}`}
                  className="text-slate-100 font-bold text-sm hover:text-amber-400 transition-colors"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 font-semibold text-xs border border-slate-700/80 hover:border-amber-500/50 transition-colors"
                >
                  Nous adresser un message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal mention */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. Tous droits réservés.
          </div>
          <div className="text-center sm:text-right">
            Serrurier à Marseille 13001 • 52 Boulevard National
          </div>
        </div>
      </div>
    </footer>
  );
}
