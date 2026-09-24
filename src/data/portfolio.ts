import { PORTFOLIO_EN } from './portfolio.en';
import { PORTFOLIO_IT } from './portfolio.it';

export type Locale = 'en' | 'it';

export function getPortfolio(lang: Locale = 'en') {
  return lang === 'it' ? PORTFOLIO_IT : PORTFOLIO_EN;
}

// Retrocompatibilità per export diretti (default in inglese)
export const PORTFOLIO = PORTFOLIO_EN;
export const PROFILE = PORTFOLIO_EN.profile;
export const PROJECTS = PORTFOLIO_EN.projects;
export const EXPERIENCES = PORTFOLIO_EN.experiences;
export const EDUCATION = PORTFOLIO_EN.education;
export const TECH_SKILLS = PORTFOLIO_EN.skills;