import type { ImageMetadata } from 'astro';

export type Locale = 'en' | 'fr';
export type Currency = 'eur' | 'usd';
export type Niche = 'business' | 'finance' | 'sport';
export type ProofKind = 'shortViews' | 'shortRetention' | 'channelViews';

/** Language-independent facts: numbers, links, video IDs, prices. */
export interface SharedData {
  site: { url: string; name: string; email: string };
  /** Day the YouTube Studio figures were read (YYYY-MM-DD). */
  statsDate: string;
  /** Channel whose growth is shown as the third hero stat. */
  featuredChannelId: string;
  channels: Channel[];
  demos: Demo[];
  pricing: {
    packages: Array<{ id: string; name: string; shorts: number; price: Record<Currency, number>; featured?: boolean }>;
    /** One-off first order, to test the collaboration before a monthly plan. */
    pilot: { shorts: number; price: Record<Currency, number>; deductibleWithinDays: number };
    /** Shows "X spots left" above the plans when `show` is true. */
    availability: { show: boolean; spots: number };
  };
  legal: {
    ownerName: string;
    legalForm: string;
    siren: string;
    siret: string;
    vatNumber: string;
    registry: string;
    host: { name: string; address: string; phone: string; url: string };
  };
  analytics: {
    /** Cloudflare Web Analytics token. Empty = no analytics script at all. */
    cloudflareToken: string;
  };
}

export interface Channel {
  id: string;
  name: string;
  url: string;
  /** First day of the channel (YYYY-MM-DD). */
  launched: string;
  /** Weeks needed to join the YouTube Partner Program, if worth showing. */
  monetizedInWeeks?: number;
  views: number;
  subscribers: number;
  bestShort: { youtubeId: string; views: number; subscribersGained: number; stayedToWatch: number };
  proofs: Array<{ kind: ProofKind; image: ImageMetadata }>;
}

export interface Demo {
  youtubeId: string;
  niche: Niche;
  /** Language spoken in the Short. */
  language: Locale;
  /** Length of the finished Short, e.g. "0:21". */
  length: string;
  /** Optional local thumbnail, used instead of YouTube's (e.g. while the video is private). */
  thumbnail?: ImageMetadata;
  source: {
    name: string;
    youtubeId: string;
    /** Full episode length, e.g. "1:39:37". */
    episodeLength: string;
    /** Start and end of the moment used, e.g. "3:54" and "6:41". */
    start: string;
    end: string;
  };
}

/** Everything a visitor reads. One file per language, written for that language. */
export interface Dictionary {
  locale: Locale;
  ogLocale: string;
  currency: Currency;
  meta: { title: string; description: string };
  /** Share image (1200×630) shown when the link is pasted in a message. */
  og: { line: string; subtitle: string };
  nav: {
    skip: string;
    results: string;
    examples: string;
    pricing: string;
    faq: string;
    contact: string;
    /** Name of the other language, written in that language. */
    otherLanguage: string;
    otherLanguageLabel: string;
    home: string;
  };
  hero: {
    kicker: string;
    /** Wrap words in *stars* to highlight them. */
    title: string;
    subtitle: string;
    stats: { views: string; subscribers: string; featured: string };
    footnote: string;
    footnoteNoMonetization: string;
    cta: string;
    ctaSecondary: string;
    /** Caption of the demo phone shown next to the hero on desktop. */
    visualDemoLabel: string;
  };
  results: {
    title: string;
    intro: string;
    channelLabels: Record<string, string>;
    bestShort: string;
    stats: { views: string; subscribersGained: string; stayedToWatch: string };
    channelLine: string;
    seeProofs: string;
    proofsTitle: string;
    proofAlts: Record<ProofKind, string>;
    proofNote: string;
    close: string;
    visitChannel: string;
  };
  examples: {
    title: string;
    intro: string;
    niches: Record<Niche, string>;
    languages: Record<Locale, string>;
    titles: Record<string, string>;
    before: string;
    after: string;
    beforeAfter: string;
    sourceLink: string;
  };
  pricing: {
    title: string;
    intro: string;
    shortsPerMonth: string;
    perMonth: string;
    perShort: string;
    featured: string;
    spotsLeft: string;
    included: { title: string; items: string[] };
    delivery: string;
    pilot: { title: string; text: string };
    cta: string;
    notes: string[];
  };
  process: { title: string; intro: string; steps: Array<{ title: string; text: string }> };
  about: { title: string; paragraphs: string[] };
  testimonials: { title: string; items: Array<{ quote: string; name: string; role: string }> };
  faq: { title: string; items: Array<{ question: string; answer: string }> };
  contact: {
    title: string;
    text: string;
    /** Tally form link for this language. Empty = the main button opens an email instead. */
    formUrl: string;
    ctaForm: string;
    ctaMail: string;
    mailSubject: string;
    orEmail: string;
    responseTime: string;
  };
  player: { play: string; note: string };
  footer: { legal: string; tagline: string };
  legal: {
    title: string;
    description: string;
    sections: {
      publisher: string;
      host: string;
      ip: string;
      privacy: string;
      terms: string;
    };
    labels: {
      name: string;
      legalForm: string;
      legalFormValue: string;
      siren: string;
      siret: string;
      registry: string;
      registryValue: string;
      vat: string;
      vatExemption: string;
      address: string;
      phone: string;
      email: string;
      director: string;
    };
    ipText: string[];
    privacy: Array<{ heading: string; text: string }>;
    analyticsParagraph: { heading: string; text: string };
    termsText: string[];
    updated: string;
  };
  notFound: { title: string; text: string; back: string };
}
