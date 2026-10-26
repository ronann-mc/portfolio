import type { APIRoute, GetStaticPaths } from 'astro';
import { shared } from '../../data/shared';
import { getDictionary, locales, type Locale } from '../../i18n';
import { formatCompact } from '../../lib/format';
import { renderShareImage } from '../../lib/og';
import { totals } from '../../lib/stats';

export const getStaticPaths = (() => locales.map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Locale;
  const t = getDictionary(lang);
  const png = await renderShareImage({
    name: shared.site.name,
    number: formatCompact(totals.views, lang),
    line: t.og.line,
    subtitle: t.og.subtitle,
    domain: new URL(shared.site.url).host,
  });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
