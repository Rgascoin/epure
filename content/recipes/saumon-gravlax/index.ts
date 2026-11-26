import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "saumon-gravlax",
  title: "Saumon gravlax",
  seoTitle: "Saumon gravlax maison : sel, sucre, aneth et 48 h au frais",
  tagline: "Deux jours au frais, sans cuisson.",
  description:
    "Saumon gravlax maison pour 8 : 1 kg de filet congelé au préalable, 80 g de gros sel, 80 g de sucre, de l’aneth, 36 à 48 h pressé au frais, et sa sauce moutarde.",
  summary:
    "Pour 8 personnes, recouvrez 1 kg de filet de saumon avec sa peau, congelé 24 h à −20 °C au préalable, d’un mélange de 80 g de gros sel, 80 g de sucre, poivre concassé et 50 g d’aneth. Le filet passe 36 à 48 h au réfrigérateur, pressé sous un poids et retourné toutes les 12 h, puis on le rince, on le sèche et on le tranche très fin en biais. Une sauce moutarde-aneth l’accompagne. Comptez 35 minutes de travail et 2 jours de saumure, congélation non comprise.",
  intro: [
    "Le gravlax est un saumon cru qu’on laisse deux jours sous un mélange de gros sel, de sucre et d’aneth, pressé au réfrigérateur. Rien ne cuit. Le sel tire l’eau de la chair, qui se resserre, devient dense et un peu translucide, et prend le goût de l’aneth jusqu’au centre. On le sert en tranches si fines qu’on voit la lame au travers.",
    "Il se rate de deux façons : avec un poisson qui n’a pas été congelé, ce qui n’est pas négociable pour du saumon cru, et avec un sel dosé au jugé. On pèse : 80 g de gros sel et autant de sucre pour 1 kg de filet. Trop peu, la chair reste molle ; trop longtemps, elle tourne au jambon.",
    "Le reste demande surtout de la régularité. Retournez le paquet toutes les 12 h pour que les deux moitiés baignent à tour de rôle dans la saumure, et tranchez la lame presque couchée. Lancé trois jours avant le réveillon, il ne reste que la sauce à monter le jour même.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "saumon gravlax",
    "recette gravlax",
    "gravlax maison",
    "gravlax de saumon",
    "saumon mariné au sel et au sucre",
    "gravlax à l’aneth",
    "sauce gravlax moutarde aneth",
    "temps de marinade gravlax",
    "gravlax pour noël",
  ],
  servings: 8,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 35, cook: 0, rest: 2880 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: ["noel", "nouvel-an"],
  equipment: [
    "plat en verre ou en porcelaine juste à la taille du filet",
    "pince à arêtes ou pince à épiler propre",
    "planchette et 1 kg de poids (deux boîtes de conserve)",
    "long couteau fin et souple",
    "thermomètre de congélateur",
    "film alimentaire",
  ],
  ingredients: [
    {
      title: "Le saumon et sa saumure",
      items: [
        {
          qty: 1000,
          unit: "g",
          name: "filet de saumon",
          note: "avec la peau, pris au milieu, congelé 24 h à −20 °C au préalable",
          step: 50,
        },
        { qty: 80, unit: "g", name: "gros sel", step: 5 },
        { qty: 80, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 2, unit: "cac", name: "poivre noir en grains", step: 0.5 },
        { qty: 50, unit: "g", name: "aneth", note: "une grosse botte, tiges comprises", step: 5 },
        {
          qty: 1,
          name: "citron non traité",
          plural: "citrons non traités",
          note: "pour le zeste",
          step: 1,
          optional: true,
        },
        { qty: 3, unit: "cl", name: "aquavit", note: "ou vodka ; l’alcool ne cuit pas", step: 1, optional: true },
      ],
    },
    {
      title: "La sauce et la finition",
      items: [
        { qty: 3, unit: "cas", name: "moutarde de Dijon", step: 1 },
        { qty: 1, unit: "cas", name: "sucre en poudre", step: 0.5 },
        { qty: 1, unit: "cas", name: "vinaigre de cidre", step: 0.5 },
        { qty: 10, unit: "cl", name: "huile de colza", step: 1 },
        { qty: 30, unit: "g", name: "aneth", note: "moitié pour la sauce, moitié pour enrober", step: 5 },
        { name: "sel" },
        { name: "poivre" },
      ],
    },
  ],
  method: [
    {
      title: "Saler et presser",
      steps: [
        {
          title: "Congeler le saumon",
          text: "Si le saumon n’a pas été vendu déjà congelé, filmez-le bien serré et placez-le au moins 24 h au congélateur à −20 °C. Vérifiez la température avec un thermomètre : c’est cette étape qui détruit les parasites, ni le sel ni le sucre ne le font de façon sûre.",
          timer: { minutes: 1440, label: "Congélation à −20 °C" },
          tip: "Notez l’heure sur le film : 24 h, c’est un minimum, pas une moyenne.",
        },
        {
          title: "Décongeler au réfrigérateur",
          text: "Posez le filet encore filmé dans un plat et laissez-le 12 à 24 h au réfrigérateur, jamais sur le plan de travail. Il est prêt quand la chair cède sous le doigt jusqu’au centre de la partie épaisse, sans aucun point dur.",
          timer: { minutes: 1440, label: "Décongélation au frais" },
        },
        {
          title: "Retirer les arêtes",
          text: "Épongez le filet. Passez le bout des doigts sur la chair, de la tête vers la queue : les arêtes dépassent comme de petites pointes. Tirez-les une à une avec la pince, vers la tête, pour ne pas déchirer la chair. Coupez ensuite le filet en travers, en deux morceaux de même taille.",
          tip: "Tirez chaque arête lentement, dans l’axe où elle pointe : la chair reste lisse.",
        },
        {
          title: "Préparer le mélange",
          text: "Concassez le poivre au mortier ou sous le fond d’une casserole. Mélangez dans un bol le gros sel, le sucre, le poivre et le zeste du citron si vous en mettez. Hachez grossièrement les 50 g d’aneth, tiges comprises : elles ont autant de goût que les pluches.",
        },
        {
          title: "Refermer chair contre chair",
          text: "Tapissez le plat d’une grande feuille de film. Posez un morceau côté peau, badigeonnez la chair d’aquavit si vous en utilisez, couvrez-la d’aneth et des deux tiers du mélange, en chargeant la partie épaisse. Saupoudrez le reste sur l’autre morceau et refermez chair contre chair, la partie épaisse sur la partie fine. Filmez serré.",
          tip: "Plus de sel là où le filet est épais : la queue, plus fine, se sale toute seule.",
        },
        {
          title: "Presser au froid",
          text: "Posez une planchette sur le paquet et 1 kg de poids par-dessus. Placez au réfrigérateur pour 36 à 48 h. Toutes les 12 h, retournez le paquet et arrosez-le du liquide qui s’est formé au fond du plat : c’est la saumure, on la garde.",
          timer: { minutes: 720, label: "Retourner le saumon" },
        },
        {
          title: "Juger la texture",
          text: "Au bout de 36 h, appuyez sur la partie la plus épaisse : la chair doit être ferme de part en part, d’un orange plus soutenu et translucide sur les bords. Si le centre reste mou, refermez et comptez 12 h de plus. Un filet de 2,5 cm d’épaisseur est prêt en 36 h, un filet de 4 cm demande les 48 h.",
          timer: { minutes: 720, label: "Saumure, 12 h de plus" },
        },
      ],
    },
    {
      title: "Rincer et servir",
      steps: [
        {
          title: "Rincer et sécher",
          text: "Déballez, retirez l’aneth et raclez le sel avec le dos d’un couteau. Passez les morceaux quelques secondes sous l’eau froide, puis séchez-les au papier absorbant jusqu’à ce que la surface soit sèche, presque collante. Pressez la moitié de l’aneth de finition, haché, sur la chair. Filmez et laissez 30 minutes au congélateur : raffermie, la chair se tranche plus fin.",
          timer: { minutes: 30, label: "Raffermir au congélateur" },
        },
        {
          title: "Monter la sauce",
          text: "Pendant ce temps, fouettez dans un bol la moutarde, le sucre, le vinaigre, une pincée de sel et un tour de poivre. Versez l’huile en filet sans cesser de fouetter : la sauce épaissit et devient brillante, comme une mayonnaise légère. Ajoutez le reste de l’aneth, ciselé. Elle doit piquer un peu, puis laisser une douceur.",
        },
        {
          title: "Trancher en biais",
          text: "Posez un morceau côté peau, la queue vers vous. Avec le long couteau, la lame presque couchée, tirez des tranches de 2 à 3 mm en partant de la queue, sans couper la peau. La tranche est bonne quand on devine la lame à travers. Servez bien frais avec la sauce et gardez le reste en bloc.",
          tip: "Un seul long mouvement par tranche, sans scier : elle reste nette et brillante.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le sel tire l’eau et resserre la chair",
      text: "Au contact du filet, le sel et le sucre attirent l’eau des cellules par osmose : c’est le liquide qui s’accumule au fond du plat. En pénétrant, le sel modifie aussi les protéines du muscle, qui se resserrent. La chair perd son aspect humide, devient dense et un peu translucide, et se tranche finement sans s’effilocher.",
    },
    {
      title: "Le sucre adoucit sans saler",
      text: "Le sucre attire l’eau lui aussi, mais il n’a pas le goût mordant du sel. À poids égal, il équilibre la saumure : le poisson reste tendre et sa saveur ronde, là où le sel seul donnerait une chair plus dure et franchement salée.",
    },
    {
      title: "Le froid fait la sécurité, pas le sel",
      text: "Une saumure de deux jours ne détruit pas de façon fiable les larves d’anisakis que peut porter le saumon. La congélation à −20 °C pendant 24 h s’en charge. Elle n’élimine pas la listeria, qui supporte le froid du réfrigérateur : d’où l’importance d’un poisson très frais et d’une chaîne du froid sans rupture.",
    },
  ],
  tips: [
    "Demandez au poissonnier un morceau pris au milieu du filet, d’épaisseur régulière : la queue sale plus vite que le reste.",
    "Pesez le sel et le sucre. Une poignée au jugé, c’est soit une chair molle, soit un jambon de saumon.",
    "Gardez les tiges d’aneth dans la saumure : elles parfument autant que les pluches et ne coûtent rien.",
    "Après 36 h, goûtez une tranche fine prise dans la partie épaisse avant de rincer tout le bloc.",
    "Ne tranchez que ce que vous servez : le bloc entier se garde mieux que les tranches.",
  ],
  mistakes: [
    "Oublier de retourner le paquet : la moitié du dessous baigne dans la saumure et sale trop, celle du dessus reste molle. Retournez toutes les 12 h, même la nuit si vous pouvez.",
    "Laisser trois jours dans le sel : la chair durcit et devient trop salée. Rincez un peu plus longuement, tranchez très fin et servez avec des pommes de terre tièdes.",
    "Ne pas sécher après le rinçage : la surface reste mouillée, l’aneth ne tient pas et les tranches glissent sous la lame.",
    "Couper droit et épais : on obtient des cubes caoutchouteux. La lame se couche presque à plat, et chaque tranche fait 2 à 3 mm.",
  ],
  variations: [
    {
      title: "À la betterave",
      text: "Râpez 200 g de betterave crue et mélangez-la au sel et au sucre, avec le même aneth. Même temps de saumure : les bords des tranches ressortent violets, le cœur reste orange.",
    },
    {
      title: "Aux agrumes",
      text: "Ajoutez au mélange le zeste d’une orange en plus de celui du citron, et remplacez le vinaigre de la sauce par 1 cas de jus d’orange.",
    },
    {
      title: "Au gin et au genièvre",
      text: "Remplacez l’aquavit par 3 cl de gin et ajoutez 1 cac de baies de genièvre écrasées au mélange. L’alcool ne cuit pas non plus.",
    },
    {
      title: "Avec de la truite",
      text: "Deux filets de truite de mer de 500 g, congelés de la même façon, se montrent l’un contre l’autre. Plus minces, ils sont prêts en 24 à 36 h.",
    },
  ],
  storage:
    "Rincé et séché, le gravlax se garde 4 à 5 jours au réfrigérateur, en bloc et bien filmé, et se tranche au fur et à mesure. Ne le recongelez pas : le poisson l’a déjà été une fois. La sauce tient 3 jours au frais, dans un bocal fermé.",
  pairing:
    "Des pommes de terre tièdes à l’aneth ou du pain de seigle beurré, et un vin blanc sec et vif, comme un riesling d’Alsace ou un chablis.",
  faq: [
    {
      q: "Peut-on manger du gravlax enceinte ?",
      a: "Non. Le gravlax est du poisson cru : il est déconseillé aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées, à cause de la listeria. La congélation tue les parasites mais pas cette bactérie, et le sel ne la détruit pas non plus. Pour eux, servez un saumon cuit à cœur.",
    },
    {
      q: "Faut-il congeler le saumon pour faire un gravlax ?",
      a: "Oui, au moins 24 h à −20 °C, sauf si le poissonnier vous le vend qualité sashimi et déjà congelé. Le sel et le sucre ne suffisent pas à tuer les larves d’anisakis. Vérifiez au thermomètre que votre congélateur descend bien à −20 °C, puis décongelez au réfrigérateur.",
    },
    {
      q: "Peut-on faire le gravlax à l’aquavit pour des enfants ?",
      a: "Non. L’aquavit ne cuit pas : il reste dans la chair, même en petite quantité. Pour une tablée avec des enfants, faites-le sans alcool, avec le seul zeste de citron. Rappel : le poisson cru reste de toute façon déconseillé aux jeunes enfants.",
    },
    {
      q: "Combien de temps laisser le saumon dans le sel ?",
      a: "36 à 48 h au réfrigérateur pour un filet de 2,5 à 4 cm d’épaisseur, en le retournant toutes les 12 h. Il est prêt quand la partie épaisse est ferme jusqu’au centre. Au-delà de 48 h, la chair durcit et sale trop.",
    },
    {
      q: "Combien de temps se conserve un gravlax maison ?",
      a: "4 à 5 jours au réfrigérateur, une fois rincé et séché, en bloc bien filmé. Tranchez-le au moment de servir. Ne le recongelez pas, puisque le saumon a déjà été congelé avant la saumure.",
    },
    {
      q: "Peut-on utiliser du sel fin pour un gravlax ?",
      a: "Oui, au même poids : 80 g pour 1 kg de filet. Pesez-le plutôt que de le mesurer à la cuillère, car à volume égal le sel fin pèse plus lourd que le gros sel. Étalez-le ensuite de façon régulière sur toute la chair.",
    },
  ],
  nutrition: {
    calories: 345,
    protein: 23,
    fat: 26,
    saturatedFat: 3.5,
    carbs: 5,
    sugar: 4,
    fiber: 0.3,
    sodium: 1000,
  },
  annotations: { hero: "lame presque à plat, tranches fines", detail: "ferme et translucide jusqu’au cœur" },
  images: {
    heroAlt:
      "Tranches fines de saumon gravlax disposées en éventail sur une assiette blanche, parsemées de pluches d’aneth.",
    detailAlt:
      "Filet de saumon gravlax après la saumure, chair orange translucide et brillante, piquetée d’aneth haché.",
    credits: {
      hero: {
        photographer: "Kgbo",
        url: "https://commons.wikimedia.org/w/index.php?curid=76375331",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Tiia Monto",
        url: "https://commons.wikimedia.org/w/index.php?curid=65030717",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  hero,
  detail,
  theme: {
    accent: "#EE7A3A",
    onAccent: "#1B1712",
    ink: "#9C3F12",
    tint: "#FDF0E6",
    deep: "#1E0F07",
    focus: "45% 50%",
  },
});
