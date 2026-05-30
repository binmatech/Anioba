export interface Service {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string; // The name of the Lucide icon to load dynamically
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  id: number;
  value: string;
  numericVal: number;
  suffix: string;
  label: string;
  description: string;
}

export interface WhyChooseUsFeature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  message: string;
}

export interface Founder {
  id: number;
  name: string;
  designation: string;
  image: string;
  bio: string;
}
