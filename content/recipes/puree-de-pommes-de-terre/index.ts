import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "puree-de-pommes-de-terre",
  title: "Purée de pommes de terre",
  seoTitle: "Purée de pommes de terre maison, souple et jamais collante",
  tagline: "On range le mixeur pour celle-ci.",
  description:
    "La purée de pommes de terre maison : 1 kg de pommes de terre farineuses cuites dans leur peau, le presse-purée, 100 g de beurre puis du lait chaud. En 55 min.",
  summary:
    "Pour 4 personnes, faites cuire 1 kg de pommes de terre farineuses entières, dans leur peau, en partant d’eau froide salée : 25 à 35 minutes à petit frémissement. Épluchez-les chaudes, passez-les au presse-purée, puis incorporez d’abord 100 g de beurre froid, ensuite 25 cl de lait chaud, petit à petit. Pas de mixeur, qui rend la purée collante. Comptez 55 minutes en tout, dont 20 de travail.",
  intro: [
    "Une purée maison demande des pommes de terre, du beurre, du lait et un ustensile qui n’a l’air de rien : le presse-purée. Elle n’a pas grand-chose à voir avec celle en flocons. Elle est souple, elle a le goût de la pomme de terre, et elle tient sur la fourchette sans faire bloc.",
    "Elle rate de deux façons. Elle est gorgée d’eau quand les pommes de terre ont été coupées en morceaux et ont bouilli trop fort. Elle colle comme de la pâte à papier peint quand on l’a passée au mixeur : les lames déchirent l’amidon, et aucun ajout de beurre ne la rattrape.",
    "On cuit donc les pommes de terre entières, avec leur peau, en partant d’eau froide. Et on met le beurre avant le lait. Ça ressemble à un détail de grand-mère, mais la texture n’est pas la même.",
  ],
  category: "Accompagnement",
  cuisine: "Française",
  keywords: [
    "purée de pommes de terre",
    "recette purée de pommes de terre",
    "purée maison",
    "purée de pommes de terre maison",
    "purée au beurre",
    "quelle pomme de terre pour purée",
    "purée sans grumeaux",
    "purée collante",
    "purée au presse-purée",
  ],
  diet: ["vegetarian", "glutenFree"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 35 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "grande casserole",
    "presse-purée ou moulin à légumes à grille fine",
    "petite casserole pour le lait",
    "spatule en bois",
  ],
  ingredients: [
    {
      items: [
        {
          qty: 1000,
          unit: "g",
          name: "pommes de terre",
          note: "à chair farineuse (bintje, agria), de taille égale, non épluchées",
          step: 50,
        },
        { qty: 1, unit: "cas", name: "gros sel", note: "pour l’eau de cuisson", step: 0.5 },
        { qty: 100, unit: "g", name: "beurre doux", note: "froid, en dés", step: 10 },
        { qty: 25, unit: "cl", name: "lait entier", step: 5 },
        { name: "sel fin" },
        { name: "poivre blanc du moulin" },
        { qty: 1, unit: "pincee", name: "noix de muscade râpée", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "La cuisson",
      steps: [
        {
          title: "Démarrer à l’eau froide",
          text: "Lavez les pommes de terre sans les éplucher et mettez-les entières dans la grande casserole. Couvrez-les d’eau froide, avec 3 cm de marge au-dessus, et ajoutez le gros sel. Si certaines sont deux fois plus grosses que les autres, coupez-les en deux, pas plus.",
          tip: "Des pommes de terre de même taille cuisent ensemble. Avec des tailles mélangées, les petites éclatent pendant que les grosses restent crues au centre.",
        },
        {
          title: "Cuire à petit frémissement",
          text: "Portez à ébullition sur feu vif, puis baissez pour garder un frémissement léger et laissez cuire 25 à 35 minutes selon la taille. Elles sont prêtes quand la lame d’un couteau entre jusqu’au cœur et ressort sans les soulever, et que la peau commence à se fendre.",
          timer: { minutes: 30, label: "Cuisson des pommes de terre" },
          tip: "À gros bouillons, la peau éclate trop tôt et l’eau entre dans la chair. Quelques bulles qui montent doucement suffisent.",
        },
        {
          title: "Préparer beurre et lait",
          text: "Pendant la cuisson, coupez le beurre en dés et laissez-le au réfrigérateur. Versez le lait dans la petite casserole et chauffez-le juste avant d’égoutter les pommes de terre, jusqu’à ce qu’il fume et que de petites bulles apparaissent sur le bord.",
        },
      ],
    },
    {
      title: "La purée",
      steps: [
        {
          title: "Éplucher à chaud",
          text: "Égouttez les pommes de terre. Piquez-en une sur une fourchette, ou tenez-la dans un torchon, et retirez la peau avec un petit couteau : elle part toute seule. Faites-le tant qu’elles sont brûlantes, une à une, en laissant les autres dans la casserole couverte.",
        },
        {
          title: "Passer au presse-purée",
          text: "Passez les pommes de terre au presse-purée ou au moulin à légumes, directement dans la grande casserole vidée et encore chaude. Ne touchez ni au mixeur ni au robot. Remettez sur feu doux et remuez à la spatule, juste le temps que la vapeur cesse de monter.",
          tip: "Enchaînez sans attendre avec le beurre. Une purée qui a tiédi l’absorbe mal et devient lourde.",
        },
        {
          title: "Ajouter le beurre",
          text: "Toujours sur feu doux, ajoutez le beurre froid en trois fois, en remuant vivement à la spatule entre chaque ajout. Attendez que chaque portion ait disparu avant la suivante. La purée devient brillante et un peu plus lourde.",
        },
        {
          title: "Détendre au lait",
          text: "Versez le lait chaud en quatre ou cinq fois, en remuant entre chaque ajout. Arrêtez quand la purée tombe de la spatule en gros rubans souples : elle doit se tenir, pas couler. Salez au sel fin, poivrez, ajoutez la muscade, goûtez et servez tout de suite.",
          tip: "Gardez un fond de lait de côté. La purée se raffermit en quelques minutes à table, et un dernier trait juste avant de servir la remet d’aplomb.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi des pommes de terre farineuses",
      text: "Les variétés farineuses comme la bintje contiennent plus d’amidon et moins d’eau que les variétés fermes. À la cuisson, leurs cellules gonflent et se séparent facilement les unes des autres : écrasées, elles donnent une purée légère qui boit le beurre. Les variétés fermes se tiennent, il faut les travailler davantage, et elles deviennent plus vite pâteuses.",
    },
    {
      title: "Le mixeur fait de la colle",
      text: "Chaque cellule de pomme de terre cuite est remplie d’amidon gélifié. Le presse-purée pousse les cellules à travers une grille sans en déchirer beaucoup. Les lames d’un mixeur les éclatent par milliers : l’amidon libéré forme une pâte élastique et collante. Plus on mixe, pire c’est, et on ne revient pas en arrière.",
    },
    {
      title: "Le beurre avant le lait",
      text: "Le beurre ajouté en premier enrobe les fragments de pomme de terre et l’amidon déjà libéré. Le lait, versé ensuite, détend la purée sans la rendre gluante. Si l’on commence par le lait, l’amidon se mélange directement à l’eau et la purée devient plus pâteuse.",
    },
    {
      title: "Entières et à l’eau froide",
      text: "En partant d’eau froide, l’eau et les pommes de terre chauffent ensemble, et le cœur a le temps de cuire pendant que l’extérieur reste entier. Dans l’eau bouillante, l’extérieur se défait avant que le cœur soit cuit. La peau, elle, limite l’eau qui entre dans la chair : la purée reste dense et prend mieux le beurre.",
    },
  ],
  tips: [
    "Cherchez la mention « pour purée » ou « chair farineuse » sur le filet. La bintje et l’agria sont les plus faciles à trouver.",
    "Le lait doit être chaud. Froid, il refroidit la purée d’un coup et elle devient compacte.",
    "Pour la garder au chaud jusqu’à 30 minutes, lissez le dessus, versez-y une fine couche de lait sans mélanger, couvrez et posez la casserole sur une autre d’eau frémissante. Mélangez au moment de servir.",
    "Un moulin à légumes à grille fine donne une purée plus lisse qu’un presse-purée à piston, et fatigue moins le poignet pour 1 kg.",
  ],
  mistakes: [
    "Passer la purée au mixeur plongeant : elle devient élastique et collante. On ne la rattrape pas, mais étalée dans un plat avec du fromage râpé et gratinée 15 minutes à 200 °C, elle se mange très bien.",
    "Couper les pommes de terre épluchées en petits cubes et les faire bouillir fort : elles se gorgent d’eau et la purée est fade et liquide. Desséchez-la plus longtemps sur feu doux, en remuant, avant d’ajouter le beurre.",
    "Écraser des pommes de terre pas tout à fait cuites : les morceaux fermes ne passent pas la grille et laissent des grumeaux. Le couteau doit entrer sans aucune résistance.",
    "Verser tout le lait d’un coup : la purée devient soupe avant qu’on ait pu juger de sa texture. Petit à petit, on s’arrête au bon moment.",
  ],
  variations: [
    {
      title: "Plus riche, façon bistrot",
      text: "Montez à 200 g de beurre et descendez à 15 cl de lait. Après le presse-purée, passez la purée au tamis fin en l’écrasant avec une corne : elle devient lisse comme une crème. Comptez 10 minutes de plus.",
    },
    {
      title: "À l’ail doux",
      text: "Faites frémir 4 gousses d’ail épluchées dans le lait pendant 15 minutes, à couvert. Écrasez-les et ajoutez-les à la purée avec le lait. Le goût d’ail reste rond, sans piquant.",
    },
    {
      title: "À l’huile d’olive",
      text: "Remplacez le beurre par 8 cl d’huile d’olive fruitée, ajoutée en filet, et une partie du lait par 10 cl d’eau de cuisson. La purée est plus légère, avec un goût plus vert. Elle va très bien avec un poisson.",
    },
  ],
  storage:
    "Laissez-la refroidir à couvert, puis mettez-la au réfrigérateur dans les 2 heures, dans une boîte fermée : elle se garde 3 jours. Réchauffez-la à feu doux avec un peu de lait en remuant, ou au micro-ondes en mélangeant à mi-parcours. Elle se congèle 3 mois ; décongelez-la au réfrigérateur et ne la recongelez pas.",
  pairing:
    "Avec un poulet rôti, des saucisses grillées, un bœuf bourguignon ou un poisson poêlé au beurre.",
  faq: [
    {
      q: "Quelle pomme de terre pour une purée ?",
      a: "Une variété à chair farineuse, comme la bintje ou l’agria. Riche en amidon, elle se défait facilement et absorbe bien le beurre. Les variétés fermes comme la charlotte donnent une purée plus dense, qui devient vite collante si on la travaille trop.",
    },
    {
      q: "Pourquoi ma purée est collante ?",
      a: "Parce qu’elle a été mixée ou trop travaillée. Les lames du mixeur déchirent les cellules de la pomme de terre et libèrent leur amidon, qui forme une pâte élastique. Utilisez un presse-purée ou un moulin à légumes, et remuez juste ce qu’il faut pour incorporer le beurre et le lait.",
    },
    {
      q: "Faut-il éplucher les pommes de terre avant de les cuire pour une purée ?",
      a: "Non. Cuites dans leur peau, elles prennent moins d’eau, et la purée a plus de goût et de tenue. La peau s’enlève très facilement tant qu’elles sont chaudes. Si vous êtes pressé, épluchées et coupées en gros morceaux, elles cuisent en 20 minutes, mais desséchez bien la purée ensuite.",
    },
    {
      q: "Combien de pommes de terre par personne pour une purée ?",
      a: "250 g de pommes de terre crues par personne en accompagnement, soit 1 kg pour 4. Pour de gros appétits ou si la purée est le plat principal, comptez 300 g.",
    },
    {
      q: "Peut-on préparer une purée à l’avance ?",
      a: "Oui, jusqu’à 30 minutes au chaud, couverte d’une fine couche de lait, au bain-marie. Au-delà, gardez-la au réfrigérateur et réchauffez-la à feu doux en ajoutant un peu de lait chaud et une noix de beurre, en remuant.",
    },
    {
      q: "Peut-on congeler une purée de pommes de terre maison ?",
      a: "Oui, 3 mois, en portions bien fermées. Sa texture devient un peu plus granuleuse. Décongelez-la au réfrigérateur, puis réchauffez-la doucement avec un peu de lait et de beurre en fouettant. Ne la recongelez pas.",
    },
  ],
  nutrition: {
    calories: 415,
    protein: 7,
    fat: 23,
    saturatedFat: 15,
    carbs: 45,
    sugar: 4,
    fiber: 4,
    sodium: 500,
  },
  annotations: {
    hero: "le beurre d’abord, le lait ensuite",
    detail: "elle tombe en rubans souples",
  },
  images: {
    heroAlt: "Purée de pommes de terre maison montée en dôme dans une assiette creuse orangée, avec des sillons de cuillère",
    detailAlt: "Purée de pommes de terre au beurre étalée à la cuillère sur une assiette blanche, jaune pâle et souple",
    credits: {
      hero: {
        photographer: "Renee Comet (photographer)",
        url: "https://commons.wikimedia.org/wiki/File:MashedPotatoes.jpg",
        source: "Wikimedia Commons",
        license: "Public domain",
      },
      detail: {
        photographer: "Pastorius",
        url: "https://commons.wikimedia.org/wiki/File:Mashed_potatoes.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9A93B",
    onAccent: "#1B1712",
    ink: "#76560F",
    tint: "#FAF3DF",
    deep: "#1A140A",
    focus: "50% 50%",
  },
});
