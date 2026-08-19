export interface Credit {
  role: string;
  name: string;
}

export interface FilmStill {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16:9' | '2.39:1' | '4:3';
}

export interface Film {
  slug: string;
  title: string;
  subtitle?: string;
  year: string;
  category: 'Narrative Short' | 'Documentary' | 'Sensory Cinema' | 'Visual Essay' | 'Feature Film';
  format: string;
  duration: string;
  director: string;
  synopsis: string;
  directorStatement: string;
  heroImage: string;
  thumbnail: string;
  vimeoId?: string;
  youtubeId?: string;
  videoUrl?: string;
  aspectRatio?: string;
  logline: string;
  credits: Credit[];
  stills: FilmStill[];
  selectedPress?: string[];
  screeningNotes?: string;
}

export interface Commission {
  id: string;
  client: string;
  title: string;
  year: string;
  service: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  vimeoId?: string;
  youtubeId?: string;
  videoUrl?: string;
  isPlaceholder?: boolean;
}

export interface LabProject {
  id: string;
  title: string;
  category: 'Sound Design' | 'Visual Essay' | 'Short-Form' | 'Research & Notes' | 'Behind The Scenes';
  year: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video' | 'audio';
  tags: string[];
  isPlaceholder?: boolean;
}

export interface PressItem {
  id: string;
  publication: string;
  title: string;
  year: string;
  excerpt: string;
  url?: string;
  isPlaceholder?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

