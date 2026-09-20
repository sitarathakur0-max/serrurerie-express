import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export function LocationMap() {
  const { address, phone, geo } = BUSINESS_INFO;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=52+Boulevard+National+13001+Marseille+France`;
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=5.3740%2C43.3015%2C5.3890%2C43.3095&layer=mapnik&marker=${geo.latitude}%2C${geo.longitude}`;

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
      <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Situation géographique
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            Au cœur du 1er arrondissement de Marseille
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            {address.full}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-semibold border border-slate-700 hover:border-slate-600 transition-colors shadow-xs"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>Itinéraire Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={`tel:${phone.raw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold transition-colors shadow-md shadow-amber-500/20"
          >
            <Phone className="w-4 h-4" />
            <span>{phone.display}</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Map iframe */}
        <div className="lg:col-span-2 h-[340px] sm:h-[400px] relative bg-slate-950">
          <iframe
            title="Carte d'accès - 52 Boulevard National 13001 Marseille"
            src={osmEmbedUrl}
            className="w-full h-full border-0 filter contrast-105"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-xs px-3 py-1.5 rounded-md border border-slate-800 text-[11px] text-slate-300 pointer-events-none">
            📍 52 Boulevard National, 13001 Marseille
          </div>
        </div>

        {/* Local access details card */}
        <div className="p-6 sm:p-7 bg-slate-900/90 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Repères et localisation
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Adresse exacte
                </span>
                <span className="text-slate-100 font-medium">
                  52 Boulevard National<br />13001 Marseille, France
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Quartier & Proximité
                </span>
                <span className="text-slate-200">
                  Secteur Saint-Charles / National, accessible depuis les grands axes marseillais.
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Contact direct
                </span>
                <a
                  href={`tel:${phone.raw}`}
                  className="text-amber-400 font-bold hover:underline block text-sm"
                >
                  {phone.display}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            <p>
              Pour toute demande sur vos serrures ou vos portes, contactez-nous par téléphone ou via le formulaire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
