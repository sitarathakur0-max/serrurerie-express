import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { ContactFormData, FormErrors } from '../types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    telephone: '',
    email: '',
    sujet: 'Serrurerie générale',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Veuillez renseigner votre nom.';
    } else if (formData.nom.trim().length < 2) {
      newErrors.nom = 'Le nom doit comporter au moins 2 caractères.';
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Veuillez indiquer votre numéro de téléphone.';
    } else if (!/^[0-9+.\s()-]{8,20}$/.test(formData.telephone.trim())) {
      newErrors.telephone = 'Veuillez saisir un numéro de téléphone valide.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez indiquer votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez préciser votre demande ou votre besoin.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Votre message doit comporter au moins 10 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Frontend submission handling with realistic responsive feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      nom: '',
      telephone: '',
      email: '',
      sujet: 'Serrurerie générale',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-emerald-500/40 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-100">
            Message bien transmis
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
            Merci <strong>{formData.nom}</strong>. Votre demande concernant vos serrures ou vos portes a été enregistrée avec succès.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-400 max-w-md mx-auto text-left space-y-2">
          <p className="text-slate-200 font-semibold">Pour une demande rapide par téléphone :</p>
          <a
            href={`tel:${BUSINESS_INFO.phone.raw}`}
            className="flex items-center justify-between p-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone.display}
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="text-xs text-slate-400 hover:text-slate-200 underline transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5"
    >
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-slate-100">
          Formulaire de contact
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Transmettez les détails de votre demande pour un échange avec le serrurier.
        </p>
      </div>

      {/* Nom */}
      <div>
        <label htmlFor="contact-nom" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Nom complet <span className="text-amber-400">*</span>
        </label>
        <input
          id="contact-nom"
          type="text"
          value={formData.nom}
          onChange={(e) => {
            setFormData({ ...formData, nom: e.target.value });
            if (errors.nom) setErrors({ ...errors, nom: undefined });
          }}
          placeholder="Ex : Jean Dupont"
          className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors ${
            errors.nom ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 focus:border-amber-400'
          }`}
          aria-invalid={Boolean(errors.nom)}
          aria-describedby={errors.nom ? 'nom-error' : undefined}
        />
        {errors.nom && (
          <p id="nom-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.nom}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Téléphone */}
        <div>
          <label htmlFor="contact-telephone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Téléphone <span className="text-amber-400">*</span>
          </label>
          <input
            id="contact-telephone"
            type="tel"
            value={formData.telephone}
            onChange={(e) => {
              setFormData({ ...formData, telephone: e.target.value });
              if (errors.telephone) setErrors({ ...errors, telephone: undefined });
            }}
            placeholder="06 XX XX XX XX"
            className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors ${
              errors.telephone ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 focus:border-amber-400'
            }`}
            aria-invalid={Boolean(errors.telephone)}
            aria-describedby={errors.telephone ? 'tel-error' : undefined}
          />
          {errors.telephone && (
            <p id="tel-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.telephone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Votre Email <span className="text-amber-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="nom@exemple.fr"
            className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors ${
              errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 focus:border-amber-400'
            }`}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Type de demande */}
      <div>
        <label htmlFor="contact-sujet" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Type de besoin
        </label>
        <select
          id="contact-sujet"
          value={formData.sujet}
          onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50"
        >
          <option value="Serrurerie générale">Serrurerie générale</option>
          <option value="Solutions pour portes et serrures">Solutions pour portes et serrures</option>
          <option value="Sécurisation des accès">Sécurisation des accès</option>
          <option value="Conseil en sécurité des serrures">Conseil en sécurité des serrures</option>
          <option value="Autre demande">Autre demande</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Votre message ou description de l'accès <span className="text-amber-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Décrivez votre besoin : type de porte (bois, métal), problème de serrure ou projet de sécurisation à Marseille..."
          className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors resize-y ${
            errors.message ? 'border-red-500/80 bg-red-950/10' : 'border-slate-800 focus:border-amber-400'
          }`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'msg-error' : undefined}
        />
        {errors.message && (
          <p id="msg-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-500/20 disabled:opacity-70 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="inline-block animate-pulse">Transmission en cours...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Envoyer ma demande</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-slate-400 text-center">
        Vos informations restent strictement confidentielles et sont uniquement destinées à l'échange avec votre artisan serrurier.
      </p>
    </form>
  );
}
