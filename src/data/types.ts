export interface Product {
  id: string;
  number: string;
  nameStart: string;
  nameEnd: string;
  category: 'general' | 'financial';
  tagline: string;
  description: string;
  bullets: string[];
  iconType: number;
  wide?: boolean;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  domain: string;
  nameStart: string;
  nameEnd: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  icon: string;
  colorClass: string;
}
