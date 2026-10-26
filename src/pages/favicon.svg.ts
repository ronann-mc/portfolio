import type { APIRoute } from 'astro';
import { renderFaviconSvg } from '../lib/og';

export const GET: APIRoute = async () =>
  new Response(await renderFaviconSvg(), { headers: { 'Content-Type': 'image/svg+xml' } });
