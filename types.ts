import { ReactNode } from 'react';

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  sub?: string;
}

export interface College {
  name: string;
  count: number;
  max: number;
}