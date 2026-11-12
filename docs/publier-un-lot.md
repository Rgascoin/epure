# Publier un lot de recettes, de bout en bout

Le mode d’emploi qu’un agent (ou une personne) suit pour écrire et mettre en production un lot de recettes sans aide. Chaque étape a sa commande ; on ne saute aucune vérification.

Production : https://www.epure-cuisine.fr (Vercel, déployé à chaque fusion dans `main`).

## 0. Préparer

```bash
pnpm install          # si node_modules manque
git checkout main && git pull
git checkout -b <branche du lot>   # ou la branche imposée par votre session
```

Lire [la fiche mémo](recette-brief.md) en entier (elle suffit pour écrire). Le [guide complet](guide-redaction-recettes.md) ne s’ouvre que pour un doute précis.

## 1. Choisir les plats

```bash
pnpm recipes:todo --next 15
```

Prendre les plats dans l’ordre de [la liste de travail](a-ajouter.md), en sautant ceux qui sont hors saison (date du jour) et en évitant d’avoir les 5 dans la même catégorie. Les `tags` indiqués sur chaque ligne sont à reprendre tels quels.

## 2. Écrire chaque recette (en brouillon)

Pour chaque plat, une recherche de photos à la fois (Wikimedia limite les rafales) :

```bash
pnpm recipes:photos "<plat>" --en "<dish in English>"     # puis regarder .cache/photos/<plat>.jpg
pnpm recipes:images <slug> <n° principale> <n° détail> --from <plat> --focus "50% 45%"
pnpm recipes:new <slug> --category <Catégorie> --tags <t1,t2>   # crée index.ts ET .draft
# remplir chaque « À ÉCRIRE » (crédits : coller ceux affichés par recipes:images)
pnpm recipes:check -t <slug>                               # jusqu’à 0 erreur et 0 avertissement
```

- **Photos** : elles montrent ce plat-là, nettes et appétissantes, sans marque ni visage. Si les sources libres n’ont rien de bon, chercher sur Pexels (recherche web limitée à pexels.com), passer l’identifiant numérique à `recipes:images`, et relever le nom du photographe sur la page de la photo. Jamais de nom deviné.
- **Version facile** : seulement si un produit tout prêt remplace honnêtement une étape (voir la fiche mémo).
- **Interdits** : faits inventés, ton publicitaire, tiret cadratin. Les règles de sécurité alimentaire de la fiche mémo sont obligatoires.

Tant que le fichier `.draft` est là, la recette ne part pas en production : on peut pousser des brouillons sans risque.

## 3. Valider le lot

```bash
pnpm recipes:release <slug1> <slug2> <slug3> <slug4> <slug5>
```

Le script retire les `.draft`, coche la liste de travail, puis enchaîne tous les tests, le lint, les types, un build de production, un appel de chaque page et un audit d’accessibilité (sombre sur mobile, clair sur ordinateur). Il s’arrête à la première erreur : corriger, puis le relancer.

Ensuite, **ouvrir `.cache/photo-sheet.jpg`** et vérifier que chaque photo montre bien le plat. Une photo douteuse se remplace (étape 2) avant de publier, ou s’ajoute à la section « Photos à remplacer » de la liste de travail si elle reste acceptable.

## 4. Publier

1. Commiter le lot (recettes, photos dans `public/images/recipes/`, `docs/a-ajouter.md`), pousser la branche.
2. Ouvrir une pull request vers `main` (brouillon), avec la liste des recettes et les résultats de la validation.
3. Attendre que le statut Vercel de la pull request passe à « success » (prévisualisation construite), puis la marquer prête et la fusionner en **squash**.
4. Attendre la mise en ligne : `https://www.epure-cuisine.fr/version.txt` doit afficher le SHA du commit de fusion (1 à 3 minutes).
5. Vérifier que chaque page du lot répond 200 :

```bash
for s in <slugs>; do curl -s -o /dev/null -w "%{http_code} $s\n" https://www.epure-cuisine.fr/recettes/$s; done
```

Le workflow GitHub « IndexNow » signale ensuite tout seul les nouvelles pages à Bing.

## 5. En cas de problème

- Une recette ne passe pas la validation et on ne sait pas la corriger : remettre son `.draft`, publier les autres, et le dire dans le compte rendu.
- La prévisualisation Vercel échoue : lire le message du statut, corriger, pousser ; ne jamais fusionner une pull request rouge.
- On ne pousse jamais directement sur `main`, et on ne modifie pas le code du site dans un lot de recettes.

## 6. Compte rendu

Terminer par un résumé : recettes publiées (avec leurs liens), photos jugées faibles, doutes éventuels, plats restants en tête de la liste de travail.
