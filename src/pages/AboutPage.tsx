import React from 'react';
import { Shield, MapPin, Phone, Lock, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ReviewBadge } from '../components/ReviewBadge';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
              À propos de l'entreprise
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Serrurerie Express à Marseille
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Un service de serrurerie ancré au 52 Boulevard National dans le 1er arrondissement de Marseille,
              dédié à la protection mécanique et à la fiabilité de vos fermetures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                La serrurerie de proximité au cœur de Marseille
              </h2>
              <p>
                Installée au <strong>52 Boulevard National, 13001 Marseille</strong>, Serrurerie Express
                propose aux résidents et aux commerçants de la cité phocéenne des interventions soignées
                concernant les serrures, les cylindres de sécurité et les portes.
              </p>
              <p>
                Notre démarche s'appuie sur une compréhension rigoureuse des mécanismes :
                une porte bien sécurisée est avant tout le résultat d'un montage précis, d'un matériel
                adapté à la configuration du bâti et d'un alignement minutieux de chaque point de fermeture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Portes & Serrures</span>
                </div>
                <p className="text-xs text-slate-300">
                  Prise en charge des cylindres, serrures en applique, serrures à larder et systèmes de fermeture résidentiels ou professionnels.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Sécurisation réfléchie</span>
                </div>
                <p className="text-xs text-slate-300">
                  Renforcement des points d'accès avec des solutions mécaniques fiables et sélectionnées pour leur résistance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Local Business Card & Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    Serrurerie Express
                  </h3>
                  <span className="text-xs text-slate-400">
                    Artisan serrurier local • Marseille
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-100">Adresse d'établissement :</strong>
                    <span>52 Boulevard National, 13001 Marseille, France</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-100">Ligne directe :</strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.raw}`}
                      className="text-amber-400 font-bold hover:underline"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Nos engagements de service :
                </div>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Écoute attentive de votre besoin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Solutions techniques éprouvées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Rigueur de pose et respect de vos ouvrants</span>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phone.raw}`}
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-amber-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Joindre le serrurier</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewBadge variant="card" />
      </section>

      {/* Local Community Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              Un projet concernant vos portes à Marseille ?
            </h3>
            <p className="text-sm text-slate-300">
              Venez nous rendre visite au 52 Boulevard National (13001) ou contactez-nous directement par téléphone pour convenir d'un rendez-vous.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-colors shadow-md shadow-amber-500/20 flex-shrink-0 cursor-pointer"
          >
            <span>Accéder aux coordonnées</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
