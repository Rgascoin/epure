#!/usr/bin/env bash
# Validates a batch of draft recipes for publication, in the current checkout.
#
#   pnpm recipes:release crepes tiramisu …
#
# 1. each recipe exists and has no placeholder left; its .draft file is removed
# 2. the backlog (docs/a-ajouter.md) is ticked, the batch is formatted
# 3. every test, the linter and the type checker pass
# 4. a production build (drafts left out) succeeds, the pages answer 200
#    and pass the accessibility audit (dark mobile, light desktop)
# 5. a contact sheet of the photos is written to .cache/photo-sheet.jpg: look at it
#
# Nothing is committed: git, the pull request and the merge stay with you
# (see docs/publier-un-lot.md). Stops at the first failure (exit code ≠ 0).
set -euo pipefail

if [ "$#" -eq 0 ]; then
  echo "Usage : pnpm recipes:release <slug>..." >&2
  exit 2
fi

PORT="${RELEASE_PORT:-3311}"
step() { printf '\n▶ %s\n' "$1"; }

step "Recettes du lot"
for slug in "$@"; do
  file="content/recipes/$slug/index.ts"
  [ -f "$file" ] || { echo "✗ $slug : $file introuvable" >&2; exit 1; }
  if grep -q "À ÉCRIRE" "$file"; then echo "✗ $slug : il reste des « À ÉCRIRE »" >&2; exit 1; fi
  rm -f "content/recipes/$slug/.draft"
  echo "✓ $slug (brouillon retiré)"
done

step "Liste de travail et mise en forme"
node scripts/backlog.mjs --next 0 > /dev/null
paths=()
for slug in "$@"; do paths+=("content/recipes/$slug"); done
pnpm exec prettier --write "${paths[@]}" docs/a-ajouter.md > /dev/null

step "Tests, lint, types"
node scripts/generate-recipe-index.mjs --skip-drafts
pnpm exec vitest run
pnpm exec eslint app components lib
pnpm exec next typegen > /dev/null
pnpm exec tsc --noEmit

step "Build de production"
rm -rf .next
mkdir -p .cache
VERCEL_ENV=production pnpm build > .cache/release-build.log 2>&1 || {
  tail -40 .cache/release-build.log >&2
  exit 1
}
grep -E "Generating static pages" .cache/release-build.log | tail -1 || true

step "Pages et accessibilité"
VERCEL_ENV=production ./node_modules/.bin/next start -p "$PORT" > /dev/null 2>&1 &
server=$!
trap 'kill $server 2>/dev/null; pkill -f "next start -p $PORT" 2>/dev/null || true' EXIT
for _ in $(seq 1 60); do curl -s -o /dev/null "http://localhost:$PORT/" && break; sleep 1; done
pages=()
for slug in "$@"; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "http://localhost:$PORT/recettes/$slug")
  [ "$code" = "200" ] || { echo "✗ /recettes/$slug : HTTP $code" >&2; exit 1; }
  pages+=("/recettes/$slug")
done
node scripts/a11y-audit.mjs "http://localhost:$PORT" "${pages[@]}"

step "Photos"
node scripts/photo-sheet.mjs "$@"
node scripts/generate-recipe-index.mjs > /dev/null

printf '\n✓ Lot prêt à publier : %s\n' "$*"
