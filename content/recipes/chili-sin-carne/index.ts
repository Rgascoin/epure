import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "chili-sin-carne",
  title: "Chili sin carne",
  seoTitle: "Chili sin carne aux lentilles et haricots, mijoté 1 h",
  tagline: "Les lentilles tiennent le rôle du bœuf.",
  description:
    "Un chili sin carne vegan pour 4 : haricots rouges et noirs, lentilles vertes, poivrons et paprika fumé mijotés 1 h, servis avec du riz et du citron vert.",
  summary:
    "Pour 4 personnes, faites fondre 2 oignons et 2 poivrons, faites revenir l’ail et les épices 2 minutes, puis ajoutez 800 g de tomates concassées, 500 ml de bouillon de légumes et 100 g de lentilles vertes. Après 30 minutes, ajoutez 480 g de haricots rouges et noirs égouttés et le maïs, et laissez réduire 30 minutes à découvert. Servez avec du riz, de la coriandre et du citron vert. Comptez 1 h 40 en tout.",
  intro: [
    "Un chili sans viande a souvent le même défaut : une soupe de haricots à la tomate, épicée mais sans mâche. Ici, ce sont des lentilles vertes qui font le travail du bœuf. Elles cuisent dans la sauce, la boivent, l’épaississent et donnent ce petit grain sous la dent.",
    "Le reste tient à la patience. Une heure de mijotage, dont la moitié à découvert, pour que la sauce réduise et colle à la cuillère. Un carré de chocolat noir à la fin, si vous en avez un sans lait, arrondit l’acidité des tomates.",
    "Les haricots viennent de boîtes, rincés. Si vous partez de haricots rouges secs, lisez la variante : crus ou mal cuits, ils sont toxiques.",
  ],
  category: "Plat",
  cuisine: "Tex-Mex",
  keywords: [
    "chili sin carne",
    "recette chili sin carne",
    "chili végétarien",
    "chili vegan",
    "chili sin carne aux lentilles",
    "chili sans viande",
    "chili végétarien haricots rouges",
    "chili sin carne facile",
  ],
  diet: ["vegan", "vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 75 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["cocotte de 4 à 5 l", "grande casserole pour le riz", "passoire"],
  ingredients: [
    {
      title: "Le chili",
      items: [
        { qty: 3, unit: "cas", name: "huile d’olive" },
        { qty: 2, name: "oignon", plural: "oignons", note: "jaunes, en dés", step: 1 },
        { qty: 2, name: "poivron", plural: "poivrons", note: "un rouge et un jaune, en dés de 1 cm", step: 1 },
        { qty: 3, name: "gousse d’ail", plural: "gousses d’ail", note: "hachées", step: 1 },
        { qty: 2, unit: "cac", name: "cumin moulu" },
        { qty: 2, unit: "cac", name: "paprika fumé" },
        { qty: 0.5, unit: "cac", name: "piment de Cayenne", note: "à ajuster" },
        { qty: 1, unit: "cac", name: "origan séché" },
        { qty: 2, unit: "cas", name: "concentré de tomate" },
        { qty: 800, unit: "g", name: "tomates concassées", note: "en boîte", step: 50 },
        { qty: 500, unit: "ml", name: "bouillon de légumes", step: 50 },
        { qty: 100, unit: "g", name: "lentilles vertes", note: "sèches, rincées", step: 10 },
        { qty: 240, unit: "g", name: "haricots rouges", note: "en boîte, égouttés et rincés", step: 10 },
        { qty: 240, unit: "g", name: "haricots noirs", note: "en boîte, égouttés et rincés", step: 10 },
        { qty: 140, unit: "g", name: "maïs doux", note: "égoutté", step: 10 },
        { qty: 10, unit: "g", name: "chocolat noir", note: "facultatif, sans lait (lire l’étiquette)", step: 5 },
        { name: "sel" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 300, unit: "g", name: "riz long", note: "basmati ou thaï", step: 10 },
        { qty: 1, name: "citron vert", plural: "citrons verts", step: 1 },
        { qty: 15, unit: "g", name: "coriandre fraîche", note: "une demi-botte", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le chili",
      steps: [
        {
          title: "Préparer les légumes",
          text: "Coupez les oignons et les poivrons en dés de 1 cm, hachez l’ail. Rincez les lentilles. Versez les haricots rouges et noirs dans une passoire et rincez-les sous l’eau froide jusqu’à ce qu’elle ne mousse plus.",
        },
        {
          title: "Faire fondre oignons et poivrons",
          text: "Chauffez l’huile dans la cocotte à feu moyen. Ajoutez les oignons, les poivrons et une pincée de sel, et laissez cuire 10 minutes en remuant de temps en temps, jusqu’à ce que les oignons soient translucides et dorés sur les bords.",
          timer: { minutes: 10, label: "Oignons et poivrons" },
        },
        {
          title: "Réveiller les épices",
          text: "Ajoutez l’ail, le cumin, le paprika, le piment, l’origan et le concentré de tomate. Remuez sans arrêt pendant 2 minutes : ça doit sentir fort et le concentré doit foncer légèrement, sans que rien ne noircisse au fond.",
          timer: { minutes: 2, label: "Épices et concentré" },
          tip: "Si le fond accroche, une cuillerée de bouillon décolle tout ; le paprika brûlé, lui, reste amer.",
        },
        {
          title: "Cuire les lentilles",
          text: "Versez les tomates, le bouillon et les lentilles, grattez le fond et portez à ébullition. Baissez à feu doux, posez le couvercle en le laissant entrouvert et laissez frémir 30 minutes en remuant de temps en temps. Les lentilles doivent être presque tendres.",
          timer: { minutes: 30, label: "Lentilles" },
        },
        {
          title: "Ajouter les haricots",
          text: "Ajoutez les haricots et le maïs, puis laissez mijoter 30 minutes à découvert, à petit frémissement, en remuant toutes les 10 minutes. C’est prêt quand une cuillère tirée au fond de la cocotte laisse un sillon qui ne se referme pas tout de suite. Trop épais, ajoutez un peu d’eau.",
          timer: { minutes: 30, label: "Chili à découvert" },
          tip: "Écrasez une louche de haricots contre la paroi : la sauce épaissit d’un coup.",
        },
        {
          title: "Cuire le riz",
          text: "Pendant ce temps, portez une grande casserole d’eau salée à ébullition. Rincez le riz jusqu’à ce que l’eau soit presque claire, versez-le dans l’eau et faites-le cuire 11 minutes : le grain doit être tendre avec un rien de résistance. Égouttez-le et gardez-le couvert.",
          timer: { minutes: 11, label: "Riz" },
        },
        {
          title: "Finir et servir",
          text: "Hors du feu, faites fondre le chocolat dans le chili, puis goûtez : salez, ajoutez du piment si vous le voulez plus vif et le jus d’un demi-citron vert. Servez sur le riz, parsemez de coriandre ciselée et posez un quartier de citron vert à côté de chaque assiette.",
          tip: "Le citron se met à la fin : cuit, il perd sa fraîcheur.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi les haricots rouges secs doivent bouillir",
      text: "Les haricots rouges crus contiennent une lectine, la phytohémagglutinine, qui provoque nausées, vomissements et diarrhées quelques heures après le repas. Elle est détruite par une ébullition franche de 10 minutes. Une cuisson douce, comme celle d’une mijoteuse, ne suffit pas. Les haricots en boîte ont déjà été stérilisés : on peut les utiliser tels quels.",
    },
    {
      title: "Les épices dans l’huile",
      text: "Une grande partie des arômes du cumin et du paprika se dissout dans le gras plutôt que dans l’eau. Deux minutes dans l’huile chaude les libèrent avant que la tomate ne refroidisse tout. Le paprika contient des sucres qui brûlent vite : au-delà, il tourne à l’amer.",
    },
    {
      title: "Les lentilles épaississent la sauce",
      text: "En cuisant, les lentilles absorbent environ deux fois leur poids de liquide et libèrent un peu d’amidon. Les vertes gardent leur forme, ce qui donne de la mâche, tandis que leur amidon lie la sauce. Des lentilles corail, elles, se défont en purée en 15 minutes.",
    },
  ],
  tips: [
    "Rincez les haricots en boîte : le jus de conserve est salé et un peu visqueux, il trouble la sauce.",
    "Gardez des dés de poivron d’au moins 1 cm : plus petits, ils disparaissent après une heure de cuisson.",
    "Commencez avec une demi-cuillère de piment et rectifiez à la fin : le piquant monte en mijotant.",
    "Le chocolat noir n’est pas toujours vegan : vérifiez qu’il n’y a ni lait, ni beurre, ni lactosérum dans la liste des ingrédients.",
    "Faites-le la veille si vous pouvez : les lentilles finissent de boire la sauce et les épices se fondent. Prévoyez un trait d’eau au réchauffage.",
  ],
  mistakes: [
    "Ajouter les lentilles avec les haricots : en 30 minutes, elles restent croquantes. Elles doivent partir avec les tomates.",
    "Laisser noircir les épices : l’amertume ne s’en va plus. Si ça arrive, mieux vaut recommencer cette étape avec une cocotte propre.",
    "Une sauce encore liquide au bout d’une heure : retirez le couvercle s’il était resté, montez un peu le feu et laissez réduire 10 minutes de plus en remuant.",
    "Cuire des haricots rouges secs à la mijoteuse sans les faire bouillir d’abord : ils restent toxiques. Toujours 10 minutes à gros bouillons avant.",
  ],
  variations: [
    {
      title: "Aux champignons",
      text: "Remplacez les lentilles par 400 g de champignons de Paris hachés au couteau. Faites-les dorer 8 minutes à feu vif dans 1 cas d’huile avant les oignons, puis réservez-les et remettez-les avec les tomates. Réduisez le bouillon à 200 ml et la première cuisson à 15 minutes.",
    },
    {
      title: "Avec des haricots secs",
      text: "Faites tremper 100 g de haricots rouges secs et 100 g de haricots noirs secs 12 heures dans l’eau froide. Jetez l’eau, couvrez d’eau neuve, faites bouillir à gros bouillons 10 minutes, puis laissez frémir 1 h à 1 h 30 jusqu’à ce qu’ils s’écrasent facilement. Égouttez et suivez la recette.",
    },
    {
      title: "Plus fumé",
      text: "Remplacez le piment de Cayenne par 1 cac de piment chipotle en poudre, qui est un jalapeño séché et fumé. Il pique un peu moins et renforce le goût du paprika fumé.",
    },
  ],
  storage:
    "Laissez refroidir le chili moins de 2 heures, puis gardez-le 3 jours au réfrigérateur en boîte fermée, ou 3 mois au congélateur. Le riz cuit doit être au réfrigérateur dans les 2 heures et se garde 24 heures au plus. Réchauffez jusqu’à ce que ça frémisse, et ne recongelez pas.",
  pairing:
    "Une bière blonde bien fraîche, ou un rouge souple et fruité comme un gamay, servi un peu frais. Des tranches d’avocat et quelques chips de maïs sur la table font plaisir.",
  faq: [
    {
      q: "Peut-on faire un chili sin carne avec des haricots rouges secs ?",
      a: "Oui, à une condition : les faire bouillir. Après 12 heures de trempage, jetez l’eau et faites-les bouillir à gros bouillons 10 minutes dans de l’eau neuve, puis cuisez-les 1 h à 1 h 30. Crus ou cuits trop doucement, les haricots rouges contiennent une lectine qui rend malade en quelques heures. 200 g de haricots secs remplacent les deux boîtes.",
    },
    {
      q: "Le chili sin carne est-il vegan ?",
      a: "Oui, celui-ci l’est, à deux détails près. Prenez un bouillon de légumes dont l’étiquette ne mentionne ni graisse animale ni lactose, et un chocolat noir sans lait ni beurre. Si vous avez un doute sur le chocolat, laissez-le de côté : le chili s’en passe très bien.",
    },
    {
      q: "Par quoi remplacer les lentilles dans un chili végétarien ?",
      a: "Par 400 g de champignons de Paris hachés et bien dorés, qui donnent une texture proche de la viande hachée. Le boulgour marche aussi : 80 g ajoutés avec les haricots, et 150 ml d’eau en plus.",
    },
    {
      q: "Combien de temps se garde un chili sin carne ?",
      a: "3 jours au réfrigérateur dans une boîte fermée, et 3 mois au congélateur. Il est même meilleur le lendemain. Le riz cuit, lui, ne se garde que 24 heures au frais : rangez-le dans les 2 heures qui suivent la cuisson.",
    },
    {
      q: "Comment rendre un chili moins piquant ?",
      a: "Supprimez le piment de Cayenne et gardez le paprika fumé, qui parfume sans piquer. S’il est déjà trop fort, servez-le avec plus de riz, un yaourt végétal nature et des tranches d’avocat, ou ajoutez une boîte de tomates concassées et laissez mijoter 10 minutes.",
    },
    {
      q: "Peut-on utiliser des lentilles corail ?",
      a: "Non, pas pour ce chili. Les lentilles corail se défont en 15 minutes et transforment la sauce en purée épaisse, sans la mâche qu’on cherche. Restez sur des vertes ou des blondes, qui gardent leur forme après une heure de cuisson.",
    },
  ],
  nutrition: { calories: 690, protein: 26, fat: 14, saturatedFat: 2, carbs: 114, sugar: 16, fiber: 18, sodium: 900 },
  annotations: { hero: "maïs, haricots noirs, coriandre", detail: "à la sortie de la cocotte" },
  images: {
    heroAlt:
      "Assiettes creuses de chili sin carne aux haricots noirs et au maïs, avec un dôme de riz et des feuilles de coriandre",
    detailAlt: "Chili sin carne au maïs et aux haricots dans une assiette blanche, parsemé d’oignon nouveau émincé",
    credits: {
      hero: { photographer: "Nic Wood", url: "https://www.pexels.com/photo/vegan-black-bean-chilli-28286173/" },
      detail: {
        photographer: "Benreis",
        url: "https://commons.wikimedia.org/w/index.php?curid=148301730",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#C4402B",
    onAccent: "#FFFFFF",
    ink: "#97301F",
    tint: "#FBECE7",
    deep: "#1E0D09",
    focus: "49% 64%",
  },
});
