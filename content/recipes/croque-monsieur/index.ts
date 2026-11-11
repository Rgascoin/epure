import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "croque-monsieur",
  title: "Croque-monsieur",
  seoTitle: "Croque-monsieur à la béchamel, doré au four",
  tagline: "Le sandwich qu’on mange à la fourchette.",
  description:
    "Le croque-monsieur à la béchamel : jambon, comté, béchamel à l’intérieur et pain beurré doré au four. Pour 4, prêt en 35 minutes, croque-madame en variante.",
  summary:
    "Pour 4 croque-monsieur, un par personne, préparez une béchamel épaisse avec 20 g de beurre, 20 g de farine et 200 ml de lait. Tartinez-en 8 tranches de pain de mie, garnissez de 4 tranches de jambon et de 120 g de comté râpé, beurrez l’extérieur avec 40 g de beurre et enfournez 12 minutes à 220 °C, en les retournant au bout de 8 minutes. Il faut 35 minutes en tout.",
  intro: [
    "Le croque-monsieur, c’est du pain de mie, du jambon blanc et du fromage, dorés au beurre. Il existe deux grandes écoles : la béchamel à l’intérieur, ou gratinée sur le dessus comme en brasserie. On a choisi la première pour la version de base : le croque reste croustillant dehors, fondant dedans, et il se coupe proprement.",
    "La béchamel ne prend que 5 minutes et elle change tout. Elle garde la mie moelleuse pendant que l’extérieur dore, et elle lie le fromage fondu. Il faut juste la laisser tiédir avant de l’étaler, sinon le pain s’imbibe.",
    "Ce qui peut rater : un croque mou, si la béchamel était trop chaude ou trop liquide, ou pâle dessous, si on oublie de le retourner. La version gratinée et le croque-madame sont dans les variantes.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "croque-monsieur",
    "recette croque-monsieur",
    "croque-monsieur béchamel",
    "croque-monsieur au four",
    "croque-monsieur maison",
    "croque-monsieur facile",
    "croque-madame",
    "béchamel pour croque-monsieur",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 20 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  equipment: ["petite casserole", "fouet", "plaque de four et papier cuisson", "spatule large", "râpe à fromage"],
  ingredients: [
    {
      title: "La béchamel",
      items: [
        { qty: 20, unit: "g", name: "beurre doux", step: 5 },
        { qty: 20, unit: "g", name: "farine", step: 5 },
        { qty: 200, unit: "ml", name: "lait entier", note: "froid", step: 10 },
        { name: "sel fin et poivre" },
        { qty: 1, unit: "pincee", name: "noix de muscade", note: "râpée", step: 1 },
      ],
    },
    {
      title: "Les croques",
      items: [
        { qty: 40, unit: "g", name: "beurre doux", note: "mou, pour l’extérieur", step: 5 },
        { qty: 8, unit: "tranche", name: "pain de mie", note: "grandes tranches", step: 2 },
        { qty: 120, unit: "g", name: "comté", note: "ou gruyère, râpé", step: 10 },
        { qty: 4, unit: "tranche", name: "jambon blanc", note: "à la coupe, en tranches fines", step: 1 },
      ],
    },
    {
      title: "Pour servir",
      items: [{ name: "salade verte", note: "assaisonnée", optional: true }],
    },
  ],
  method: [
    {
      title: "La béchamel",
      steps: [
        {
          title: "Faire le roux",
          text: "Préchauffez le four à 220 °C, chaleur statique. Dans une petite casserole, faites fondre 20 g de beurre à feu moyen, ajoutez la farine d’un coup et remuez au fouet 1 à 2 minutes : le mélange mousse et sent le biscuit, sans colorer.",
          timer: { minutes: 2, label: "Roux" },
        },
        {
          title: "Lier au lait",
          text: "Versez le lait froid en une fois en fouettant vivement, puis laissez épaissir 3 à 4 minutes sans cesser de remuer, en raclant bien le fond. La béchamel est prête quand elle est épaisse et fait de grosses bulles lentes. Salez, poivrez, ajoutez la muscade et laissez-la tiédir hors du feu.",
          timer: { minutes: 4, label: "Béchamel" },
          tip: "Le lait froid laisse à la farine le temps de se disperser avant d’épaissir : c’est ce qui évite les grumeaux. S’il en reste, un coup de fouet énergique en vient à bout.",
        },
      ],
    },
    {
      title: "Le montage",
      steps: [
        {
          title: "Beurrer le pain",
          text: "Beurrez une face de chaque tranche de pain de mie avec les 40 g de beurre mou, jusqu’aux bords. Posez 4 tranches sur la plaque couverte de papier cuisson, face beurrée dessous.",
        },
        {
          title: "Garnir les croques",
          text: "Étalez la moitié de la béchamel tiède sur les 4 tranches posées, en vous arrêtant à 5 mm des bords. Ajoutez 60 g de fromage, une tranche de jambon pliée au format du pain, puis le reste du fromage. Tartinez le reste de béchamel sur la face nue des 4 autres tranches et refermez les croques, beurre vers le haut.",
          tip: "Le jambon qui dépasse sèche et noircit au four : repliez-le plutôt que de le laisser déborder.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Dorer au four",
          text: "Enfournez à mi-hauteur pour 8 minutes : le dessus commence à dorer. Retournez les croques avec une spatule large et prolongez 4 à 5 minutes, jusqu’à ce que les deux faces soient bien dorées et que le fromage file sur les côtés.",
          timer: { minutes: 12, label: "Cuisson des croques" },
        },
        {
          title: "Servir aussitôt",
          text: "Coupez les croques en deux en diagonale et servez-les tout de suite, avec une salade verte si vous en avez envie.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que fait la béchamel",
      text: "Cuit dans le beurre puis dans le lait, l’amidon de la farine gonfle et épaissit la sauce à l’approche de l’ébullition. Dans le croque, cette sauce épaisse apporte de l’humidité qui empêche la mie de sécher au four, et l’amidon aide le fromage fondu à rester lié au lieu de rendre son gras.",
    },
    {
      title: "Pourquoi le beurre à l’extérieur",
      text: "Le beurre conduit la chaleur de la plaque vers le pain et apporte les protéines de lait qui brunissent avec les sucres de la mie : c’est la réaction de Maillard, qui s’emballe au-delà de 140 °C environ. Sans beurre, le pain sèche et grille de façon inégale.",
    },
    {
      title: "Quel fromage fond bien",
      text: "Comté, gruyère et emmental sont des pâtes pressées cuites, assez humides et grasses pour fondre en filant. Un fromage très affiné, comme un comté de 24 mois, a perdu une partie de son eau : il fond moins bien et a tendance à rendre de l’huile.",
    },
  ],
  tips: [
    "Prenez un pain de mie à grandes tranches, pas trop moelleux : il supporte mieux la béchamel et dore plus régulièrement.",
    "Râpez le fromage vous-même. Le râpé en sachet est souvent enrobé d’un antiagglomérant (amidon ou cellulose) et fond moins bien.",
    "Un beurre mou, pas fondu : il s’étale en couche fine jusqu’aux bords sans imbiber la mie.",
    "Une fine couche de moutarde sur le jambon réveille le croque, si vous aimez.",
  ],
  mistakes: [
    "Étaler la béchamel brûlante. La mie s’imbibe et le croque devient spongieux.",
    "Faire une béchamel trop liquide. Elle coule sur la plaque et détrempe le pain ; elle doit être épaisse comme une pâte à tartiner.",
    "Trop garnir. Le fromage déborde, brûle sur la plaque, et le croque se défait à la découpe.",
    "Oublier de retourner les croques. Le dessous reste pâle et mou.",
  ],
  variations: [
    {
      title: "Croque-madame",
      text: "Pendant la cuisson des croques, faites cuire 4 œufs au plat dans une poêle beurrée, à feu doux, 3 à 4 minutes : le blanc doit être pris et le jaune encore coulant. Posez-en un sur chaque croque au moment de servir. Pour les femmes enceintes et les jeunes enfants, cuisez l’œuf jusqu’à ce que le jaune soit pris.",
    },
    {
      title: "Gratiné façon brasserie",
      text: "Doublez la béchamel (40 g de beurre, 40 g de farine, 400 ml de lait) et prévoyez 60 g de fromage en plus. Ne beurrez pas le dessus : tartinez-le de béchamel, parsemez de fromage et enfournez 10 minutes sans retourner, puis 2 à 3 minutes sous le gril, jusqu’à ce que ça bouillonne et dore.",
    },
    {
      title: "À la poêle, sans béchamel",
      text: "La version de café la plus simple : jambon et fromage entre deux tranches beurrées à l’extérieur, cuites dans une poêle à feu moyen-doux 3 à 4 minutes de chaque côté, sous un couvercle pour que le fromage fonde avant que le pain ne brûle.",
    },
  ],
  storage:
    "Ils se mangent chauds, à la sortie du four. Cuits, ils se gardent 2 jours au réfrigérateur dans une boîte fermée ; réchauffez-les 8 à 10 minutes au four à 180 °C, jusqu’à ce qu’ils soient chauds à cœur. Au micro-ondes, ils ramollissent.",
  pairing: "Un rouge léger servi frais, un beaujolais ou un gamay de Touraine, ou une bière blonde.",
  faq: [
    {
      q: "Quelle est la différence entre un croque-monsieur et un croque-madame ?",
      a: "Un œuf. Le croque-madame est un croque-monsieur sur lequel on pose un œuf au plat. Le jaune reste coulant, sauf pour les femmes enceintes, les jeunes enfants et les personnes fragiles : pour eux, cuisez-le jusqu’à ce qu’il soit pris.",
    },
    {
      q: "Faut-il mettre de la béchamel dans un croque-monsieur ?",
      a: "Ce n’est pas obligatoire : le croque de café le plus simple n’en a pas. La béchamel le rend plus moelleux et plus gourmand, à l’intérieur comme ici, ou gratinée sur le dessus dans la version brasserie.",
    },
    {
      q: "Quel fromage mettre dans un croque-monsieur ?",
      a: "Un fromage qui fond en filant : comté, gruyère ou emmental. Le comté a le plus de goût. Évitez les fromages très affinés, qui fondent mal et rendent du gras.",
    },
    {
      q: "Peut-on faire un croque-monsieur sans four ?",
      a: "Oui, à la poêle : à feu moyen-doux, 3 à 4 minutes par face, avec un couvercle pour que le fromage fonde avant que le pain ne brûle. Un appareil à croque-monsieur marche aussi, en 4 à 5 minutes.",
    },
    {
      q: "Comment éviter un croque-monsieur mou ?",
      a: "Laissez tiédir la béchamel avant de l’étaler, faites-la bien épaisse, beurrez l’extérieur jusqu’aux bords et retournez les croques à mi-cuisson. Servez-les dès la sortie du four.",
    },
    {
      q: "Peut-on préparer des croque-monsieur à l’avance ?",
      a: "Oui, quelques heures. Assemblez-les, filmez-les et gardez-les au réfrigérateur jusqu’à 4 heures, puis enfournez-les au dernier moment en ajoutant 2 minutes de cuisson. Au-delà, la mie se gorge de béchamel.",
    },
  ],
  nutrition: {
    calories: 495,
    protein: 24,
    fat: 29,
    saturatedFat: 17,
    carbs: 34,
    sugar: 5,
    fiber: 2,
    sodium: 760,
  },
  annotations: {
    hero: "béchamel dedans, beurre dehors",
    detail: "le fromage doit filer",
  },
  images: {
    heroAlt:
      "Croque-monsieur doré coupé en deux triangles sur une assiette blanche, jambon et fromage fondu à l’intérieur",
    detailAlt: "Croque-monsieur en gros plan, pain grillé et fromage fondu qui coule sur les côtés",
    credits: {
      hero: { photographer: "MikeGz", url: "https://www.pexels.com/photo/14941252/" },
      detail: { photographer: "Mel Audelo", url: "https://www.pexels.com/photo/26936288/" },
    },
  },
  datePublished: "2026-11-06",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B9772F",
    onAccent: "#1b1712",
    ink: "#7E4A16",
    tint: "#F8EEE2",
    deep: "#1b130b",
    focus: "55% 46%",
  },
});
