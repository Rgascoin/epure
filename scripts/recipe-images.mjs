#!/usr/bin/env node
/**
 * Prepares the photos of a recipe from two Pexels photos (or two local files).
 *
 *   pnpm recipes:images <slug> <hero> <detail> [--focus "50% 40%"]
 *
 * <hero> / <detail>: a Pexels photo id (e.g. 30628819), a direct image URL
 * (Wikimedia Commons, Pixabay, Unsplash…) or a path to a local JPEG.
 * With --from <search>, they are numbers from `pnpm recipes:photos` and the
 * script prints the credits block to paste in the recipe.
 *
 * Writes:
 *   content/recipes/<slug>/hero.jpg      (2000 px max, the page photo)
 *   content/recipes/<slug>/detail.jpg    (1400 px max, the polaroid)
 *   public/images/recipes/<slug>/1x1.jpg, 4x3.jpg, 16x9.jpg  (structured data & social)
 *
 * The crops follow the focus point (CSS object-position syntax), default centre.
 */
import { mkdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

let [slug, heroArg, detailArg, ...rest] = process.argv.slice(2);
if (!slug || !heroArg || !detailArg) {
  console.error('Usage : pnpm recipes:images <slug> <hero> <detail> [--from <recherche>] [--focus "50% 40%"]');
  process.exit(1);
}
const fromIdx = rest.indexOf("--from");
let picked = {};
if (fromIdx >= 0) {
  const list = JSON.parse(readFileSync(join(process.cwd(), ".cache/photos", `${rest[fromIdx + 1]}.json`), "utf8"));
  const pick = (n) => {
    const entry = list[Number(n) - 1];
    if (!entry) throw new Error(`Pas de photo n° ${n} dans la recherche « ${rest[fromIdx + 1]} »`);
    return entry;
  };
  picked = { hero: pick(heroArg), detail: pick(detailArg) };
  heroArg = picked.hero.arg;
  detailArg = picked.detail.arg;
}
const focusIdx = rest.indexOf("--focus");
const [fx, fy] = (focusIdx >= 0 ? rest[focusIdx + 1] : "50% 50%").split(/\s+/).map((v) => parseFloat(v) / 100);

/** GET with patience: Wikimedia and others answer 429 or 5xx to bursts. */
async function download(url, headers = {}) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": "epure-recipe-images/1.0", ...headers } });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if ((res.status === 429 || res.status >= 500) && attempt < 6) {
      const wait = Number(res.headers.get("retry-after")) || 5 * attempt;
      console.warn(`${new URL(url).host} : HTTP ${res.status}, nouvel essai dans ${Math.min(wait, 60)} s`);
      await new Promise((r) => setTimeout(r, Math.min(wait, 60) * 1000));
      continue;
    }
    throw new Error(`${url} : HTTP ${res.status}`);
  }
}

async function load(arg) {
  if (/^\d+$/.test(arg)) {
    return download(
      `https://images.pexels.com/photos/${arg}/pexels-photo-${arg}.jpeg?auto=compress&cs=tinysrgb&w=2400&fm=jpg&q=92`,
    );
  }
  if (/^https?:\/\//.test(arg)) return download(arg);
  if (!existsSync(arg)) throw new Error(`Fichier introuvable : ${arg}`);
  return readFileSync(arg);
}

const jpeg = { quality: 80, mozjpeg: true, progressive: true };

/** Crop to a ratio around the focus point. */
async function crop(input, ratio, width, out) {
  const meta = await sharp(input).metadata();
  const W = meta.width,
    H = meta.height;
  let w = W,
    h = Math.round(W / ratio);
  if (h > H) {
    h = H;
    w = Math.round(H * ratio);
  }
  const left = Math.min(W - w, Math.max(0, Math.round(fx * W - w / 2)));
  const top = Math.min(H - h, Math.max(0, Math.round(fy * H - h / 2)));
  await sharp(input)
    .extract({ left, top, width: w, height: h })
    .resize(width)
    .jpeg({ ...jpeg, quality: 78 })
    .toFile(out);
}

const contentDir = join(process.cwd(), "content/recipes", slug);
const publicDir = join(process.cwd(), "public/images/recipes", slug);
mkdirSync(contentDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });

const [hero, detail] = await Promise.all([load(heroArg), load(detailArg)]);
await sharp(hero)
  .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
  .jpeg(jpeg)
  .toFile(join(contentDir, "hero.jpg"));
await sharp(detail)
  .resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true })
  .jpeg(jpeg)
  .toFile(join(contentDir, "detail.jpg"));
await crop(hero, 1, 1200, join(publicDir, "1x1.jpg"));
await crop(hero, 4 / 3, 1200, join(publicDir, "4x3.jpg"));
await crop(hero, 16 / 9, 1600, join(publicDir, "16x9.jpg"));

const m = await sharp(join(contentDir, "hero.jpg")).metadata();
console.log(`${slug} : hero ${m.width}×${m.height}, detail + 3 recadrages écrits.`);

if (picked.hero) {
  const fmt = (c) => {
    const extra =
      c.source && c.source !== "Pexels" ? `, source: "${c.source}"${c.license ? `, license: "${c.license}"` : ""}` : "";
    return `{ photographer: "${c.photographer}", url: "${c.url}"${extra} }`;
  };
  console.log(
    `\nCrédits à coller dans images.credits :\n  hero: ${fmt(picked.hero.credit)},\n  detail: ${fmt(picked.detail.credit)},`,
  );
}
