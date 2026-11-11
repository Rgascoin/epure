# Guide de rédaction des recettes d’Épure

> Ce guide est la référence éditoriale du site. **Chaque recette publiée doit le respecter sur tous les points.**
> Les règles marquées **[auto]** sont vérifiées par la machine (`pnpm recipes:check`, et un `next build` refuse de mettre en ligne une recette qui ne les respecte pas). Les autres sont vérifiées à la relecture humaine, avec la check-list en fin de document.

---

## Sommaire

1. [La promesse d’Épure](#1-la-promesse-dépure)
2. [Choisir et caler la recette](#2-choisir-et-caler-la-recette)
3. [La voix d’Épure](#3-la-voix-dépure)
4. [Anatomie d’une fiche, champ par champ](#4-anatomie-dune-fiche-champ-par-champ)
5. [Ingrédients](#5-ingrédients)
6. [Étapes et minuteurs](#6-étapes-et-minuteurs)
7. [Temps, portions, difficulté, coût](#7-temps-portions-difficulté-coût)
8. [Pourquoi ça marche, astuces, ratés, variantes](#8-pourquoi-ça-marche-astuces-ratés-variantes)
9. [FAQ](#9-faq)
10. [Sécurité alimentaire](#10-sécurité-alimentaire)
11. [Nutrition](#11-nutrition)
12. [SEO et moteurs de réponse (IA)](#12-seo-et-moteurs-de-réponse-ia)
13. [Photos, notes manuscrites et crédits](#13-photos-notes-manuscrites-et-crédits)
14. [Couleurs de la recette](#14-couleurs-de-la-recette)
15. [Typographie française](#15-typographie-française)
16. [Publier une recette, pas à pas](#16-publier-une-recette-pas-à-pas)
17. [Check-list de relecture](#17-check-list-de-relecture)

---

## 1. La promesse d’Épure

Une recette d’Épure doit permettre à quelqu’un qui ne l’a jamais faite de la **réussir du premier coup**, et de **comprendre pourquoi** elle marche. Quatre engagements en découlent :

1. **Des mesures, pas des impressions.** Des grammes, des millilitres, des degrés, des minutes. « Un peu de », « une noix de », « feu moyen » sans repère sont interdits, sauf s’ils sont accompagnés d’un signe à guetter.
2. **Des repères sensoriels.** Chaque cuisson dit ce qu’il faut voir, entendre, sentir ou toucher : « jusqu’à ce que la sauce nappe la cuillère », « le guanciale grésille », « la lame ressort sèche ».
3. **Le pourquoi.** Chaque geste qui semble arbitraire est expliqué (dans l’étape, une astuce ou « Pourquoi ça marche »).
4. **L’honnêteté.** On dit ce qui peut rater et comment rattraper. On n’invente rien : ni anecdote, ni chef, ni grand-mère, ni statistique, ni « testé 50 fois ».

---

## 2. Choisir et caler la recette

- **Une version de référence, pas un compromis.** On écrit la version classique, celle qu’un cuisinier sérieux reconnaîtrait (une carbonara sans crème, une quiche lorraine sans gruyère sur le dessus). Les écarts vont dans « Variantes ».
- **Cohérence interne absolue.** Les quantités du résumé, des ingrédients et des étapes sont identiques. Si 80 g de fromage sont listés et que 60 g vont dans la sauce, l’étape dit où vont les 20 g restants.
- **Temps réalistes.** On compte le temps d’un amateur, pas d’un professionnel : éplucher 1 kg de pommes de terre prend 10 minutes, pas 3.
- **Matériel courant.** Si un ustensile spécial est indispensable (mandoline, thermomètre), on le dit et on propose une alternative.
- **Saison.** On indique la saison des produits frais ; une recette d’été publiée en hiver propose une alternative (conserve, surgelé) dans les variantes ou la FAQ.
- **Quantités de base.** Plats : 4 ou 6 personnes. Desserts en moule : le nombre de parts du moule (8 pour une tarte de 26 cm). Biscuits, crêpes : la quantité produite (« 15 crêpes », via `servingsLabel`).

---

## 3. La voix d’Épure

Épure parle comme **un cuisinier qui explique à un ami, dans sa cuisine**. Concret, chaleureux, un peu pince-sans-rire, jamais publicitaire.

### Ce qu’on fait

- On s’adresse au lecteur par **« vous »**, on parle de nous avec **« on »**.
- On varie la longueur des phrases. Une phrase très courte peut suffire.
- On donne des conseils d’achat concrets (« demandez du paleron à votre boucher »).
- On assume des opinions (« un vin que vous boiriez ») et de l’humour sec, avec parcimonie.
- On rassure sur les ratés (« la première fois, l’émulsion peut trancher ; voilà comment la rattraper »).

### Ce qu’on ne fait jamais

| Interdit                                                                                                                                                                                                                                                                                                     | Pourquoi                       | À la place                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------- |
| Le tiret cadratin « — » **[auto]**                                                                                                                                                                                                                                                                           | tic d’écriture automatique     | virgule, deux-points, parenthèses, point                      |
| Les slogans symétriques (« Cinq ingrédients. Zéro crème. »)                                                                                                                                                                                                                                                  | ton publicitaire               | une phrase naturelle : « Sans crème, et c’est tant mieux. »   |
| Les superlatifs creux **[auto]** : sublime, incontournable, magique, un régal, irrésistible, explosion de saveurs, délicieusement…                                                                                                                                                                           | n’apportent aucune information | un fait : « le caramel colle aux dents, juste ce qu’il faut » |
| Les formules de magazine **[auto]** : le secret, le tour est joué, en un rien de temps, à coup sûr, tout simplement, « plongez au cœur de », « découvrez notre recette », laissez-vous tenter, succomber, réconfortant (au sens culinaire, « plongez les pâtes » ou « découvrez la cocotte » restent permis) | clichés                        | dire concrètement ce qui se passe                             |
| Les questions d’accroche (« Et si on… ? »)                                                                                                                                                                                                                                                                   | remplissage                    | entrer dans le sujet                                          |
| Les listes de trois adjectifs                                                                                                                                                                                                                                                                                | effet de style automatique     | un seul adjectif précis                                       |
| Les paragraphes qui finissent sur une morale                                                                                                                                                                                                                                                                 | sentencieux                    | finir sur une information                                     |
| Les faits inventés (histoire, chefs, chiffres, tests)                                                                                                                                                                                                                                                        | malhonnête, risqué             | rien, ou une opinion assumée                                  |

### Avant / après

> ❌ « Découvrez notre délicieuse quiche lorraine, un incontournable réconfortant qui ravira toute la famille ! »
>
> ✅ « La vraie quiche lorraine n’a ni gruyère ni oignon : des lardons, des œufs, de la crème, et une pâte cuite à blanc pour qu’elle reste croustillante. »

> ❌ « Laissez cuire jusqu’à cuisson. »
>
> ✅ « Enfournez 30 minutes : l’appareil est pris quand il tremble à peine au centre, comme une gelée. »

---

## 4. Anatomie d’une fiche, champ par champ

Une recette est un fichier `content/recipes/<slug>/index.ts` typé (`RecipeSource`, voir `lib/types.ts`). Exemple complet : `content/recipes/spaghetti-carbonara/index.ts`.

| Champ                                       | Règle                                                                                                                       | Exemple                                                  |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `slug`                                      | **[auto]** minuscules, chiffres, tirets ; identique au dossier ; mot-clé principal                                          | `quiche-lorraine`                                        |
| `title`                                     | nom usuel du plat, **[auto]** ≤ 60 caractères, sans adjectif marketing                                                      | `Quiche lorraine`                                        |
| `seoTitle`                                  | **[auto]** 30 à 60 caractères ; mot-clé principal en tête ; une promesse concrète                                           | `Quiche lorraine : la vraie recette, pâte croustillante` |
| `tagline`                                   | **[auto]** ≤ 7 mots ; humaine, un peu pince-sans-rire ; pas deux phrases symétriques                                        | `Sans gruyère, et elle s’en porte bien.`                 |
| `description`                               | **[auto]** 120 à 160 caractères ; phrase naturelle ; mot-clé tôt ; temps ou chiffre clé                                     | voir §12                                                 |
| `summary` (« En bref »)                     | **[auto]** 150 à 480 caractères ; contient des chiffres et le nombre de portions ; répond directement à « comment faire X » | voir §12                                                 |
| `intro`                                     | **[auto]** 2 ou 3 paragraphes, ≤ 90 mots chacun : ce qu’est le plat, ce qui le rend réussi, ce qui peut rater               |                                                          |
| `category`                                  | `Entrée`, `Plat`, `Accompagnement`, `Dessert`, `Goûter`                                                                     |                                                          |
| `cuisine`                                   | adjectif au singulier, majuscule : `Française`, `Italienne`, `Espagnole`…                                                   |                                                          |
| `keywords`                                  | **[auto]** 5 à 12 requêtes réelles, en minuscules, telles que tapées                                                        | `quiche lorraine sans gruyère`                           |
| `diet`                                      | seulement si c’est vrai pour la recette telle qu’écrite (vérifier bouillons, fromages, gélatine)                            | `["vegetarian"]`                                         |
| `servings`, `servingsLabel`                 | voir §7                                                                                                                     | `{ one: "part", other: "parts" }`                        |
| `times`                                     | voir §7                                                                                                                     |                                                          |
| `difficulty`, `cost`                        | voir §7                                                                                                                     |                                                          |
| `season`                                    | mois ou saisons, en toutes lettres                                                                                          | `["Automne", "Hiver"]`                                   |
| `equipment`                                 | **[auto]** ≥ 2 ; en minuscules (affichés en une phrase) ; précis                                                            | `moule à tarte de 26 cm`                                 |
| `ingredients`                               | voir §5                                                                                                                     |                                                          |
| `method`                                    | voir §6                                                                                                                     |                                                          |
| `science`, `tips`, `mistakes`, `variations` | voir §8                                                                                                                     |                                                          |
| `storage`                                   | 1 à 2 phrases : où, combien de temps, comment réchauffer ; cohérent avec §10                                                |                                                          |
| `pairing`                                   | une suggestion de boisson simple et accessible (appellations en minuscules : un bourgogne, un frascati)                     |                                                          |
| `faq`                                       | voir §9                                                                                                                     |                                                          |
| `nutrition`                                 | voir §11                                                                                                                    |                                                          |
| `annotations`                               | notes manuscrites, voir §13                                                                                                 |                                                          |
| `images`                                    | alt et crédits, voir §13                                                                                                    |                                                          |
| `datePublished`, `dateModified`             | **[auto]** `AAAA-MM-JJ`, modification ≥ publication ; mettre à jour `dateModified` à chaque correction de fond              |                                                          |
| `theme`                                     | voir §14                                                                                                                    |                                                          |
| `featured`                                  | `true` seulement pour les quelques recettes du carnet de la page d’accueil                                                  |                                                          |

---

## 5. Ingrédients

- **Ordre d’utilisation.** Les ingrédients apparaissent dans l’ordre où on s’en sert.
- **Groupes.** Dès que la recette a plusieurs préparations (pâte, garniture, sauce), on crée des groupes **titrés** **[auto]**.
- **Nom en minuscules** **[auto]**, au singulier dans `name`, au pluriel dans `plural` pour les ingrédients comptés (`œuf` / `œufs`).
- **Unités** : uniquement les clés de `UnitKey` (`g`, `kg`, `ml`, `cl`, `l`, `cas`, `cac`, `pincee`, `gousse`, `brin`, `feuille`, `tranche`, `botte`, `branche`, `bouteille`, `rouleau`, `sachet`, `noix`, `tour`).
  - Solides en **grammes** ; liquides en **ml ou cl** ; pas de « verre » ni de « bol ».
  - Les cuillères (`cas`, `cac`) seulement pour les petites quantités (épices, huile pour une poêle).
  - Le site convertit tout seul 1 500 g en 1,5 kg : écrivez des grammes.
- **Précision utile dans `note`** : la variété, la coupe, la température (« très froid, en dés », « bien mûres », « à température ambiante »).
- **Arrondis** : `step` règle la granularité quand on change les portions (1 pour des œufs, 0,5 pour des oignons, 5 ou 10 pour des grammes). Le sel de l’eau de cuisson et ce qui ne se multiplie pas reçoivent `fixed: true`.
- **Facultatif** : `optional: true`, et l’étape le dit (« si vous en mettez »).
- **Sel, poivre « au goût »** : autorisé sans quantité, mais l’étape dit quand saler.
- **Pas d’ingrédient fantôme** : tout ce qui est utilisé dans les étapes est listé, et tout ce qui est listé est utilisé.

---

## 6. Étapes et minuteurs

- **4 à 14 étapes** **[auto]**. Au-delà, on découpe en sections (`method` avec plusieurs `title` : « La pâte », « La garniture », « La cuisson »).
- **Titre** : verbe à l’infinitif, 2 à 5 mots **[auto ≤ 5]** (« Saisir la viande », « Monter les blancs »).
- **Texte** : impératif, **85 mots maximum** **[auto]**, une action principale par étape. Chaque étape contient :
  1. l’action précise (quantité si l’ingrédient est divisé) ;
  2. le **réglage** (feu doux / moyen / vif, four en °C, chaleur tournante ou non) ;
  3. la **durée** ;
  4. le **repère sensoriel** de fin.
- **Minuteurs** : toute attente de plus d’une minute reçoit un `timer` avec un libellé court **[auto ≤ 32 caractères]** (« Cuisson des pâtes »). **Le texte annonce la même durée que le minuteur** **[auto]** : soit la durée exacte, soit une fourchette qui la contient (« 8 à 10 minutes », minuteur à 9), soit la somme des durées citées.
- **Astuce d’étape (`tip`)** : 2 à 4 dans la recette, sur les gestes critiques. Elle commence par le fait, pas par « Astuce : » (le site ajoute « psst. »).
- **Four** : on dit quand le préchauffer, au bon moment de la recette, pas à la première ligne si la pâte repose une heure.
- **Pas de renvoi flou** (« comme d’habitude », « la préparation ») : on nomme ce dont on parle.

> ✅ « Faites fondre le guanciale dans la poêle encore froide, sans matière grasse, puis allumez à feu moyen-doux. Laissez-le fondre 8 à 10 minutes : le gras devient translucide et les bords dorent. » (minuteur : 9 min)

---

## 7. Temps, portions, difficulté, coût

- `times.prep` : temps de travail actif (couper, mélanger, façonner), en minutes.
- `times.cook` : temps de cuisson.
- `times.rest` : repos, marinade, refroidissement, prise au froid (seulement s’il est nécessaire). Une marinade facultative n’entre pas dans le total : elle est mentionnée dans l’étape.
- Le total est calculé par le site ; il doit être cohérent avec le résumé et l’intro.
- `difficulty` : `Facile` (aucune technique délicate), `Intermédiaire` (un geste à réussir : émulsion, blancs, pâte), `Exigeant` (plusieurs techniques ou une précision de pâtissier).
- `cost` : `€` (moins de 2 € par personne), `€€` (2 à 5 €), `€€€` (plus de 5 €), aux prix courants d’un supermarché.

---

## 8. Pourquoi ça marche, astuces, ratés, variantes

- **`science`** (2 à 4 **[auto]**) : un titre clair et 2 à 4 phrases de science culinaire **vérifiable** (coagulation des protéines, gélatinisation de l’amidon, réaction de Maillard, émulsion, collagène qui devient gélatine, carry-over…). Températures exactes quand elles sont connues. Pas de vulgarisation approximative.
- **`tips`** (3 à 6 **[auto]**) : conseils qui changent vraiment le résultat. Pas de banalités (« utilisez de bons produits »).
- **`mistakes`** (3 à 5 **[auto]**) : l’erreur, puis sa conséquence. « Mettre les œufs sur le feu : ils coagulent en grumeaux. »
- **`variations`** (2 à 4 **[auto]**) : un titre et un texte qui dit **précisément** ce qui change (quantités, temps). On signale si la variante n’est plus « la vraie » recette.

---

## 9. FAQ

- **4 à 8 questions** **[auto]**, celles que les gens tapent vraiment (« Peut-on congeler… ? », « Pourquoi ma … est liquide ? », « Par quoi remplacer… ? »).
- La question finit par « ? » **[auto]** et ressemble à une recherche ; la réponse commence par la réponse (oui / non / le chiffre), en **75 mots maximum** **[auto]**.
- Toute recette concernée par un risque (§10) a une question qui le traite.

---

## 10. Sécurité alimentaire

Non négociable. À vérifier pour chaque recette :

- **Œufs crus ou peu cuits** (mousse, tiramisu, carbonara, mayonnaise, crème anglaise peu chauffée) : FAQ déconseillant la recette aux femmes enceintes, jeunes enfants, personnes âgées ou immunodéprimées, avec l’alternative des œufs pasteurisés. Conservation **24 heures maximum** au réfrigérateur.
- **Volaille** : cuite à cœur, 74 °C à cœur, jus clair. **Porc** : 63 °C minimum. **Viande hachée** : cuite à cœur (pas de rosé pour les enfants).
- **Poisson cru ou mi-cuit** : poisson extra-frais ou préalablement congelé (−20 °C, 24 h) ; le dire.
- **Riz cuit** : refroidir vite, frigo sous 2 heures, consommer sous 24 heures, réchauffer une seule fois et à cœur.
- **Conservation** : durées réalistes (plats cuisinés 2 à 3 jours au réfrigérateur, en boîte fermée), réchauffage à cœur, ne jamais recongeler un produit décongelé.
- **Allergènes majeurs** : quand la recette contient des fruits à coque, de l’arachide ou du sésame peu visibles, l’intro ou une FAQ le signale.
- **Alcool** : si la recette en contient et qu’il ne cuit pas, le dire dans la FAQ (enfants, femmes enceintes).

---

## 11. Nutrition

- Valeurs **par portion**, estimées à partir de la liste d’ingrédients (tables Ciqual de l’Anses).
- `calories` en kcal, macronutriments en g, `sodium` en mg (le site affiche le sel = sodium × 2,5).
- Cohérence **[auto]** : saturés ≤ lipides, sucres ≤ glucides ; et protéines × 4 + glucides × 4 + lipides × 9 ≈ calories (à 20 % près, sinon avertissement).
- Le site affiche « estimation » : on ne prétend pas à une précision de laboratoire.

---

## 12. SEO et moteurs de réponse (IA)

- **Mot-clé principal** = la requête la plus tapée pour ce plat (« quiche lorraine », « pâte à crêpes »). Il apparaît dans `slug`, `title`, en tête de `seoTitle`, dans les 60 premiers caractères de `description`, dans la première phrase de `summary` et dans l’intro.
- **`description`** : une phrase qu’on aurait envie de cliquer, qui promet un résultat concret.
  > « La vraie quiche lorraine : lardons, œufs, crème et une pâte cuite à blanc qui reste croustillante. 20 minutes de préparation, 35 au four. » (139 caractères)
- **`summary` (« En bref »)** est la phrase que citeront Google et les assistants (ChatGPT, Claude, Perplexity). Elle répond seule à « comment faire X ? » : portions, ingrédients clés avec quantités, températures, temps total.
  > « Pour 6 personnes, foncez une pâte brisée dans un moule de 26 cm et cuisez-la à blanc 15 minutes à 180 °C. Faites revenir 200 g de lardons, répartissez-les, versez 4 œufs battus avec 40 cl de crème et enfournez 30 à 35 minutes. »
- **`keywords`** : variantes réelles (« quiche lorraine facile », « quiche lorraine sans pâte »…), pas de bourrage.
- **FAQ** = « Autres questions posées » de Google : formulez-les comme les gens.
- **Maillage** : le site relie automatiquement les recettes d’une même catégorie ; dans le texte, ne mentionnez une autre recette que si elle existe sur Épure.
- Les données structurées (Recipe, FAQ, fil d’Ariane), le Markdown pour les IA, le sitemap et `llms.txt` sont **générés automatiquement** à partir des champs : il suffit de bien les remplir.

---

## 13. Photos, notes manuscrites et crédits

- **Source** : photos libres de droits ou photos maison. On cherche d’abord sur Pexels (licence Pexels, sans mention obligatoire) ; si aucune photo n’est fidèle, on élargit à Unsplash, Pixabay et Wikimedia Commons, en ne gardant que des licences qui autorisent l’usage commercial (CC0, domaine public, CC BY, CC BY-SA). Jamais d’image dont on ignore la licence, jamais d’image générée présentée comme une vraie photo.
- **Fidélité** : la photo montre **ce plat-là** (une tartiflette n’est pas illustrée par un gratin quelconque). Si aucune photo fidèle n’existe, on ne publie pas, ou on attend une photo maison.
- **Deux photos** :
  - `hero` : le plat fini, net, appétissant, cadrage qui supporte un recadrage en arche (sujet centré, un peu d’air autour). Format portrait de préférence.
  - `detail` : un détail ou un autre angle (texture, part coupée, geste).
- **Préparation** : `pnpm recipes:images <slug> <idHero> <idDétail> --focus "50% 45%"` crée `hero.jpg`, `detail.jpg` et les recadrages 1:1, 4:3, 16:9 **[auto : présence et poids]**. `theme.focus` reprend le même point focal.
- **Texte alternatif** **[auto : 30 à 140 caractères]** : ce qu’on voit, avec le nom du plat, sans « image de » (« Quiche lorraine dorée dans un moule en céramique, une part découpée »).
- **Crédits** : nom du photographe tel qu’affiché sur la page source et URL de la page de la photo **[auto]**. Hors Pexels, on renseigne aussi `source` (« Unsplash », « Pixabay », « Wikimedia Commons ») et, si la licence demande une mention, `license` (« CC BY 4.0 », « CC BY-SA 4.0 ») **[auto]** : le site affiche alors l’auteur, la source et la licence sous la recette et sur la page À propos. `photographer: "Pexels"` n’est toléré qu’en dernier recours.
- **Notes manuscrites** (`annotations`) : ce qu’un cuisinier griffonnerait au crayon à côté de la photo ; **≤ 7 mots** **[auto]**, en minuscules **[auto]**, utiles (« le fond cuit seul d’abord », « pas de gruyère, promis »). Pas deux notes sur le même tic (« …, toujours »).

---

## 14. Couleurs de la recette

Chaque recette a une couleur, tirée de la photo (le jaune d’un jaune d’œuf, le rouge d’une sauce tomate). Les contrastes sont vérifiés **[auto]** :

| Champ      | Rôle                                            | Règle                                                  |
| ---------- | ----------------------------------------------- | ------------------------------------------------------ |
| `accent`   | couleur vive du plat (boutons, tampon)          |                                                        |
| `onAccent` | texte posé sur `accent`                         | contraste ≥ 4,5 **[auto]**                             |
| `ink`      | accent lisible en texte sur le papier `#F2EDE4` | contraste ≥ 4,5 sur le papier et sur `tint` **[auto]** |
| `tint`     | fond très clair (note « En bref »)              |                                                        |
| `deep`     | fond très sombre (« Pourquoi ça marche »)       | contraste ≥ 10 avec le papier **[auto]**               |
| `focus`    | point focal de la photo (`object-position`)     |                                                        |

En mode sombre, le site éclaircit `ink` et assombrit `tint` automatiquement.

---

## 15. Typographie française

- Apostrophe typographique **’** **[auto : pas d’apostrophe droite]**.
- Guillemets **« »** avec espaces **[auto : pas de guillemets droits]** ; points de suspension **…** **[auto]**.
- **œ** dans œuf, bœuf, cœur, œil.
- Majuscules accentuées : **À**, **É**, **Ç**.
- Espaces : écrivez une espace normale avant « ; : ! ? » et entre un nombre et son unité ; le site les rend insécables.
- Nombres : en chiffres pour les quantités, les temps et les températures (« 3 minutes », « 180 °C ») ; en lettres dans les tournures (« une ou deux fois »).
- Unités : `g`, `kg`, `ml`, `cl`, `l`, `°C`, `min`, `h` ; « c. à soupe », « c. à café ».
- Fractions affichées par le site (½, ¼) : écrivez `0.5` dans `qty`.
- Plats et appellations en minuscules dans le texte (« une carbonara », « un bourgogne »), noms géographiques avec majuscule (« la Côte chalonnaise »).

---

## 16. Publier une recette, pas à pas

```bash
# 1. Créer le dossier et le fichier (partir d’une recette existante)
mkdir content/recipes/quiche-lorraine
cp content/recipes/spaghetti-carbonara/index.ts content/recipes/quiche-lorraine/index.ts

# 2. Préparer les photos (ids Pexels, URL directes d’images ou fichiers locaux)
pnpm recipes:images quiche-lorraine 33433982 288264 --focus "50% 50%"

# 3. Rédiger la fiche en suivant ce guide, puis vérifier
pnpm recipes:check            # toutes les recettes
pnpm recipes:check -t quiche  # une seule

# 4. Relire avec la check-list ci-dessous, puis vérifier le rendu
pnpm dev                      # http://localhost:3000/recettes/quiche-lorraine
pnpm build                    # refuse toute recette qui enfreint une règle [auto]
```

L’index des recettes (`content/recipes/index.ts`), le sitemap, les catégories, `llms.txt`, le flux RSS et les images de partage se mettent à jour tout seuls.

---

## 17. Check-list de relecture

À cocher avant chaque publication, en plus de `pnpm recipes:check`.

**Fond**

- [ ] La recette est la version de référence ; les écarts sont dans les variantes.
- [ ] Quantités identiques entre résumé, ingrédients et étapes ; aucun ingrédient fantôme.
- [ ] Chaque cuisson a un réglage, une durée et un repère sensoriel.
- [ ] Le four est préchauffé au bon moment.
- [ ] Les temps sont ceux d’un amateur ; le total est cohérent avec l’intro et le résumé.
- [ ] Sécurité alimentaire (§10) traitée, y compris dans la FAQ et la conservation.
- [ ] La science est exacte (sources sérieuses si doute).

**Forme**

- [ ] Ton d’Épure : concret, « vous » / « on », aucune formule interdite (§3).
- [ ] Le résumé répond seul à « comment faire » avec les chiffres.
- [ ] Les titres d’étapes sont des verbes à l’infinitif.
- [ ] La FAQ ressemble à de vraies recherches ; réponses qui commencent par la réponse.
- [ ] Typographie française (§15).

**Visuel**

- [ ] Les photos montrent bien ce plat ; crédits et alt remplis.
- [ ] Le recadrage en arche et les vignettes rondes gardent le plat au centre (vérifier dans `pnpm dev`).
- [ ] La couleur de la recette est jolie en clair et en sombre.

**Technique**

- [ ] `pnpm recipes:check` sans erreur, et avertissements lus.
- [ ] `pnpm build` réussi.
