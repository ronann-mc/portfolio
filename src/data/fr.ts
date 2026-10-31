// Tout ce que lit un visiteur francophone.
// - Entoure des mots d'*étoiles* pour les surligner en jaune (titres uniquement).
// - Les {variables} sont remplies depuis shared.ts : laisse-les telles quelles.
import type { Dictionary } from './types';

const fr: Dictionary = {
  locale: 'fr',
  ogLocale: 'fr_FR',
  currency: 'eur',

  meta: {
    title: 'Ronan McManus · Monteur de shorts pour podcasteurs et coachs',
    description:
      'Je transforme tes épisodes de podcast en shorts, Reels et TikTok qui font des vues. {views} de vues sur mes propres chaînes. Forfaits de 8 à 20 shorts par mois, 100 % à distance.',
  },

  og: {
    line: 'de vues sur mes propres chaînes Shorts',
    subtitle: 'Montage de shorts pour podcasteurs et coachs',
  },

  nav: {
    skip: 'Aller au contenu',
    results: 'Résultats',
    examples: 'Exemples',
    pricing: 'Tarifs',
    faq: 'FAQ',
    contact: 'Contact',
    otherLanguage: 'English',
    otherLanguageLabel: 'Read the site in English',
    home: 'Accueil',
  },

  hero: {
    kicker: 'Monteur Shorts · Reels · TikTok',
    title: 'Ton podcast mérite d’être vu. Je le transforme en shorts qui *font des vues*.',
    subtitle:
      '{views} de vues sur mes propres chaînes. Aujourd’hui, je monte pour les podcasteurs et les coachs : 8 à 20 shorts par mois, 100 % à distance.',
    stats: {
      views: 'vues',
      subscribers: 'abonnés',
      featured: 'vues en moins de {months} mois, sur une chaîne partie de zéro',
    },
    footnote: 'Monétisée en {weeks} semaines · chiffres YouTube Studio au {date}',
    footnoteNoMonetization: 'Chiffres YouTube Studio au {date}',
    cta: 'Recevoir ma proposition',
    ctaSecondary: 'Voir les résultats',
    visualDemoLabel: 'Exemple de montage',
  },

  results: {
    title: 'Des résultats, *pas des promesses*',
    intro: 'J’ai lancé, monté et fait grandir deux chaînes Shorts en partant de zéro. Voici leurs meilleurs shorts.',
    channelLabels: {
      stillgoodhere: 'Chaîne storytelling / wholesome',
      kirafx: 'Chaîne divertissement (anime)',
    },
    bestShort: 'Meilleur short',
    stats: {
      views: 'vues',
      subscribersGained: 'abonnés gagnés',
      stayedToWatch: 'ont regardé au lieu de swiper',
    },
    channelLine: 'Toute la chaîne : {views} vues · {subscribers} abonnés · depuis {launched}',
    seeProofs: 'Voir les captures YouTube Studio',
    proofsTitle: '{channel} dans YouTube Studio',
    proofAlts: {
      shortViews: 'YouTube Studio : le meilleur short de {channel} cumule {views} vues, avec sa courbe de vues.',
      shortRetention:
        'YouTube Studio : {stayed} % des spectateurs ont choisi de regarder le short de {channel}, avec sa courbe de rétention.',
      channelViews: 'YouTube Studio : {views} vues pour la chaîne {channel} depuis son lancement, avec les vues par jour.',
    },
    proofNote: 'Les revenus sont volontairement retirés des captures.',
    close: 'Fermer',
    visitChannel: 'Voir la chaîne',
  },

  examples: {
    title: 'Ce que je ferais *de tes épisodes*',
    intro:
      'Des exemples de montage dans le style que je livre. Avant : l’épisode complet. Après : un short prêt à publier.',
    niches: { business: 'Business', finance: 'Finance', sport: 'Sport', mindset: 'Mindset' },
    languages: { en: 'En anglais', fr: 'En français' },
    titles: {
      XPneIm0gPlo: 'Les 3 compétences de vente qui servent partout',
      'Cjk6qT-xVoQ': 'Ne l’envoie jamais sous le coup de l’émotion',
      VebOe8zETuI: 'Viré à 45 ans après 20 ans dans la même boîte',
    },
    before: 'Avant',
    after: 'Après',
    beforeAfter: 'Épisode de {episode} → {clip} d’échange → short de {short}',
    sourceLink: 'Voir le passage d’origine ({source}, à {start})',
  },

  pricing: {
    title: 'Des forfaits *simples*',
    intro: 'Choisis ton volume. Chaque short reçoit le même soin.',
    shortsPerMonth: '{count} shorts',
    perMonth: '/ mois',
    perShort: '{price} par short',
    featured: 'Recommandé',
    spotsLeft: 'Plus que {spots} places ce mois-ci',
    included: {
      title: 'Inclus dans chaque short',
      items: [
        'Le choix des meilleurs moments de ton épisode',
        'Un hook retravaillé pour les 2 premières secondes',
        'Des sous-titres animés',
        'Des zooms et du B-roll',
        'Musique et sound design',
        'Un export 9:16 pour YouTube, Instagram et TikTok',
        'Un titre et une description proposés',
      ],
    },
    delivery:
      'Premiers shorts sous 5 jours ouvrés, puis un nouveau lot chaque semaine. Un tour de retouches par short, traité sous 48 h.',
    pilot: {
      title: 'Pas encore sûr ? Commence par le pilote.',
      text: 'Pilote : {count} shorts pour {price} ({unit} par short), déduits de ton premier mois si tu continues dans les {days} jours.',
    },
    cta: 'Recevoir ma proposition',
    notes: [
      'Prix nets, TVA non applicable (art. 293 B du CGI).',
      'Paiement mensuel d’avance, sans engagement.',
      'Virement ou carte bancaire via Stripe.',
      'Prestations réservées aux professionnels.',
    ],
  },

  process: {
    title: 'Comment ça marche. *Sans appel.*',
    intro: 'Tout se passe par écrit : tu réponds quand tu veux, où que tu sois.',
    steps: [
      { title: 'Envoie-moi ton lien', text: 'Ta chaîne ou ton podcast, et le forfait qui t’intéresse. 30 secondes.' },
      { title: 'Reçois une proposition écrite', text: 'Sous 24 h : les moments que je découperais, le style et le prix.' },
      {
        title: 'Paie et lance-toi',
        text: 'Tu règles le premier mois, tu remplis un formulaire d’onboarding de 5 minutes et tu partages tes épisodes.',
      },
      {
        title: 'Reçois tes shorts chaque semaine',
        text: 'Prêts à publier, dans un dossier partagé. Tes retours par mail, avec le minutage.',
      },
    ],
  },

  about: {
    title: 'Qui *je suis*',
    paragraphs: [
      'Je m’appelle Ronan, monteur de shorts basé en France, bilingue français–anglais.',
      'J’ai lancé deux chaînes Shorts de zéro et je les ai montées moi-même : {views} de vues et {subscribers} abonnés. La deuxième a dépassé {featuredViews} de vues en moins de {months} mois.',
      'Aujourd’hui, j’applique la même méthode aux podcasteurs et aux coachs en finance, business et sport.',
    ],
  },

  testimonials: {
    title: 'Ce qu’en disent *mes clients*',
    // { quote: '…', name: '…', role: 'Animateur de …' }. La section reste cachée tant que la liste est vide.
    items: [],
  },

  faq: {
    title: 'Questions *fréquentes*',
    items: [
      {
        question: 'Qu’est-ce que je dois t’envoyer ?',
        answer:
          'Le lien de tes épisodes (YouTube, Google Drive, Dropbox, WeTransfer…) ou les fichiers bruts. L’idéal : de la 1080p ou plus, avec les pistes audio séparées si tu les as.',
      },
      {
        question: 'Tu publies les shorts pour moi ?',
        answer:
          'Non. Tu reçois des shorts 9:16 prêts à publier, avec un titre et une description proposés. Tu gardes la main sur tes comptes.',
      },
      {
        question: 'Combien de retouches ?',
        answer: 'Un tour de retouches par short, traité sous 48 h. Tu m’envoies tes retours par mail, avec le minutage.',
      },
      {
        question: 'Je peux arrêter quand je veux ?',
        answer:
          'Oui. Le forfait se paie chaque mois d’avance, sans engagement : tu me préviens avant le renouvellement et on s’arrête à la fin du mois.',
      },
      {
        question: 'Pourquoi pas d’appel ?',
        answer:
          'L’écrit est plus rapide pour toi : tout est noté, rien ne se perd, et tu réponds quand tu veux, quel que soit ton fuseau horaire.',
      },
      {
        question: 'Tu montes en anglais et en français ?',
        answer: 'Oui. Je suis bilingue : je monte et je sous-titre des podcasts dans les deux langues.',
      },
      {
        question: 'Comment je paie ?',
        answer: 'Par virement ou par carte bancaire via un lien Stripe. Tu reçois une facture chaque mois.',
      },
      {
        question: 'Et si un short ne fait pas de vues ?',
        answer:
          'Personne ne peut honnêtement garantir des vues. Ce que je fais : choisir les moments forts, écrire des hooks qui retiennent l’attention, et ajuster les sujets, la durée et les hooks selon tes statistiques quand tu me les partages.',
      },
    ],
  },

  contact: {
    title: 'Prêt à faire *tourner ton podcast* ?',
    text: 'Envoie-moi le lien de ta chaîne ou de ton podcast. Tu reçois une proposition écrite sous 24 h.',
    formUrl: 'https://tally.so/r/kbb2Xj',
    ctaForm: 'Remplir le formulaire (30 s)',
    ctaMail: 'M’écrire',
    mailSubject: 'Des shorts pour mon podcast',
    orEmail: 'Ou écris-moi directement :',
    responseTime: 'Réponse écrite sous 24 h ouvrées.',
  },

  player: {
    play: 'Lire « {title} »',
    note: 'Les vidéos se chargent depuis YouTube (youtube-nocookie.com) seulement quand tu appuies sur lecture.',
  },

  footer: {
    legal: 'Mentions légales et confidentialité',
    tagline: 'Montage de shorts, Reels et TikTok pour podcasteurs et coachs.',
  },

  legal: {
    title: 'Mentions légales et confidentialité',
    description: 'Informations légales sur ronanmcmanus.com et traitement des données personnelles.',
    sections: {
      publisher: 'Éditeur du site',
      host: 'Hébergement',
      ip: 'Propriété intellectuelle',
      privacy: 'Confidentialité',
      terms: 'Conditions des prestations',
    },
    labels: {
      name: 'Nom',
      legalForm: 'Forme juridique',
      legalFormValue: 'Entrepreneur individuel (EI)',
      siren: 'SIREN',
      siret: 'SIRET',
      registry: 'Immatriculation',
      registryValue: 'Immatriculé au RNE (Registre national des entreprises)',
      vat: 'N° de TVA intracommunautaire',
      vatExemption: 'TVA non applicable, art. 293 B du CGI',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'E-mail',
      director: 'Directeur de la publication',
    },
    ipText: [
      'Les textes, la mise en page et le design de ce site appartiennent à Ronan McManus.',
      'Les exemples de montage sont réalisés à partir d’épisodes de podcasts publics, crédités et liés à leur source, à titre de démonstration uniquement. Les contenus d’origine appartiennent à leurs auteurs.',
      'Les captures YouTube Studio proviennent des chaînes de l’éditeur.',
    ],
    privacy: [
      { heading: 'Responsable du traitement', text: 'Ronan McManus EI, joignable à {email}.' },
      {
        heading: 'Données collectées',
        text: 'Via le formulaire de contact : l’adresse e-mail, le lien de la chaîne ou du podcast et le forfait qui intéresse. Par e-mail : le message et l’adresse de l’expéditeur.',
      },
      {
        heading: 'Finalité',
        text: 'Répondre aux demandes et envoyer une proposition écrite (mesures précontractuelles prises à la demande de la personne).',
      },
      {
        heading: 'Destinataires',
        text: 'Uniquement l’éditeur. Le formulaire est géré par Tally (Belgique, données hébergées dans l’UE) et les e-mails transitent par Proton (Suisse), en tant que sous-traitants.',
      },
      {
        heading: 'Durée de conservation',
        text: '3 ans au plus après le dernier échange. En cas de collaboration, les factures sont conservées pendant la durée prévue par la loi.',
      },
      {
        heading: 'Cookies',
        text: 'Ce site ne dépose aucun cookie. Les vidéos YouTube ne se chargent depuis youtube-nocookie.com qu’au clic sur lecture ; YouTube peut alors utiliser ses propres traceurs, selon sa politique de confidentialité.',
      },
      {
        heading: 'Droits',
        text: 'Chacun peut accéder à ses données, les rectifier, les effacer, les récupérer, s’opposer à leur traitement ou le limiter en écrivant à {email}, et introduire une réclamation auprès de la CNIL (cnil.fr).',
      },
    ],
    analyticsParagraph: {
      heading: 'Mesure d’audience',
      text: 'Les visites sont mesurées avec Cloudflare Web Analytics (Cloudflare, Inc., États-Unis), sans cookie et sans identifier les visiteurs : seules des statistiques agrégées sont produites (pages vues, pays, type d’appareil).',
    },
    termsText: [
      'Les prestations sont réservées aux professionnels : créateurs, coachs et entreprises agissant pour leur activité.',
      'Les conditions détaillées (paiement, retouches, résiliation, droits sur les shorts livrés) figurent dans chaque proposition écrite et sont communiquées sur simple demande.',
    ],
    updated: 'Dernière mise à jour : 26 octobre 2026',
  },

  notFound: {
    title: 'Cette page n’existe pas',
    text: 'Le lien est peut-être cassé, ou la page a changé d’adresse.',
    back: 'Retour à l’accueil',
  },
};

export default fr;
