# Épure — des recettes au gramme près

Un carnet de cuisine en ligne : **les grands classiques que tout le monde cherche**, écrits au gramme près, avec le pourquoi de chaque geste et quoi faire quand ça rate. Direction artistique éditoriale (papier, encre, notes à la main) plutôt que « tech ».
Deux priorités : **référencement (moteurs + IA)** et **expérience (motion design, mobile-first)**.

Le carnet est pensé pour grossir : chaque recette vit dans son dossier, suit un **guide de rédaction** vérifié automatiquement, et les pages (catégories, recherche, sitemap, `llms.txt`, flux) se construisent seules.

| Catégorie                  | Exemples                                                   |
| -------------------------- | ---------------------------------------------------------- |
| Entrées & soupes           | soupe à l’oignon, velouté de potimarron                    |
| Plats                      | bœuf bourguignon, lasagnes, poulet rôti, paella, carbonara |
| Accompagnements            | gratin dauphinois                                          |
| Desserts                   | tiramisu, crème brûlée, tarte au citron meringuée, mousse  |
| Goûters & petits-déjeuners | crêpes, pancakes, gaufres, cookies, banana bread           |

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
- **Navigation à l’échelle** : page « Toutes les recettes » avec **recherche instantanée** (titres, ingrédients, mots-clés, sans accents ni pluriels), filtres par catégorie et critères (végétarien, moins d’une heure, facile), état partageable dans l’URL (`?q=chocolat&categorie=desserts`) ; **pages catégories** (`/categories/<slug>`) ; menu « Recettes » par catégories dans l’en-tête ; fil d’Ariane et « Dans la même veine » sur chaque recette.
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
pnpm recipes:check  # chaque recette contre le guide de rédaction (vitest)
pnpm test           # tous les tests (guide + calendrier des collections)
```

> Next.js 16.4 embarque sa documentation dans `node_modules/next/dist/docs/` (voir `AGENTS.md`).

### Structure

```
app/                      routes (accueil, /recettes, /recettes/[slug], /categories/[category], /a-propos)
  llms.txt/ llms-full.txt/ feed.xml/ markdown/[slug]/   routes texte pour machines
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx
components/               UI (home/, recipe/, header, footer, icônes)
content/recipes/<slug>/   une recette = un dossier : index.ts + hero.jpg + detail.jpg
content/recipes/index.ts  registre généré (pnpm recipes:index, lancé par dev et build)
docs/                     guide de rédaction des recettes
lib/                      types, catégories, règles du guide, schema.org, recherche, formatage FR, Markdown
scripts/                  génération du registre, préparation des photos
tests/                    contrôle des recettes contre le guide
public/images/recipes/    recadrages 1:1, 4:3, 16:9 pour les données structurées
```

### Ajouter une recette

La fiche mémo **[`docs/recette-brief.md`](docs/recette-brief.md)** suffit pour écrire ; le **[guide complet](docs/guide-redaction-recettes.md)** reste la référence (voix, sécurité alimentaire, SEO, photos, couleurs, typographie).

```bash
pnpm recipes:photos "tartiflette" --en "tartiflette reblochon"        # planche numérotée de photos libres (Openverse, Wikimedia Commons ; Pexels, Pixabay et Openverse authentifié si leurs clés sont définies)
pnpm recipes:images tartiflette 3 7 --from tartiflette --focus "50% 45%"   # photos, recadrages 1:1 4:3 16:9, crédits prêts à coller
pnpm recipes:new tartiflette --category Plat --tags hiver               # gabarit avec chaque champ et sa règle
pnpm recipes:check -t tartiflette                                        # liste complète des écarts au guide
pnpm recipes:todo                                                        # tient à jour docs/a-ajouter.md (plats, catégories, versions faciles, photos)
```

Le build de production refuse une recette qui enfreint une règle obligatoire. Le registre, les catégories, les collections, la recherche, le sitemap, le flux RSS, `llms.txt`, les images Open Graph et Pinterest, et le JSON-LD suivent automatiquement.

### Version facile

Une recette peut proposer une **version facile** (`easy`) : le même plat avec un produit tout prêt (pâte à pizza, pâte brisée, bouillon…). Un sélecteur « Fait maison / Version facile » bascule les ingrédients, les étapes, les minuteurs et le mode cuisine ; le lien `?version=facile` se partage, la recherche a un filtre « Version facile » et la version Markdown la reprend.

### Liste de travail

[`docs/a-ajouter.md`](docs/a-ajouter.md) recense les plats à écrire par catégorie et par priorité, les catégories à créer, les événements du calendrier à nourrir, les versions faciles et les photos à remplacer. `pnpm recipes:todo` coche ce qui est publié.

### Collections de saison

`lib/collections.ts` décrit le calendrier (Noël, Nouvel An, galette des rois, Chandeleur, Saint-Valentin, Mardi gras, Pâques, fêtes des mères et des pères, Halloween, rentrée, saisons), avec les fêtes mobiles calculées chaque année. Une recette entre dans une collection par ses `tags` (`lib/tags.ts`). Rien n’est jamais masqué : chaque collection d’au moins 3 recettes a sa page toute l’année, et l’accueil (« En ce moment ») et l’index mettent en avant celles de la période, à l’heure de Paris. Ces blocs sont mis en cache une heure (`use cache` + `cacheLife("hours")`) : les pages restent statiques et Vercel les régénère au fil du calendrier.

### Diffusion

- **IndexNow** : quand des recettes changent sur `main`, `.github/workflows/indexnow.yml` attend que Vercel ait mis ce commit en ligne (`/version.txt`), puis signale à Bing (et Yandex, Seznam, Naver) les pages modifiées. Envoi complet : `pnpm indexnow --all`.
- **Pinterest** : chaque recette a une épingle verticale `/recettes/<slug>/pin.png` (1000 × 1500), un bouton « Épingler » et les attributs `data-pin-media` sur la photo. Vérification du site par enregistrement TXT ou `NEXT_PUBLIC_PINTEREST_VERIFICATION`.

## Déploiement sur Vercel

1. Sur [vercel.com/new](https://vercel.com/new), importer le dépôt GitHub : le framework Next.js et `pnpm` sont détectés, aucune configuration n’est nécessaire.
2. Déployer. En production, l’URL canonique est `https://www.epure-cuisine.fr` (`PRODUCTION_URL` dans `lib/site.ts`) : Vercel redirige le domaine nu vers `www`, et `next.config.ts` redirige l’ancienne adresse `epure-fawn.vercel.app`. Les préversions gardent leur propre URL et ne sont pas indexables.
3. (Recommandé) Variables d’environnement, voir `.env.example` :
   - `NEXT_PUBLIC_SITE_URL` : facultatif, pour forcer une autre origine canonique.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` : jetons de Search Console et Bing Webmaster Tools.
4. Activer **Web Analytics** et **Speed Insights** dans l’onglet du projet Vercel (déjà intégrés au code).
5. Soumettre `https://<domaine>/sitemap.xml` à Google Search Console et Bing Webmaster Tools, puis tester une recette dans le [Rich Results Test](https://search.google.com/test/rich-results).

## Crédits

- Photographies : [Pexels](https://www.pexels.com) (licence Pexels), auteurs crédités sur chaque recette et sur `/a-propos`.
- Polices : Fraunces, Instrument Sans, IBM Plex Mono et Caveat (SIL Open Font License) ; copies WOFF dans `assets/fonts/` pour les images Open Graph.
- Valeurs nutritionnelles : estimations calculées à partir des listes d’ingrédients.
