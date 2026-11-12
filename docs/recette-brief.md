# Écrire une recette Épure : la fiche mémo

Version courte du [guide de rédaction](guide-redaction-recettes.md), qui reste la référence. Ce mémo suffit pour écrire une recette ; `pnpm recipes:check` vérifie tout ce qu’une machine peut vérifier et dit précisément ce qui ne va pas.

## Le circuit (≈ 10 commandes)

```bash
pnpm recipes:photos "tartiflette" --en "tartiflette reblochon"   # planche numérotée .cache/photos/tartiflette.jpg
pnpm recipes:images tartiflette 3 7 --from tartiflette --focus "50% 45%"   # photos + recadrages + crédits à coller
pnpm recipes:new tartiflette --category Plat --tags hiver        # gabarit content/recipes/tartiflette/index.ts
# remplir chaque « À ÉCRIRE »
pnpm recipes:check -t tartiflette                                 # jusqu’à 0 erreur, 0 avertissement
pnpm recipes:todo                                                 # coche la liste docs/a-ajouter.md et montre la suite
```

Regarder la planche (une seule image) pour choisir. La photo principale montre **ce plat-là**, fini, net, sujet centré (recadrage en arche portrait). Celle de détail montre une texture, une part coupée ou un geste. Si rien n’est fidèle, chercher en anglais (`--en`) ou avec une autre formulation ; ne jamais publier une photo d’un autre plat. Vérifier le recadrage en ouvrant `public/images/recipes/<slug>/1x1.jpg`.

## Brouillons

`pnpm recipes:new` crée la recette en brouillon (un fichier vide `.draft` dans son dossier) : elle se vérifie comme les autres (`pnpm recipes:check`), mais le build de production l’écarte. On supprime `.draft` quand la recette est prête à publier.

## La voix

Un cuisinier qui explique à un ami : « vous » pour le lecteur, « on » pour nous. Concret, chaleureux, un peu pince-sans-rire. Phrases de longueurs variées.

**Jamais** : tiret cadratin « — », superlatifs creux (sublime, incontournable, magique, un régal, irrésistible), formules de magazine (le secret, le tour est joué, tout simplement, découvrez notre recette, laissez-vous tenter, réconfortant), questions d’accroche, listes de trois adjectifs, morale en fin de paragraphe, **faits inventés** (histoire, chef, chiffre, test).

## Les champs, avec leurs limites

| Champ                   | Règle                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `title`                 | ≤ 60 car., le nom que les gens tapent                                                                              |
| `seoTitle`              | 30–60 car., mot-clé en tête, un bénéfice concret                                                                   |
| `tagline`               | ≤ 7 mots, une phrase naturelle, pas un slogan symétrique                                                           |
| `description`           | 120–160 car., répond tout de suite (quantité clé, temps)                                                           |
| `summary`               | 150–480 car., commence par « Pour N … », chiffres clés, temps total ; c’est ce que citent les IA                   |
| `intro`                 | 2–3 paragraphes ≤ 90 mots : ce qu’est le plat, ce qui le fait rater, le conseil qui change tout                    |
| `keywords`              | 5–12, minuscules, vraies requêtes (« recette tartiflette », « tartiflette au reblochon »)                          |
| `tags`                  | occasions et saisons où le plat est un choix évident (`lib/tags.ts`) : ils alimentent les collections saisonnières |
| `equipment`             | ≥ 2, minuscules, avec la taille quand elle compte (« moule de 24 cm »)                                             |
| `science`               | 2–4 explications vérifiables (Maillard, amidon, coagulation à 62–70 °C…)                                           |
| `tips`                  | 3–6, qui changent vraiment le résultat                                                                             |
| `mistakes`              | 3–5 : l’erreur, puis sa conséquence ou le rattrapage                                                               |
| `variations`            | 2–4, ce qui change précisément (quantités, temps)                                                                  |
| `faq`                   | 4–8 vraies recherches finissant par « ? » ; la réponse commence par oui / non / le chiffre, ≤ 75 mots              |
| `annotations`           | ≤ 7 mots, minuscules, une note de cuisinier en marge                                                               |
| `heroAlt` / `detailAlt` | 30–140 car., ce qu’on voit vraiment, nom du plat compris                                                           |

## Ingrédients

Dans l’ordre d’utilisation. Groupes titrés dès qu’il y a plusieurs préparations. `name` en minuscules au singulier, `plural` pour ce qui se compte. Grammes pour les solides, ml ou cl pour les liquides, `cas` / `cac` pour les petites quantités ; jamais « verre » ou « bol ». La variété, la coupe ou la température vont dans `note`. `step` = arrondi quand on change les portions (1 pour des œufs, 5 ou 10 pour des grammes) ; `fixed: true` pour ce qui ne se multiplie pas. Tout ingrédient listé est utilisé, tout ce qui est utilisé est listé.

## Étapes et minuteurs

4 à 14 étapes, en sections au-delà. Titre : verbe à l’infinitif, ≤ 5 mots. Texte : impératif, ≤ 85 mots, avec l’action, le réglage (feu, °C), la durée et le **repère sensoriel** de fin (« quand il tremble à peine au centre »). Toute attente de plus d’une minute a un `timer` (libellé ≤ 32 car.), et **le texte annonce la même durée** (exacte, fourchette qui la contient, ou somme). 2 à 4 `tip` sur les gestes critiques. Le four se préchauffe au bon moment.

## Version facile (si un raccourci existe)

Quand une étape se remplace couramment par un produit tout prêt (pâte à pizza, pâte brisée ou feuilletée, bouillon, compote), ajouter `easy` : `shortcut` (ce qu’on achète, ≤ 60 car., sans marque), `note` (ce qu’on gagne, ce qu’on perd, comment choisir le produit ; 60–320 car.), puis `times`, `ingredients` et `method` complets (2 à 10 étapes, mêmes règles de minuteurs). Plus courte que la recette maison. Pas de version facile si aucun raccourci honnête n’existe. Exemple : `content/recipes/pizza-margherita/index.ts`.

## Temps, difficulté, coût

`prep` = travail actif, `cook` = cuisson, `rest` = repos nécessaire (marinade facultative exclue). Le total doit coller au résumé. `Facile` = aucune technique délicate, `Intermédiaire` = un geste à réussir, `Exigeant` = plusieurs techniques. `€` < 2 €/pers., `€€` 2–5 €, `€€€` > 5 €.

## Sécurité alimentaire (non négociable)

Œufs crus ou peu cuits : FAQ pour femmes enceintes, jeunes enfants, personnes âgées, immunodéprimées ; 24 h max au frigo. Volaille 74 °C à cœur, porc 63 °C, haché cuit à cœur. Poisson cru : extra-frais ou congelé 24 h à −20 °C. Riz cuit : frigo sous 2 h, 24 h max. Plats cuisinés 2–3 jours au frigo, ne jamais recongeler. Fruits à coque ou alcool non cuit : le signaler.

## Nutrition, couleurs, dates

Nutrition par portion, estimée (tables Ciqual) ; protéines × 4 + glucides × 4 + lipides × 9 ≈ calories. Thème : `accent` couleur vive du plat, `ink` la même assombrie (contraste ≥ 4,5 sur le papier et sur `tint`), `tint` très pâle, `deep` très sombre ; le contrôle calcule les contrastes. `datePublished` / `dateModified` au format AAAA-MM-JJ.

## Typographie

Apostrophe ’, guillemets « », « œ » dans œuf, bœuf, cœur. Pas de « ... » (« … »), pas d’apostrophe droite, pas de guillemets droits. Nombres : 1,5 kg ; 180 °C.

## Avant de rendre

`pnpm recipes:check -t <slug>` à 0 erreur et 0 avertissement, puis relire à voix haute l’intro et une étape : si ça sonne comme une pub ou un robot, réécrire.
