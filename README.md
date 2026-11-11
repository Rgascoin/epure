# Épure — cinq recettes, à l’essentiel

Un petit carnet de cuisine en ligne : **cinq grands classiques**, écrits au gramme près, avec le pourquoi de chaque geste. Direction artistique éditoriale (papier, encre, notes à la main) plutôt que « tech ».
La qualité plutôt que la quantité, sur deux axes : **référencement (moteurs + IA)** et **expérience (motion design, mobile-first)**.

| Recette                  | Catégorie | Temps total |
| ------------------------ | --------- | ----------- |
| Spaghetti alla carbonara | Plat      | 25 min      |
| Bœuf bourguignon         | Plat      | 4 h 10      |
| Tian provençal           | Plat      | 2 h         |
| Tarte aux pommes         | Dessert   | 3 h 05      |
| Mousse au chocolat       | Dessert   | 6 h 30      |

## Stack

- **Next.js 16.4** (App Router, Turbopack, Cache Components, Partial Prefetching, typed routes), **React 19.3**
- **Tailwind CSS 4** (tokens CSS, utilitaires typographiques fluides, mode sombre automatique)
- **Motion** (`motion/react-m` + `LazyMotion` : les fonctionnalités d’animation sont chargées après l’hydratation)
- **View Transitions natives** de React (`<ViewTransition>`) : la photo d’une carte se transforme en hero de la recette
- `schema-dts` pour typer les données structurées, `@vercel/analytics` + `@vercel/speed-insights`

Tout le site est **pré-rendu statiquement** au build (pages, images Open Graph, sitemap, flux, Markdown) : aucune fonction serveur n’est nécessaire pour servir le contenu.

## Référencement — moteurs de recherche

- **Données structurées schema.org** en `@graph` lié par `@id` : `WebSite`, `Organization`, `WebPage` (+ `SpeakableSpecification`), `BreadcrumbList`, `Recipe` complet (temps ISO 8601, ingrédients, étapes `HowToSection`/`HowToStep` avec ancres, nutrition, régimes, ustensiles, 3 images aux ratios 1:1 / 4:3 / 16:9), `FAQPage`, `ItemList` (carrousel).
- **Métadonnées** : titres optimisés (mot-clé en tête, ≤ 60 car.), descriptions « réponse d’abord », canonicals, Open Graph `article`, Twitter Cards, `max-image-preview:large`.
- **Images Open Graph générées** pour chaque recette (photo + titre + couleur du plat), statiques.
- **Sitemap XML avec extension images**, `robots.txt`, **flux RSS** avec Media RSS, manifest PWA, icônes.
- **Core Web Vitals** : HTML statique, animations d’entrée en CSS pur (démarrent au premier rendu), image LCP préchargée en `fetchPriority="high"`, AVIF/WebP, polices auto-hébergées (`next/font`), CLS = 0.
- **Préprod non indexée** : sur Vercel, seuls les déploiements `production` sont indexables (`robots` + meta).
- Contenu éditorial rédigé pour l’E-E-A-T : « L’essentiel » en tête, science de chaque geste, erreurs fréquentes, variantes, FAQ, dates de publication/mise à jour, crédits photo.

## Référencement — IA et agents (GEO)

- **`/llms.txt`** (convention [llmstxt.org](https://llmstxt.org)) et **`/llms-full.txt`** (toutes les recettes en un document).
- **Jumeau Markdown de chaque recette** : `/recettes/<slug>.md`, ou la même URL avec l’en-tête `Accept: text/markdown`
  (négociation de contenu via `rewrites`). Annoncé par `<link rel="alternate" type="text/markdown">`, `noindex` pour éviter le contenu dupliqué.
- **`robots.txt` ouvert explicitement** aux robots d’IA (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended…).
- Paragraphe « L’essentiel » écrit pour être cité tel quel (quantités, temps, températures).

## Expérience

- **Direction artistique** : papier et encre, Fraunces (serif à tailles optiques) pour les titres, Instrument Sans pour le texte, IBM Plex Mono pour les étiquettes, Caveat pour les notes manuscrites. Boutons à ombre « imprimée », photos en arche de boulangerie, traits dessinés à la main.
- **Accueil** : titre avec des photos de plats glissées entre les mots, tampon rotatif, bandeau d’ingrédients, manifeste surligné au feutre, **carnet horizontal** dont les pages défilent au scroll (swipe sur mobile), ticket de cuisine qui « s’imprime », sommaire typographique avec photo qui suit le curseur.
- **Fiche recette** : photo en arche avec tampon et note, « En bref » sur une note scotchée, ingrédients façon menu de bistrot (pointillés, rature à la main quand on coche), portions ajustables (arrondis « de cuisinier », conversion g → kg), étapes numérotées entourées au stylo une fois faites, **minuteurs intégrés** (son, vibration, titre d’onglet), variantes sur fiches bristol, étiquette nutritionnelle, polaroïd, version imprimable.
- **Mode cuisine plein écran** : `<dialog>` natif, Wake Lock (l’écran reste allumé), swipe et clavier, ingrédients en tiroir, minuteurs visibles en bas de l’écran.
- **Transitions** : la petite photo d’une recette se transforme en grande photo de la page (View Transitions natives).
- **Accessibilité** : `prefers-reduced-motion` respecté partout (les effets au scroll sont en CSS, sans JS), focus visibles, lien d’évitement, libellés ARIA, contrastes AA, HTML sémantique.

## Développement

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # build de production (tout est pré-rendu)
pnpm lint && pnpm typecheck && pnpm format:check
```

> Next.js 16.4 embarque sa documentation dans `node_modules/next/dist/docs/` (voir `AGENTS.md`).

### Structure

```
app/                      routes (accueil, /recettes, /recettes/[slug], /a-propos)
  llms.txt/ llms-full.txt/ feed.xml/ markdown/[slug]/   routes texte pour machines
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx
components/               UI (home/, recipe/, header, footer, icônes)
content/recipes/          les 5 recettes (TypeScript typé) + photos
lib/                      types, registre des recettes, schema.org, formatage FR, Markdown
public/images/recipes/    recadrages 1:1, 4:3, 16:9 pour les données structurées
```

### Ajouter une recette

1. Créer `content/recipes/<slug>.ts` en respectant le type `RecipeContent` (`lib/types.ts`).
2. Ajouter la photo `content/recipes/images/<slug>.jpg` (+ `-detail.jpg`) et les recadrages `public/images/recipes/<slug>/{1x1,4x3,16x9}.jpg`.
3. Déclarer le thème couleur et l’import dans `lib/recipes.ts`.

Le sitemap, le flux RSS, `llms.txt`, les images Open Graph et le JSON-LD suivent automatiquement.

## Déploiement sur Vercel

1. Sur [vercel.com/new](https://vercel.com/new), importer le dépôt GitHub : le framework Next.js et `pnpm` sont détectés, aucune configuration n’est nécessaire.
2. Déployer. L’URL canonique est déduite automatiquement de `VERCEL_PROJECT_PRODUCTION_URL`.
3. (Recommandé) Variables d’environnement, voir `.env.example` :
   - `NEXT_PUBLIC_SITE_URL` : à définir dès que vous branchez un domaine personnalisé (ex. `https://epure.fr`).
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` : jetons de Search Console et Bing Webmaster Tools.
4. Activer **Web Analytics** et **Speed Insights** dans l’onglet du projet Vercel (déjà intégrés au code).
5. Soumettre `https://<domaine>/sitemap.xml` à Google Search Console et Bing Webmaster Tools, puis tester une recette dans le [Rich Results Test](https://search.google.com/test/rich-results).

## Crédits

- Photographies : [Pexels](https://www.pexels.com) (licence Pexels), auteurs crédités sur chaque recette et sur `/a-propos`.
- Polices : Fraunces, Instrument Sans, IBM Plex Mono et Caveat (SIL Open Font License) ; copies WOFF dans `assets/fonts/` pour les images Open Graph.
- Valeurs nutritionnelles : estimations calculées à partir des listes d’ingrédients.
