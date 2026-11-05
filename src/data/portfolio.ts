import { PORTFOLIO_EN } from './portfolio.en';
import { PORTFOLIO_IT } from './portfolio.it';

export type Locale = 'en' | 'it';

export type ProjectCategory =
  | 'Academic Team Project / Industry Showcase'
  | 'Progetto Accademico di Team / Industry Showcase'
  | "Master's Thesis / Individual Research Project"
  | 'Tesi Magistrale / Progetto di Ricerca Individuale'
  | 'Personal Project'
  | 'Progetto Personale'
  | 'Individual Academic Project'
  | 'Progetto Accademico Individuale'
  | 'Individual Internship Project'
  | 'Progetto di Tirocinio Individuale';

export interface StoryStep {
  tag: string;
  title: string;
  description: string;
  mediaLabel: string;
  imageSrc?: string;
  blendMode?: string;
  contributionNote?: string;
}

export interface DetailedContributions {
  designed?: string[];
  implemented?: string[];
  coDeveloped?: string[];
  authoredDocs?: string[];
}

export interface Project {
  id: string;
  title: string;
  year: string;
  period: string; // Mantenuto per retrocompatibilità
  category: ProjectCategory | string;
  genrePlatform: string;
  tagline: string; // Mantenuto per retrocompatibilità
  role: string;
  highlight?: string; // Es. "Industry Showcase · New Game Designer 2025 · 3rd Place"
  gameplaySummary: string; // 50-70 parole sul gameplay loop
  personalContributionSummary: string; // 20-30 parole sull'ownership personale diretta
  description: string; // Mantenuto per retrocompatibilità (può essere l'unione dei due)
  detailedContributions?: DetailedContributions;
  confidentialityNotice?: string; // Tutela IP (DDA)
  playtestNotice?: string; // Es. "15-player empirical study"
  tags: string[]; // 4-6 tag curati ed essenziali
  githubUrl?: string;
  videoUrl?: string;
  trailerId?: string;
  gameplayId?: string;
  localVideoUrl?: string;
  demoUrl?: string;
  driveVideoUrl?: string;
  isMobile?: boolean;
  platform?: string;
  engine?: string;
  networking?: string;
  authors?: string;
  teamRoles?: string;
  gddUrl?: string;
  tddUrl?: string;
  vrBadge?: string;
  audioNotice?: string;
  thesisBadge?: string;
  storySteps?: StoryStep[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  course?: string; // Es. "Course: Game Developer – Unity 3D"
  bullets?: string[]; // Responsabilità e sistemi specifici dal CV
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string; // Es. "106/110"
  supervisor?: string;
  thesisSubject?: string;
  thesisTitle: string;
  thesisDetails: string;
  skills: string[];
}

export interface TechSkillCategory {
  category: string;
  level?: string;
  icon?: string;
  items: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  subheading: string;
  email: string;
  github: string;
  cvUrl?: string;
  graduationStatus: string;
  languages: { name: string; level: string }[];
}

export interface PortfolioData {
  profile: ProfileData;
  ui: Record<string, string>;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: TechSkillCategory[];
}

export function getPortfolio(lang: Locale = 'en'): PortfolioData {
  return (lang === 'it' ? PORTFOLIO_IT : PORTFOLIO_EN) as unknown as PortfolioData;
}

// Retrocompatibilità per export diretti
export const PORTFOLIO = PORTFOLIO_EN;
export const PROFILE = PORTFOLIO_EN.profile;
export const PROJECTS = PORTFOLIO_EN.projects;
export const EXPERIENCES = PORTFOLIO_EN.experiences;
export const EDUCATION = PORTFOLIO_EN.education;
export const TECH_SKILLS = PORTFOLIO_EN.skills;