import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "taboule",
  title: "Taboulé libanais",
  seoTitle: "Taboulé libanais : beaucoup de persil, peu de boulgour",
  tagline: "D’abord une salade de persil.",
  description:
    "Le taboulé libanais : 250 g de persil plat ciselé au couteau, 40 g de boulgour fin, tomates, menthe, citron et huile d’olive. Prêt en 35 minutes.",
  summary:
    "Pour 4 personnes, ciselez au couteau 250 g de persil plat et 20 g de menthe, puis mélangez-les avec 300 g de tomates en petits dés, 3 oignons nouveaux et 40 g de boulgour fin gonflé 15 minutes dans 8 cl de jus de citron. Arrosez de 6 cl d’huile d’olive. Le persil domine, le boulgour se voit à peine. 35 minutes en tout, sans cuisson.",
  intro: [
    "Au Liban, le taboulé est une salade de persil. Ciselé finement, mêlé de menthe, de tomate et d’oignon, arrosé de beaucoup de citron et d’huile d’olive, avec juste une poignée de boulgour fin qui se perd entre les herbes. On le mange volontiers avec des feuilles de laitue en guise de cuillère.",
    "En France, « taboulé » désigne surtout autre chose : une salade de semoule de couscous où les herbes ne font que passer. C’est un bon plat d’été aussi, on en donne la version plus bas, mais les proportions sont exactement inversées.",
    "Le libanais se joue sur le persil. Mouillé, il détrempe tout ; haché au robot ou avec un couteau qui écrase, il noircit et rend son jus. Séchez-le bien et coupez-le avec la meilleure lame de la maison.",
  ],
  category: "Entrée",
  cuisine: "Libanaise",
  keywords: [
    "taboulé libanais",
    "recette taboulé libanais",
    "taboulé au persil",
    "taboulé boulgour",
    "vrai taboulé libanais",
    "taboulé libanais ou semoule",
    "taboulé maison",
    "salade de persil",
  ],
  diet: ["vegan"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 35, cook: 0 },
  difficulty: "Facile",
  cost: "€",
  season: ["Été", "Début d’automne"],
  tags: ["ete", "pique-nique"],
  equipment: [
    "grand couteau de chef bien affûté",
    "grande planche à découper",
    "essoreuse à salade",
    "passoire fine",
    "grand saladier",
  ],
  ingredients: [
    {
      title: "Le taboulé",
      items: [
        { qty: 40, unit: "g", name: "boulgour fin", note: "ou extra-fin", step: 5 },
        { qty: 8, unit: "cl", name: "jus de citron", note: "environ 2 citrons", step: 1 },
        { qty: 250, unit: "g", name: "persil plat", note: "environ 3 bottes, feuilles et tiges fines", step: 10 },
        { qty: 20, unit: "g", name: "menthe fraîche", note: "les feuilles d’une petite botte", step: 5 },
        { qty: 300, unit: "g", name: "tomates", note: "fermes et mûres", step: 25 },
        { qty: 3, name: "oignon nouveau", plural: "oignons nouveaux", note: "le blanc et un peu du vert", step: 1 },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre", note: "du moulin" },
        { qty: 6, unit: "cl", name: "huile d’olive vierge extra", step: 1 },
      ],
    },
    {
      title: "Pour servir",
      items: [{ qty: 1, name: "cœur de romaine", plural: "cœurs de romaine", note: "feuilles séparées", step: 1 }],
    },
  ],
  method: [
    {
      title: "Le taboulé",
      steps: [
        {
          title: "Faire gonfler le boulgour",
          text: "Rincez le boulgour dans la passoire fine sous l’eau froide, pressez-le pour l’égoutter et mettez-le dans le saladier avec le jus de citron. Laissez-le gonfler 15 minutes pendant que vous préparez les herbes : il doit devenir tendre sous la dent, sans aucune cuisson.",
          timer: { minutes: 15, label: "Boulgour au citron" },
        },
        {
          title: "Laver et sécher",
          text: "Plongez les bottes de persil, têtes en bas, dans une bassine d’eau froide, secouez-les, puis recommencez dans une eau propre. Essorez-les en deux fois, étalez-les sur un torchon et tamponnez : les feuilles doivent être sèches au toucher. Faites de même avec la menthe.",
          tip: "Une goutte d’eau sur le persil, c’est une salade détrempée dans l’heure. Prenez le temps de bien sécher.",
        },
        {
          title: "Ciseler le persil",
          text: "Retirez les grosses tiges. Serrez une poignée de feuilles en petite botte sur la planche et tranchez-la très finement, en avançant les doigts repliés à chaque coupe. Vous devez obtenir de fins brins verts et secs, pas une pâte. Recommencez jusqu’au bout du persil.",
          tip: "Si la lame laisse du jus vert sur la planche, elle écrase au lieu de couper : affûtez-la avant de continuer.",
        },
        {
          title: "Couper tomates et oignons",
          text: "Taillez les tomates en dés de 5 mm et versez-les avec leur jus sur le boulgour, sans mélanger : il va boire ce jus. Émincez finement les oignons nouveaux.",
        },
        {
          title: "Ciseler la menthe",
          text: "Empilez les feuilles de menthe, roulez-les serré et coupez-les en fines lanières. Faites-le en dernier : la menthe coupée noircit plus vite que le persil.",
        },
        {
          title: "Assaisonner et mélanger",
          text: "Ajoutez dans le saladier le persil, la menthe et les oignons. Salez, poivrez et versez l’huile d’olive. Mélangez à la main ou avec deux fourchettes, en soulevant, sans tasser. Goûtez : le citron doit se sentir franchement, et le sel un peu.",
        },
        {
          title: "Servir sans attendre",
          text: "Dressez le taboulé dans un plat creux avec les feuilles de romaine autour, pour s’en servir comme de petites cuillères. Servez-le dans la demi-heure, tant que le persil est encore bien vert et croquant.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Couper plutôt qu’écraser",
      text: "Une lame affûtée sectionne les cellules du persil proprement. Un couteau émoussé ou les lames d’un robot les écrasent : l’eau et les enzymes qu’elles contiennent se libèrent, les herbes brunissent et baignent dans leur jus.",
    },
    {
      title: "Le boulgour est déjà cuit",
      text: "Le boulgour est du blé dur cuit à la vapeur, séché puis concassé. Le boulgour fin n’a besoin que de se réhydrater : dans le jus de citron et de tomate, il s’attendrit en un quart d’heure et prend leur goût au passage.",
    },
    {
      title: "Le sel fait rendre l’eau",
      text: "Le sel attire l’eau hors des cellules de la tomate et des herbes par osmose. Assaisonné trop tôt, le taboulé rend son jus au fond du plat et le persil s’affaisse ; mélangé au dernier moment, il reste vif.",
    },
  ],
  tips: [
    "Gardez les tiges fines du persil, juste sous les feuilles : elles ont du goût et du croquant. Seules les grosses tiges partent.",
    "Versez les tomates et leur jus sur le boulgour sans mélanger : il absorbe ce jus et rien ne se perd.",
    "Le persil peut être lavé, séché et ciselé deux heures avant ; gardez-le au frais dans une boîte, sur du papier absorbant, et mélangez au moment de servir.",
    "Si votre boulgour est moyen ou gros, faites-le cuire 10 minutes à l’eau bouillante, égouttez-le et laissez-le refroidir avant de l’arroser de citron.",
  ],
  mistakes: [
    "Hacher le persil au robot : il devient une purée vert sombre qui noircit en quelques minutes. Le couteau, seulement le couteau.",
    "Ciseler un persil encore humide : il colle à la lame et la salade est détrempée. Essorez, puis séchez au torchon.",
    "Mettre trop de boulgour : au-delà de 60 g pour 250 g de persil, on bascule vers une salade de céréales. Les herbes doivent dominer à l’œil.",
    "Assaisonner une heure à l’avance : la salade baigne dans l’eau et le persil s’affaisse. Préparez les éléments séparément et mélangez au dernier moment.",
  ],
  variations: [
    {
      title: "Le taboulé à la française, à la semoule",
      text: "Mélangez 200 g de semoule de couscous moyenne avec 20 cl de liquide (le jus de 2 citrons, le jus des tomates et de l’eau) et 4 cuillères à soupe d’huile d’olive. Laissez gonfler 1 h au frais, égrainez, puis ajoutez 300 g de tomates, ½ concombre en dés, 2 oignons nouveaux et seulement ½ botte de persil et ½ botte de menthe ciselés. Les proportions s’inversent : la semoule domine, les herbes assaisonnent.",
    },
    {
      title: "À la grenade",
      text: "Ajoutez 80 g de grains de grenade au moment de mélanger. Leur acidité sucrée remplace un peu de citron : ne mettez que 6 cl de jus.",
    },
    {
      title: "Sans gluten, au quinoa",
      text: "Remplacez le boulgour par 50 g de quinoa cuit 12 minutes à l’eau bouillante salée, égoutté et refroidi, puis arrosé du jus de citron. Le reste ne change pas.",
    },
  ],
  storage:
    "Il se mange le jour même, idéalement dans l’heure. Les restes tiennent 24 heures au réfrigérateur dans une boîte fermée, mais le persil s’affaisse et la salade rend de l’eau : égouttez avant de servir. Ne le congelez pas.",
  pairing:
    "En mezze avec un houmous, des falafels ou des brochettes d’agneau grillées. Sinon à côté d’un poulet rôti ou d’un poisson grillé, avec un rosé sec bien frais.",
  faq: [
    {
      q: "Quelle est la différence entre le taboulé libanais et le taboulé à la semoule ?",
      a: "Les proportions sont inversées. Le taboulé libanais est une salade de persil, environ 250 g pour 40 g de boulgour fin. Le taboulé « à la française » repose sur la semoule de couscous, avec un peu d’herbes, de tomate et de concombre. Les deux se mangent froids, mais ce ne sont pas le même plat.",
    },
    {
      q: "Faut-il cuire le boulgour pour le taboulé ?",
      a: "Non, pas le boulgour fin : il est déjà précuit. Rincé puis mis à gonfler 15 minutes dans le jus de citron, il devient tendre. Le boulgour moyen ou gros, lui, se cuit 10 minutes à l’eau bouillante, puis s’égoutte et refroidit avant d’entrer dans la salade.",
    },
    {
      q: "Peut-on préparer le taboulé libanais la veille ?",
      a: "Non, pas entièrement. Assaisonné, il rend de l’eau et le persil s’affaisse en quelques heures. Vous pouvez laver et sécher les herbes la veille, puis les garder au frais enroulées dans un torchon ; ciselez et mélangez le jour même, juste avant de servir.",
    },
    {
      q: "Peut-on emporter un taboulé libanais en pique-nique ?",
      a: "Oui, en transportant les éléments séparément : le boulgour au citron dans un pot, le persil, la menthe, les oignons et les tomates dans une boîte, l’huile et le sel à part. Mélangez sur place. Gardez la glacière ou le sac isotherme bien froid jusqu’au repas.",
    },
    {
      q: "Peut-on hacher le persil au robot pour le taboulé ?",
      a: "Non. Les lames écrasent les feuilles au lieu de les trancher : le persil rend son jus, noircit et forme une pâte humide. Au couteau bien affûté, comptez 15 à 20 minutes pour 250 g, et le résultat n’a rien à voir.",
    },
    {
      q: "Quel persil choisir pour le taboulé ?",
      a: "Du persil plat, bien vert et ferme, aux feuilles sans taches jaunes. Le persil frisé se cisèle moins finement et a une texture plus rêche.",
    },
  ],
  nutrition: {
    calories: 215,
    protein: 4,
    fat: 15,
    saturatedFat: 2,
    carbs: 16,
    sugar: 4,
    fiber: 5,
    sodium: 530,
  },
  annotations: { hero: "beaucoup de persil, peu de boulgour", detail: "du citron, franchement" },
  images: {
    heroAlt:
      "Taboulé libanais vert vif, persil finement ciselé et dés de tomate, dans un plat entouré de feuilles de romaine dressées",
    detailAlt:
      "Bol de taboulé libanais coiffé de dés de tomate, de menthe et de citron, devant des galettes de pain pita",
    credits: {
      hero: {
        photographer: "Anthony Rahayel",
        url: "https://www.pexels.com/photo/freshly-prepared-lebanese-tabbouleh-salad-39018435/",
        source: "Pexels",
      },
      detail: {
        photographer: "Denys Gromov",
        url: "https://www.pexels.com/photo/a-close-up-shot-of-an-ensalada-4899790/",
        source: "Pexels",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#4E9A2E",
    onAccent: "#1B1712",
    ink: "#2F6A17",
    tint: "#EEF6E6",
    deep: "#0E1A09",
    focus: "50% 45%",
  },
});
