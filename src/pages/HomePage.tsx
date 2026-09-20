import React from 'react';
import {
  Phone,
  Shield,
  ArrowRight,
  CheckCircle,
  KeyRound,
  DoorClosed,
  ShieldCheck,
  Compass,
  MapPin,
  Lock,
  Wrench,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, PROCESS_STEPS, VALUE_PROPOSITIONS } from '../data/businessData';
import { ReviewBadge } from '../components/ReviewBadge';
import { VisualCard } from '../components/LockVisuals';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
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
        return <Lock className="w-6 h-6 text-amber-400" />;
    }
  };

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-amber-400" />;
      default:
        return <Shield className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Local Location & Trust pill */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  Marseille 13001
                </span>
                <span className="text-slate-600">•</span>
                <span>52 Boulevard National</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                Votre sécurité commence par une{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  serrure fiable.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Serrurerie Express est votre service de serrurerie de proximité à Marseille.
                Nous vous accompagnons dans le choix, l’installation et l’entretien de vos serrures
                et solutions pour portes, avec un engagement constant pour la rigueur et la protection de vos accès.
              </p>

              {/* Call-to-action bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <span>{BUSINESS_INFO.ctas.primary}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-semibold text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{BUSINESS_INFO.ctas.secondary}</span>
                </button>
              </div>

              {/* Prominent Phone Highlight */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">
                  Contact téléphonique direct :
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone.raw}`}
                  className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-extrabold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{BUSINESS_INFO.phone.display}</span>
                </a>
              </div>

              {/* Hero Review Badge */}
              <div className="pt-2">
                <ReviewBadge variant="hero" />
              </div>
            </div>

            {/* Right Visual Element: Precision Lock Assembly */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 sm:p-6 border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Dispositif de haute sécurité
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Atelier Serrurerie Express</span>
                </div>

                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <VisualCard
                    title="Cylindre Européen Renforcé"
                    category="Mécanique de précision"
                    description="Système de verrouillage à goupilles multiples et panneton en acier trempé pour une résistance accrue."
                    specs={[
                      'Protection anti-arrachement et anti-perçage',
                      'Dimensions standardisées conformes aux normes',
                      'Clés protégées avec carte de propriété',
                    ]}
                    visualType="cylinder"
                  />
                </div>

                <div className="mt-4 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Conseil personnalisé à Marseille
                  </span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    Nous contacter →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block">
                Présentation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Serrurerie Express à Marseille
              </h2>
              <p className="text-xs text-slate-400">
                Implanté au 52 Boulevard National (13001)
              </p>
            </div>

            <div className="lg:col-span-8 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Serrurerie Express est une entreprise de serrurerie établie dans le 1er arrondissement de Marseille.
                Notre travail se concentre sur les aspects essentiels de votre sécurité au quotidien : le bon fonctionnement
                des serrures, la solidité des portes et l’adéquation des dispositifs de fermeture.
              </p>
              <p>
                Nous intervenons auprès des particuliers et des professionnels pour des prestations soignées,
                en privilégiant la clarté technique, le respect des mécanismes existants et le conseil objectif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GENERAL SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
            Nos domaines d'intervention
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100">
            Solutions pour la sécurité de vos fermetures
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Des catégories de prestations adaptées à la configuration de vos portes et à vos exigences de fiabilité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-1">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs text-slate-400 hover:text-slate-200"
                >
                  Demander conseil
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SERRURERIE EXPRESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
              Pourquoi nous faire confiance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100">
              Pourquoi choisir Serrurerie Express
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Des principes clairs fondés sur la proximité marseillaise, la maîtrise technique et la rigueur dans chaque intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((prop, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/90 flex flex-col space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {getValueIcon(prop.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-100">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY VISUAL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
            Composants & Matériels
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100">
            Équipements et quincaillerie de sécurité
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Aperçu des composants mécaniques examinés, entretenus ou installés pour assurer la résistance de vos portes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <VisualCard
            title="Cylindre de Sécurité DIN"
            category="Barillets"
            description="Cœur de la serrure, le cylindre européen protège contre le crochetage et l'arrachement mécanique."
            specs={[
              'Laiton massif et goupilles traitées',
              'Panneton orientable DIN standard',
              'Remplacement sur serrures existantes',
            ]}
            visualType="cylinder"
            onClick={() => onNavigate('services')}
          />

          <VisualCard
            title="Serrure Multipoints Renforcée"
            category="Verrouillage"
            description="Verrouillage simultané en plusieurs points d'ancrage (haut, centre, bas) répartissant la retenue."
            specs={[
              'Pênes dormants rectangulaires en acier',
              'Crochets ou galets de compression',
              'Adaptée aux portes d\'entrée d\'immeuble',
            ]}
            visualType="multipoint"
            onClick={() => onNavigate('services')}
          />

          <VisualCard
            title="Clé Technique Réversible"
            category="Reproduction & Clés"
            description="Clé brevetée à micro-points de précision empêchant les tentatives d'empreinte non autorisées."
            specs={[
              'Profil complexe avec vagues latérales',
              'Sens d\'introduction réversible',
              'Contrôle rigoureux du doublement',
            ]}
            visualType="key"
            onClick={() => onNavigate('services')}
          />

          <VisualCard
            title="Ensemble Poignée & Blindage"
            category="Protections"
            description="Poignée de sécurité solidaire avec pastille tournante pour faire obstacle aux tentatives de perçage."
            specs={[
              'Vis traversantes haute résistance',
              'Rosace de blindage en acier cémenté',
              'Finition soignée pour porte palière',
            ]}
            visualType="doorShield"
            onClick={() => onNavigate('services')}
          />

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-block">
                Contrôle & Ajustement
              </span>
              <h3 className="text-lg font-bold text-slate-100">
                Bâti, gâche et jeu de fonctionnement
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Une serrure robuste n’offre sa pleine efficacité que si le jeu entre la porte et son dormant est rigoureusement maîtrisé. Nous contrôlons l'aplomb et les points de frottement.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              Échanger sur votre porte
            </button>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-bold inline-block">
                Intervention Locale
              </span>
              <h3 className="text-lg font-bold text-slate-100">
                Vous avez un doute sur votre serrure ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Un barillet qui accroche ou une clé difficile à tourner signale souvent une usure mécanique. Mieux vaut intervenir avant le blocage complet.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone.raw}`}
              className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold text-center transition-colors shadow-md shadow-amber-500/20"
            >
              Appeler le {BUSINESS_INFO.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* SIMPLE NEUTRAL PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
              Démarche simple
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Le déroulement de votre prise en charge
            </h2>
            <p className="text-sm text-slate-300">
              Un processus transparent en 4 étapes pour répondre à votre besoin en serrurerie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-950 border border-slate-800 relative flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="text-3xl font-extrabold text-amber-400 font-mono">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Étape {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS & TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewBadge variant="card" />
      </section>

      {/* FINAL CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 text-center sm:text-left shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
                <Shield className="w-3.5 h-3.5" />
                Contact direct à Marseille
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 leading-tight">
                Besoin d'un serrurier au 52 Boulevard National ?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Contactez Serrurerie Express pour échanger sur vos serrures, vos portes ou votre projet de sécurisation d'accès.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone.raw}`}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/25 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.phone.display}</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Envoyer une demande écrite</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
