import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tajine-de-poulet-citron",
  title: "Tajine de poulet aux citrons confits et olives",
  seoTitle: "Tajine de poulet aux citrons confits, olives et safran",
  tagline: "Les citrons confits font presque tout.",
  description:
    "Tajine de poulet pour 4 : hauts de cuisse au safran et au gingembre, citrons confits et olives vertes, 1 h 20 à feu doux, en tajine ou en cocotte.",
  summary:
    "Pour 4 personnes, faites mariner 8 hauts de cuisse de poulet 30 minutes avec ail, gingembre, curcuma, safran et herbes, puis laissez-les mijoter 45 minutes sur des oignons fondus, avec 20 cl d’eau. Ajoutez 2 citrons confits en lanières et 150 g d’olives vertes pour 15 minutes, puis faites réduire la sauce. Le poulet doit atteindre 74 °C à cœur. Comptez 2 h 15 en tout, dont 25 minutes de travail.",
  intro: [
    "Le tajine porte le nom du plat en terre dans lequel il cuit, coiffé de son couvercle en cône. Celui-ci est l’un des plus connus de la cuisine marocaine : du poulet qui confit dans ses oignons, parfumé au safran et au gingembre, avec des citrons confits et des olives vertes.",
    "Il se rate quand on le cuit trop fort ou qu’on le sale comme d’habitude. Le feu reste bas du début à la fin, et le sel attend le dernier moment : les citrons et les olives en apportent déjà beaucoup.",
    "On prend des hauts de cuisse, parce que les blancs sèchent en une heure de mijotage. Et si vous n’avez pas de tajine, une cocotte en fonte avec son couvercle fait le même travail.",
  ],
  category: "Plat",
  cuisine: "Marocaine",
  keywords: [
    "tajine de poulet",
    "tajine de poulet aux citrons confits",
    "tajine poulet citron olives",
    "recette tajine de poulet",
    "tajine de poulet en cocotte",
    "poulet aux citrons confits",
    "tajine poulet safran",
    "tajine de poulet marocain",
  ],
  diet: ["glutenFree", "lowLactose"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 80, rest: 30 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "plat à tajine de 30 cm ou cocotte en fonte de 4 l",
    "diffuseur de chaleur pour une tajine en terre",
    "thermomètre à sonde",
    "petite casserole",
  ],
  ingredients: [
    {
      title: "La marinade",
      items: [
        { qty: 1, unit: "pincee", name: "safran en pistils", note: "une dose de 0,1 g", step: 1 },
        { qty: 2, unit: "cas", name: "eau tiède", step: 1 },
        { qty: 3, unit: "gousse", name: "ail", note: "râpées", step: 1 },
        { qty: 1, unit: "cac", name: "gingembre en poudre", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "curcuma", step: 0.5 },
        { qty: 0.5, unit: "cac", name: "poivre noir moulu", step: 0.5 },
        { qty: 4, unit: "cas", name: "coriandre fraîche", note: "hachée", step: 1 },
        { qty: 4, unit: "cas", name: "persil plat", note: "haché", step: 1 },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
      ],
    },
    {
      title: "Le tajine",
      items: [
        {
          qty: 8,
          name: "haut de cuisse de poulet",
          plural: "hauts de cuisse de poulet",
          note: "avec la peau et l’os, 1,3 kg environ",
          step: 1,
        },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 2, name: "oignon", plural: "oignons", note: "300 g, émincés très finement", step: 1 },
        { qty: 20, unit: "cl", name: "eau", step: 5 },
        { qty: 2, name: "citron confit", plural: "citrons confits", note: "au sel", step: 1 },
        { qty: 150, unit: "g", name: "olives vertes", note: "ou violettes, égouttées", step: 25 },
        { name: "sel fin", note: "seulement à la fin, si besoin" },
      ],
    },
  ],
  method: [
    {
      title: "La marinade",
      steps: [
        {
          title: "Infuser le safran",
          text: "Émiettez le safran du bout des doigts dans un saladier, versez dessus 2 cuillerées d’eau tiède et laissez infuser 10 minutes : l’eau prend une couleur orange vif. Ajoutez l’ail, le gingembre, le curcuma, le poivre, la moitié des herbes et l’huile, et mélangez.",
          timer: { minutes: 10, label: "Safran qui infuse" },
        },
        {
          title: "Mariner le poulet",
          text: "Enrobez les hauts de cuisse de cette pâte, en la glissant aussi sous la peau. Laissez mariner 30 minutes à température ambiante, ou jusqu’au lendemain au réfrigérateur, couvert.",
          timer: { minutes: 30, label: "Marinade" },
          tip: "Gardez les mains ou une cuillère pour le poulet cru, et lavez-les avant de toucher aux herbes du service.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Faire fondre les oignons",
          text: "Posez la tajine sur un diffuseur, ou la cocotte directement sur le feu. Chauffez 2 cuillerées d’huile à feu moyen-doux, ajoutez les oignons et laissez-les fondre 10 minutes en remuant souvent, jusqu’à ce qu’ils soient tendres et à peine blonds.",
          timer: { minutes: 10, label: "Oignons fondus" },
          tip: "Une tajine en terre ne supporte ni le feu vif ni les écarts de température brusques : elle peut se fendre.",
        },
        {
          title: "Mijoter le poulet",
          text: "Posez les hauts de cuisse sur les oignons, peau dessus, avec toute la marinade. Versez 20 cl d’eau sur les bords, couvrez et laissez mijoter 45 minutes à feu doux, en retournant les morceaux à mi-cuisson. Ça doit frémir doucement, jamais bouillir.",
          timer: { minutes: 45, label: "Poulet qui mijote" },
        },
        {
          title: "Préparer citrons et olives",
          text: "Pendant ce temps, rincez les citrons confits, coupez-les en quartiers et retirez la pulpe et les pépins. Taillez l’écorce en lanières de 1 cm. Si les olives sont très salées ou amères, plongez-les 2 minutes dans la petite casserole d’eau bouillante, puis égouttez-les.",
          timer: { minutes: 2, label: "Olives blanchies" },
        },
        {
          title: "Ajouter citrons et olives",
          text: "Répartissez les lanières de citron et les olives autour du poulet, couvrez et poursuivez 15 minutes. Piquez le thermomètre dans le plus gros morceau, contre l’os : il doit indiquer 74 °C.",
          timer: { minutes: 15, label: "Citrons et olives" },
          tip: "Goûtez une lanière de citron : si elle est encore très salée, n’ajoutez aucun sel.",
        },
        {
          title: "Réduire la sauce",
          text: "Retirez le couvercle et laissez réduire 5 à 10 minutes à feu doux, jusqu’à ce que la sauce nappe la cuillère et que les oignons s’y soient fondus. Goûtez, salez seulement si besoin, parsemez du reste des herbes et servez dans le plat.",
          timer: { minutes: 10, label: "Sauce qui réduit" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que le sel fait au citron",
      text: "Des semaines dans le sel et leur propre jus ramollissent l’écorce des citrons et atténuent l’amertume de la peau blanche. L’écorce devient tendre, salée et parfumée, sans l’acidité vive du citron frais. C’est elle qu’on mange, la pulpe est surtout du sel.",
    },
    {
      title: "Pourquoi infuser le safran",
      text: "Les pigments du safran, les crocines, se dissolvent dans l’eau. Infusé quelques minutes dans de l’eau tiède, il colore et parfume toute la sauce ; jeté directement sur la viande, ses pistils restent en petits points rouges.",
    },
    {
      title: "La cuisse plutôt que le blanc",
      text: "La cuisse contient plus de collagène et de gras que le blanc. Une heure à frémissement la rend fondante, alors qu’un blanc, dont les fibres se resserrent nettement au-delà de 70 °C, devient sec et filandreux. Les deux doivent atteindre 74 °C à cœur.",
    },
    {
      title: "Une sauce liée par les oignons",
      text: "Émincés très finement et cuits longtemps à feu doux, les oignons se défont complètement. Leurs fibres et leurs sucres épaississent la sauce, sans farine ni fécule.",
    },
  ],
  tips: [
    "Émincez les oignons le plus finement possible, ou râpez-les : ils doivent disparaître dans la sauce.",
    "Les citrons confits se trouvent en bocal dans les épiceries orientales et au rayon du monde des supermarchés. Faits maison, il leur faut au moins un mois dans le sel.",
    "Une cuillerée à café de pulpe de citron confit, hachée et ajoutée avec l’eau, rend la sauce plus acidulée.",
    "Servez dans le plat de cuisson, avec du pain pour saucer : la sauce est la meilleure partie.",
  ],
  mistakes: [
    "Saler la marinade comme pour un poulet ordinaire : avec les citrons et les olives, la sauce devient trop salée. Rattrapez avec un peu d’eau et un filet de jus de citron frais.",
    "Cuire à feu vif : le fond attache, les oignons brûlent au lieu de fondre, et une tajine en terre peut se fendre. Le diffuseur et le feu doux ne sont pas facultatifs.",
    "Oublier de rincer les citrons confits : leur saumure sale tout le plat. Un passage sous l’eau froide suffit.",
    "Utiliser des blancs à la place des cuisses : ils sèchent en une heure. Si vous y tenez, ajoutez-les seulement 40 minutes avant la fin.",
  ],
  variations: [
    {
      title: "Avec un poulet entier",
      text: "Coupez un poulet de 1,6 kg en 8 morceaux. Faites mijoter les cuisses seules 30 minutes, ajoutez les blancs pour les 15 minutes restantes, puis les citrons et les olives comme dans la recette. Vérifiez les 74 °C dans les blancs aussi.",
    },
    {
      title: "Aux pommes de terre",
      text: "Glissez 500 g de pommes de terre à chair ferme, coupées en quartiers, sous le poulet au moment de le poser sur les oignons, et ajoutez 10 cl d’eau. Elles cuisent dans la sauce et rendent le plat complet.",
    },
    {
      title: "Au four, en cocotte",
      text: "Après les oignons, posez le poulet et la marinade dans la cocotte, couvrez et enfournez 45 minutes à 170 °C. Ajoutez les citrons et les olives pour 15 minutes, puis réduisez la sauce sur le feu.",
    },
  ],
  storage:
    "Le tajine se garde 2 à 3 jours au réfrigérateur dans une boîte fermée, une fois refroidi dans les 2 heures. Réchauffez-le à couvert, à feu doux, jusqu’à ce qu’il soit bien chaud à cœur. Il se congèle 3 mois ; décongelez-le au réfrigérateur et ne le recongelez pas.",
  pairing:
    "Du pain rond pour saucer, ou une semoule nature. Une salade de carottes au cumin et à l’orange en entrée, et du thé à la menthe pour finir.",
  faq: [
    {
      q: "Peut-on faire un tajine sans plat à tajine ?",
      a: "Oui. Une cocotte en fonte avec un couvercle lourd donne le même résultat, avec un feu doux et les mêmes temps de cuisson. Ajoutez simplement 5 cl d’eau de plus, car le couvercle plat laisse s’échapper un peu plus de vapeur.",
    },
    {
      q: "Peut-on remplacer les citrons confits par des citrons frais ?",
      a: "Non, pas vraiment. Le citron frais apporte de l’acidité mais pas le goût salé et doux de l’écorce confite. À défaut, ajoutez le zeste d’un citron et son jus à la fin, et salez un peu plus : ce sera un bon poulet au citron, mais pas ce tajine.",
    },
    {
      q: "Mange-t-on la peau du citron confit ?",
      a: "Oui, c’est même la partie qu’on mange. L’écorce, rincée et coupée en lanières, est tendre et parfumée. La pulpe, très salée, se retire en général, ou s’utilise en petite quantité pour relever la sauce.",
    },
    {
      q: "À quelle température le poulet est-il cuit ?",
      a: "74 °C à cœur, mesurés au thermomètre dans le plus gros morceau, contre l’os. Avec des hauts de cuisse mijotés 1 heure à feu doux, on y arrive largement. Sans thermomètre, le jus doit couler clair quand on pique près de l’os.",
    },
    {
      q: "Peut-on préparer le tajine de poulet la veille ?",
      a: "Oui, il est même meilleur réchauffé. Gardez-le 2 à 3 jours au réfrigérateur et réchauffez-le à couvert, à feu doux, avec un peu d’eau si la sauce a trop épaissi.",
    },
    {
      q: "Avec quoi servir un tajine de poulet ?",
      a: "Avec du pain, d’abord, pour saucer. Une semoule nature ou des pommes de terre cuites dans le tajine conviennent aussi. Évitez les accompagnements très salés : le plat l’est déjà.",
    },
  ],
  nutrition: {
    calories: 600,
    protein: 41,
    fat: 45,
    saturatedFat: 11,
    carbs: 7,
    sugar: 4,
    fiber: 3,
    sodium: 1200,
  },
  annotations: { hero: "le couvercle se soulève à table", detail: "l’écorce confite, pas la pulpe" },
  images: {
    heroAlt:
      "Tajine de poulet aux citrons confits et olives vertes dans un plat en terre bleu, couvercle soulevé",
    detailAlt:
      "Tajine de poulet, quartiers de citron confit et olives vertes dans un plat émaillé violet, couvercle entrouvert",
    credits: {
      hero: { photographer: "Zak Chapman", url: "https://www.pexels.com/photo/yellow-corn-2287524/" },
      detail: { photographer: "Zak Chapman", url: "https://www.pexels.com/photo/purple-ceramic-jar-2291603/" },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#D9A21B",
    onAccent: "#1B1712",
    ink: "#7A5600",
    tint: "#FBF5E0",
    deep: "#1A1406",
    focus: "57% 62%",
  },
});
