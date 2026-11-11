import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "lasagnes-a-la-bolognaise",
  title: "Lasagnes à la bolognaise",
  seoTitle: "Lasagnes à la bolognaise : vrai ragù et béchamel maison",
  tagline: "Le ragù prend son temps, pas vous.",
  description:
    "Lasagnes à la bolognaise dans les règles : un ragù au vin blanc et au lait mijoté 2 heures, une béchamel maison, du parmesan et 40 minutes de four.",
  summary:
    "Pour 6 personnes, les lasagnes à la bolognaise demandent d’abord un ragù : 600 g de bœuf haché et 100 g de pancetta revenus avec oignon, carotte et céleri, déglacés au vin blanc puis mijotés 2 heures avec 400 g de coulis de tomate et 20 cl de lait. Montez 4 couches de pâtes, ragù, béchamel (1 l de lait) et parmesan dans un plat de 30 × 22 cm, enfournez 40 à 45 minutes à 180 °C et laissez reposer 15 minutes. Comptez un peu plus de 4 heures, dont 45 minutes de travail.",
  intro: [
    "Les lasagnes à la bolognaise sont d’abord une histoire de ragù. Pas une sauce tomate avec de la viande dedans, mais de la viande qui a mijoté deux heures avec un peu de tomate, du vin blanc et du lait, jusqu’à devenir tendre et brillante.",
    "Le reste, c’est du montage : une béchamel nappante, des feuilles de pâtes, du parmesan, quatre fois de suite. Ce qui fait rater des lasagnes, c’est un ragù trop sec (les pâtes restent dures sur les bords) ou trop d’impatience à la sortie du four. Coupées tout de suite, les couches glissent les unes sur les autres.",
    "Ça prend du temps, mais assez peu de travail. Et le ragù se fait très bien la veille, ce qui rend le jour même beaucoup plus calme.",
  ],
  category: "Plat",
  cuisine: "Italienne",
  keywords: [
    "lasagnes à la bolognaise",
    "lasagnes bolognaise",
    "recette lasagnes maison",
    "lasagnes bolognaise béchamel",
    "lasagnes traditionnelles italiennes",
    "ragù bolognais",
    "lasagnes à l’avance",
    "temps de cuisson lasagnes",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 45, cook: 190, rest: 15 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Toute l’année"],
  tags: ["hiver"],
  equipment: [
    "cocotte en fonte ou faitout à fond épais",
    "casserole de 2 l",
    "fouet",
    "plat à gratin de 30 × 22 cm environ",
    "râpe fine",
  ],
  ingredients: [
    {
      title: "Le ragù",
      items: [
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", step: 0.5 },
        { qty: 1, name: "carotte", plural: "carottes", step: 0.5 },
        { qty: 1, unit: "branche", name: "céleri", step: 0.5 },
        { qty: 100, unit: "g", name: "pancetta", note: "en petits dés", step: 10 },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 0.5 },
        { qty: 600, unit: "g", name: "bœuf haché", note: "paleron, 15 % de matières grasses", step: 50 },
        { qty: 15, unit: "cl", name: "vin blanc sec", step: 1 },
        { qty: 2, unit: "cas", name: "concentré de tomate", step: 0.5 },
        { qty: 400, unit: "g", name: "coulis de tomate", note: "passata nature", step: 10 },
        { qty: 25, unit: "cl", name: "bouillon de bœuf", note: "peu salé, ou de l’eau", step: 5 },
        { qty: 20, unit: "cl", name: "lait entier", step: 1 },
        { name: "sel et poivre du moulin" },
      ],
    },
    {
      title: "La béchamel",
      items: [
        { qty: 60, unit: "g", name: "beurre", step: 5 },
        { qty: 60, unit: "g", name: "farine", step: 5 },
        { qty: 100, unit: "cl", name: "lait entier", note: "froid", step: 5 },
        { qty: 1, unit: "pincee", name: "noix de muscade", note: "râpée", step: 1 },
        { qty: 0.5, unit: "cac", name: "sel fin", step: 0.5 },
      ],
    },
    {
      title: "Le montage",
      items: [
        { qty: 20, unit: "g", name: "beurre", note: "pour le plat et le dessus", step: 5 },
        {
          qty: 250,
          unit: "g",
          name: "feuilles de lasagne aux œufs",
          note: "sèches, sans précuisson (12 feuilles environ)",
          step: 10,
        },
        { qty: 100, unit: "g", name: "parmigiano reggiano", note: "râpé finement", step: 10 },
      ],
    },
  ],
  method: [
    {
      title: "Le ragù",
      steps: [
        {
          title: "Hacher le soffritto",
          text: "Épluchez l’oignon et la carotte, effilez le céleri, puis hachez les trois en dés de 3 à 4 mm. Ils doivent presque disparaître dans la sauce. Un robot fait l’affaire, par petites impulsions, pour ne pas les réduire en bouillie.",
        },
        {
          title: "Faire suer les légumes",
          text: "Dans la cocotte, sur feu moyen-doux, faites revenir la pancetta dans l’huile 3 minutes, jusqu’à ce que son gras devienne translucide. Ajoutez les légumes hachés et laissez-les suer 10 minutes en remuant souvent : ils ramollissent et brillent, sans prendre de couleur.",
          timer: { minutes: 13, label: "Pancetta et légumes" },
        },
        {
          title: "Saisir la viande",
          text: "Montez sur feu vif et ajoutez le bœuf par petits morceaux. Écrasez-le à la spatule et laissez-le cuire 8 à 10 minutes : il rend d’abord son eau, puis se met à grésiller et à dorer par endroits. Attendez ce grésillement avant de passer à la suite.",
          timer: { minutes: 9, label: "Viande" },
          tip: "Si votre cocotte fait moins de 24 cm, saisissez la viande en deux fois. Trop serrée, elle bout dans son jus et reste grise.",
        },
        {
          title: "Déglacer au vin",
          text: "Versez le vin blanc, grattez le fond pour décoller les sucs et laissez bouillir 3 minutes, jusqu’à ce que l’odeur d’alcool ait disparu. Ajoutez le concentré de tomate et remuez encore 1 minute.",
          timer: { minutes: 4, label: "Vin et concentré" },
        },
        {
          title: "Mijoter deux heures",
          text: "Ajoutez le coulis, le bouillon, une pincée de sel et du poivre. Portez à frémissement, puis laissez cuire 2 heures à feu très doux, couvercle entrouvert, en remuant toutes les 20 minutes. Au bout de 1 h 30, versez le lait. Le ragù est prêt quand il est épais, que la cuillère laisse un sillon et que le gras brille en surface.",
          timer: { minutes: 120, label: "Mijotage du ragù" },
          tip: "S’il attache avant la fin, ajoutez quelques cuillerées d’eau. Pour des lasagnes, il doit rester un peu plus souple qu’une sauce pour des pâtes : les feuilles sèches vont boire une partie du liquide.",
        },
      ],
    },
    {
      title: "La béchamel",
      steps: [
        {
          title: "Préparer la béchamel",
          text: "Dans la casserole, faites fondre le beurre sur feu moyen, ajoutez la farine et fouettez 2 minutes : le mélange mousse sans colorer. Versez le lait froid d’un coup en fouettant, portez à ébullition sans cesser de fouetter, puis laissez cuire 5 minutes. Elle doit napper la cuillère. Salez, ajoutez la muscade.",
          timer: { minutes: 7, label: "Béchamel" },
        },
      ],
    },
    {
      title: "Le montage et la cuisson",
      steps: [
        {
          title: "Préchauffer et beurrer",
          text: "Préchauffez le four à 180 °C, chaleur statique. Beurrez le plat avec un peu des 20 g de beurre et gardez le reste pour le dessus. Retirez la cocotte du feu : le ragù doit être chaud ou tiède quand vous montez les lasagnes.",
        },
        {
          title: "Monter les couches",
          text: "Étalez une louche de béchamel au fond du plat. Puis répétez quatre fois : une couche de feuilles qui se chevauchent à peine, un quart du ragù, une louche et demie de béchamel et 15 g de parmesan. Terminez par le reste de béchamel, les 40 g de parmesan restants et le beurre en petits morceaux.",
          tip: "Les feuilles doivent être entièrement couvertes de sauce, surtout dans les coins. Une feuille à l’air reste dure et sèche à la cuisson.",
        },
        {
          title: "Cuire au four",
          text: "Enfournez à mi-hauteur pour 40 à 45 minutes. Les lasagnes sont cuites quand le dessus est doré avec des taches plus brunes, que les bords bouillonnent et qu’une lame s’enfonce sans résistance. Si le dessus colore trop vite, couvrez d’une feuille d’aluminium.",
          timer: { minutes: 40, label: "Cuisson au four" },
        },
        {
          title: "Laisser reposer",
          text: "Sortez le plat et attendez 15 minutes avant de couper. Les couches se tiennent, et les parts sortent nettes au lieu de s’effondrer dans l’assiette.",
          timer: { minutes: 15, label: "Repos" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Ce que fait le lait",
      text: "Le lait adoucit l’acidité du vin et de la tomate, et son gras enrobe la viande. Le ragù devient plus rond et plus lié. C’est ce qui le distingue d’une simple sauce tomate à la viande.",
    },
    {
      title: "Pourquoi la viande doit grésiller",
      text: "Tant que la viande baigne dans son eau, la cocotte reste autour de 100 °C et la viande bout. Une fois l’eau évaporée, la surface chauffe davantage et la réaction de Maillard commence : la viande dore et prend du goût. Le grésillement, c’est le signal que l’eau est partie.",
    },
    {
      title: "La béchamel cuit 5 minutes",
      text: "La farine épaissit le lait parce que son amidon gonfle avec la chaleur. Ce n’est qu’à l’ébullition que la sauce atteint son épaisseur finale. Quelques minutes de cuisson lui retirent aussi le goût de farine crue.",
    },
    {
      title: "Pourquoi attendre avant de couper",
      text: "À la sortie du four, la béchamel et le fromage sont presque liquides. En refroidissant un peu, l’amidon de la béchamel se fige et le fromage se raffermit. Les couches collent alors entre elles et la part se tient.",
    },
  ],
  tips: [
    "Demandez à votre boucher du paleron haché à 15 % de matières grasses. Une viande à 5 % sèche pendant deux heures de mijotage.",
    "Faites le ragù la veille. Le lendemain, il a plus de goût et le montage ne prend qu’un quart d’heure.",
    "Si vous prenez des feuilles qui demandent une précuisson, suivez le paquet, ou passez-les 2 minutes dans l’eau bouillante salée.",
    "Râpez le parmesan vous-même, finement. Il fond mieux et colore plus joliment que le râpé en sachet.",
    "Pour des parts nettes, coupez avec un couteau long et une spatule large, et servez avec une pelle à tarte.",
  ],
  mistakes: [
    "Raccourcir le mijotage à une demi-heure. Le ragù garde un goût de tomate crue et la viande reste ferme.",
    "Mettre trop de tomate. On obtient une sauce tomate à la viande, plus acide, au lieu d’un ragù.",
    "Monter les lasagnes avec un ragù trop sec. Les feuilles n’ont pas assez de liquide pour cuire et restent dures sur les bords.",
    "Laisser les coins des feuilles à découvert. Ils sèchent et deviennent cassants au four.",
    "Couper à la sortie du four. Les couches glissent et la sauce coule au fond du plat.",
  ],
  variations: [
    {
      title: "Lasagnes vertes",
      text: "À Bologne, on les fait volontiers avec des pâtes aux épinards. Remplacez les feuilles par 250 g de lasagnes vertes aux œufs, le reste ne change pas.",
    },
    {
      title: "Avec des feuilles fraîches",
      text: "Prenez 400 g de feuilles fraîches et réduisez la cuisson à 30 minutes. Elles demandent moins de liquide : gardez le ragù un peu plus épais.",
    },
    {
      title: "Moitié bœuf, moitié porc",
      text: "Remplacez 200 g de bœuf par 200 g de porc haché. Le ragù est plus doux et plus moelleux, avec un goût de viande un peu moins marqué.",
    },
    {
      title: "Avec de la mozzarella",
      text: "Ce n’est plus la recette classique, mais c’est très bon : ajoutez 1 boule de mozzarella en tranches sur le dessus 15 minutes avant la fin de la cuisson.",
    },
  ],
  storage:
    "Les lasagnes se gardent 3 jours au réfrigérateur, filmées ou en boîte fermée, et 3 mois au congélateur, en parts. Réchauffez-les au four à 160 °C, couvertes, 20 à 25 minutes, jusqu’à ce qu’elles soient brûlantes à cœur.",
  pairing: "Un rouge d’Émilie-Romagne, un sangiovese di romagna, ou un lambrusco sec servi frais.",
  faq: [
    {
      q: "Faut-il précuire les feuilles de lasagne ?",
      a: "Non, pour la plupart des feuilles sèches vendues en France, marquées « sans précuisson ». Il faut alors un ragù assez souple et des feuilles bien couvertes de sauce. Si votre paquet indique une précuisson, suivez-le.",
    },
    {
      q: "Peut-on préparer des lasagnes la veille ?",
      a: "Oui. Montez-les, filmez le plat et gardez-le au réfrigérateur jusqu’à 24 heures. Sortez-le 30 minutes avant d’enfourner et comptez 10 minutes de cuisson en plus. Vous pouvez aussi faire seulement le ragù la veille.",
    },
    {
      q: "Peut-on congeler des lasagnes ?",
      a: "Oui, cuites et en parts, pendant 3 mois. Faites-les décongeler une nuit au réfrigérateur, puis réchauffez-les au four à 160 °C, couvertes, jusqu’à ce qu’elles soient brûlantes au centre. Ne recongelez pas des lasagnes décongelées.",
    },
    {
      q: "Pourquoi mes lasagnes sont-elles liquides ?",
      a: "Le plus souvent, le ragù n’a pas assez réduit, la béchamel était trop fluide, ou les lasagnes ont été coupées trop tôt. Laissez-les reposer 15 minutes : elles se tiennent beaucoup mieux.",
    },
    {
      q: "Quelle viande choisir pour des lasagnes à la bolognaise ?",
      a: "Du bœuf haché à 15 % de matières grasses, idéalement du paleron. Avec un peu de pancetta, ou un tiers de porc haché, le ragù est encore plus moelleux. Évitez le bœuf à 5 %, qui sèche.",
    },
    {
      q: "Par quoi remplacer le vin blanc dans le ragù ?",
      a: "Par le même volume de bouillon. Le vin apporte une acidité qui équilibre le lait, mais le ragù reste très bon sans. Avec deux heures de mijotage, il ne reste qu’une petite part de l’alcool.",
    },
  ],
  nutrition: {
    calories: 810,
    protein: 41,
    fat: 47,
    saturatedFat: 24,
    carbs: 52,
    sugar: 15,
    fiber: 3,
    sodium: 900,
  },
  annotations: {
    hero: "quatre couches, pas une de plus",
    detail: "quinze minutes de repos avant de couper",
  },
  images: {
    heroAlt:
      "Part de lasagnes à la bolognaise gratinées sur une assiette noire, avec des feuilles de basilic et une fourchette dorée",
    detailAlt: "Part de lasagnes vue de côté, couches de pâtes, de ragù et de fromage bien visibles",
    credits: {
      hero: {
        photographer: "alleksana",
        url: "https://www.pexels.com/photo/baked-lasagna-on-a-black-plate-5949903/",
      },
      detail: {
        photographer: "Augusto Carneiro Junior",
        url: "https://www.pexels.com/photo/delicious-cheese-and-meat-lasagna-on-plate-31119092/",
      },
    },
  },
  datePublished: "2026-11-05",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#B82C1F",
    onAccent: "#ffffff",
    ink: "#9C2418",
    tint: "#FBEDEA",
    deep: "#1E0B08",
    focus: "55% 46%",
  },
});
