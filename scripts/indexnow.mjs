#!/usr/bin/env node
/**
 * Tells Bing (and the other IndexNow engines: Yandex, Seznam, Naver…) which
 * pages are new or changed, so they are crawled within minutes instead of days.
 * Bing also feeds ChatGPT Search and Copilot.
 *
 *   node scripts/indexnow.mjs --since HEAD~1   # recipes changed by the last commit (run after a deploy)
 *   node scripts/indexnow.mjs --all            # every URL of the sitemap (first submission)
 *   add --dry-run to print the list without sending it
 *
 * The key is public by design: it is served at /<key>.txt to prove ownership.
 */
import { execFileSync } from "node:child_process";

const KEY = "26227e61f55da0ed58796faa05304b25";
const SITE = (process.env.SITE_URL ?? "https://www.epure-cuisine.fr").replace(/\/$/, "");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

const sitemap = async () => {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(SITE));
};

let urls = [];
if (args.includes("--all")) {
  urls = await sitemap();
} else if (args.includes("--since")) {
  const ref = args[args.indexOf("--since") + 1];
  const changed = execFileSync("git", ["diff", "--name-only", ref, "HEAD"], { encoding: "utf8" }).split("\n");
  const slugs = [...new Set(changed.map((f) => f.match(/^content\/recipes\/([^/]+)\//)?.[1]).filter(Boolean))];
  if (slugs.length) {
    // The recipes, plus the listings that show them.
    const listings = (await sitemap()).filter((u) => /\/(categories|collections)\//.test(u));
    urls = [...slugs.map((s) => `${SITE}/recettes/${s}`), `${SITE}/`, `${SITE}/recettes`, `${SITE}/collections`, ...listings];
  }
} else {
  console.error("Usage : node scripts/indexnow.mjs --since <ref> | --all [--dry-run]");
  process.exit(1);
}

// Only submit pages that are really online (a deleted recipe answers 404).
const live = [];
for (const url of urls) {
  const res = await fetch(url, { method: "HEAD", redirect: "manual" });
  if (res.status === 200) live.push(url);
  else console.log(`ignoré (${res.status}) : ${url}`);
}
if (!live.length) {
  console.log("Rien à signaler.");
  process.exit(0);
}
console.log(`${live.length} URL :\n${live.join("\n")}`);
if (dryRun) process.exit(0);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: live }),
});
console.log(`IndexNow : HTTP ${res.status}`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
