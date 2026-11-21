import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "parmentier-de-canard",
  title: "Parmentier de canard",
  seoTitle: "Parmentier de canard confit, avec une purée maison",
  tagline: "Une boîte de confit, et c’est dimanche.",
  description:
    "Le parmentier de canard pour 6 : 4 cuisses confites effilochées avec des échalotes, une purée à la graisse de canard, 20 minutes au four à 200 °C.",
  summary:
    "Pour 6 personnes, réchauffez doucement une boîte de 4 cuisses de canard confites pour faire fondre la graisse, effilochez la viande et liez-la avec 120 g d’échalotes fondues et 10 cl de bouillon. Couvrez d’une purée de 1,2 kg de pommes de terre farineuses écrasées avec du beurre, du lait et une cuillère de graisse de canard, parsemez de comté et gratinez 20 minutes à 200 °C. Comptez 1 h 25, dont 35 minutes de travail.",
  intro: [
    "C’est un hachis parmentier où le bœuf haché laisse la place à des cuisses de canard confites, effilochées à la main. La conserve fait le plus long : la viande est déjà cuite et fondante, il suffit de la réchauffer, de la défaire en filaments et de la lier avec des échalotes.",
    "Le piège, c’est le sel. Le confit en contient déjà beaucoup, et une main trop généreuse sur la viande ou dans la purée rend le plat difficile à finir.",
    "Gardez la graisse de la boîte. Une cuillère dans la purée suffit à faire le lien entre les deux couches, et le reste servira pour des pommes de terre sautées.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "parmentier de canard",
    "parmentier de canard confit",
    "recette parmentier de canard",
    "hachis parmentier de canard",
    "parmentier cuisses de canard confites",
    "parmentier de canard à l’avance",
    "que faire avec du confit de canard",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 35, cook: 45, rest: 5 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "plat à gratin de 20 × 30 cm (ou rond de 28 cm)",
    "presse-purée ou moulin à légumes",
    "faitout et sauteuse",
    "thermomètre à sonde, pour réchauffer",
  ],
  ingredients: [
    {
      title: "Le canard",
      items: [
        {
          qty: 4,
          name: "cuisse de canard confite",
          plural: "cuisses de canard confites",
          note: "1 boîte d’environ 1,3 kg, avec sa graisse",
          step: 1,
        },
        { qty: 120, unit: "g", name: "échalote", plural: "échalotes", note: "3 ou 4, ciselées", step: 10 },
        { qty: 10, unit: "cl", name: "bouillon de volaille", note: "ou d’eau", step: 5 },
        { qty: 10, unit: "g", name: "persil plat", note: "haché", step: 5 },
        { name: "poivre noir", note: "du moulin" },
      ],
    },
    {
      title: "La purée",
      items: [
        {
          qty: 1.2,
          unit: "kg",
          name: "pomme de terre farineuse",
          plural: "pommes de terre farineuses",
          note: "bintje ou agria",
          step: 0.1,
        },
        { qty: 1, unit: "cas", name: "gros sel", note: "pour l’eau de cuisson" },
        { qty: 40, unit: "g", name: "beurre", note: "en morceaux", step: 5 },
        { qty: 20, unit: "cl", name: "lait entier", note: "chaud", step: 5 },
        { name: "sel fin", note: "avec prudence" },
      ],
    },
    {
      title: "Pour gratiner",
      items: [{ qty: 50, unit: "g", name: "comté râpé", step: 10 }],
    },
  ],
  method: [
    {
      title: "Le canard et la purée",
      steps: [
        {
          title: "Cuire les pommes de terre",
          text: "Épluchez les pommes de terre, coupez-les en morceaux de taille égale, d’environ 5 cm, et mettez-les dans un faitout d’eau froide avec le gros sel. Portez à ébullition puis laissez frémir 20 à 25 minutes, jusqu’à ce que la pointe d’un couteau entre sans aucune résistance.",
          timer: { minutes: 25, label: "Pommes de terre" },
        },
        {
          title: "Faire fondre la graisse",
          text: "Pendant ce temps, ouvrez la boîte et déposez les cuisses avec toute leur graisse dans une sauteuse, à feu doux, pendant 10 minutes. La graisse doit devenir entièrement liquide et les cuisses tièdes à cœur. Sortez-les sur une planche et versez la graisse dans un bol à travers une passoire fine.",
          timer: { minutes: 10, label: "Graisse fondue" },
          tip: "Ne cherchez pas à faire dorer : la viande est déjà cuite, il s’agit seulement de la libérer de sa graisse figée.",
        },
        {
          title: "Effilocher le canard",
          text: "Retirez la peau, puis défaites la viande avec deux fourchettes ou du bout des doigts, en filaments. Passez chaque poignée entre vos doigts pour retrouver les petits os, les cartilages et les nerfs. Vous devez obtenir environ 600 g de viande.",
          tip: "Les cuisses de canard cachent de fins os de la taille d’une aiguille près de l’articulation. Le contrôle à la main est le seul fiable.",
        },
        {
          title: "Lier avec les échalotes",
          text: "Remettez 1 cuillère à soupe de graisse de canard dans la sauteuse, à feu moyen-doux. Faites fondre les échalotes 5 minutes, jusqu’à ce qu’elles soient translucides et souples. Ajoutez la viande, le bouillon et le poivre, et remuez 3 minutes, le temps que le liquide soit presque absorbé. Hors du feu, ajoutez le persil. Goûtez avant de penser au sel : en général, il n’en faut pas.",
          timer: { minutes: 8, label: "Échalotes et canard" },
        },
        {
          title: "Préchauffer le four",
          text: "Préchauffez le four à 200 °C, chaleur tournante ou statique. Étalez la viande dans le plat à gratin en une couche régulière, sans la tasser : la purée doit pouvoir s’accrocher un peu à ses reliefs.",
        },
        {
          title: "Écraser la purée",
          text: "Égouttez les pommes de terre et remettez-les dans le faitout chaud, feu éteint, le temps que la vapeur s’échappe. Passez-les au presse-purée, ajoutez le beurre et 1 cuillère à soupe de graisse de canard, puis le lait chaud en trois fois, en mélangeant à la spatule. La purée doit être souple mais tenir en pic. Salez légèrement, poivrez.",
          tip: "Jamais de mixeur ni de robot : les lames déchirent les cellules de la pomme de terre et la purée devient élastique.",
        },
        {
          title: "Monter le plat",
          text: "Déposez la purée par cuillerées sur toute la surface du canard, puis lissez-la avec le dos d’une cuillère jusqu’aux bords du plat. Tracez des sillons à la fourchette et parsemez de comté râpé.",
        },
        {
          title: "Gratiner",
          text: "Enfournez à mi-hauteur pour 20 minutes. Le parmentier est prêt quand le dessus est doré, plus foncé sur les crêtes des sillons, et que la graisse bouillonne sur les bords du plat.",
          timer: { minutes: 20, label: "Gratin au four" },
        },
        {
          title: "Servir",
          text: "Laissez reposer 5 minutes hors du four : les couches se tiennent mieux à la découpe. Servez à la grande cuillère en allant bien jusqu’au fond, pour avoir dans chaque part la croûte, la purée et le canard. Une salade verte bien vinaigrée à côté suffit.",
          timer: { minutes: 5, label: "Repos avant service" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi des pommes de terre farineuses",
      text: "Riches en amidon et pauvres en eau, leurs cellules se séparent facilement à la cuisson. Écrasées, elles donnent des grains secs qui absorbent le beurre et le lait. Les variétés à chair ferme ont des cellules plus solides : on doit les travailler davantage, ce qui libère de l’amidon et rend la purée collante.",
    },
    {
      title: "Ce que le confit a déjà fait",
      text: "La cuisse a cuit longtemps et doucement dans sa graisse. Le collagène des tissus s’est transformé en gélatine, c’est pour cela que la viande se défait en filaments sans couteau. Le salage qui précède la cuisson explique qu’elle soit déjà assaisonnée.",
    },
    {
      title: "Pourquoi la croûte se forme sur les sillons",
      text: "Les crêtes tracées à la fourchette sont plus fines et plus exposées à la chaleur sèche du four : elles sèchent puis brunissent les premières, sous l’effet des réactions de Maillard entre l’amidon, les protéines du lait et du fromage. Une surface lisse dore moins et plus lentement.",
    },
  ],
  tips: [
    "Coupez la peau retirée en lanières et faites-la griller 8 à 10 minutes dans une poêle sèche à feu moyen : émiettée sur le parmentier au service, elle croustille.",
    "Filtrez la graisse restante dans un bocal propre et gardez-la au réfrigérateur : c’est elle qui fait les pommes de terre sarladaises.",
    "Préférez les échalotes à l’oignon : plus douces, elles accompagnent le canard sans le couvrir.",
    "Pour un plat préparé à l’avance, montez-le avec la viande et la purée encore tièdes, laissez refroidir moins de 2 heures et filmez avant de mettre au réfrigérateur.",
  ],
  mistakes: [
    "Saler la viande comme une viande fraîche : le confit l’est déjà. Goûtez toujours avant, et salez la purée avec retenue.",
    "Passer la purée au mixeur : elle devient collante et élastique. Si c’est fait, il n’y a pas de retour possible ; utilisez-la plutôt en galettes poêlées.",
    "Laisser des os dans la viande : quelques secondes de contrôle à la main évitent la mauvaise surprise sous la dent.",
    "Une purée trop liquide : elle s’enfonce dans la viande et ne forme pas de croûte. Ajoutez le lait petit à petit et arrêtez-vous quand elle tient en pic.",
    "Mettre toute la graisse de la boîte dans le plat : il devient lourd et rend de l’huile en cuisant. Une cuillère dans les échalotes, une dans la purée, c’est assez.",
  ],
  variations: [
    {
      title: "Avec des champignons",
      text: "Faites sauter 250 g de champignons de Paris émincés dans 1 cuillère à soupe de graisse de canard, 8 minutes à feu vif, jusqu’à ce qu’ils aient rendu puis évaporé leur eau. Mélangez-les à la viande avant de monter le plat.",
    },
    {
      title: "Purée au céleri-rave",
      text: "Remplacez 600 g de pommes de terre par 600 g de céleri-rave en cubes, cuits dans la même eau pendant 25 minutes. Réduisez le lait à 10 cl : le céleri rend plus d’eau.",
    },
    {
      title: "En ramequins",
      text: "Répartissez dans 6 ramequins de 10 cm de diamètre et gratinez 15 minutes à 200 °C. Pratique pour un dîner : chacun a sa croûte.",
    },
    {
      title: "Sans fromage",
      text: "Remplacez le comté par 30 g de chapelure mélangée à 1 cuillère à soupe de graisse de canard fondue. Le dessus est plus croustillant et le goût du canard ressort davantage.",
    },
  ],
  storage:
    "2 à 3 jours au réfrigérateur, filmé, mis au froid moins de 2 heures après la cuisson. Réchauffez une seule fois, au four à 180 °C, jusqu’à 74 °C à cœur. Il se congèle 2 mois, de préférence avant de passer au four ; décongelez 24 heures au réfrigérateur et ne recongelez jamais.",
  pairing:
    "Une salade de mâche ou de frisée à la vinaigrette moutardée, pour l’acidité. Côté verre, un rouge du Sud-Ouest comme un cahors ou un madiran.",
  faq: [
    {
      q: "Peut-on préparer le parmentier de canard la veille ?",
      a: "Oui. Montez-le, laissez-le refroidir moins de 2 heures et gardez-le filmé au réfrigérateur. Le jour même, enfournez-le à 180 °C pendant 40 à 45 minutes, couvert d’aluminium les 20 premières, jusqu’à 74 °C à cœur au thermomètre. Retirez l’aluminium pour que le dessus dore.",
    },
    {
      q: "Combien de cuisses de canard confites pour un parmentier ?",
      a: "4 cuisses pour 6 personnes, soit une boîte classique d’environ 1,3 kg. Elles donnent autour de 600 g de viande effilochée, sans peau ni os. Pour 4 personnes, 3 cuisses suffisent.",
    },
    {
      q: "Quelles pommes de terre pour un parmentier ?",
      a: "Des farineuses, comme la bintje ou l’agria. Elles s’écrasent facilement et absorbent le beurre et le lait. Les pommes de terre à chair ferme, comme la charlotte, donnent une purée plus collante.",
    },
    {
      q: "Faut-il saler le canard confit ?",
      a: "Non, presque jamais. Le confit est salé avant d’être cuit, et la viande garde ce sel. Goûtez-la après l’avoir mélangée aux échalotes ; seul un poivre généreux est vraiment utile.",
    },
    {
      q: "Que faire de la graisse de canard qui reste ?",
      a: "La garder. Filtrée dans un bocal propre et fermé, elle se conserve plusieurs semaines au réfrigérateur. Elle sert à faire sauter des pommes de terre, à rôtir des légumes ou à saisir une viande.",
    },
    {
      q: "Peut-on congeler un parmentier de canard ?",
      a: "Oui, jusqu’à 2 mois, idéalement monté mais pas encore gratiné. Décongelez-le 24 heures au réfrigérateur, puis enfournez-le à 180 °C jusqu’à 74 °C à cœur. Ne le recongelez jamais une fois décongelé.",
    },
  ],
  nutrition: {
    calories: 525,
    protein: 29,
    fat: 28,
    saturatedFat: 12,
    carbs: 39,
    sugar: 3,
    fiber: 4,
    sodium: 800,
  },
  annotations: { hero: "doré sur les crêtes, c’est prêt", detail: "effiloché à la main, pas haché" },
  images: {
    heroAlt:
      "Parmentier de canard dans un plat rond émaillé, la purée gratinée au fromage, dorée et caramélisée sur les bords",
    detailAlt:
      "Une part de parmentier de canard montée en cercle sur une assiette : purée, canard effiloché, dessus gratiné et jus",
    credits: {
      hero: {
        photographer: "Haydn Blackey",
        url: "https://www.flickr.com/photos/54549113@N00/52512555980",
        source: "Flickr",
        license: "CC BY-SA 2.0",
      },
      detail: {
        photographer: "Romainbehar",
        url: "https://commons.wikimedia.org/wiki/File:Lyon_3e_-_Rue_Paul_Bert_-_Le_Petit_Kfe_du_March%C3%A9,_parmentier_de_canard.jpg",
        source: "Wikimedia Commons",
        license: "CC0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C98A2E",
    onAccent: "#1B1712",
    ink: "#7A4E12",
    tint: "#FAF1E2",
    deep: "#1A1209",
    focus: "50% 50%",
  },
});
