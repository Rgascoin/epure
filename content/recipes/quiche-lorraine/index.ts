import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "quiche-lorraine",
  title: "Quiche lorraine",
  seoTitle: "Quiche lorraine : la vraie recette, pâte croustillante",
  tagline: "Sans gruyère, et elle s’en porte bien.",
  description:
    "La vraie quiche lorraine : lardons, œufs, crème et une pâte brisée cuite à blanc qui reste croustillante. Pour 6 personnes, 30 minutes de travail.",
  summary:
    "Pour une quiche lorraine de 6 personnes, préparez une pâte brisée (250 g de farine, 125 g de beurre), foncez un moule de 26 cm et cuisez-la à blanc 20 minutes à 200 °C. Répartissez 200 g de lardons dorés à la poêle, versez 4 œufs battus avec 40 cl de crème et enfournez 30 à 35 minutes à 180 °C. Comptez 2 h 20 en tout, repos de la pâte compris.",
  intro: [
    "La quiche lorraine tient en peu de choses : des lardons, des œufs et de la crème, sur une pâte brisée. Ni gruyère, ni oignon, ni lait. Le fromage râpé sur le dessus, on le croise partout ; il n’est pas mauvais, mais il change la quiche, alors on le garde pour les variantes.",
    "Une bonne quiche, c’est un fond qui craque et un appareil qui tremble. Pour le fond, on cuit la pâte à blanc avant de la garnir. Pour l’appareil, on enfourne à 180 °C et on sort la quiche quand le centre bouge encore un peu.",
    "Ce qui rate le plus souvent : une pâte détrempée, parce qu’elle n’a pas été précuite, et une quiche qui rend de l’eau, parce qu’elle a trop cuit. Les deux s’évitent sans difficulté, on vous montre comment.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "quiche lorraine",
    "vraie quiche lorraine",
    "quiche lorraine sans gruyère",
    "quiche lorraine facile",
    "quiche lorraine traditionnelle",
    "quiche lorraine pâte maison",
    "quiche lardons crème",
    "cuisson à blanc quiche",
    "quiche lorraine sans pâte",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 55, rest: 55 },
  difficulty: "Intermédiaire",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["pique-nique"],
  equipment: [
    "moule à tarte de 26 cm à bords hauts",
    "rouleau à pâtisserie",
    "papier cuisson et billes de cuisson (ou haricots secs)",
    "poêle",
    "saladier et fouet",
  ],
  ingredients: [
    {
      title: "La pâte brisée",
      items: [
        { qty: 250, unit: "g", name: "farine T55", step: 10 },
        { qty: 0.5, unit: "cac", name: "sel fin" },
        { qty: 125, unit: "g", name: "beurre doux", note: "très froid, en dés", step: 5 },
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 50, unit: "ml", name: "eau glacée", step: 5 },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "lardons fumés", note: "ou poitrine fumée en bâtonnets de 5 mm", step: 10 },
        { qty: 4, name: "œuf", plural: "œufs", step: 1 },
        {
          qty: 40,
          unit: "cl",
          name: "crème fraîche entière",
          note: "liquide, ou moitié liquide moitié épaisse",
          step: 1,
        },
        { qty: 1, unit: "pincee", name: "noix de muscade", note: "râpée", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
  ],
  method: [
    {
      title: "La pâte brisée",
      steps: [
        {
          title: "Sabler la pâte",
          text: "Dans un saladier, mélangez la farine et le sel. Ajoutez le beurre froid en dés et frottez le tout entre vos doigts, rapidement, jusqu’à obtenir un sable grossier où l’on voit encore quelques paillettes de beurre. Au robot, procédez par pulsions courtes.",
        },
        {
          title: "Rassembler et laisser reposer",
          text: "Ajoutez le jaune d’œuf et l’eau glacée, puis rassemblez la pâte en boule du bout des doigts, sans la pétrir. Si elle s’effrite, ajoutez une cuillerée d’eau. Aplatissez-la en disque, filmez-la et laissez-la reposer au moins 30 minutes au réfrigérateur.",
          timer: { minutes: 30, label: "Repos de la pâte" },
          tip: "Moins vous la travaillez, plus elle sera friable. Une pâte pétrie devient élastique et se rétracte à la cuisson.",
        },
        {
          title: "Foncer le moule",
          text: "Préchauffez le four à 200 °C, chaleur statique. Étalez la pâte sur 3 mm d’épaisseur et foncez le moule en poussant bien la pâte dans l’angle. Coupez l’excédent en gardant une petite chute, puis piquez le fond à la fourchette. Mettez le moule 15 minutes au réfrigérateur pendant que le four chauffe.",
          timer: { minutes: 15, label: "Fond de tarte au frais" },
        },
        {
          title: "Cuire à blanc",
          text: "Couvrez la pâte d’un papier cuisson, remplissez-la de billes de cuisson ou de haricots secs et enfournez 15 minutes. Retirez papier et billes, puis prolongez 5 à 8 minutes : le fond doit être sec et blond, sans zone brillante.",
          timer: { minutes: 20, label: "Cuisson à blanc" },
          tip: "Une fissure après la cuisson ? Bouchez-la avec la chute de pâte crue : l’appareil ne passera pas dessous.",
        },
      ],
    },
    {
      title: "La garniture",
      steps: [
        {
          title: "Dorer les lardons",
          text: "Pendant la cuisson à blanc, faites revenir les lardons à sec dans une poêle, à feu moyen, 5 à 6 minutes en remuant : ils doivent dorer sans devenir secs ni croustillants. Égouttez-les sur du papier absorbant.",
          timer: { minutes: 6, label: "Lardons" },
        },
        {
          title: "Préparer l’appareil",
          text: "Dans un saladier, fouettez les œufs avec la crème, la muscade et quelques tours de poivre, juste assez pour que le mélange soit homogène, sans le faire mousser. Ne salez pas : les lardons apportent tout le sel nécessaire.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Garnir le fond",
          text: "Baissez le four à 180 °C. Répartissez les lardons sur le fond de tarte encore chaud, puis versez l’appareil doucement par-dessus, sans dépasser le bord de la pâte.",
        },
        {
          title: "Cuire la quiche",
          text: "Enfournez au milieu du four pour 30 à 35 minutes. La quiche est cuite quand le dessus est doré par endroits et que le centre tremble à peine, comme une gelée, quand vous secouez doucement le moule.",
          timer: { minutes: 32, label: "Cuisson de la quiche" },
          tip: "Si les bords de la pâte dorent trop vite, couvrez-les d’une bande de papier aluminium.",
        },
        {
          title: "Laisser reposer",
          text: "Laissez reposer la quiche 10 minutes hors du four avant de la démouler et de la couper : l’appareil finit de prendre avec la chaleur qui reste, et les parts se tiennent. Servez-la chaude ou tiède.",
          timer: { minutes: 10, label: "Repos de la quiche" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi cuire la pâte à blanc",
      text: "Versé sur une pâte crue, l’appareil liquide la détrempe avant qu’elle ait eu le temps de cuire, et le fond reste pâteux. Cuite à blanc, la pâte a déjà séché en surface et son amidon a cuit : elle résiste à l’humidité. Les billes l’empêchent de gonfler et les bords de s’affaisser pendant que le beurre fond.",
    },
    {
      title: "Ce qui fait prendre l’appareil",
      text: "Diluées dans la crème, les protéines des œufs coagulent vers 80 °C en un gel tendre. Au-delà de 90 °C environ, elles se resserrent et expulsent leur eau : l’appareil devient granuleux et suinte. C’est pour ça qu’on cuit à 180 °C et qu’on sort la quiche quand le centre tremble encore : la chaleur qui reste finit le travail.",
    },
    {
      title: "Le beurre froid dans la pâte",
      text: "Les paillettes de beurre enrobent la farine et limitent la formation du gluten : la pâte reste friable au lieu d’être élastique. Le repos au frais détend le gluten formé et raffermit le beurre, ce qui limite la rétraction à la cuisson.",
    },
  ],
  tips: [
    "Demandez de la poitrine fumée en tranches épaisses et taillez vos lardons vous-même : ils restent plus moelleux que ceux des barquettes, qui rendent souvent de l’eau.",
    "Si vos lardons sont très salés, blanchissez-les : départ à l’eau froide, 2 minutes d’ébullition, puis égouttez-les avant de les poêler.",
    "Le blanc d’œuf qui reste de la pâte a son utilité : badigeonnez-en le fond cuit à blanc et remettez 2 minutes au four. Il forme un vernis qui protège la pâte de l’humidité.",
    "Sortez les œufs et la crème du frigo une demi-heure avant : l’appareil cuit plus régulièrement, sans que les bords soient trop cuits quand le centre est pris.",
    "Tiède, la quiche a plus de goût que brûlante, et elle se coupe plus proprement.",
  ],
  mistakes: [
    "Garnir une pâte crue. Le fond détrempe et reste pâteux, même après 40 minutes de four.",
    "Saler l’appareil comme une omelette. Avec 200 g de lardons, la quiche devient trop salée.",
    "Cuire trop fort ou trop longtemps. L’appareil gonfle, se creuse en refroidissant, devient granuleux et rend de l’eau.",
    "Pétrir la pâte. Elle devient élastique et se rétracte dans le moule.",
    "Couper la quiche à la sortie du four. L’appareil n’a pas fini de prendre et coule dans le plat.",
  ],
  variations: [
    {
      title: "Avec du fromage",
      text: "Parsemez 80 g de comté ou de gruyère râpé sur les lardons avant de verser l’appareil. Le dessus est plus doré et plus gourmand, mais ce n’est plus la quiche lorraine d’origine.",
    },
    {
      title: "Avec une pâte du commerce",
      text: "Un rouleau de pâte brisée pur beurre de 230 g remplace la pâte maison : foncez, 15 minutes au frais, puis même cuisson à blanc. Vous gagnez 15 minutes de travail et 30 minutes de repos.",
    },
    {
      title: "Plus légère, moitié lait",
      text: "Remplacez 20 cl de crème par 20 cl de lait entier. L’appareil est plus tremblant et un peu moins riche ; gardez la même cuisson et surveillez le centre.",
    },
    {
      title: "Sans pâte",
      text: "Beurrez un plat à gratin de 24 cm et répartissez les lardons. Fouettez 40 g de farine avec les œufs avant d’ajouter la crème, versez et cuisez 35 à 40 minutes à 180 °C. On est plus près du flan que de la quiche.",
    },
  ],
  storage:
    "Elle se garde 2 à 3 jours au réfrigérateur, filmée ou en boîte fermée. Réchauffez les parts 10 à 15 minutes au four à 160 °C, jusqu’à ce qu’elles soient chaudes à cœur : au micro-ondes, la pâte ramollit.",
  pairing: "Un vin gris des côtes de Toul si vous en trouvez, sinon un riesling ou un pinot blanc d’Alsace.",
  faq: [
    {
      q: "Met-on du fromage dans la quiche lorraine ?",
      a: "Non, pas dans la recette lorraine : des lardons, des œufs et de la crème, sur une pâte brisée. Le gruyère ou le comté sont un ajout courant, et bon, mais c’est une variante.",
    },
    {
      q: "Faut-il précuire la pâte d’une quiche ?",
      a: "Oui. Une cuisson à blanc d’une vingtaine de minutes sèche le fond. Sans elle, l’appareil liquide détrempe la pâte, qui reste molle dessous.",
    },
    {
      q: "Pourquoi ma quiche lorraine rend-elle de l’eau ?",
      a: "Elle a trop cuit, ou trop fort : les protéines des œufs se resserrent et expulsent leur eau. Cuisez à 180 °C et sortez-la quand le centre tremble encore. Des lardons mal égouttés jouent aussi.",
    },
    {
      q: "Combien de temps cuire une quiche lorraine ?",
      a: "30 à 35 minutes à 180 °C, après 20 minutes de cuisson à blanc de la pâte. Elle est prête quand le dessus est doré par endroits et que le centre tremble à peine.",
    },
    {
      q: "Peut-on remplacer la crème par du lait dans une quiche lorraine ?",
      a: "En partie. Moitié crème, moitié lait entier donne un appareil plus léger. Avec du lait seul, il est plus fragile et rend plus facilement de l’eau ; ajoutez alors un œuf.",
    },
    {
      q: "Peut-on congeler une quiche lorraine ?",
      a: "Oui, cuite et refroidie, entière ou en parts, bien emballée, jusqu’à 2 mois. Réchauffez-la sans la décongeler, 20 à 25 minutes au four à 170 °C, jusqu’à ce qu’elle soit chaude à cœur : la pâte reste croustillante.",
    },
    {
      q: "Met-on des oignons dans la quiche lorraine ?",
      a: "Non, la quiche lorraine n’en contient pas. Avec une bonne couche d’oignons fondus, on se rapproche de la tarte à l’oignon alsacienne, qui est une autre recette.",
    },
  ],
  nutrition: {
    calories: 630,
    protein: 15,
    fat: 48,
    saturatedFat: 28,
    carbs: 32,
    sugar: 3,
    fiber: 1,
    sodium: 630,
  },
  annotations: {
    hero: "le fond cuit seul d’abord",
    detail: "sortir quand le centre tremble",
  },
  images: {
    heroAlt:
      "Part de quiche lorraine sur une assiette blanche, lardons et appareil aux œufs bien pris, salade verte à côté",
    detailAlt: "Quiche lorraine entière et dorée dans un plat à tarte en verre, posée sur une planche en bois",
    credits: {
      hero: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Quiche_lorraine_04.jpg",
        source: "Wikimedia Commons",
        license: "CC0",
      },
      detail: {
        photographer: "Claude Humbert",
        url: "https://commons.wikimedia.org/wiki/File:54._Quiche_lorraine.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-05",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E0A830",
    onAccent: "#1b1712",
    ink: "#865500",
    tint: "#FBF3DF",
    deep: "#1a120c",
    focus: "36% 50%",
  },
});
