export interface LangTransitionState {
  scrollY: number;
  openProjectId: string;
  activeRouletteId: string;
  sidebarOpen: boolean;
  ts: number;
}

const STORAGE_KEY = 'portfolio:lang-transition';
const MAX_AGE_MS = 5000;

export function saveLangTransitionState(state: Omit<LangTransitionState, 'ts'>): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, ts: Date.now() }));
  } catch {
    // Ignora errori storage in modalità privata restrittiva
  }
}

export function peekLangTransitionState(): LangTransitionState | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LangTransitionState;
    if (!parsed || Date.now() - parsed.ts > MAX_AGE_MS) {
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function consumeLangTransitionState(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // no-op
  }
  document.documentElement.style.visibility = '';
}