export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  companyCategory: string;
  quote: string;
  metrics: string;
  dotMatrixShape: 'hourglass' | 'data-flow' | 'cloud-network';
}

export interface MetricStat {
  id: string;
  number: string;
  label: string;
  description: string;
  highlightText?: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  category: 'analytics' | 'engineering' | 'architecture' | 'crm';
  shortDesc: string;
  fullDesc: string;
  awsStack: string[];
  azureStack: string[];
  dotMatrixShape: 'cloud' | 'lightning' | 'lock' | 'lakehouse' | 'ai-brain' | 'chart' | 'data-flow' | 'hourglass';
  features: string[];
}

export interface CloudTechnology {
  name: string;
  provider: 'AWS' | 'Azure';
  role: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'crm' | 'architecture' | 'engineering' | 'analytics';
}

export interface ComparisonRow {
  feature: string;
  onPremise: {
    title: string;
    description: string;
    isAdvantage: boolean;
  };
  cloud: {
    title: string;
    description: string;
    isAdvantage: boolean;
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Whitepaper' | 'Blueprints' | 'Casos de Éxito' | 'Ebook';
  readingTime: string;
  description: string;
  techStack: string[];
  downloadUrl?: string;
}

export interface RegionOffice {
  country: string;
  flag: string;
  city: string;
  address: string;
  isLaunchPartner?: boolean;
  badgeText?: string;
}
