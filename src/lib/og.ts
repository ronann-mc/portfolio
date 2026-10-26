// Share image and icons, drawn at build time with Satori (text → vector paths)
// and converted to PNG with sharp. They follow the numbers in shared.ts.
import satori from 'satori';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const COLORS = { bg: '#0a0a0d', text: '#f5f5f0', muted: '#a3a3ad', accent: '#ffd60a' };

type SatoriNode = { type: string; props: { style?: Record<string, unknown>; children?: unknown } };
const el = (style: Record<string, unknown>, children?: unknown): SatoriNode => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

type SatoriFont = { name: string; data: Buffer; weight: 600 | 800; style: 'normal' };
let fonts: Promise<SatoriFont[]> | undefined;
function loadFonts(): Promise<SatoriFont[]> {
  // Satori reads WOFF (not WOFF2); the Fontsource package ships both.
  const dir = join(process.cwd(), 'node_modules/@fontsource/montserrat/files');
  fonts ??= Promise.all([
    readFile(join(dir, 'montserrat-latin-800-normal.woff')),
    readFile(join(dir, 'montserrat-latin-600-normal.woff')),
  ]).then(([extraBold, semiBold]) => [
    { name: 'Montserrat', data: extraBold, weight: 800, style: 'normal' },
    { name: 'Montserrat', data: semiBold, weight: 600, style: 'normal' },
  ]);
  return fonts;
}

const render = async (node: SatoriNode, width: number, height: number) =>
  satori(node as Parameters<typeof satori>[0], { width, height, fonts: await loadFonts() });

const monogram = (size: number, radius: number) =>
  el(
    {
      width: size,
      height: size,
      borderRadius: radius,
      background: COLORS.accent,
      color: COLORS.bg,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: Math.round(size * 0.44),
      letterSpacing: -size * 0.02,
    },
    'RM',
  );

export async function renderShareImage(options: {
  name: string;
  number: string;
  line: string;
  subtitle: string;
  domain: string;
}): Promise<Uint8Array<ArrayBuffer>> {
  // Satori sizes boxes without border-box, so the padding lives on an inner frame (margin).
  const node = el({ width: '100%', height: '100%', background: COLORS.bg, color: COLORS.text, fontFamily: 'Montserrat' }, [
    el({ flexGrow: 1, flexDirection: 'column', justifyContent: 'space-between', margin: '60px 80px' }, [
      el({ alignItems: 'center', gap: 22 }, [
        monogram(68, 14),
        el({ fontSize: 32, fontWeight: 800, letterSpacing: 2 }, options.name.toUpperCase()),
      ]),
      el({ flexDirection: 'column', width: '100%' }, [
        el({ fontSize: 190, fontWeight: 800, color: COLORS.accent, lineHeight: 1, letterSpacing: -4 }, options.number),
        el({ fontSize: 40, fontWeight: 800, marginTop: 14, textTransform: 'uppercase' }, options.line),
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

export const renderFaviconSvg = () => render(monogram(64, 14), 64, 64);

/** iOS adds its own rounded corners, so the touch icon is a plain square. */
export async function renderTouchIcon(): Promise<Uint8Array<ArrayBuffer>> {
  const svg = await render(monogram(180, 0), 180, 180);
  return Uint8Array.from(await sharp(Buffer.from(svg)).png().toBuffer());
}
