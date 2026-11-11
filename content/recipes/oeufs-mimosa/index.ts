import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "oeufs-mimosa",
  title: "Œufs mimosa",
  seoTitle: "Œufs mimosa : 10 min de cuisson et mayonnaise maison",
  tagline: "Avec une mayonnaise montée au fouet.",
  description:
    "Des œufs mimosa comme à la maison : 6 œufs cuits 10 minutes pile, une mayonnaise montée au fouet et le jaune tamisé par-dessus. Prêts en 45 minutes.",
  summary:
    "Pour 4 personnes (12 demi-œufs), cuisez 6 gros œufs 10 minutes dans l’eau bouillante, refroidissez-les 10 minutes dans l’eau glacée, puis montez une mayonnaise avec 1 jaune cru, 1 cuillère à café de moutarde et 10 cl d’huile. Quatre jaunes cuits écrasés avec la mayonnaise font la farce, les deux derniers passent au tamis pour le mimosa. Comptez 45 minutes en tout.",
  intro: [
    "Des œufs durs coupés en deux, farcis de leur jaune écrasé avec de la mayonnaise, puis couverts d’un dernier jaune passé au tamis. Ces petites miettes jaunes et légères rappellent les boules du mimosa, d’où le nom.",
    "Presque tout se joue à la cuisson. Un œuf qui cuit trop longtemps donne un jaune sec, cerné de vert, qui sent le soufre. Dix minutes dans l’eau qui bout, puis l’eau glacée sans attendre : le jaune reste d’un jaune franc, ferme sans être plâtreux.",
    "Un pot de mayonnaise ferait l’affaire, c’est vrai. Mais celle qu’on monte soi-même avec un jaune, de la moutarde et une huile neutre prend cinq minutes, et la farce a alors le goût de l’œuf plutôt que celui du vinaigre.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "œufs mimosa",
    "recette œufs mimosa",
    "œufs mimosa maison",
    "œufs mimosa mayonnaise maison",
    "temps de cuisson œuf dur",
    "œufs mimosa la veille",
    "œufs farcis",
    "entrée de pâques",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 10, rest: 10 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: ["paques", "printemps"],
  equipment: [
    "casserole de 2 l",
    "saladier d’eau glacée",
    "fouet et petit bol à bord haut",
    "tamis fin ou passoire fine",
    "poche à douille cannelée (facultatif)",
  ],
  ingredients: [
    {
      title: "Les œufs",
      items: [{ qty: 6, name: "œuf", plural: "œufs", note: "gros (calibre L), sortis du frigo au dernier moment", step: 1 }],
    },
    {
      title: "La mayonnaise",
      items: [
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", note: "extra-frais, à température ambiante", step: 1 },
        { qty: 1, unit: "cac", name: "moutarde de Dijon", step: 0.5 },
        { qty: 10, unit: "cl", name: "huile neutre", note: "tournesol ou pépins de raisin", step: 1 },
        { qty: 1, unit: "cac", name: "vinaigre de vin blanc", note: "ou jus de citron", step: 0.5 },
        { name: "sel" },
        { name: "poivre", note: "du moulin" },
      ],
    },
    {
      title: "La finition",
      items: [{ qty: 10, unit: "brin", name: "ciboulette", note: "ciselée finement", step: 2 }],
    },
  ],
  method: [
    {
      title: "La cuisson des œufs",
      steps: [
        {
          title: "Cuire les œufs",
          text: "Portez 2 l d’eau à franche ébullition. Sortez les œufs du frigo et déposez-les un par un au fond de la casserole avec une écumoire. Baissez un peu le feu pour garder un bouillon régulier et lancez le minuteur : 10 minutes, pas une de plus.",
          timer: { minutes: 10, label: "Œufs durs" },
          tip: "Un bouillon trop fort fait cogner les œufs entre eux et fend les coquilles : petits bouillons suffisent.",
        },
        {
          title: "Refroidir aussitôt",
          text: "Transférez les œufs dans le saladier d’eau froide et de glaçons. Laissez-les 10 minutes, jusqu’à ce qu’ils soient froids au toucher jusqu’au cœur quand vous en prenez un dans la main.",
          timer: { minutes: 10, label: "Œufs dans l’eau glacée" },
        },
      ],
    },
    {
      title: "La mayonnaise, la farce et le mimosa",
      steps: [
        {
          title: "Monter la mayonnaise",
          text: "Pendant que les œufs refroidissent, fouettez le jaune cru, la moutarde et une pincée de sel dans le petit bol. Versez l’huile goutte à goutte en fouettant sans arrêt, puis en mince filet dès que le mélange épaissit et blanchit. Finissez par le vinaigre et un tour de poivre. Elle est prête quand elle tient sur le fouet, épaisse et brillante.",
          tip: "Si elle devient liquide et granuleuse, c’est qu’elle a tranché : 1 cuillère à café de moutarde dans un bol propre, puis la mayonnaise ratée versée dessus petit à petit en fouettant.",
        },
        {
          title: "Écaler et couper",
          text: "Tapotez chaque œuf sur le plan de travail pour fêler toute la coquille, puis écalez-le sous un mince filet d’eau froide en commençant par le gros bout. Coupez-les en deux dans la longueur en essuyant la lame entre chaque œuf.",
        },
        {
          title: "Préparer la farce",
          text: "Sortez les jaunes cuits. Mettez-en 2 de côté pour le mimosa. Écrasez les 4 autres à la fourchette, puis ajoutez 4 cuillères à soupe de mayonnaise, la moitié de la ciboulette, sel et poivre. Mélangez jusqu’à une pâte lisse qui tient en dôme sur la cuillère. Goûtez : elle doit être bien assaisonnée.",
        },
        {
          title: "Garnir les blancs",
          text: "Déposez une noisette de mayonnaise sur le plat à chaque emplacement et posez-y un demi-blanc : il ne glissera plus. Remplissez chaque blanc d’une cuillère de farce bombée, ou à la poche à douille cannelée.",
        },
        {
          title: "Tamiser le mimosa",
          text: "Juste avant de servir, pressez les 2 jaunes réservés à travers le tamis avec le dos d’une cuillère, au-dessus des œufs. Ils tombent en fines miettes jaunes. Parsemez du reste de ciboulette et servez bien frais, avec le reste de mayonnaise à part.",
          tip: "Tenez le tamis assez haut, à une vingtaine de centimètres : les miettes se répartissent seules sur tout le plat.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi 10 minutes",
      text: "Le blanc commence à prendre vers 62 °C et le jaune devient ferme vers 70 °C. Dix minutes dans l’eau bouillante amènent le centre d’un gros œuf froid juste au-delà, sans le pousser beaucoup plus haut : le jaune est pris mais encore tendre.",
    },
    {
      title: "Le cerne vert",
      text: "Quand l’œuf cuit trop, le soufre des protéines du blanc se libère en hydrogène sulfuré, qui rencontre le fer du jaune. Il se forme du sulfure de fer, gris-vert, à la surface du jaune. L’eau glacée arrête la cuisson et limite la réaction.",
    },
    {
      title: "Ce qui fait tenir la mayonnaise",
      text: "Le jaune contient des émulsifiants, dont la lécithine, qui enrobent les gouttelettes d’huile et les empêchent de se regrouper. Au début, il y a peu d’émulsifiant pour beaucoup d’huile : versée trop vite, elle forme de grosses gouttes que rien n’enrobe, et l’émulsion tranche.",
    },
    {
      title: "Frais pour la mayonnaise, pas pour la cuisson",
      text: "Dans un œuf très frais, le blanc est encore peu alcalin et colle à la membrane : il s’écale mal. Au fil des jours, le gaz carbonique s’échappe par la coquille, le pH du blanc monte vers 9 et la coquille se détache mieux. Gardez les œufs les plus frais pour le jaune cru.",
    },
  ],
  tips: [
    "Les 10 minutes valent pour de gros œufs sortis du frigo et posés dans l’eau qui bout déjà. Avec des œufs moyens, comptez 9 minutes.",
    "Écalez en commençant par le gros bout, là où se trouve la poche d’air : l’eau se glisse sous la membrane et la coquille part en grands morceaux.",
    "Salez la farce un peu plus que vous ne le feriez naturellement : le blanc qui l’entoure n’est pas salé du tout.",
    "Tamisez le mimosa au dernier moment. Au frigo, les miettes sèchent en surface et prennent une teinte terne.",
  ],
  mistakes: [
    "Partir de l’eau froide et compter à partir de l’ébullition : selon la casserole et le feu, la cuisson varie de plusieurs minutes. Déposez toujours les œufs dans l’eau qui bout.",
    "Laisser refroidir les œufs dans l’eau de cuisson : ils continuent de cuire et le jaune verdit. Direction l’eau glacée, tout de suite.",
    "Verser l’huile trop vite : la mayonnaise tranche. Elle se rattrape avec 1 cuillère à café de moutarde dans un bol propre, en y versant la mayonnaise ratée petit à petit.",
    "Écraser tous les jaunes dans la farce : il n’en reste plus pour le mimosa. Mettez-en 2 de côté avant de commencer.",
    "Ajouter la mayonnaise d’un coup : la farce devient molle et coule hors du blanc. Ajoutez-la cuillère par cuillère jusqu’à ce qu’elle tienne en dôme.",
  ],
  variations: [
    {
      title: "Au thon",
      text: "Écrasez 80 g de thon au naturel bien égoutté avec les 4 jaunes et ne mettez que 3 cuillères à soupe de mayonnaise. La farce est plus ferme et déjà salée : goûtez avant d’assaisonner.",
    },
    {
      title: "Moutarde à l’ancienne et piment d’Espelette",
      text: "Ajoutez 1 cuillère à café de moutarde à l’ancienne dans la farce, pour le grain et le piquant, et une pincée de piment d’Espelette sur le mimosa au moment de servir.",
    },
    {
      title: "Sans œuf cru",
      text: "Remplacez la mayonnaise maison par 5 cuillères à soupe de mayonnaise du commerce en pot, ou par 60 g de fromage frais détendu avec 1 cuillère à café de moutarde et un filet d’huile d’olive. Les noisettes sous les blancs se font avec la même préparation.",
    },
  ],
  storage:
    "Garnis, les œufs mimosa se gardent 24 heures au maximum au réfrigérateur, couverts, à cause du jaune cru de la mayonnaise. Les œufs durs non écalés tiennent 3 jours au frigo. Ne les congelez pas : le blanc devient caoutchouteux.",
  pairing:
    "En entrée avant un poisson ou un poulet rôti, avec quelques feuilles de salade à la vinaigrette moutardée. Dans le verre, un blanc sec et vif, un mâcon ou un muscadet.",
  faq: [
    {
      q: "Combien de temps cuire les œufs pour des œufs mimosa ?",
      a: "10 minutes pour de gros œufs sortis du frigo et déposés dans l’eau qui bout déjà, puis 10 minutes dans l’eau glacée. Le jaune est alors pris jusqu’au centre et reste bien jaune. Au-delà de 12 minutes, il devient sec et un cerne verdâtre apparaît.",
    },
    {
      q: "Les femmes enceintes peuvent-elles manger des œufs mimosa ?",
      a: "Non, pas avec une mayonnaise maison : le jaune cru peut transmettre des salmonelles. La même prudence vaut pour les jeunes enfants, les personnes âgées et les personnes immunodéprimées. Pour eux, liez la farce avec une mayonnaise du commerce en pot, faite à partir de jaunes pasteurisés, ou avec du fromage frais. Les œufs durs, cuits 10 minutes, ne posent pas de problème.",
    },
    {
      q: "Peut-on préparer les œufs mimosa la veille ?",
      a: "Oui, en partie. Cuisez et écalez les œufs la veille, puis gardez-les entiers au frigo dans une boîte fermée. Montez la mayonnaise et garnissez le jour même, quelques heures avant de servir. Une fois garnis, ils ne se gardent pas plus de 24 heures au réfrigérateur.",
    },
    {
      q: "Pourquoi mes œufs durs sont-ils difficiles à écaler ?",
      a: "Le plus souvent, parce qu’ils sont trop frais : le blanc colle encore à la membrane. Des œufs pondus depuis une semaine environ s’écalent bien mieux. Le refroidissement brutal dans l’eau glacée aide aussi, et l’écalage sous un filet d’eau froide en commençant par le gros bout.",
    },
    {
      q: "Comment rattraper une mayonnaise qui a tranché ?",
      a: "Avec 1 cuillère à café de moutarde dans un bol propre : versez-y la mayonnaise ratée cuillère par cuillère en fouettant vivement, elle reprend en une minute. Un nouveau jaune fonctionne aussi, mais il ajoute de l’œuf cru.",
    },
    {
      q: "Combien d’œufs mimosa prévoir par personne ?",
      a: "3 demi-œufs en entrée, avec un peu de salade, soit 6 œufs pour 4 personnes. À l’apéritif, au milieu d’autres bouchées, 2 demi-œufs par personne suffisent.",
    },
  ],
  nutrition: {
    calories: 340,
    protein: 11,
    fat: 32,
    saturatedFat: 5,
    carbs: 1,
    sugar: 0.5,
    fiber: 0,
    sodium: 250,
  },
  annotations: { hero: "dix minutes, pas une de plus", detail: "deux jaunes gardés pour le mimosa" },
  images: {
    heroAlt:
      "Œufs mimosa garnis à la poche, parsemés de ciboulette et d’une pointe de paprika, dans un plat à œufs en porcelaine blanche",
    detailAlt:
      "Demi-œufs mimosa à la farce bien jaune dressée à la poche, chacun avec un brin d’aneth, sur une planche en bois",
    credits: {
      hero: {
        photographer: "Michele Ursino",
        url: "https://commons.wikimedia.org/wiki/File:Deviled_eggs_closeup.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Büşra Yaman",
        url: "https://www.pexels.com/photo/close-up-of-deviled-eggs-17290375/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E3A72F",
    onAccent: "#1B1712",
    ink: "#7A5600",
    tint: "#FBF3DA",
    deep: "#1A140A",
    focus: "50% 45%",
  },
});
