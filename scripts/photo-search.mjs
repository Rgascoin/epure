#!/usr/bin/env node
/**
 * Finds free photos of a dish and shows them on one contact sheet, so a
 * single look is enough to choose.
 *
 *   pnpm recipes:photos "tartiflette" [--n 15] [--en "tartiflette potatoes reblochon"]
 *
 * Sources: Openverse (Flickr, Wikimedia… CC0 / public domain / CC BY / CC BY-SA only),
 * Wikimedia Commons, plus, when their free keys are set in the environment:
 *   PEXELS_API_KEY                               pexels.com/api (best food photos)
 *   PIXABAY_API_KEY                              pixabay.com/api/docs (1280 px max without full access)
 *   OPENVERSE_CLIENT_ID + OPENVERSE_CLIENT_SECRET  api.openverse.org (higher limits, fewer 5xx)
 *
 * Writes .cache/photos/<query>.jpg (numbered thumbnails) and .cache/photos/<query>.json
 * (one entry per number: the argument to pass to `pnpm recipes:images`, credit, licence).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const query = args.find(
  (a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--n" && args[args.indexOf(a) - 1] !== "--en",
);
if (!query) {
  console.error('Usage : pnpm recipes:photos "<plat>" [--n 15] [--en "<english query>"]');
  process.exit(1);
}
const n = Number(args[args.indexOf("--n") + 1]) || 15;
const en = args.includes("--en") ? args[args.indexOf("--en") + 1] : undefined;
const UA = { "User-Agent": "epure-recipe-tools/1.0 (recipe photo research)" };
const MIN_WIDTH = 1400;
const OK_LICENCES = new Set(["cc0", "pdm", "by", "by-sa"]);

const get = async (url, headers = {}, tries = 2) => {
  const res = await fetch(url, { headers: { ...UA, ...headers }, signal: AbortSignal.timeout(30_000) });
  if (res.status >= 500 && tries > 1) return get(url, headers, tries - 1);
  if (!res.ok) throw new Error(`${new URL(url).host} : HTTP ${res.status}`);
  return res.json();
};

/** A ~500 px version straight from the source (Openverse's own thumbnails often fail). */
function smallVersion(url) {
  const commons = url.match(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[0-9a-f]\/[0-9a-f]{2}\/([^/?#]+)$/);
  if (commons) return `https://commons.wikimedia.org/wiki/Special:FilePath/${commons[1]}?width=500`;
  if (/staticflickr\.com\//.test(url)) return url.replace(/(_[a-z])?\.jpg$/, "_n.jpg");
  return undefined;
}

let openverseAuth;
async function openverseHeaders() {
  const { OPENVERSE_CLIENT_ID: id, OPENVERSE_CLIENT_SECRET: secret } = process.env;
  if (!id || !secret) return {};
  openverseAuth ??= fetch("https://api.openverse.org/v1/auth_tokens/token/", {
    method: "POST",
    headers: { ...UA, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "client_credentials", client_id: id, client_secret: secret }),
  })
    .then((r) => (r.ok ? r.json() : {}))
    .then((t) => (t.access_token ? { Authorization: `Bearer ${t.access_token}` } : {}));
  return openverseAuth;
}

async function openverse(q) {
  const headers = await openverseHeaders();
  const size = headers.Authorization ? 40 : 20; // anonymous requests are capped at 20
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&license=cc0,pdm,by,by-sa&page_size=${size}`;
  const data = await get(url, headers);
  return data.results
    .filter((r) => OK_LICENCES.has(r.license) && (r.width ?? 0) >= MIN_WIDTH)
    .map((r) => ({
      arg: r.url,
      thumb: smallVersion(r.url) ?? r.thumbnail,
      width: r.width,
      height: r.height,
      credit: {
        photographer: r.creator || "Auteur inconnu",
        url: r.foreign_landing_url,
        source: r.source === "wikimedia" ? "Wikimedia Commons" : r.provider === "flickr" ? "Flickr" : r.source,
        license: `${r.license === "pdm" ? "Domaine public" : r.license === "cc0" ? "CC0" : `CC ${r.license.toUpperCase()}`}${r.license_version && !["cc0", "pdm"].includes(r.license) ? ` ${r.license_version}` : ""}`,
      },
      title: r.title,
    }));
}

async function commons(q) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=40" +
    `&gsrsearch=${encodeURIComponent(`filetype:bitmap ${q}`)}&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=400` +
    "&iiextmetadatafilter=LicenseShortName|Artist|ImageDescription";
  const data = await get(url);
  return Object.values(data.query?.pages ?? {})
    .map((p) => ({ p, ii: p.imageinfo?.[0] }))
    .filter(({ ii }) => ii && ii.width >= MIN_WIDTH)
    .map(({ p, ii }) => {
      const lic = ii.extmetadata?.LicenseShortName?.value ?? "";
      return {
        arg: ii.url,
        thumb: ii.thumburl,
        width: ii.width,
        height: ii.height,
        credit: {
          photographer: (ii.extmetadata?.Artist?.value ?? "").replace(/<[^>]+>/g, "").trim() || "Auteur inconnu",
          url: ii.descriptionurl,
          source: "Wikimedia Commons",
          license: lic,
        },
        title: p.title,
        licenceOk: /^(CC0|Public domain|CC BY(-SA)? \d)/i.test(lic),
      };
    })
    .filter((r) => r.licenceOk);
}

async function pixabay(q) {
  if (!process.env.PIXABAY_API_KEY) return [];
  const data = await get(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(q)}&image_type=photo&safesearch=true&per_page=40`,
  );
  // The free API serves up to 1280 px (largeImageURL); the original size is only for reference.
  return data.hits
    .filter((h) => h.imageWidth >= MIN_WIDTH)
    .map((h) => ({
      arg: h.largeImageURL,
      thumb: h.webformatURL,
      width: Math.min(1280, h.imageWidth),
      height: Math.round((Math.min(1280, h.imageWidth) / h.imageWidth) * h.imageHeight),
      credit: { photographer: h.user, url: h.pageURL, source: "Pixabay" },
      title: h.tags,
    }));
}

async function pexels(q) {
  if (!process.env.PEXELS_API_KEY) return [];
  const data = await get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=40`, {
    Authorization: process.env.PEXELS_API_KEY,
  });
  return data.photos
    .filter((p) => p.width >= MIN_WIDTH)
    .map((p) => ({
      arg: String(p.id),
      thumb: p.src.medium,
      width: p.width,
      height: p.height,
      credit: { photographer: p.photographer, url: p.url, source: "Pexels" },
      title: p.alt,
    }));
}

const queries = [query, en].filter(Boolean);
const settled = await Promise.allSettled(queries.flatMap((q) => [pexels(q), pixabay(q), openverse(q), commons(q)]));
for (const s of settled) if (s.status === "rejected") console.warn(`(source ignorée : ${s.reason.message})`);
const seen = new Set();
const results = settled
  .flatMap((s) => (s.status === "fulfilled" ? s.value : []))
  .filter((r) => !seen.has(r.arg) && seen.add(r.arg))
  .slice(0, n);

if (!results.length) {
  console.log("Aucune photo libre trouvée. Essayez une autre formulation, ou --en avec la requête en anglais.");
  process.exit(0);
}

// Contact sheet: numbered thumbnails, 5 per row.
const W = 280,
  H = 210,
  COLS = 5,
  LABEL = 26;
// Thumbnails one at a time: Wikimedia rate-limits bursts (HTTP 429).
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function thumb(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(20_000) });
      if (res.status === 429 || res.status >= 500) {
        const wait = Number(res.headers.get("retry-after")) || 2 * (attempt + 1);
        await sleep(Math.min(wait, 15) * 1000);
        continue;
      }
      if (!res.ok) {
        if (process.env.DEBUG) console.warn(`vignette ${res.status} : ${url}`);
        return null;
      }
      return await sharp(Buffer.from(await res.arrayBuffer()))
        .resize(W, H, { fit: "cover" })
        .toBuffer();
    } catch (error) {
      if (process.env.DEBUG) console.warn(error);
      await sleep(1000);
    }
  }
  return null;
}
const tiles = [];
for (const [i, r] of results.entries()) {
  tiles.push({ img: await thumb(r.thumb), i });
  await sleep(250);
}
const missing = tiles.filter((t) => !t.img).length;
if (missing) console.warn(`(${missing} vignette(s) indisponible(s) : relancez dans une minute)`);
const rows = Math.ceil(results.length / COLS);
const composite = [];
for (const { img, i } of tiles) {
  const left = (i % COLS) * W,
    top = Math.floor(i / COLS) * (H + LABEL);
  if (img) composite.push({ input: img, left, top });
  const r = results[i];
  const label = `${i + 1} · ${r.credit.source.replace("Wikimedia Commons", "Commons")} · ${r.width}×${r.height}`;
  composite.push({
    input: Buffer.from(
      `<svg width="${W}" height="${LABEL}"><rect width="100%" height="100%" fill="#fff"/><text x="6" y="18" font-size="14" font-family="sans-serif">${label.replace(/&/g, "&amp;")}</text></svg>`,
    ),
    left,
    top: top + H,
  });
}
const dir = join(process.cwd(), ".cache/photos");
mkdirSync(dir, { recursive: true });
const base = query
  .toLowerCase()
  .normalize("NFD")
  .replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-");
const sheet = join(dir, `${base}.jpg`);
await sharp({ create: { width: COLS * W, height: rows * (H + LABEL), channels: 3, background: "#fff" } })
  .composite(composite)
  .jpeg({ quality: 78 })
  .toFile(sheet);
writeFileSync(
  join(dir, `${base}.json`),
  JSON.stringify(
    results.map(({ arg, credit, width, height, title }) => ({ arg, credit, width, height, title })),
    null,
    2,
  ),
);

console.log(`Planche : ${sheet}`);
results.forEach((r, i) =>
  console.log(
    `${String(i + 1).padStart(2)}. ${r.credit.source} · ${r.width}×${r.height} · ${r.credit.license ?? "licence Pexels"} · ${r.credit.photographer} · ${(r.title ?? "").slice(0, 60)}`,
  ),
);
console.log(`\nEnsuite : pnpm recipes:images <slug> <n° hero> <n° détail> --from ${base} --focus "50% 45%"`);
