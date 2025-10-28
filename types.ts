
import type React from 'react';

export interface Initiative {
  id: number;
  // Fix: Changed from JSX.Element to React.ReactNode to avoid requiring JSX namespace in a .ts file.
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ImpactStat {
  name: string;
  value: number;
}

export interface Volunteer {
  id: number;
  city: string;
  coords: { top: string; left: string };
}

export interface Program {
    id: number;
    title: string;
    location: string;
    date: string;
    imageUrl: string;
}

export interface Resource {
    title: string;
    description: string;
    link: string;
}

export interface Partner {
    name: string;
    logoUrl: string;
}