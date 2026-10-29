// Numbers, links and prices shared by both languages.
// Update a figure here and it changes everywhere on the site (both languages,
// hero, cards, share image).
import type { SharedData } from './types';

import sghShortViews from '../assets/proofs/stillgoodhere-short-views.png';
import sghShortRetention from '../assets/proofs/stillgoodhere-short-retention.png';
import sghChannelViews from '../assets/proofs/stillgoodhere-channel-views.png';
import kiraShortViews from '../assets/proofs/kirafx-short-views.png';
import kiraShortRetention from '../assets/proofs/kirafx-short-retention.png';
import kiraChannelViews from '../assets/proofs/kirafx-channel-views.png';

export const shared: SharedData = {
  site: {
    url: 'https://ronanmcmanus.com',
    name: 'Ronan McManus',
    email: 'contact@ronanmcmanus.com',
  },

  statsDate: '2026-10-26',
  featuredChannelId: 'stillgoodhere',

  // Shown in this order. Totals in the hero are the sum of these channels.
  channels: [
    {
      id: 'stillgoodhere',
      name: 'Still Good Here',
      url: 'https://www.youtube.com/@StillGood_Here',
      launched: '2026-06-05',
      monetizedInWeeks: 3,
      views: 151_389_714,
      subscribers: 68_000,
      bestShort: { youtubeId: '-D3tYyXXEng', views: 86_400_000, subscribersGained: 60_900, stayedToWatch: 78.2 },
      proofs: [
        { kind: 'shortViews', image: sghShortViews },
        { kind: 'shortRetention', image: sghShortRetention },
        { kind: 'channelViews', image: sghChannelViews },
      ],
    },
    {
      id: 'kirafx',
      name: 'KiraFX',
      url: 'https://www.youtube.com/@KiraEffects',
      launched: '2025-06-01',
      views: 228_847_682,
      subscribers: 127_400,
      bestShort: { youtubeId: 'qGwpQehqDmI', views: 25_510_923, subscribersGained: 18_200, stayedToWatch: 79.1 },
      proofs: [
        { kind: 'shortViews', image: kiraShortViews },
        { kind: 'shortRetention', image: kiraShortRetention },
        { kind: 'channelViews', image: kiraChannelViews },
      ],
    },
  ],

  // Editing samples. No view counts are shown for these.
  // Add the title of each new demo in en.ts and fr.ts (examples.titles).
  demos: [
    {
      youtubeId: '5tMnuZEeWYI',
      niche: 'business',
      language: 'en',
      length: '0:21',
      source: {
        name: 'Jay Shetty Podcast',
        youtubeId: '5RTFMlvbOG0',
        episodeLength: '1:39:37',
        start: '3:54',
        end: '6:41',
      },
    },
  ],

  // Prices per month. USD = EUR × 1.12 (rate of late October 2026), rounded to a price ending in 9.
  pricing: {
    packages: [
      { id: 'starter', name: 'Starter', shorts: 8, price: { eur: 600, usd: 679 } },
      { id: 'growth', name: 'Growth', shorts: 12, price: { eur: 840, usd: 949 }, featured: true },
      { id: 'scale', name: 'Scale', shorts: 20, price: { eur: 1300, usd: 1449 } },
    ],
    pilot: { shorts: 3, price: { eur: 120, usd: 139 }, deductibleWithinDays: 14 },
    availability: { show: false, spots: 0 },
  },

  // The address and the phone number are NOT here: they come from the
  // LEGAL_ADDRESS and LEGAL_PHONE environment variables (see README).
  legal: {
    ownerName: 'Ronan McManus',
    legalForm: 'EI',
    siren: '992 270 942',
    siret: '992 270 942 00012',
    vatNumber: 'FR14 992 270 942',
    registry: 'RNE',
    host: {
      name: 'GitHub, Inc.',
      address: '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
      phone: '+1 877 448 4820',
      url: 'https://github.com',
    },
  },

  analytics: {
    cloudflareToken: '',
  },
};
