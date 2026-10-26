import en from '../data/en';
import fr from '../data/fr';
import type { Dictionary, Locale } from '../data/types';

export type { Locale };
export const locales: Locale[] = ['en', 'fr'];

/** French typography: a narrow no-break space before ? ! : ; % » and after «, so they never start a line. */
const frenchSpacing = (text: string) => text.replace(/ ([?!:;%»])/g, ' $1').replace(/« /g, '« ');

function mapStrings<T>(value: T, transform: (text: string) => string): T {
  if (typeof value === 'string') return transform(value) as T;
  if (Array.isArray(value)) return value.map((item) => mapStrings(item, transform)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, mapStrings(item, transform)]),
    ) as T;
  }
  return value;
}

const dictionaries: Record<Locale, Dictionary> = { en, fr: mapStrings(fr, frenchSpacing) };
export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang];
export const otherLocale = (lang: Locale): Locale => (lang === 'en' ? 'fr' : 'en');

/** Equivalent pages in each language, used by the language switcher and hreflang tags. */
const routes = {
  home: { en: '/en/', fr: '/fr/' },
  legal: { en: '/en/legal/', fr: '/fr/mentions-legales/' },
} satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;
export const pathFor = (key: RouteKey, lang: Locale): string => routes[key][lang];

/** Replaces {placeholders}. Fails the build if a value is missing, so typos never reach the site. */
export function fill(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    if (!(key in vars)) throw new Error(`Missing value for {${key}} in "${template}"`);
    return String(vars[key]);
  });
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes the text and turns *words* into highlighted marks. */
export const highlight = (text: string): string =>
  escapeHtml(text).replace(/\*(.+?)\*/g, '<mark class="hl">$1</mark>');

/** Removes the *highlight* markers, for plain-text uses (meta tags, alt text). */
export const plain = (text: string): string => text.replace(/\*(.+?)\*/g, '$1');
