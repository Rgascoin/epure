import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "puree-de-celeri",
  title: "Purée de céleri",
  seoTitle: "Purée de céleri-rave au lait, lisse au mixeur",
  tagline: "Le couteau d’abord, le mixeur ensuite.",
  description:
    "Purée de céleri-rave pour 4 : 1 kg de céleri pelé épais, cuit 25 minutes dans le lait et l’eau, bien égoutté, mixé avec 50 g de beurre et de la muscade.",
  summary:
    "Pour 4 personnes, pelez au couteau 1 kg de céleri-rave, coupez-le en cubes de 2 à 3 cm et faites-les frémir 20 à 25 minutes dans 40 cl de lait et 40 cl d’eau salés. Égouttez très soigneusement, séchez les cubes 3 minutes dans la casserole chaude, puis mixez-les avec 50 g de beurre et une pincée de muscade. Une pomme de terre écrasée à part lui donne plus de corps, si vous voulez. Comptez 50 minutes en tout.",
  intro: [
    "La purée de céleri a le goût du céleri, en plus doux, et la texture d’une crème épaisse. On la sert avec ce qui a du caractère : un gibier, un rôti, des Saint-Jacques juste saisies.",
    "Pour une fois, le mixeur est le bon outil. Le céleri-rave contient très peu d’amidon : on peut le mixer longtemps sans qu’il devienne élastique. Il contient en revanche beaucoup d’eau, et c’est là qu’on rate la purée : mal égouttée, elle coule dans l’assiette.",
    "Deux gestes comptent donc. Peler large, au couteau, pour retirer toute la couche terreuse et fibreuse. Puis sécher les cubes quelques minutes dans la casserole chaude avant de les mixer.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "purée de céleri",
    "purée de céleri-rave",
    "recette purée de céleri",
    "purée de céleri au lait",
    "purée de céleri au mixeur",
    "purée de céleri pomme de terre",
    "comment éplucher un céleri-rave",
    "accompagnement gibier",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "grand couteau de chef",
    "casserole de 3 l",
    "passoire",
    "blender ou mixeur plongeant",
    "presse-purée, pour la pomme de terre",
  ],
  ingredients: [
    {
      items: [
        { qty: 1, unit: "kg", name: "céleri-rave", note: "une boule ferme et lourde", step: 0.25 },
        {
          qty: 1,
          name: "pomme de terre",
          plural: "pommes de terre",
          note: "farineuse, environ 150 g",
          step: 1,
          optional: true,
        },
        { qty: 40, unit: "cl", name: "lait entier", step: 5 },
        { qty: 40, unit: "cl", name: "eau", step: 5 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 50, unit: "g", name: "beurre", note: "froid, en morceaux", step: 5 },
        { qty: 1, unit: "pincee", name: "noix de muscade", note: "râpée", step: 1 },
        { qty: 2, unit: "tour", name: "poivre blanc", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La purée",
      steps: [
        {
          title: "Peler large",
          text: "Coupez une tranche en haut et en bas du céleri pour le poser à plat. Avec le grand couteau, retirez la peau de haut en bas en suivant la courbe, sur 5 mm d’épaisseur, jusqu’à ne plus voir que de la chair ivoire. Creusez les petites crevasses brunes qui restent à la pointe du couteau.",
          tip: "On perd environ un quart du poids en pelant : c’est normal, la couche retirée est fibreuse et a un goût de terre.",
        },
        {
          title: "Couper en cubes",
          text: "Coupez le céleri en cubes de 2 à 3 cm, aussi réguliers que possible. Pelez la pomme de terre et coupez-la en cubes de 2 cm. Versez le lait et l’eau dans la casserole avec le sel, et mettez-y les cubes au fur et à mesure : à l’air, la chair du céleri brunit vite.",
        },
        {
          title: "Cuire au lait",
          text: "Portez à frémissement à feu moyen, puis laissez cuire 20 à 25 minutes à petits frémissements, à demi couvert, en remuant de temps en temps pour que le lait n’attache pas. C’est cuit quand la pointe d’un couteau entre sans aucune résistance et qu’un cube s’écrase contre la paroi.",
          timer: { minutes: 25, label: "Céleri tendre" },
          tip: "Jamais à gros bouillons : le lait monte, déborde et accroche au fond.",
        },
        {
          title: "Égoutter et sécher",
          text: "Égouttez dans la passoire posée sur un bol pour garder le liquide de cuisson. Mettez de côté les cubes de pomme de terre. Remettez le céleri dans la casserole chaude, à feu doux, et remuez 2 à 3 minutes : la vapeur s’échappe et la surface des cubes devient mate.",
          timer: { minutes: 3, label: "Séchage du céleri" },
          tip: "C’est ce séchage qui décide de la texture : une purée qui se tient ou une soupe épaisse.",
        },
        {
          title: "Mixer avec le beurre",
          text: "Mixez le céleri encore chaud avec le beurre pendant 2 minutes, jusqu’à ce qu’il soit parfaitement lisse et brillant. N’ajoutez du liquide de cuisson qu’à la fin, une cuillerée à soupe à la fois, s’il vous paraît trop ferme.",
          timer: { minutes: 2, label: "Mixage" },
        },
        {
          title: "Ajouter la pomme de terre",
          text: "Écrasez les cubes de pomme de terre au presse-purée, à part, puis incorporez-les à la spatule dans la purée de céleri. Ne les passez surtout pas au mixeur avec le reste.",
        },
        {
          title: "Assaisonner",
          text: "Râpez une pincée de muscade, poivrez, goûtez et salez si besoin. La purée doit tenir sur la cuillère retournée et retomber lentement. Servez aussitôt, ou gardez-la au chaud dans la casserole couverte, sur feu très doux.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Peu d’amidon, donc le mixeur",
      text: "Une purée de pommes de terre colle au mixeur parce que les lames éclatent les grains d’amidon gonflés, qui libèrent une colle élastique. Le céleri-rave n’en contient presque pas : on peut le mixer longtemps, il devient lisse et ne colle jamais.",
    },
    {
      title: "Un légume gorgé d’eau",
      text: "Le céleri-rave est fait à près de 90 % d’eau, et ses cubes en reprennent encore à la cuisson. Quelques minutes dans la casserole chaude suffisent à évaporer l’eau de surface, et c’est elle qui rendrait la purée liquide.",
    },
    {
      title: "La chair qui brunit",
      text: "Coupée, la chair du céleri brunit à l’air, comme une pomme : une enzyme oxyde certains de ses composés au contact de l’oxygène. Plongés tout de suite dans le liquide, les cubes restent ivoire, et la purée aussi.",
    },
  ],
  tips: [
    "Choisissez un céleri lourd pour sa taille et bien ferme. Un céleri léger est souvent creux ou spongieux au centre.",
    "Mixez tant que le céleri est chaud : le beurre fond et s’y lie mieux, la purée est plus brillante.",
    "Gardez le liquide de cuisson : allongé d’un peu de bouillon, il fait la base d’un velouté pour le lendemain. Il se garde 2 jours au réfrigérateur.",
    "Pour des Saint-Jacques, faites d’abord colorer le beurre en beurre noisette : son goût grillé va très bien avec le céleri.",
  ],
  mistakes: [
    "Peler trop finement : il reste des fibres et des points bruns, et la purée a un goût de terre. Repassez le couteau tant que la chair n’est pas uniformément claire.",
    "Mixer sans égoutter soigneusement : la purée est liquide. Remettez-la à feu doux et remuez à la spatule 3 à 5 minutes, jusqu’à ce qu’elle épaississe.",
    "Ajouter tout le liquide de cuisson d’un coup : on ne peut plus revenir en arrière. Une cuillerée à la fois, et seulement si besoin.",
    "Mixer la pomme de terre avec le céleri : son amidon rend la purée collante et élastique. Elle s’écrase à part.",
  ],
  variations: [
    {
      title: "À la vapeur",
      text: "Faites cuire les cubes 20 à 25 minutes au cuit-vapeur, sans lait. Le goût du céleri est plus franc ; ajoutez 5 cl de crème liquide au mixage pour compenser le lait.",
    },
    {
      title: "Au beurre noisette",
      text: "Faites cuire les 50 g de beurre dans une petite casserole 3 à 4 minutes, jusqu’à ce qu’il mousse, brunisse légèrement et sente la noisette. Versez-le dans le blender à la place du beurre froid.",
    },
    {
      title: "Moitié céleri, moitié pomme de terre",
      text: "Prenez 600 g de céleri-rave et 400 g de pommes de terre farineuses, cuits ensemble. Mixez le céleri, écrasez les pommes de terre au presse-purée et mélangez. La purée est plus dense, au goût de céleri plus discret.",
    },
    {
      title: "Avec une pomme",
      text: "Ajoutez une pomme acidulée pelée en cubes pour les 10 dernières minutes de cuisson, et mixez-la avec le céleri. La purée devient légèrement fruitée, pour un rôti de porc ou un boudin.",
    },
  ],
  storage:
    "La purée se garde 2 jours au réfrigérateur dans une boîte fermée et 2 mois au congélateur. Réchauffez-la à feu doux en remuant, avec une cuillerée de lait : décongelée, elle rend un peu d’eau, que l’on fait évaporer en remuant. Ne la recongelez pas.",
  pairing:
    "Un gibier ou une volaille rôtie, un magret, un gigot, des Saint-Jacques poêlées au beurre. Le matin d’un week-end, elle accompagne aussi très bien des œufs cocotte.",
  faq: [
    {
      q: "Faut-il éplucher le céleri-rave épais ?",
      a: "Oui, sur 5 mm environ, au couteau plutôt qu’à l’économe. La peau et la couche juste en dessous sont fibreuses et gardent de la terre dans leurs replis. On perd à peu près un quart du poids, ce qui est normal.",
    },
    {
      q: "Peut-on mixer une purée de céleri au blender ?",
      a: "Oui, c’est même la meilleure façon de la rendre lisse. Le céleri-rave contient très peu d’amidon et ne devient pas collant au mixeur, contrairement à la pomme de terre. Si vous en ajoutez une, écrasez-la à part.",
    },
    {
      q: "Combien de temps faut-il pour cuire le céleri-rave ?",
      a: "20 à 25 minutes à petits frémissements pour des cubes de 2 à 3 cm, dans le lait et l’eau comme à la vapeur. Le céleri est cuit quand la pointe d’un couteau y entre sans résistance.",
    },
    {
      q: "Pourquoi ma purée de céleri est-elle liquide ?",
      a: "Le céleri a été mal égoutté ou pas séché. Remettez la purée dans une casserole à feu doux et remuez à la spatule 3 à 5 minutes : l’eau s’évapore et elle épaissit. La prochaine fois, séchez les cubes avant de mixer.",
    },
    {
      q: "Quelle quantité de céleri-rave par personne ?",
      a: "250 g de céleri-rave entier par personne en accompagnement, soit environ 180 g une fois pelé. Une boule de 1 kg suffit pour 4.",
    },
    {
      q: "Peut-on congeler la purée de céleri ?",
      a: "Oui, 2 mois au congélateur, dans une boîte bien fermée. Décongelez-la une nuit au réfrigérateur et réchauffez-la à feu doux en remuant : elle rend un peu d’eau, qui s’évapore. Ne la recongelez pas.",
    },
  ],
  nutrition: {
    calories: 145,
    protein: 3,
    fat: 12,
    saturatedFat: 7,
    carbs: 6,
    sugar: 5,
    fiber: 6,
    sodium: 380,
  },
  annotations: { hero: "muscade et poivre, rien de plus", detail: "lourd pour sa taille, bien ferme" },
  images: {
    heroAlt:
      "Deux dômes de purée de céleri poivrés sur une assiette bleue, à côté de ramequins d’œufs cocotte aux herbes",
    detailAlt: "Céleris-raves entiers avec leurs tiges et leurs feuilles vertes, empilés dans un panier en osier",
    credits: {
      hero: {
        photographer: "Isabelle Hurbain-Palatin",
        url: "https://www.flickr.com/photos/22722986@N08/4253343205",
        source: "Flickr",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Engin Akyurt",
        url: "https://www.pexels.com/photo/pile-of-celery-in-the-basket-18121556/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C9A75A",
    onAccent: "#1B1712",
    ink: "#735619",
    tint: "#F8F3E6",
    deep: "#16120A",
    focus: "22% 55%",
  },
});
