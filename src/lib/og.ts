// Share image and icons, drawn at build time with Satori (text → vector paths)
// and converted to PNG with sharp. They follow the numbers in shared.ts.
import satori from 'satori';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const COLORS = { bg: '#0a0a0d', text: '#f5f5f0', muted: '#a3a3ad', accent: '#b9f53c' };

type SatoriNode = { type: string; props: Record<string, unknown> & { style?: Record<string, unknown> } };
const el = (style: Record<string, unknown>, children?: unknown): SatoriNode => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

type SatoriFont = { name: string; data: Buffer; weight: 600 | 800; style: 'normal' };
let fonts: Promise<SatoriFont[]> | undefined;
function loadFonts(): Promise<SatoriFont[]> {
  // Satori reads WOFF (not WOFF2) and no variable fonts: use the static Fontsource files.
  const dir = join(process.cwd(), 'node_modules/@fontsource/tiktok-sans/files');
  fonts ??= Promise.all([
    readFile(join(dir, 'tiktok-sans-latin-800-normal.woff')),
    readFile(join(dir, 'tiktok-sans-latin-600-normal.woff')),
  ]).then(([extraBold, semiBold]) => [
    { name: 'TikTok Sans', data: extraBold, weight: 800, style: 'normal' },
    { name: 'TikTok Sans', data: semiBold, weight: 600, style: 'normal' },
  ]);
  return fonts;
}

const render = async (node: SatoriNode, width: number, height: number) =>
  satori(node as Parameters<typeof satori>[0], { width, height, fonts: await loadFonts() });

// Same rounded play triangle as the header logo (src/components/Header.astro).
const PLAY_PATH = 'M7 4.9v14.2a1.4 1.4 0 0 0 2.1 1.2l11.3-7.1a1.4 1.4 0 0 0 0-2.4L9.1 3.7A1.4 1.4 0 0 0 7 4.9z';
const playMark = (size: number): SatoriNode => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${PLAY_PATH}" fill="${COLORS.accent}"/></svg>`;
  return {
    type: 'img',
    props: { src: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`, width: size, height: size },
  };
};

/** The play mark centred on a dark tile, so it stays visible on light and dark browser tabs. */
const icon = (size: number, radius: number) =>
  el(
    { width: size, height: size, borderRadius: radius, background: COLORS.bg, alignItems: 'center', justifyContent: 'center' },
    playMark(Math.round(size * 0.78)),
  );

export async function renderShareImage(options: {
  name: string;
  number: string;
  line: string;
  subtitle: string;
  domain: string;
}): Promise<Uint8Array<ArrayBuffer>> {
  // Satori sizes boxes without border-box, so the padding lives on an inner frame (margin).
  const node = el({ width: '100%', height: '100%', background: COLORS.bg, color: COLORS.text, fontFamily: 'TikTok Sans' }, [
    el({ flexGrow: 1, flexDirection: 'column', justifyContent: 'space-between', margin: '60px 80px' }, [
      el({ alignItems: 'center', gap: 12 }, [
        playMark(56),
        el({ fontSize: 38, fontWeight: 800, letterSpacing: -0.5 }, options.name),
      ]),
      el({ flexDirection: 'column', width: '100%' }, [
        el({ fontSize: 190, fontWeight: 800, color: COLORS.accent, lineHeight: 1, letterSpacing: -5 }, options.number),
        el({ fontSize: 46, fontWeight: 800, marginTop: 14, letterSpacing: -0.8 }, options.line),
      ]),
      el({ justifyContent: 'space-between', fontSize: 28, fontWeight: 600, color: COLORS.muted }, [
        el({}, options.subtitle),
        el({ color: COLORS.text }, options.domain),
      ]),
    ]),
  ]);
  const svg = await render(node, 1200, 630);
  return Uint8Array.from(await sharp(Buffer.from(svg)).png().toBuffer());
}

export const renderFaviconSvg = () => render(icon(64, 14), 64, 64);

/** iOS adds its own rounded corners, so the touch icon is a plain square. */
export async function renderTouchIcon(): Promise<Uint8Array<ArrayBuffer>> {
  const svg = await render(icon(180, 0), 180, 180);
  return Uint8Array.from(await sharp(Buffer.from(svg)).png().toBuffer());
}
