#!/usr/bin/env node
/**
 * One image with the hero and detail photos of a few recipes, to review them
 * in a single look before publishing.
 *
 *   pnpm recipes:sheet crepes tiramisu    →  .cache/photo-sheet.jpg
 */
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("Usage : pnpm recipes:sheet <slug>...");
  process.exit(2);
}

const W = 260;
const H = 260;
const LABEL = 22;
const COLS = 4;
const tiles = [];
let i = 0;
for (const slug of slugs) {
  for (const kind of ["hero", "detail"]) {
    const left = (i % COLS) * W;
    const top = Math.floor(i / COLS) * H;
    const file = join(process.cwd(), "content/recipes", slug, `${kind}.jpg`);
    tiles.push({
      input: await sharp(file)
        .resize(W, H - LABEL, { fit: "cover" })
        .toBuffer(),
      left,
      top,
    });
    const label = `${slug.slice(0, 28)} · ${kind === "hero" ? "principale" : "détail"}`;
    tiles.push({
      input: Buffer.from(
        `<svg width="${W}" height="${LABEL}"><rect width="100%" height="100%" fill="white"/><text x="4" y="16" font-size="13" font-family="sans-serif">${label}</text></svg>`,
      ),
      left,
      top: top + H - LABEL,
    });
    i += 1;
  }
}
const dir = join(process.cwd(), ".cache");
mkdirSync(dir, { recursive: true });
const out = join(dir, "photo-sheet.jpg");
await sharp({ create: { width: COLS * W, height: Math.ceil(i / COLS) * H, channels: 3, background: "#fff" } })
  .composite(tiles)
  .jpeg({ quality: 78 })
  .toFile(out);
console.log(`Planche : ${out}`);
