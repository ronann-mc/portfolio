// Everything an English-speaking visitor reads.
// - Wrap words in *stars* to highlight them in yellow (titles only).
// - {placeholders} are filled from shared.ts: keep them as they are.
import type { Dictionary } from './types';

const en: Dictionary = {
  locale: 'en',
  ogLocale: 'en_US',
  currency: 'usd',

  meta: {
    title: 'Ronan McManus · Shorts editor for podcasters & coaches',
    description:
      'I turn podcast episodes into Shorts, Reels and TikToks that get watched. {views} views on my own channels. Monthly plans of 8 to 20 Shorts, fully async.',
  },

  og: {
    line: 'views on my own Shorts channels',
    subtitle: 'Shorts editing for podcasters & coaches',
  },

  nav: {
    skip: 'Skip to content',
    results: 'Results',
    examples: 'Examples',
    pricing: 'Pricing',
    faq: 'FAQ',
    contact: 'Contact',
    otherLanguage: 'Français',
    otherLanguageLabel: 'Lire le site en français',
    home: 'Home',
  },

  hero: {
    kicker: 'Shorts, Reels & TikTok editor',
    title: 'Your podcast, cut into Shorts that *actually get watched*.',
    subtitle:
      'I grew two Shorts channels to {views} views. Now I edit for podcasters and coaches: 8 to 20 Shorts a month, fully async.',
    stats: {
      views: 'views',
      subscribers: 'subscribers',
      featured: 'views in under {months} months, on a brand-new channel',
    },
    footnote: 'Monetized in {weeks} weeks · YouTube Studio figures, {date}',
    footnoteNoMonetization: 'YouTube Studio figures, {date}',
    cta: 'Get my proposal',
    ctaSecondary: 'See the results',
    visualDemoLabel: 'Editing sample',
  },

  results: {
    title: 'Proof, *not promises*',
    intro: 'I launched, edited and grew two Shorts channels from zero. Here are their best Shorts.',
    channelLabels: {
      stillgoodhere: 'Storytelling / wholesome channel',
      kirafx: 'Entertainment channel (anime)',
    },
    bestShort: 'Best Short',
    stats: {
      views: 'views',
      subscribersGained: 'subscribers gained',
      stayedToWatch: 'chose to watch instead of swiping',
    },
    channelLine: 'Whole channel: {views} views · {subscribers} subscribers · since {launched}',
    seeProofs: 'See the YouTube Studio screenshots',
    proofsTitle: '{channel} in YouTube Studio',
    proofAlts: {
      shortViews: 'YouTube Studio: the best {channel} Short has {views} views, with its cumulative views curve.',
      shortRetention: 'YouTube Studio: {stayed}% of viewers chose to watch the {channel} Short, with its retention curve.',
      channelViews: 'YouTube Studio: {views} views for the {channel} channel since launch, with daily views.',
    },
    proofNote: 'Revenue figures are cropped out on purpose.',
    close: 'Close',
    visitChannel: 'Visit the channel',
  },

  examples: {
    title: 'What I’d make *from your episodes*',
    intro:
      'Editing samples in the style I deliver to clients. Before: a full episode. After: a Short you can post today.',
    niches: { business: 'Business', finance: 'Finance', sport: 'Sport', mindset: 'Mindset' },
    languages: { en: 'In English', fr: 'In French' },
    titles: {
      XPneIm0gPlo: '3 sales skills you can use everywhere',
      'Cjk6qT-xVoQ': 'Never send it while you’re upset',
    },
    before: 'Before',
    after: 'After',
    beforeAfter: '{episode} episode → {clip} of conversation → {short} Short',
    sourceLink: 'Watch the original moment ({source}, {start})',
  },

  pricing: {
    title: 'Simple *monthly plans*',
    intro: 'Pick a volume. Every Short gets the same care.',
    shortsPerMonth: '{count} Shorts',
    perMonth: '/ month',
    perShort: '{price} per Short',
    featured: 'Recommended',
    spotsLeft: '{spots} spots left this month',
    included: {
      title: 'Included in every Short',
      items: [
        'The best moments picked from your episode',
        'A reworked hook for the first 2 seconds',
        'Animated captions',
        'Zooms and B-roll',
        'Music and sound design',
        '9:16 export for YouTube, Instagram and TikTok',
        'A suggested title and description',
      ],
    },
    delivery: 'First Shorts within 5 working days, then a new batch every week. One round of revisions per Short, done within 48 hours.',
    pilot: {
      title: 'Not sure yet? Start with a pilot.',
      text: 'Pilot: {count} Shorts for {price} ({unit} per Short), deducted from your first month if you continue within {days} days.',
    },
    cta: 'Get my proposal',
    notes: [
      'Prices in US dollars. No VAT charged (French VAT exemption).',
      'Paid monthly in advance, no commitment.',
      'Card through Stripe, or bank transfer.',
      'For professional creators and businesses.',
    ],
  },

  process: {
    title: 'How it works. *No calls.*',
    intro: 'Everything happens in writing, so you can reply whenever suits you, in any time zone.',
    steps: [
      { title: 'Send me your link', text: 'Your channel or podcast and the plan you like. Takes 30 seconds.' },
      { title: 'Get a written proposal', text: 'Within 24 hours: the moments I’d clip, the style and the price.' },
      {
        title: 'Pay and onboard',
        text: 'Pay the first month, fill in a 5-minute onboarding form and share your episodes.',
      },
      {
        title: 'Get Shorts every week',
        text: 'Ready-to-post Shorts in a shared folder. Feedback by email, with timecodes.',
      },
    ],
  },

  about: {
    title: 'Who’s *behind it*',
    paragraphs: [
      'I’m Ronan, a Shorts editor based in France, bilingual in English and French.',
      'I launched two Shorts channels from scratch and edited them myself: {views} views and {subscribers} subscribers. The second one passed {featuredViews} views in under {months} months.',
      'Now I bring the same method to podcasters and coaches in finance, business and sport.',
    ],
  },

  testimonials: {
    title: 'What *clients say*',
    // { quote: '…', name: '…', role: 'Host of …' }. The section stays hidden while this list is empty.
    items: [],
  },

  faq: {
    title: 'Questions, *answered*',
    items: [
      {
        question: 'What do I need to send you?',
        answer:
          'A link to your episodes (YouTube, Google Drive, Dropbox, WeTransfer…) or the raw files. 1080p or higher is ideal, and separate audio tracks help if you have them.',
      },
      {
        question: 'Do you post the Shorts for me?',
        answer:
          'No. You get ready-to-post 9:16 Shorts with a suggested title and description, and you stay in control of your accounts.',
      },
      {
        question: 'How many revisions do I get?',
        answer: 'One round of revisions per Short, done within 48 hours. Just email me your notes with timecodes.',
      },
      {
        question: 'Can I stop anytime?',
        answer:
          'Yes. Plans are paid monthly in advance with no commitment: tell me before the renewal and we stop at the end of the month.',
      },
      {
        question: 'Why no calls?',
        answer:
          'Writing is faster for you: everything is on record, nothing gets lost, and you reply whenever you want, whatever your time zone.',
      },
      {
        question: 'Do you edit in English and French?',
        answer: 'Yes. I’m bilingual, so I edit and caption podcasts in both languages.',
      },
      {
        question: 'How do I pay?',
        answer: 'By card through a Stripe link, or by bank transfer. You get an invoice every month.',
      },
      {
        question: 'What if a Short doesn’t get views?',
        answer:
          'Nobody can honestly guarantee views. What I do: pick strong moments, write hooks that hold attention, and adjust topics, length and hooks based on your stats when you share them.',
      },
    ],
  },

  contact: {
    title: 'Want Shorts that *get watched*?',
    text: 'Send me your channel or podcast link. You’ll get a written proposal within 24 hours.',
    formUrl: 'https://tally.so/r/WJJLBP',
    ctaForm: 'Fill in the form (30 s)',
    ctaMail: 'Email me',
    mailSubject: 'Shorts for my podcast',
    orEmail: 'Or email me directly:',
    responseTime: 'Written reply within one business day.',
  },

  player: {
    play: 'Play “{title}”',
    note: 'Videos load from YouTube (youtube-nocookie.com) only when you press play.',
  },

  footer: {
    legal: 'Legal notice & privacy',
    tagline: 'Shorts, Reels & TikTok editing for podcasters and coaches.',
  },

  legal: {
    title: 'Legal notice & privacy',
    description: 'Legal information about ronanmcmanus.com and how personal data is handled.',
    sections: {
      publisher: 'Publisher',
      host: 'Hosting',
      ip: 'Intellectual property',
      privacy: 'Privacy',
      terms: 'Terms of service',
    },
    labels: {
      name: 'Name',
      legalForm: 'Legal form',
      legalFormValue: 'French sole trader (entrepreneur individuel, EI)',
      siren: 'SIREN',
      siret: 'SIRET',
      registry: 'Registration',
      registryValue: 'Registered with the RNE (French national business register)',
      vat: 'EU VAT number',
      vatExemption: 'VAT not applicable, art. 293 B of the French tax code (CGI)',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      director: 'Publication director',
    },
    ipText: [
      'The texts, layout and design of this site belong to Ronan McManus.',
      'The editing samples are made from publicly available podcast episodes, credited and linked to their source, for demonstration only. The original content belongs to its creators.',
      'The YouTube Studio screenshots come from the publisher’s own channels.',
    ],
    privacy: [
      { heading: 'Data controller', text: 'Ronan McManus EI, reachable at {email}.' },
      {
        heading: 'What is collected',
        text: 'Through the contact form: your email address, the link to your channel or podcast and the plan you are interested in. By email: your message and your email address.',
      },
      {
        heading: 'Why',
        text: 'To reply to your request and send you a written proposal (steps taken at your request before a contract).',
      },
      {
        heading: 'Who receives it',
        text: 'Only me. The form is run by Tally (Belgium, data hosted in the EU) and emails go through Proton (Switzerland), both acting as processors.',
      },
      {
        heading: 'How long it is kept',
        text: 'Up to 3 years after our last exchange. If we work together, invoices are kept for as long as the law requires.',
      },
      {
        heading: 'Cookies',
        text: 'This site sets no cookies. YouTube videos only load from youtube-nocookie.com when you press play; YouTube may then use its own trackers under its own privacy policy.',
      },
      {
        heading: 'Your rights',
        text: 'You can access, correct, delete or export your data, and object to or restrict its use, by emailing {email}. You can also lodge a complaint with the CNIL, the French data protection authority (cnil.fr).',
      },
    ],
    analyticsParagraph: {
      heading: 'Audience measurement',
      text: 'Visits are measured with Cloudflare Web Analytics (Cloudflare, Inc., USA), which sets no cookies and does not identify you: it only produces aggregated figures such as pages viewed, country and device type.',
    },
    termsText: [
      'My services are reserved for professionals: creators, coaches and businesses acting for their activity.',
      'Detailed terms (payment, revisions, cancellation, rights on delivered Shorts) are set out in each written proposal and sent on request.',
    ],
    updated: 'Last updated: October 26, 2026',
  },

  notFound: {
    title: 'This page doesn’t exist',
    text: 'The link may be broken, or the page may have moved.',
    back: 'Back to the homepage',
  },
};

export default en;
