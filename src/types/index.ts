export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  impact?: string;
  challenges?: string[];
  userRoles?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities?: string[];
  achievements?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Certification {
  title: string;
  year: string;
}
