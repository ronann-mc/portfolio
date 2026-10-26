// Turns raw YouTube Studio screenshots (images/, kept out of Git) into the
// proof images used on the site (src/assets/proofs/).
//
// "Stats" screenshots (a title, a row of tiles, then a chart) lose their tile
// row, which is where YouTube shows the estimated revenue: the title (exact
// view count) is stacked directly on top of the chart. Retention screenshots
// show no revenue and are copied as they are.
//
// Usage: npm run crop-proofs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'images';
const OUT = 'src/assets/proofs';

/** @type {Array<{ src: string; out: string; mode: 'stats' | 'copy' }>} */
const jobs = [
  { src: 'StillGoodHere_MostPopularVid_Stats.PNG', out: 'stillgoodhere-short-views.png', mode: 'stats' },
  { src: 'StillGoodHere_MostPopularVid_Retention.PNG', out: 'stillgoodhere-short-retention.png', mode: 'copy' },
  { src: 'StillGoodHere_StatsOverviewLifetime.PNG', out: 'stillgoodhere-channel-views.png', mode: 'stats' },
  { src: 'KiraEffects_MostPopularVid_Stats.PNG', out: 'kirafx-short-views.png', mode: 'stats' },
  { src: 'KiraEffects_MostPopularVid_Retention.PNG', out: 'kirafx-short-retention.png', mode: 'copy' },
  { src: 'KiraEffects_StatsOverviewLifetime.PNG', out: 'kirafx-channel-views.png', mode: 'stats' },
];

/** Finds the tile row (lighter grey band) and the card's left/right borders. */
async function detectLayout(file) {
  const { data, info } = await sharp(file).removeAlpha().greyscale().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const at = (x, y) => data[y * W + x];

  // Average brightness of the right half of each row: the non-selected tiles are light grey.
  const x0 = Math.floor(W * 0.55);
  const x1 = Math.floor(W * 0.9);
  const light = [];
  for (let y = 0; y < H; y++) {
    let sum = 0;
    for (let x = x0; x < x1; x++) sum += at(x, y);
    light.push(sum / (x1 - x0) > 30);
  }

  // The tile row is the first light band taller than 80 px.
  let tileTop = -1;
  let tileBottom = -1;
  for (let y = 0; y < H; y++) {
    if (!light[y]) continue;
    let end = y;
    while (end + 1 < H && light[end + 1]) end++;
    if (end - y > 80) {
      tileTop = y;
      tileBottom = end;
      break;
    }
    y = end;
  }
  if (tileTop < 0) throw new Error(`No tile row found in ${file}`);

  // Card borders, measured just below the tile row.
  const probe = tileBottom + 15;
  let left = 0;
  let right = W - 1;
  for (let x = 0; x < W / 3; x++) if (at(x, probe) > 45) { left = x; break; }
  for (let x = W - 1; x > (W * 2) / 3; x--) if (at(x, probe) > 45) { right = x; break; }

  return { W, H, tileTop, tileBottom, left, right };
}

async function cropStats(src, out) {
  const { H, tileTop, tileBottom, left, right } = await detectLayout(src);
  const x = left + 3;
  const width = right - left - 5;
  const titleHeight = tileTop - 8;
  const chartTop = tileBottom + 4;
  const chartHeight = H - chartTop;

  const title = await sharp(src).extract({ left: x, top: 0, width, height: titleHeight }).png().toBuffer();
  const chart = await sharp(src).extract({ left: x, top: chartTop, width, height: chartHeight }).png().toBuffer();

  await sharp({
    create: { width, height: titleHeight + chartHeight, channels: 3, background: { r: 15, g: 15, b: 15 } },
  })
    .composite([
      { input: title, top: 0, left: 0 },
      { input: chart, top: titleHeight, left: 0 },
    ])
    .png()
    .toFile(out);
}

await mkdir(OUT, { recursive: true });
for (const job of jobs) {
  const src = `${SRC}/${job.src}`;
  const out = `${OUT}/${job.out}`;
  if (job.mode === 'stats') await cropStats(src, out);
  else await sharp(src).png().toFile(out);
  console.log(`✓ ${out}`);
}
