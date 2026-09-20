import { ServiceCategory, ProcessStep, ValueProposition } from '../types';

export const BUSINESS_INFO = {
  name: 'Serrurerie Express',
  tagline: 'Votre sécurité commence par une serrure fiable.',
  shortDescription: 'Service de serrurerie local au cœur de Marseille. Expertise en serrures, portes et sécurisation des accès pour particuliers et professionnels.',
  category: 'Serrurier',
  address: {
    street: '52 Boulevard National',
    postalCode: '13001',
    city: 'Marseille',
    country: 'France',
    full: '52 Boulevard National, 13001 Marseille, France',
  },
  phone: {
    display: '+33 4 91 72 38 46',
    raw: '+33491723846',
  },
  googleReviews: {
    rating: 4.7,
    maxRating: 5,
    totalReviews: 38,
    source: 'Google',
  },
  geo: {
    latitude: 43.3056,
    longitude: 5.3815,
  },
  ctas: {
    primary: 'Nous contacter',
    secondary: 'Découvrir nos services',
    callNow: 'Appeler le +33 4 91 72 38 46',
  },
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'serrurerie',
    title: 'Serrurerie',
    subtitle: 'Interventions et entretien des mécanismes de fermeture',
    shortDescription: 'Diagnostic et prise en charge des mécanismes de serrures, remplacement de cylindres et ajustement des composants de fermeture.',
    fullDescription: 'Notre service de serrurerie prend en charge l’ensemble des éléments mécaniques qui composent vos fermetures. Qu’il s’agisse d’un remplacement de barillet, de l’installation d’une nouvelle serrure ou de la vérification de l’usure d’un mécanisme, nous privilégions la rigueur et des pièces adaptées à votre configuration existante.',
    features: [
      'Diagnostic mécanique de l’état de la serrure',
      'Remplacement et pose de cylindres adaptés',
      'Réglage de gâche et alignement de pêne',
      'Entretien préventif des mécanismes de fermeture',
    ],
    iconName: 'KeyRound',
    badge: 'Artisanat Local',
  },
  {
    id: 'portes-et-serrures',
    title: 'Solutions pour portes et serrures',
    subtitle: 'Ajustement, entretien et compatibilité porte-serrure',
    shortDescription: 'Solutions complètes pour assurer la parfaite adéquation entre le bâti, le vantail de porte et le système de verrouillage.',
    fullDescription: 'Une serrure performante ne peut jouer son rôle que si la porte et son encadrement sont correctement ajustés. Nous examinons l’ensemble de l’ouvrage (portes d’entrée d’appartement, portes de maison, portes palières) pour corriger les frottements, consolider les points d’ancrage et assurer une fermeture fluide sans forcer.',
    features: [
      'Contrôle de l’alignement et du jeu fonctionnel',
      'Solutions adaptées aux portes bois, métal ou PVC',
      'Optimisation de la fermeture sans contrainte mécanique',
      'Vérification de la solidité des fixations de serrure',
    ],
    iconName: 'DoorClosed',
    badge: 'Précision',
  },
  {
    id: 'securisation-acces',
    title: 'Sécurisation des accès',
    subtitle: 'Renforcement et protection des points d’entrée',
    shortDescription: 'Solutions de protection mécanique pour renforcer la résistance des accès face aux tentatives d’intrusion.',
    fullDescription: 'La sécurisation des accès repose sur une approche globale du point d’entrée. Nous vous accompagnons dans le choix et la mise en œuvre de solutions mécaniques renforcées : serrures multipoints, verrous de sécurité complémentaires, poignées blindées et cornières de protection, adaptées à votre logement ou local commercial marseillais.',
    features: [
      'Étude de vulnérabilité du point de fermeture',
      'Pose de serrures multipoints en applique ou à larder',
      'Installation de poignées de sécurité et protège-cylindres',
      'Renforcement des gâches et fixations au dormant',
    ],
    iconName: 'ShieldCheck',
    badge: 'Protection',
  },
  {
    id: 'conseil-securite',
    title: 'Conseil en sécurité des serrures',
    subtitle: 'Recommandations objectives et adaptées à votre habitat',
    shortDescription: 'Conseils personnalisés pour évaluer le niveau de sécurité de vos installations et choisir des équipements fiables.',
    fullDescription: 'Face à la multiplicité des normes et des modèles de serrures, un avis de professionnel est indispensable. Nous vous apportons une analyse claire et sans détour de votre installation actuelle, en vous recommandant les solutions les plus pertinentes selon votre type de porte et vos exigences de protection.',
    features: [
      'Évaluation du niveau de protection existant',
      'Conseils neutres sur le choix des types de barillets',
      'Recommandations sur les mesures de renfort physique',
      'Explications claires sur le fonctionnement de vos matériels',
    ],
    iconName: 'Compass',
    badge: 'Expertise',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Décrivez votre besoin',
    description: 'Expliquez votre situation concernant votre serrure, votre porte ou votre projet de sécurisation.',
  },
  {
    number: '02',
    title: 'Échangez avec le professionnel',
    description: 'Bénéficiez d’un échange direct avec votre serrurier pour préciser les spécificités de votre installation.',
  },
  {
    number: '03',
    title: 'Déterminez la solution adaptée',
    description: 'Nous sélectionnons ensemble l’intervention ou le matériel le plus pertinent selon vos besoins.',
  },
  {
    number: '04',
    title: 'Réalisez l’intervention',
    description: 'L’intervention est menée avec rigueur et minutie à votre adresse à Marseille.',
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    title: 'Service de serrurerie local',
    description: 'Établi au 52 Boulevard National dans le 1er arrondissement de Marseille, un artisan ancré dans sa ville et accessible.',
    iconName: 'MapPin',
  },
  {
    title: 'Approche axée sur la sécurité',
    description: 'Chaque intervention privilégie la fiabilité des mécanismes et la pérennité de votre protection quotidienne.',
    iconName: 'Shield',
  },
  {
    title: 'Démarche professionnelle',
    description: 'Rigueur technique, transparence dans l’échange et écoute attentive de vos contraintes réelles.',
    iconName: 'Wrench',
  },
  {
    title: 'Expertise portes et serrures',
    description: 'Connaissance approfondie des mécanismes traditionnels comme des systèmes de verrouillage modernes.',
    iconName: 'Lock',
  },
];
