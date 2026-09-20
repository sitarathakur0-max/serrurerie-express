export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  iconName: string;
  badge: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueProposition {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  nom: string;
  telephone: string;
  email: string;
  sujet?: string;
  message: string;
}

export interface FormErrors {
  nom?: string;
  telephone?: string;
  email?: string;
  message?: string;
}
