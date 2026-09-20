import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ReviewBadgeProps {
  variant?: 'compact' | 'card' | 'hero';
}

export function ReviewBadge({ variant = 'card' }: ReviewBadgeProps) {
  const { rating, maxRating, totalReviews, source } = BUSINESS_INFO.googleReviews;

  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs text-slate-200 shadow-sm">
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="font-bold text-slate-100">{rating}/{maxRating}</span>
        <span className="text-slate-400">({totalReviews} avis {source})</span>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="inline-flex flex-wrap items-center gap-3 p-2.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          {/* Google multi-color icon representation */}
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-xs text-blue-600 shadow-xs">
            G
          </div>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <div className="h-4 w-px bg-slate-800 hidden sm:block" />
        <div className="text-xs sm:text-sm">
          <span className="font-bold text-slate-100">{rating} sur {maxRating}</span>
          <span className="text-slate-400 ml-1.5">sur Google ({totalReviews} avis clients)</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Évaluation vérifiée
            </span>
            <span className="text-xs text-slate-400">Fiche établissement</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            La confiance de nos clients marseillais
          </h3>
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
            Serrurerie Express est évaluée par les résidents et professionnels de Marseille pour son professionnalisme et ses conseils sur les serrures et portes.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end bg-slate-950/80 p-5 rounded-xl border border-slate-800 flex-shrink-0 min-w-[210px]">
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-sm text-blue-600 shadow-sm">
              G
            </div>
            <div className="text-3xl font-extrabold text-slate-100 tracking-tight">
              {rating}<span className="text-slate-500 text-xl font-normal">/{maxRating}</span>
            </div>
          </div>

          <div className="flex text-amber-400 gap-0.5 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="text-xs font-medium text-slate-300">
            Basé sur <strong className="text-amber-400">{totalReviews} avis Google</strong>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/80 w-full flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" /> Note certifiée
            </span>
            <span>Marseille 13001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
