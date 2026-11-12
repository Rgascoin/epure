<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Recipes

Every recipe lives in `content/recipes/<slug>/` and must follow `docs/guide-redaction-recettes.md` on every point.
Start from `docs/recette-brief.md` (short brief) and the tools: `pnpm recipes:photos`, `pnpm recipes:images … --from`, `pnpm recipes:new`, then `pnpm recipes:check -t <slug>` until it is clean (a production build refuses recipes that break a mandatory rule).
Tag recipes for seasonal collections with `tags` (vocabulary in `lib/tags.ts`, calendar in `lib/collections.ts`).
To write and publish a whole batch on your own (scheduled sessions included), follow `docs/publier-un-lot.md` step by step: drafts, `pnpm recipes:release <slugs>`, pull request, squash merge, production check.
