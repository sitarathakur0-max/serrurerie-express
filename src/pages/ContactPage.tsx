import React from 'react';
import { MapPin, Phone, Shield, Clock, HelpCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ContactForm } from '../components/ContactForm';
import { LocationMap } from '../components/LocationMap';
import { ReviewBadge } from '../components/ReviewBadge';

export function ContactPage() {
  const { name, address, phone } = BUSINESS_INFO;

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
              Contact & Localisation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Contacter Serrurerie Express
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Pour tout échange sur vos serrures, vos portes ou un besoin de sécurisation à Marseille,
              joignez-nous directement par téléphone ou remplissez notre formulaire ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact details & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Details & Quick Call Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Call Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-950 border border-amber-500/30 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    Ligne directe
                  </span>
                  <h2 className="text-xl font-bold text-slate-100">
                    Appel téléphonique
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Le moyen le plus direct et recommandé pour décrire votre situation ou convenir d'une intervention avec le serrurier.
              </p>

              <a
                href={`tel:${phone.raw}`}
                className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-amber-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>{phone.display}</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span>Appel direct non surtaxé</span>
                <span className="text-amber-400 font-medium">Marseille 13001</span>
              </div>
            </div>

            {/* Official Address Details */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg space-y-6">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>Coordonnées de l'établissement</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-100 text-sm">{name}</strong>
                    <span>{address.street}</span><br />
                    <span>{address.postalCode} {address.city}, {address.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-100 text-sm">Prise de contact :</strong>
                    <span className="text-slate-300">
                      Disponibilité par téléphone pour convenir d'une visite ou échanger sur vos installations.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=52+Boulevard+National+13001+Marseille+France`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors text-xs font-semibold"
                >
                  <span>Ouvrir dans Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Google review micro badge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <ReviewBadge variant="compact" />
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationMap />
      </section>
    </div>
  );
}
