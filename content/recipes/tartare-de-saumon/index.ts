import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tartare-de-saumon",
  title: "Tartare de saumon",
  seoTitle: "Tartare de saumon au citron vert, coupé au couteau",
  tagline: "Coupé au couteau, servi tout de suite.",
  description:
    "Tartare de saumon pour 4 : 400 g de saumon cru taillé au couteau, citron vert, échalote et herbes, assaisonné au dernier moment. Prêt en 25 minutes.",
  summary:
    "Pour 4 personnes en entrée, taillez au couteau 400 g de saumon cru en dés de 5 mm : un saumon qualité sashimi, ou congelé 24 h à −20 °C au préalable. Assaisonnez au dernier moment avec une échalote, le zeste et 2 cuillères à soupe de jus de citron vert, de l’huile d’olive, de la ciboulette et de l’aneth, puis dressez dans un cercle. Comptez 25 minutes et servez dans l’heure, bien froid.",
  intro: [
    "Un tartare de saumon, c’est du poisson cru coupé en petits dés, relevé de citron vert, d’échalote et d’herbes, puis moulé dans un cercle. Pas de cuisson, donc pas de rattrapage : tout repose sur le saumon et sur le couteau.",
    "Le poisson d’abord. Achetez-le en précisant qu’il sera mangé cru, qualité sashimi, ou congelez-le 24 h à −20 °C avant de le préparer. Et gardez-le au froid jusqu’au dernier moment.",
    "Le geste ensuite. Un couteau bien aiguisé donne des dés nets, le robot donne une pâte. Quant au citron vert, il ne rejoint le saumon qu’au moment de servir : trop tôt, il blanchit la chair et la raffermit comme un ceviche.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "tartare de saumon",
    "recette tartare de saumon",
    "tartare de saumon citron vert",
    "tartare de saumon facile",
    "tartare de saumon frais",
    "tartare de saumon en entrée",
    "congeler saumon pour tartare",
    "tartare de saumon à l’avocat",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 0 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: ["ete", "nouvel-an"],
  equipment: [
    "couteau bien aiguisé à lame fine",
    "planche à découper",
    "pince à arêtes",
    "deux saladiers, dont un rempli de glaçons",
    "cercle à pâtisserie de 8 cm",
  ],
  ingredients: [
    {
      items: [
        {
          qty: 400,
          unit: "g",
          name: "filet de saumon",
          note: "sans peau, qualité sashimi ou congelé 24 h à −20 °C",
          step: 10,
        },
        { qty: 1, name: "échalote", plural: "échalotes", note: "environ 40 g", step: 1 },
        { qty: 1, name: "citron vert", plural: "citrons verts", note: "non traité, zeste et 2 cas de jus", step: 1 },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 0.5 },
        { qty: 10, unit: "g", name: "ciboulette", step: 5 },
        { qty: 5, unit: "g", name: "aneth", step: 5 },
        { name: "fleur de sel" },
        { name: "poivre noir" },
      ],
    },
  ],
  method: [
    {
      title: "Le tartare",
      steps: [
        {
          title: "Préparer un bain de glace",
          text: "Laissez le saumon au réfrigérateur jusqu’au moment de le tailler. Remplissez un grand saladier de glaçons et posez dessus un saladier plus petit : c’est là que les dés attendront, au froid, pendant que vous travaillez.",
        },
        {
          title: "Parer le saumon",
          text: "Posez le filet sur la planche. Passez le doigt sur la chair, à rebrousse-poil, pour repérer les arêtes et retirez-les à la pince. Ôtez la bande de chair grise côté peau, au goût plus fort, et les parties fines ou abîmées.",
        },
        {
          title: "Tailler les dés",
          text: "Coupez le filet en tranches de 5 mm, puis en bâtonnets, puis en dés de 5 mm, en tirant la lame d’un long mouvement plutôt qu’en appuyant. Déposez les dés au fur et à mesure dans le saladier sur glace, couvrez et remettez au réfrigérateur.",
          tip: "Essuyez la lame de temps en temps : un couteau gras écrase la chair au lieu de la trancher, et les dés perdent leurs angles.",
        },
        {
          title: "Préparer l’assaisonnement",
          text: "Ciselez l’échalote très finement. Râpez le zeste du citron vert, puis pressez-le pour obtenir 2 cuillères à soupe de jus. Ciselez la ciboulette en gardant une pincée pour le décor, et l’aneth. Mélangez dans un bol l’échalote, le zeste, le jus et l’huile d’olive.",
        },
        {
          title: "Assaisonner au dernier moment",
          text: "Quand les assiettes sont prêtes, versez l’assaisonnement et les herbes sur le saumon, ajoutez une pincée de fleur de sel et un tour de poivre, et mélangez délicatement à la fourchette. Goûtez : le citron doit réveiller le saumon sans le couvrir.",
          tip: "Plus le citron attend sur le poisson, plus la surface des dés blanchit et se raffermit. Mélangez, dressez, servez, dans cet ordre et sans pause.",
        },
        {
          title: "Dresser au cercle",
          text: "Posez le cercle au centre d’une assiette froide, remplissez-le de tartare et tassez légèrement avec le dos d’une cuillère. Soulevez le cercle bien droit, parsemez de la ciboulette gardée et servez aussitôt. Le tartare se mange dans l’heure.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le citron ne cuit pas le poisson",
      text: "L’acide du citron modifie les protéines en surface : la chair devient opaque et plus ferme, comme dans un ceviche. Mais il ne remplace pas la cuisson sur le plan sanitaire : il ne détruit de façon fiable ni les bactéries ni les larves de parasites.",
    },
    {
      title: "La congélation contre les parasites",
      text: "Le saumon peut héberger des larves d’anisakis. Une congélation à −20 °C pendant au moins 24 h, en tous points du poisson, les tue. C’est la règle que la réglementation européenne impose aux professionnels pour le poisson servi cru, sauf dérogation.",
    },
    {
      title: "Le froid tient la texture",
      text: "Entre 0 et 4 °C, le gras du saumon reste ferme et les dés gardent des arêtes nettes ; tiédi, il ramollit et le tartare devient pâteux. Le froid ralentit aussi la multiplication des bactéries, d’où le saladier sur glace.",
    },
  ],
  tips: [
    "Dites au poissonnier que le saumon sera mangé cru : il vous orientera vers une pièce qualité sashimi et vous dira si elle a déjà été congelée.",
    "Prenez de préférence un morceau dans le dos du filet, plus épais et régulier : les dés seront de la même taille.",
    "Si vous congelez le saumon vous-même, vérifiez avec un thermomètre que votre congélateur descend bien à −20 °C, beaucoup restent à −18 °C. Décongelez-le ensuite au réfrigérateur, jamais à température ambiante.",
    "Pour adoucir l’échalote, rincez-la ciselée sous l’eau froide et séchez-la dans du papier absorbant.",
    "Mettez les assiettes au réfrigérateur pendant que vous taillez le saumon : le tartare reste froid jusqu’à la table.",
  ],
  mistakes: [
    "Hacher le saumon au robot : la chair se transforme en pâte. Le couteau est le seul outil qui garde des dés nets.",
    "Assaisonner une heure à l’avance : les dés blanchissent, rendent de l’eau et deviennent fermes. Si c’est fait, égouttez, ajoutez un filet d’huile et servez sans attendre.",
    "Laisser le filet entier sur le plan de travail pendant la découpe : il se réchauffe et ramollit. Taillez-le en deux fois et remettez la seconde moitié au froid.",
    "Saler les dés avant de les assaisonner : le sel fait sortir l’eau du poisson. Salez au moment de mélanger.",
  ],
  variations: [
    {
      title: "À l’avocat",
      text: "Taillez 1 avocat mûr en dés de 5 mm, arrosez-le d’1 cuillère à café de jus de citron vert et salez-le. Tassez-en 1 cm au fond du cercle avant d’ajouter le saumon.",
    },
    {
      title: "Au sésame et au soja",
      text: "Remplacez l’huile d’olive par 1 cuillère à soupe d’huile de sésame et 1 cuillère à soupe de sauce soja, l’aneth par 5 g de coriandre, et ajoutez 1 cuillère à café de gingembre frais râpé. Ne salez pas : la sauce soja suffit.",
    },
    {
      title: "À la mangue",
      text: "Ajoutez 100 g de mangue bien mûre en dés de 5 mm au moment d’assaisonner. Elle adoucit l’acidité ; gardez la même quantité de jus de citron vert.",
    },
  ],
  storage:
    "Le tartare ne se conserve pas : il se mange dans l’heure qui suit la découpe et les restes se jettent. Le saumon cru se garde au réfrigérateur, entre 0 et 4 °C, et se prépare le jour de l’achat ou juste après sa décongélation au réfrigérateur. Ne recongelez jamais un saumon décongelé.",
  pairing:
    "Quelques tranches de pain de campagne grillées ou une salade de jeunes pousses, et un blanc sec et vif, comme un sancerre ou un muscadet.",
  faq: [
    {
      q: "Peut-on manger un tartare de saumon enceinte ?",
      a: "Non. Le poisson cru est déconseillé aux femmes enceintes, ainsi qu’aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées, à cause de la listeria et des parasites. La congélation tue les parasites, pas la listeria. Pour eux, préférez un saumon cuit à cœur.",
    },
    {
      q: "Faut-il congeler le saumon pour faire un tartare ?",
      a: "Oui, sauf si le poissonnier vous le vend qualité sashimi et déjà assaini. Sinon, congelez-le 24 h à −20 °C, puis décongelez-le au réfrigérateur. Cette étape tue les larves d’anisakis que peut porter le poisson. Vérifiez que votre congélateur atteint bien −20 °C.",
    },
    {
      q: "Le citron cuit-il le saumon du tartare ?",
      a: "Non. Le jus de citron rend la surface opaque et plus ferme, mais il ne remplace pas la cuisson : il ne détruit de façon fiable ni les bactéries ni les parasites. La sécurité vient du choix du poisson, de la congélation et du froid.",
    },
    {
      q: "Combien de temps à l’avance peut-on préparer un tartare de saumon ?",
      a: "1 heure au maximum entre la découpe et la dégustation. Gardez les dés couverts, sur glace ou au réfrigérateur, et n’ajoutez l’assaisonnement qu’au moment de servir.",
    },
    {
      q: "Quel saumon choisir pour un tartare ?",
      a: "Un filet extra-frais, qualité sashimi, pris dans le dos : chair brillante et ferme, légère odeur de marée, aucune zone sèche. Élevage ou sauvage, la règle est la même : il doit être assaini par congélation s’il n’est pas vendu prêt à manger cru.",
    },
    {
      q: "Peut-on garder un reste de tartare de saumon ?",
      a: "Non. Une fois assaisonné et passé à table, le tartare ne se garde pas : jetez les restes. Ne préparez que la quantité qui sera mangée.",
    },
    {
      q: "Quelle quantité de saumon par personne pour un tartare ?",
      a: "100 g en entrée, 150 à 180 g en plat avec une salade. Pour 4 personnes en plat, prévoyez donc 600 à 700 g de filet.",
    },
  ],
  nutrition: {
    calories: 248,
    protein: 20.5,
    fat: 17.5,
    saturatedFat: 3.2,
    carbs: 2,
    sugar: 1,
    fiber: 0.3,
    sodium: 250,
  },
  annotations: { hero: "coupé au couteau, pas au robot", detail: "le citron vert, au dernier moment" },
  images: {
    heroAlt: "Tartare de saumon en dés moulé au cercle et parsemé de ciboulette, vu de dessus sur une assiette blanche",
    detailAlt: "Tartare de saumon dressé avec une rondelle de citron vert, une salade verte et du pain grillé",
    credits: {
      hero: {
        photographer: "Benoît Prieur",
        url: "https://commons.wikimedia.org/w/index.php?curid=128855896",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Benoît Prieur",
        url: "https://commons.wikimedia.org/w/index.php?curid=77642677",
        source: "Wikimedia Commons",
        license: "CC0",
      },
    },
  },
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  hero,
  detail,
  theme: {
    accent: "#E9774F",
    onAccent: "#1B1712",
    ink: "#A3401E",
    tint: "#FCEEE7",
    deep: "#200F0A",
    focus: "52% 45%",
  },
});
