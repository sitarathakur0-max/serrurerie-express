import React from 'react';
import {
  KeyRound,
  DoorClosed,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Phone,
  ArrowRight,
  Shield,
  HelpCircle,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/businessData';
import { CylinderVisual, MultipointLockVisual, PrecisionKeyVisual, DoorShieldVisual } from '../components/LockVisuals';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const getServiceVisual = (id: string) => {
    switch (id) {
      case 'serrurerie':
        return <CylinderVisual />;
      case 'portes-et-serrures':
        return <DoorShieldVisual />;
      case 'securisation-acces':
        return <MultipointLockVisual />;
      case 'conseil-securite':
        return <PrecisionKeyVisual />;
      default:
        return <CylinderVisual />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-amber-400" />;
      case 'DoorClosed':
        return <DoorClosed className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-400" />;
      default:
        return <Shield className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Page Header */}
      <section className="pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
              Expertise & Domaines d'intervention
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Prestations en serrurerie à Marseille
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Serrurerie Express propose des solutions professionnelles centrées sur l'intégrité de vos fermetures,
              la qualité des composants mécaniques et la sécurité des accès pour les logements et locaux marseillais.
            </p>
          </div>
        </div>
      </section>

      {/* Services List - 4 Core Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`p-6 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text details */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    {service.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                    {service.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm font-medium text-amber-300/90">
                {service.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Points d'attention et interventions courantes :
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Demander une intervention</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone.raw}`}
                  className="px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{BUSINESS_INFO.phone.display}</span>
                </a>
              </div>
            </div>

            {/* Technical visual */}
            <div className={`p-4 rounded-2xl bg-slate-950 border border-slate-800/90 ${index % 2 === 1 ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Schéma matériel</span>
                <span className="text-amber-400">Précision mécanique</span>
              </div>
              {getServiceVisual(service.id)}
            </div>
          </div>
        ))}
      </section>

      {/* Useful guidance & transparency note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-100">
              Précision sur nos interventions
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Chez Serrurerie Express, chaque situation fait l'objet d'un examen attentif avant toute manipulation.
              Nous préconisons toujours la solution technique la plus cohérente avec votre équipement déjà en place,
              sans remplacement superflu. N'hésitez pas à nous joindre directement au <strong>{BUSINESS_INFO.phone.display}</strong> pour décrire votre cas particulier.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Une question sur votre porte ou votre serrure ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Nous sommes à votre disposition pour vous orienter vers la solution adaptée à votre situation à Marseille.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler le {BUSINESS_INFO.phone.display}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
            >
              Formulaire de contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
