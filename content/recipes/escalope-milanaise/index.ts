import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "escalope-milanaise",
  title: "Escalope milanaise",
  seoTitle: "Escalope milanaise : une panure dorée qui ne se décolle pas",
  tagline: "Le citron se presse à table.",
  description:
    "Escalopes de veau aplaties à 5 mm, panées farine, œuf et chapelure au parmesan, dorées 2 à 3 minutes par face au beurre et à l’huile. Prêtes en 45 minutes.",
  summary:
    "Pour 4 personnes, aplatissez 4 escalopes de veau (500 g) à 4 ou 5 mm, passez-les dans 50 g de farine, 2 œufs battus, puis 120 g de chapelure mêlée de 30 g de parmesan. Faites-les dorer deux par deux à feu moyen dans 25 g de beurre et 7,5 cl d’huile, 2 à 3 minutes par face, égouttez-les et servez avec du citron et des spaghettis à la sauce tomate. Comptez 45 minutes, repos de la panure compris.",
  intro: [
    "L’escalope milanaise, c’est une fine tranche de veau aplatie, panée, dorée au beurre, qu’on arrose de citron à table. En France, on la sert souvent avec des spaghettis à la sauce tomate ; une salade de roquette fait aussi très bien l’affaire.",
    "Elle rate de deux façons. La panure se décolle d’un bloc à la première coupe, parce qu’on a sauté la farine. Ou la croûte brûle sur une viande encore crue, parce que le feu était trop fort ou l’escalope trop épaisse.",
    "Tout se règle avant d’allumer le feu : une viande aplatie à 5 mm, une panure en trois passages, et une poêle à feu moyen. À cette épaisseur, la viande est cuite au moment précis où la panure est dorée.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "escalope milanaise",
    "recette escalope milanaise",
    "escalope de veau milanaise",
    "escalope panée",
    "escalope milanaise spaghetti",
    "escalope milanaise parmesan",
    "escalope de poulet milanaise",
    "panure à l’anglaise",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 12, rest: 10 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "grande poêle de 28 cm",
    "rouleau à pâtisserie ou casserole à fond lourd",
    "papier cuisson",
    "3 assiettes creuses",
    "grille ou papier absorbant",
    "spatule plate",
  ],
  ingredients: [
    {
      title: "Les escalopes",
      items: [
        {
          qty: 4,
          name: "escalope de veau",
          plural: "escalopes de veau",
          note: "environ 125 g chacune, dans la noix ou la sous-noix",
          step: 1,
        },
        { qty: 1, unit: "cac", name: "sel fin", step: 0.5 },
        { name: "poivre noir" },
      ],
    },
    {
      title: "La panure",
      items: [
        { qty: 50, unit: "g", name: "farine", note: "type 45 ou 55", step: 5 },
        { qty: 2, name: "œuf", plural: "œufs", step: 1 },
        { qty: 1, unit: "cas", name: "eau", step: 1 },
        { qty: 120, unit: "g", name: "chapelure fine", step: 10 },
        { qty: 30, unit: "g", name: "parmesan", note: "râpé très fin, facultatif", step: 5 },
      ],
    },
    {
      title: "La cuisson",
      items: [
        { qty: 15, unit: "cl", name: "huile de tournesol", step: 1 },
        { qty: 50, unit: "g", name: "beurre", step: 5 },
        { qty: 1, name: "citron", plural: "citrons", note: "coupé en quartiers", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Les escalopes",
      steps: [
        {
          title: "Aplatir les escalopes",
          text: "Posez chaque escalope entre deux feuilles de papier cuisson et tapez-la avec le rouleau ou le fond de la casserole, en partant du centre vers les bords, jusqu’à 4 ou 5 mm d’épaisseur régulière. Entaillez le bord en deux ou trois endroits pour qu’elle ne se rétracte pas à la cuisson. Épongez-les, salez et poivrez les deux faces.",
          tip: "Tapez sans écraser : on cherche à étaler la viande, pas à la déchirer.",
        },
        {
          title: "Préparer trois assiettes",
          text: "Versez la farine dans une première assiette. Dans la deuxième, battez les œufs avec la cuillerée d’eau et une pincée de sel jusqu’à ce qu’il ne reste aucun filet de blanc. Dans la troisième, mélangez la chapelure et le parmesan.",
        },
        {
          title: "Paner les escalopes",
          text: "Farinez chaque escalope et tapotez-la pour ne garder qu’un voile. Trempez-la dans l’œuf, laissez égoutter l’excédent, puis posez-la dans la chapelure et appuyez du plat de la main sur les deux faces. Laissez reposer les escalopes 10 minutes au réfrigérateur sur une assiette, sans les empiler, pour que la panure prenne. Allumez le four à 90 °C.",
          timer: { minutes: 10, label: "Repos de la panure" },
          tip: "Une main sèche pour la farine et la chapelure, l’autre pour l’œuf : la panure ne colle pas aux doigts.",
        },
        {
          title: "Chauffer la matière grasse",
          text: "Dans la poêle, chauffez la moitié de l’huile et 25 g de beurre sur feu moyen. Quand le beurre a fini de mousser, jetez une pincée de chapelure : elle doit grésiller aussitôt et dorer doucement, sans noircir.",
        },
        {
          title: "Dorer la première face",
          text: "Posez deux escalopes dans la poêle et n’y touchez plus pendant 2 à 3 minutes. Le gras doit bouillonner tout autour, sans fumer. Soulevez un coin avec la spatule : quand le dessous est doré, couleur noisette, c’est le moment de retourner.",
          timer: { minutes: 3, label: "Première face" },
          tip: "Si la panure fonce trop vite, baissez le feu : à cette épaisseur, la viande cuit en même temps qu’elle dore.",
        },
        {
          title: "Retourner et égoutter",
          text: "Retournez les escalopes avec la spatule et faites dorer l’autre face 2 minutes. Égouttez-les sur la grille ou debout contre du papier absorbant, puis gardez-les au chaud dans le four, sans les empiler.",
          timer: { minutes: 2, label: "Seconde face" },
        },
        {
          title: "Cuire la seconde fournée",
          text: "Essuyez la poêle avec du papier absorbant pour retirer les miettes brûlées. Remettez le reste de l’huile et 25 g de beurre, laissez chauffer de la même façon et faites cuire les deux autres escalopes comme les premières.",
        },
        {
          title: "Servir avec le citron",
          text: "Servez les escalopes tout de suite, avec les quartiers de citron à presser à table. Accompagnez-les de spaghettis à la sauce tomate ou d’une salade de roquette.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la farine fait tenir la panure",
      text: "La surface d’une viande crue est humide : l’œuf y glisse et forme une couche qui se décolle à la cuisson. La farine absorbe cette humidité et donne une surface sèche et rugueuse où l’œuf s’accroche. En chauffant, les protéines de l’œuf coagulent entre 62 et 70 °C environ et collent la chapelure à la viande.",
    },
    {
      title: "Aplatir pour cuire en même temps",
      text: "La chaleur traverse une viande lentement, depuis la surface. À 5 mm d’épaisseur, le cœur de l’escalope est cuit dans le temps qu’il faut à la panure pour dorer. À 1,5 cm, la croûte serait brûlée avant que le centre soit chaud.",
    },
    {
      title: "Feu moyen, beurre et huile",
      text: "Le beurre apporte le goût et la couleur noisette, mais ses protéines de lait brunissent vite puis noircissent. L’huile donne assez de matière grasse pour que toute la surface de la panure soit en contact avec le gras et dore de façon égale. Le feu moyen compte plus que le mélange : trop fort, le beurre brûle quand même.",
    },
    {
      title: "La vapeur ramollit la croûte",
      text: "Une escalope qui sort de la poêle continue de dégager de la vapeur. Posée à plat sur une assiette, cette vapeur reste piégée dessous et détrempe la panure. Sur une grille, elle s’échappe et la croûte reste croustillante.",
    },
  ],
  tips: [
    "Râpez le parmesan très fin, à la râpe fine : en gros copeaux, il fond en grumeaux et brûle par endroits.",
    "Ne mettez jamais plus de deux escalopes à la fois dans une poêle de 28 cm. Serrées, elles font chuter la température et la panure boit le gras au lieu de dorer.",
    "Une chapelure fine et bien sèche donne une croûte régulière. Si la vôtre est grossière, passez-la quelques secondes au mixeur.",
    "Pressez le citron au moment de manger, pas avant : sur une escalope qui attend, le jus ramollit la panure.",
  ],
  mistakes: [
    "Sauter la farine : l’œuf glisse sur la viande humide et la panure se détache d’un bloc à la découpe.",
    "Cuire à feu vif : la chapelure noircit alors que la viande est encore crue. Baissez le feu et comptez 2 à 3 minutes par face.",
    "Retourner l’escalope avec une fourchette plantée dedans : la panure se déchire. Glissez une spatule plate dessous.",
    "Empiler les escalopes cuites pour les garder au chaud : la vapeur ramollit la croûte. Posez-les côte à côte sur une grille, dans le four à 90 °C.",
  ],
  variations: [
    {
      title: "Au poulet",
      text: "Ouvrez 4 blancs de poulet de 150 g en portefeuille et aplatissez-les à 5 mm. Panez-les de la même façon et comptez 3 à 4 minutes par face. Le poulet doit atteindre 74 °C à cœur : vérifiez à la sonde, ou entaillez la partie la plus épaisse, dont la chair doit être blanche et opaque, sans trace rosée.",
    },
    {
      title: "Au porc",
      text: "Prenez 4 escalopes de porc de 125 g dans la noix, aplaties à 5 mm, et comptez 2 à 3 minutes par face, jusqu’à 63 °C à cœur. La viande est un peu plus ferme que le veau et moins chère.",
    },
    {
      title: "Sans parmesan",
      text: "Remplacez les 30 g de parmesan par 30 g de chapelure supplémentaire. La panure est plus neutre et plus claire, et colore un peu moins vite : vous pouvez ajouter 30 secondes par face.",
    },
  ],
  storage:
    "Elle se mange de préférence tout de suite. Les restes se gardent 2 jours au réfrigérateur dans une boîte fermée. Réchauffez-les 8 à 10 minutes au four à 180 °C sur une grille ; le micro-ondes rend la panure molle. Froide, elle se glisse aussi très bien dans un sandwich.",
  pairing: "Un rouge léger d’Italie du Nord, comme un valpolicella, ou un blanc sec et vif, comme un soave.",
  faq: [
    {
      q: "Combien de temps cuire une escalope milanaise ?",
      a: "2 à 3 minutes par face à feu moyen pour une escalope de veau aplatie à 4 ou 5 mm. La panure doit être dorée de façon égale. Pour du poulet, comptez 3 à 4 minutes par face et vérifiez qu’il atteint 74 °C à cœur.",
    },
    {
      q: "Pourquoi la panure de mon escalope se décolle ?",
      a: "Le plus souvent parce que la farine a été oubliée ou que la viande était mouillée. Épongez l’escalope, farinez-la en ne gardant qu’un voile, puis œuf et chapelure. Dix minutes de repos au frais avant la cuisson aident aussi la panure à prendre.",
    },
    {
      q: "Faut-il mettre du parmesan dans la panure ?",
      a: "Non, c’est facultatif. 30 g de parmesan finement râpé dans la chapelure donnent une croûte plus savoureuse et plus foncée. Surveillez alors la cuisson, car le fromage colore vite.",
    },
    {
      q: "Peut-on paner les escalopes à l’avance ?",
      a: "Oui, jusqu’à 2 heures avant, au réfrigérateur, sur une assiette et sans les empiler. Au-delà, la panure prend l’humidité de la viande et dore moins bien.",
    },
    {
      q: "Peut-on cuire une escalope milanaise au four ?",
      a: "Oui, mais elle sera moins dorée. Posez les escalopes panées sur une plaque huilée, arrosez-les d’un filet d’huile et enfournez 10 à 12 minutes à 210 °C en les retournant à mi-cuisson. Avec du poulet, vérifiez les 74 °C à cœur.",
    },
    {
      q: "Quel accompagnement servir avec une escalope milanaise ?",
      a: "Des spaghettis à la sauce tomate, c’est le service le plus courant en France. Une salade de roquette au citron ou des pommes de terre sautées conviennent aussi très bien.",
    },
  ],
  nutrition: {
    calories: 450,
    protein: 36.5,
    fat: 22.5,
    saturatedFat: 6.5,
    carbs: 25.5,
    sugar: 1,
    fiber: 1.2,
    sodium: 700,
  },
  annotations: { hero: "le citron, au dernier moment", detail: "une croûte qui reste en place" },
  images: {
    heroAlt: "Escalope milanaise dorée et croustillante posée sur une planche en bois, avec deux quartiers de citron",
    detailAlt: "Gros plan sur la panure dorée d’une escalope milanaise, un quartier de citron posé dessus",
    credits: {
      hero: { photographer: "Gonzalo Ruiz", url: "https://www.pexels.com/photo/meat-and-lemons-18275671/" },
      detail: {
        photographer: "Polina Tankilevitch",
        url: "https://www.pexels.com/photo/sliced-of-lemon-on-a-fried-dish-6419719/",
      },
    },
  },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  hero,
  detail,
  theme: {
    accent: "#D98A2B",
    onAccent: "#1B1712",
    ink: "#875010",
    tint: "#FBF1E2",
    deep: "#1A1008",
    focus: "45% 55%",
  },
});
