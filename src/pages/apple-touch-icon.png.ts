import type { APIRoute } from 'astro';
import { renderTouchIcon } from '../lib/og';

export const GET: APIRoute = async () =>
  new Response(await renderTouchIcon(), { headers: { 'Content-Type': 'image/png' } });
