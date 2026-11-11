import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "salade-de-pommes-de-terre",
  title: "Salade de pommes de terre",
  seoTitle: "Salade de pommes de terre vinaigrette, assaisonnée tiède",
  tagline: "On l’assaisonne avant qu’elle refroidisse.",
  description:
    "Salade de pommes de terre à la française : 1,2 kg de pommes de terre fermes cuites dans leur peau, assaisonnées tièdes à l’échalote, persil et ciboulette.",
  summary:
    "Pour 6 personnes, faites cuire 1,2 kg de pommes de terre à chair ferme dans leur peau, 20 à 25 minutes à frémissement. Épluchez-les tièdes, coupez-les en rondelles de 1 cm et faites-les tomber aussitôt dans une vinaigrette à l’échalote : 2 cas de vinaigre, 1 cas de moutarde, 6 cas d’huile. Laissez-les boire 15 minutes, puis ajoutez persil et ciboulette. Comptez 1 h 10 en tout ; elle se garde 2 jours au frais.",
  intro: [
    "La salade de pommes de terre à la française, c’est une vinaigrette, une échalote et des herbes, sans mayonnaise. Elle se sert tiède à côté d’une saucisse grillée, ou froide, sortie d’une boîte au fond du panier de pique-nique.",
    "Tout se joue dans les minutes qui suivent la cuisson. Tièdes, les rondelles boivent la vinaigrette jusqu’au cœur. Froides, elles la laissent glisser, et l’assaisonnement finit en flaque au fond du saladier.",
    "On prend aussi des pommes de terre à chair ferme, charlotte ou roseval, qui se tranchent net et ne s’écrasent pas quand on mélange. Les variétés farineuses, parfaites pour une purée, finissent ici en miettes.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "salade de pommes de terre",
    "recette salade de pommes de terre",
    "salade de pommes de terre vinaigrette",
    "salade de pommes de terre à la française",
    "salade de pommes de terre échalote",
    "salade de pommes de terre mayonnaise",
    "salade de pommes de terre pique-nique",
    "quelle pomme de terre pour salade",
  ],
  diet: ["vegetarian", "vegan", "glutenFree"],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 30, rest: 20 },
  difficulty: "Facile",
  cost: "€",
  season: ["Printemps", "Été"],
  tags: ["barbecue", "pique-nique"],
  equipment: ["grande casserole", "grand saladier", "petit fouet", "couteau d’office"],
  ingredients: [
    {
      title: "Les pommes de terre",
      items: [
        {
          qty: 1200,
          unit: "g",
          name: "pommes de terre",
          note: "à chair ferme (charlotte, roseval, amandine), de taille égale",
          step: 50,
        },
        { qty: 1, unit: "cas", name: "gros sel", note: "pour l’eau de cuisson", step: 0.5 },
      ],
    },
    {
      title: "La vinaigrette",
      items: [
        { qty: 2, name: "échalote", plural: "échalotes", step: 1 },
        { qty: 2, unit: "cas", name: "vinaigre de vin blanc", step: 0.5 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { qty: 1, unit: "cas", name: "moutarde de Dijon", step: 0.5 },
        { name: "poivre du moulin" },
        { qty: 6, unit: "cas", name: "huile de colza", note: "ou de tournesol", step: 1 },
      ],
    },
    {
      title: "Pour finir",
      items: [
        { qty: 15, unit: "g", name: "persil plat", step: 5 },
        { qty: 15, unit: "g", name: "ciboulette", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "La salade",
      steps: [
        {
          title: "Cuire dans la peau",
          text: "Mettez les pommes de terre entières, non épluchées, dans la casserole. Couvrez d’eau froide et ajoutez le gros sel. Portez à ébullition, puis laissez frémir 20 à 25 minutes. Elles sont cuites quand la pointe d’un couteau entre jusqu’au centre sans forcer, alors que la peau reste entière.",
          timer: { minutes: 20, label: "Cuisson des pommes de terre" },
          tip: "Arrêtez dès que le couteau passe. Trop cuites, elles se fendent et s’effritent au tranchage.",
        },
        {
          title: "Préparer la vinaigrette",
          text: "Pendant la cuisson, ciselez finement les échalotes. Mettez-les au fond du saladier avec le vinaigre et le sel fin, et laissez-les attendre là. Juste avant d’égoutter les pommes de terre, ajoutez la moutarde et le poivre, puis versez l’huile en filet en fouettant, jusqu’à ce que la vinaigrette épaississe légèrement.",
        },
        {
          title: "Éplucher encore tièdes",
          text: "Égouttez les pommes de terre et laissez-les 5 minutes dans la passoire, le temps de pouvoir les tenir. Retirez la peau avec le couteau d’office, elle part toute seule, puis coupez-les en rondelles de 1 cm.",
          timer: { minutes: 5, label: "Tiédir avant d’éplucher" },
        },
        {
          title: "Assaisonner à chaud",
          text: "Faites tomber les rondelles dans la vinaigrette au fur et à mesure que vous les coupez. Retournez-les délicatement avec deux cuillères, pour que chacune soit enrobée. Laissez reposer 15 minutes en les retournant une fois : la vinaigrette disparaît presque et les rondelles deviennent brillantes.",
          timer: { minutes: 15, label: "Les rondelles boivent" },
          tip: "Si vous coupez tout avant d’assaisonner, les premières rondelles ont déjà refroidi. Une pomme de terre, puis dans le saladier, puis la suivante.",
        },
        {
          title: "Ajouter les herbes",
          text: "Hachez le persil et ciselez la ciboulette. Ajoutez-les quand la salade est tiède, pas avant : sur des pommes de terre brûlantes, elles noircissent et perdent leur parfum. Mélangez, goûtez une rondelle et rectifiez. Il manque souvent une pincée de sel ou quelques gouttes de vinaigre.",
          tip: "Goûtez toujours une rondelle entière, pas la sauce : c’est le cœur de la pomme de terre qui dit s’il manque du sel.",
        },
        {
          title: "Servir ou mettre au frais",
          text: "Servez-la tiède ou à température ambiante. Pour un pique-nique ou un barbecue, laissez-la refroidir, couvrez-la, mettez-la au réfrigérateur, puis transportez-la dans une glacière avec des pains de glace.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi tièdes",
      text: "Juste après la cuisson, la pomme de terre continue de perdre sa vapeur. En refroidissant, elle aspire le liquide qui l’entoure, et la vinaigrette entre dans la chair. Une fois froide, l’amidon en surface s’est raffermi (on parle de rétrogradation) : la vinaigrette reste à l’extérieur.",
    },
    {
      title: "Chair ferme contre chair farineuse",
      text: "Les variétés à chair ferme contiennent moins d’amidon et leurs cellules restent soudées après cuisson. Elles se tranchent net et supportent d’être mélangées. Les variétés farineuses, plus riches en amidon, se défont dès qu’on les remue.",
    },
    {
      title: "La moutarde tient la vinaigrette",
      text: "L’huile et le vinaigre ne se mélangent pas. Les fines particules de la moutarde et les mucilages de ses graines se placent entre les gouttelettes d’huile et les empêchent de se regrouper : la vinaigrette reste liée et nappe les rondelles au lieu de se séparer.",
    },
  ],
  tips: [
    "Laisser l’échalote dans le vinaigre salé pendant la cuisson l’attendrit et calme son piquant.",
    "Prenez une huile de colza ou de tournesol si la salade passe par le réfrigérateur. L’huile d’olive y fige et donne une pellicule terne aux rondelles.",
    "Pour un pique-nique, gardez les herbes à part dans une petite boîte et ajoutez-les sur place : elles restent vertes.",
    "Elle est meilleure une heure après qu’à la sortie du saladier. Si elle a passé la nuit au frais, sortez-la 20 minutes avant de servir.",
  ],
  mistakes: [
    "Assaisonner des pommes de terre froides : la vinaigrette glisse et la salade a le goût de pomme de terre à l’eau. Si c’est déjà fait, réchauffez les rondelles 1 minute au micro-ondes avant d’assaisonner.",
    "Prendre des pommes de terre farineuses comme la bintje : elles se défont en mélangeant. La salade reste bonne, mais tirée vers l’écrasé ; mélangez le moins possible.",
    "Cuire à gros bouillons : la peau éclate, l’eau entre et les rondelles s’effritent.",
    "Laisser la salade au soleil tout l’après-midi : hors du frais, pas plus de 2 heures, 1 heure s’il fait très chaud. Au-delà, jetez les restes.",
  ],
  variations: [
    {
      title: "À la mayonnaise",
      text: "Divisez la vinaigrette par deux et laissez la salade refroidir complètement après les 15 minutes de repos. Ajoutez alors 150 g de mayonnaise et la ciboulette, et mélangez délicatement. Avec une mayonnaise maison, à l’œuf cru, la salade se garde 24 h maximum et reste toujours au frais.",
    },
    {
      title: "Arrosée de vin blanc",
      text: "Versez 5 cl de vin blanc sec sur les rondelles tièdes, laissez-les l’absorber 5 minutes, puis ajoutez la vinaigrette. Le goût est plus vif. Le vin n’est pas cuit : cette version contient de l’alcool.",
    },
    {
      title: "Aux olives et aux câpres",
      text: "Ajoutez 80 g d’olives vertes dénoyautées coupées en rondelles et 1 cas de câpres égouttées avec les herbes. Salez un peu moins la vinaigrette, olives et câpres le sont déjà.",
    },
  ],
  storage:
    "Mettez-la au réfrigérateur au plus tard 2 heures après la préparation, dans une boîte fermée : elle se garde 2 jours. La version à la mayonnaise maison se garde 24 h maximum. Elle ne se congèle pas.",
  pairing:
    "Avec des saucisses ou des merguez grillées, du hareng fumé, un poulet froid ou des œufs durs.",
  faq: [
    {
      q: "Quelle pomme de terre pour une salade de pommes de terre ?",
      a: "Une variété à chair ferme : charlotte, roseval, amandine ou ratte. Elles se tranchent net et gardent leur forme quand on les mélange. Évitez les variétés farineuses comme la bintje, qui s’effritent.",
    },
    {
      q: "Faut-il mettre la vinaigrette sur les pommes de terre chaudes ?",
      a: "Oui, sur les pommes de terre encore tièdes. En refroidissant, elles absorbent la vinaigrette jusqu’au cœur. Froides, elles la laissent glisser et la salade reste fade.",
    },
    {
      q: "Combien de temps se garde une salade de pommes de terre ?",
      a: "2 jours au réfrigérateur pour la version à la vinaigrette, dans une boîte fermée. Avec une mayonnaise maison, 24 heures maximum. Dans les deux cas, mettez-la au frais au plus tard 2 heures après l’avoir préparée.",
    },
    {
      q: "Peut-on préparer une salade de pommes de terre la veille ?",
      a: "Oui. Faites-la jusqu’à l’assaisonnement, laissez-la refroidir et gardez-la au réfrigérateur. Ajoutez les herbes le jour même et sortez-la 20 minutes avant de servir.",
    },
    {
      q: "Comment emporter une salade de pommes de terre en pique-nique ?",
      a: "Bien froide, dans une boîte fermée, au fond d’une glacière avec des pains de glace. Une fois sortie, elle ne doit pas rester plus de 2 heures hors du frais, 1 heure s’il fait très chaud. La version à la vinaigrette voyage mieux que celle à la mayonnaise.",
    },
    {
      q: "Une salade de pommes de terre à la mayonnaise maison convient-elle aux femmes enceintes ?",
      a: "Non. La mayonnaise maison est faite avec un jaune d’œuf cru : elle est déconseillée aux femmes enceintes, aux jeunes enfants, aux personnes âgées et aux personnes immunodéprimées. Pour eux, prenez une mayonnaise du commerce, faite avec des œufs pasteurisés, ou restez à la vinaigrette.",
    },
    {
      q: "Combien de pommes de terre par personne pour une salade ?",
      a: "200 g de pommes de terre crues par personne en accompagnement, soit 1,2 kg pour 6. Pour un plat unique, avec des œufs ou du poisson, comptez 250 g.",
    },
  ],
  nutrition: {
    calories: 280,
    protein: 4,
    fat: 14,
    saturatedFat: 1,
    carbs: 34,
    sugar: 2,
    fiber: 3,
    sodium: 450,
  },
  annotations: {
    hero: "chair ferme, coupée encore tiède",
    detail: "les rondelles ont bu la vinaigrette",
  },
  images: {
    heroAlt: "Salade de pommes de terre en morceaux à la vinaigrette, ciboulette et olive noire, à côté d’un verre de vin blanc",
    detailAlt: "Salade de pommes de terre en rondelles brillantes de vinaigrette, persil haché et olives vertes, dans un bol blanc",
    credits: {
      hero: {
        photographer: "Eli Velikova Maytham",
        url: "https://www.pexels.com/photo/glass-of-wine-near-steamed-sliced-potato-dish-2349277/",
        source: "Pexels",
      },
      detail: {
        photographer: "fewmiracles",
        url: "https://www.pexels.com/photo/golden-potato-slices-with-olives-and-herbs-36673635/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#7FA34A",
    onAccent: "#1B1712",
    ink: "#4A6420",
    tint: "#F1F5E6",
    deep: "#121A0A",
    focus: "28% 62%",
  },
});
