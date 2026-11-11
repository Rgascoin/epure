# Épure — cinq recettes, à l’essentiel

Un site de recettes volontairement minuscule : **cinq grands classiques**, écrits au gramme près, présentés comme une keynote.
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

- **Accueil keynote** : titre révélé ligne par ligne, « lineup » des cinq plats qui s’ouvre au scroll, manifeste dont les mots s’allument au défilement (CSS `view-timeline`, zéro JS), **vitrine épinglée** où chaque plat remplace le précédent par un volet et recolore la scène, bento des fonctionnalités avec micro-démos.
- **Fiche recette** : hero qui s’étend en plein écran au scroll, portions ajustables (arrondis « de cuisinier », conversion g → kg), ingrédients cochables (mémorisés), étapes cochables avec rail de progression, **minuteurs intégrés** (son synthétisé, vibration, titre d’onglet clignotant, dock flottant), **mode cuisine plein écran** (`<dialog>` natif, Wake Lock pour garder l’écran allumé, swipe, clavier, liste d’ingrédients en tiroir), partage natif, version imprimable.
- **Accessibilité** : `prefers-reduced-motion` respecté partout, focus visibles, lien d’évitement, libellés ARIA, contraste AA, HTML sémantique (`article`, `dl`, `time`, `details`).

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
- Polices : Inter et Instrument Serif (SIL Open Font License) ; copies WOFF dans `assets/fonts/` pour les images Open Graph.
- Valeurs nutritionnelles : estimations calculées à partir des listes d’ingrédients.
