import type { Currency, Locale } from '../data/types';

const intlLocale: Record<Locale, string> = { en: 'en-US', fr: 'fr-FR' };
const NBSP = ' ';
const NNBSP = ' ';

/**
 * 380_237_396 → "380M+" (en) / "380 M+" (fr). The "+" is added when the value was rounded down,
 * unless `plus` is false (for sentences like "passed 151M views").
 */
export function formatCompact(value: number, lang: Locale, plus = true): string {
  const space = lang === 'fr' ? NNBSP : '';
  const steps: Array<[number, string]> = [
    [1e6, 'M'],
    [1e3, 'K'],
  ];
  for (const [size, unit] of steps) {
    if (value >= size) {
      const whole = Math.floor(value / size);
      return `${whole}${space}${unit}${plus && whole * size < value ? '+' : ''}`;
    }
  }
  return formatNumber(value, lang);
}

/** 37_869_620 → "37.9M" (en) / "37,9 M" (fr): one decimal, rounded, for detailed stats. */
export function formatCompactPrecise(value: number, lang: Locale): string {
  const space = lang === 'fr' ? NNBSP : '';
  const oneDecimal = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 });
  if (value >= 1e6) return `${oneDecimal.format(value / 1e6)}${space}M`;
  if (value >= 1e3) return `${oneDecimal.format(value / 1e3)}${space}K`;
  return formatNumber(value, lang);
}

export const formatNumber = (value: number, lang: Locale): string =>
  new Intl.NumberFormat(intlLocale[lang]).format(value);

export const formatPercent = (value: number, lang: Locale): string =>
  new Intl.NumberFormat(intlLocale[lang], { style: 'percent', maximumFractionDigits: 1 }).format(value / 100);

export const formatPrice = (amount: number, currency: Currency, lang: Locale): string =>
  new Intl.NumberFormat(intlLocale[lang], {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

const asUtcDate = (isoDate: string) => new Date(`${isoDate}T00:00:00Z`);

export const formatDate = (isoDate: string, lang: Locale): string =>
  new Intl.DateTimeFormat(intlLocale[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    asUtcDate(isoDate),
  );

export const formatMonthYear = (isoDate: string, lang: Locale): string =>
  new Intl.DateTimeFormat(intlLocale[lang], { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    asUtcDate(isoDate),
  );

/** Whole months from `start` to `end`, rounded up ("in under N months"). */
export function monthsBetween(start: string, end: string): number {
  const days = (asUtcDate(end).getTime() - asUtcDate(start).getTime()) / 86_400_000;
  return Math.max(1, Math.ceil(days / 30.44));
}

/** "1:39:37" → 5977 seconds. */
export function parseTimecode(timecode: string): number {
  const parts = timecode.split(':').map(Number);
  if (parts.some(Number.isNaN)) throw new Error(`Invalid timecode "${timecode}" (expected m:ss or h:mm:ss)`);
  return parts.reduce((total, part) => total * 60 + part, 0);
}

/** Seconds → "1h 39m" / "2m 47s" / "21s" (en), "1 h 39" / "2 min 47" / "21 s" (fr). */
export function formatDuration(seconds: number, lang: Locale): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  const pad = (n: number) => String(n).padStart(2, '0');
  if (lang === 'fr') {
    if (h > 0) return `${h}${NBSP}h${NBSP}${pad(m)}`;
    if (m > 0) return s > 0 ? `${m}${NBSP}min${NBSP}${pad(s)}` : `${m}${NBSP}min`;
    return `${s}${NBSP}s`;
  }
  if (h > 0) return `${h}h${NBSP}${m}m`;
  if (m > 0) return s > 0 ? `${m}m${NBSP}${s}s` : `${m}m`;
  return `${s}s`;
}
