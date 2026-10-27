// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://ronanmcmanus.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // `/` is a hand-written static redirect page (src/pages/index.astro) that works on GitHub Pages.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },

  // Legal address and phone: read at build time from a local .env file or from
  // GitHub secrets, so they never enter the public repository.
  env: {
    schema: {
      LEGAL_ADDRESS: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEGAL_PHONE: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },

  // YouTube thumbnails are downloaded and optimised at build time, so visitors
  // never contact Google before they press play.
  image: { domains: ['i.ytimg.com'] },

  // Self-hosted font: only the Latin file of the installed @fontsource package,
  // so each page preloads one small variable file and never contacts a font CDN.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'TikTok Sans',
      cssVariable: '--font-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            weight: '300 900',
            style: 'normal',
            src: ['./node_modules/@fontsource-variable/tiktok-sans/files/tiktok-sans-latin-wght-normal.woff2'],
          },
        ],
      },
    },
  ],

  integrations: [
    sitemap({
      // The root redirect and the noindex legal pages stay out of the sitemap.
      filter: (page) =>
        page !== `${SITE}/` && !page.includes('/legal/') && !page.includes('/mentions-legales/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr' } },
    }),
  ],
});
