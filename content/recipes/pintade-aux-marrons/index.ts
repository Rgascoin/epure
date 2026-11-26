import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "pintade-aux-marrons",
  title: "Pintade aux marrons",
  seoTitle: "Pintade aux marrons rôtie : beurre sous la peau et jus court",
  tagline: "Une volaille de fête pour quatre.",
  description:
    "Pintade aux marrons pour 4 : une pintade de 1,4 kg beurrée sous la peau, dorée en cocotte puis 55 minutes à 190 °C, 400 g de marrons glacés dans le jus.",
  summary:
    "Pour 4 personnes, glissez 40 g de beurre au thym sous la peau d’une pintade de 1,3 à 1,5 kg, faites-la dorer 10 minutes en cocotte, puis rôtissez-la 55 minutes à 190 °C avec 6 échalotes, en ajoutant 400 g de marrons cuits sous vide au bout de 30 minutes. Elle est cuite à 74 °C dans la cuisse. Pendant ses 10 minutes de repos, on glace les marrons et on déglace le jus au vin blanc. Comptez 1 h 50 en tout, dont 25 minutes de préparation.",
  intro: [
    "La pintade a plus de goût que le poulet et presque pas de gras. C’est sa qualité et son piège : rôtie comme un poulet, à four très chaud et sans protection, elle ressort avec des blancs secs et une peau tendue. On lui glisse donc du beurre au thym sous la peau, on la colore d’abord en cocotte, et on finit au four à 190 °C, sans couvercle.",
    "Les marrons, on les prend cuits, sous vide. C’est le choix normal ici, pas une facilité : ils n’ont qu’à chauffer et à boire le jus de cuisson. Ajoutés au bout de 30 minutes, ils restent entiers. Mis au début, ils s’effritent dans le plat.",
    "Le thermomètre tranche le reste : 74 °C dans l’épaisseur de la cuisse, puis 10 minutes de repos sous une feuille d’aluminium, le temps de glacer les marrons et de faire le jus.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "pintade aux marrons",
    "recette pintade aux marrons",
    "pintade rôtie aux marrons",
    "pintade au four",
    "temps de cuisson pintade",
    "pintade de noël",
    "pintade aux marrons et échalotes",
    "comment découper une pintade",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 75, rest: 10 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Automne", "Hiver"],
  tags: ["noel"],
  equipment: [
    "cocotte ovale en fonte de 29 à 31 cm, ou plat à rôtir allant sur le feu",
    "thermomètre à sonde",
    "ficelle de cuisine",
    "planche à découper avec rigole",
    "couteau à désosser ou petit couteau pointu",
  ],
  ingredients: [
    {
      title: "La pintade",
      items: [
        {
          qty: 1,
          name: "pintade fermière",
          plural: "pintades fermières",
          note: "1,3 à 1,5 kg, prête à cuire",
          step: 1,
        },
        { qty: 40, unit: "g", name: "beurre doux", note: "très mou, pour sous la peau", step: 5 },
        { qty: 3, unit: "brin", name: "thym", step: 1 },
        { qty: 1, unit: "cas", name: "huile de tournesol", step: 0.5 },
        { name: "sel fin" },
        { name: "poivre" },
      ],
    },
    {
      title: "Les marrons et le jus",
      items: [
        { qty: 6, name: "échalote", plural: "échalotes", note: "pelées, coupées en deux", step: 1 },
        { qty: 25, unit: "cl", name: "bouillon de volaille", step: 5 },
        { qty: 400, unit: "g", name: "marrons cuits sous vide", step: 50 },
        { qty: 20, unit: "g", name: "beurre doux", step: 5 },
        { qty: 10, unit: "cl", name: "vin blanc sec", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Préparer et rôtir",
      steps: [
        {
          title: "Préparer le beurre",
          text: "Préchauffez le four à 190 °C, chaleur statique. Effeuillez deux brins de thym et écrasez les feuilles à la fourchette avec les 40 g de beurre très mou, une bonne pincée de sel et un tour de poivre. Le mélange doit être souple comme une pommade.",
        },
        {
          title: "Beurrer sous la peau",
          text: "Côté cou, glissez les doigts entre la peau et les blancs, ongles vers la chair, et décollez doucement sans percer. Poussez le beurre dans cette poche, puis lissez-le de l’extérieur pour couvrir les deux blancs. Salez et poivrez la pintade dehors et dedans, mettez le dernier brin de thym à l’intérieur et ficelez les cuisses.",
          tip: "Avancez par petites poussées, du cou vers les cuisses : une peau déchirée laisse fuir le beurre.",
        },
        {
          title: "Dorer en cocotte",
          text: "Chauffez l’huile dans la cocotte sur feu moyen. Faites dorer la pintade sur chaque flanc, puis sur le dos et sur les blancs, 2 à 3 minutes par face, 10 minutes en tout. La peau doit être blonde et grésiller doucement, pas fumer : le beurre sous la peau brûle vite.",
          timer: { minutes: 10, label: "Coloration en cocotte" },
        },
        {
          title: "Enfourner avec les échalotes",
          text: "Posez la pintade sur le dos, blancs vers le haut, et répartissez les échalotes autour. Versez 5 cl de bouillon au fond pour que les sucs ne brûlent pas. Enfournez sans couvercle pour 30 minutes, en arrosant la pintade avec le jus du fond au bout de 15 minutes.",
          timer: { minutes: 30, label: "Rôtir, 1re étape" },
        },
        {
          title: "Ajouter les marrons",
          text: "Sortez la cocotte, ajoutez les marrons autour de la volaille et roulez-les dans le jus avec une cuillère. Arrosez la pintade et remettez au four 20 à 25 minutes. Les échalotes doivent devenir fondantes et brunes sur les bords, la peau d’un doré profond.",
          timer: { minutes: 25, label: "Rôtir avec les marrons" },
          tip: "Si les blancs colorent trop vite, posez dessus une feuille d’aluminium, sans la serrer.",
        },
        {
          title: "Contrôler à 74 °C",
          text: "Piquez la sonde dans la partie la plus épaisse de la cuisse, sans toucher l’os : elle doit indiquer 74 °C, et le jus qui perle doit être clair. Sinon, remettez 5 minutes au four et mesurez à nouveau.",
          timer: { minutes: 5, label: "Cuisson supplémentaire" },
          tip: "Mesurez toujours dans la cuisse : c’est la partie qui cuit en dernier.",
        },
      ],
    },
    {
      title: "Finir et servir",
      steps: [
        {
          title: "Laisser reposer",
          text: "Posez la pintade sur la planche, couvrez-la d’une feuille d’aluminium sans serrer et laissez-la reposer 10 minutes. Pendant ce temps, glacez les marrons et préparez le jus dans la cocotte.",
          timer: { minutes: 10, label: "Repos de la pintade" },
        },
        {
          title: "Glacer les marrons",
          text: "Remettez la cocotte sur feu moyen avec les marrons, les échalotes et les 20 g de beurre. Roulez-les 3 à 4 minutes dans les sucs : ils doivent briller et prendre une couleur caramel. Débarrassez-les dans le plat de service, au chaud.",
          timer: { minutes: 4, label: "Glacer les marrons" },
        },
        {
          title: "Déglacer le jus",
          text: "Retirez à la cuillère l’excès de gras. Versez le vin blanc, grattez les sucs du fond et laissez réduire de moitié, 2 minutes. Ajoutez le reste du bouillon et le jus rendu par la pintade sur la planche, puis faites réduire 5 minutes, jusqu’à ce que le jus nappe légèrement une cuillère. Goûtez, salez si besoin.",
          timer: { minutes: 7, label: "Réduire le jus" },
        },
        {
          title: "Découper en six morceaux",
          text: "Incisez la peau entre cuisse et corps, écartez la cuisse jusqu’à ce que l’articulation cède et tranchez-la. Séparez le pilon du haut de cuisse à la jointure. Recommencez de l’autre côté. Entaillez le long du bréchet et glissez la lame contre la carcasse pour lever chaque blanc avec son aile. Servez sur les marrons, le jus à part.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le beurre sous la peau",
      text: "La chair de pintade contient très peu de graisse. En fondant entre la peau et les blancs, le beurre arrose la viande de l’intérieur pendant toute la cuisson et ralentit son dessèchement. Ses protéines de lait et ses sucres aident aussi la peau à dorer.",
    },
    {
      title: "Les sucs font le jus",
      text: "La coloration en cocotte déclenche les réactions de Maillard : la peau brunit et des sucs collent au fond. Le vin blanc les dissout au déglaçage. Sans cette étape, le jus resterait pâle et plat, et les marrons n’auraient rien à boire.",
    },
    {
      title: "Pourquoi 74 °C dans la cuisse",
      text: "La cuisse, épaisse et proche de l’os, chauffe plus lentement que les blancs. À 74 °C à cet endroit, toute la volaille a atteint une température qui détruit les salmonelles et les campylobacters. Pendant le repos, la température continue de monter de quelques degrés et les jus se répartissent dans la chair.",
    },
  ],
  tips: [
    "Choisissez une pintade fermière : sa chair, plus ferme, supporte mieux la cuisson au four.",
    "Sortez le beurre une heure avant : froid, il déchire la peau au lieu de glisser dessous.",
    "Égouttez les marrons sous vide et séparez-les du bout des doigts avant de les ajouter : collés en bloc, ils se cassent dans le plat.",
    "Gardez la carcasse : avec un oignon et une carotte, elle donne un bouillon pour le lendemain.",
  ],
  mistakes: [
    "La rôtir comme un poulet, à 210 °C sans beurre : les blancs sèchent bien avant que la cuisse soit cuite. Le beurre sous la peau et 190 °C règlent le problème.",
    "Mettre les marrons dès le début : au bout d’une heure, ils s’effritent et deviennent farineux. Ils n’ont besoin que de 20 à 25 minutes dans le jus.",
    "Laisser le fond de la cocotte à sec : les sucs noircissent et le jus devient amer. Ajoutez une cuillère d’eau dès que le fond fume.",
    "Découper la pintade à la sortie du four : le jus coule sur la planche au lieu de rester dans la chair. Dix minutes de repos suffisent.",
  ],
  variations: [
    {
      title: "Bardée au lard",
      text: "Remplacez le beurre sous la peau par 4 fines tranches de poitrine fumée posées sur les blancs et ficelées. Retirez-les pour les 15 dernières minutes afin que la peau dore.",
    },
    {
      title: "Aux champignons",
      text: "Ajoutez 250 g de champignons de Paris coupés en quatre en même temps que les marrons. Ils rendent de l’eau : laissez réduire le jus 2 minutes de plus.",
    },
    {
      title: "Avec des cuisses de pintade",
      text: "Faites dorer 4 cuisses côté peau 5 minutes, puis rôtissez-les 40 minutes à 190 °C, en ajoutant les marrons au bout de 20 minutes. Même contrôle : 74 °C près de l’os.",
    },
  ],
  storage:
    "Les restes se gardent 2 à 3 jours au réfrigérateur, dans une boîte fermée, la viande avec les marrons et le jus. Réchauffez-les couverts, à feu doux ou au four à 150 °C, jusqu’à ce que la viande soit brûlante à cœur. Ne recongelez jamais une volaille qui a déjà été décongelée.",
  pairing: "Un rouge souple et fruité, comme un bourgogne ou un chinon, servi un peu frais.",
  faq: [
    {
      q: "Quelle température à cœur pour une pintade ?",
      a: "74 °C, mesurés dans la partie la plus épaisse de la cuisse, sans toucher l’os. C’est la température de sécurité pour toute volaille. Les blancs sont alors cuits eux aussi, et ils restent moelleux grâce au beurre glissé sous la peau.",
    },
    {
      q: "Combien de temps cuire une pintade de 1,4 kg au four ?",
      a: "55 minutes environ à 190 °C, après 10 minutes de coloration en cocotte. Une pintade de 1,3 kg peut être prête 5 minutes plus tôt, une de 1,5 kg demander 5 minutes de plus : seul le thermomètre, à 74 °C dans la cuisse, dit quand c’est cuit.",
    },
    {
      q: "Peut-on utiliser des marrons frais ?",
      a: "Oui, mais il faut les éplucher et les cuire avant. Incisez-les, plongez-les quelques minutes dans l’eau bouillante, retirez les deux peaux à chaud, puis laissez-les mijoter dans du bouillon jusqu’à ce qu’ils soient tendres. C’est long et fastidieux, c’est pourquoi les marrons cuits sous vide restent le choix normal.",
    },
    {
      q: "Faut-il couvrir la pintade au four ?",
      a: "Non. Couverte, elle cuit à la vapeur et sa peau reste molle. Laissez la cocotte ouverte et arrosez-la. Si les blancs colorent trop tôt, une feuille d’aluminium posée dessus, sans la serrer, suffit.",
    },
    {
      q: "Combien de personnes nourrit une pintade ?",
      a: "4 personnes pour une pintade de 1,3 à 1,5 kg, découpée en 6 morceaux : deux pilons, deux hauts de cuisse et deux blancs avec leur aile. Pour 6 ou 8, rôtissez deux pintades côte à côte dans un grand plat.",
    },
    {
      q: "Peut-on préparer la pintade aux marrons la veille ?",
      a: "Non pour la rôtir : réchauffée, la peau ramollit et les blancs sèchent. En revanche, le beurre au thym peut être glissé sous la peau la veille ; gardez alors la pintade filmée au réfrigérateur et sortez-la 30 minutes avant de la dorer.",
    },
  ],
  nutrition: {
    calories: 575,
    protein: 44,
    fat: 26,
    saturatedFat: 9,
    carbs: 41,
    sugar: 11,
    fiber: 6,
    sodium: 700,
  },
  annotations: { hero: "74 °C dans la cuisse, pas ailleurs", detail: "peau blonde, pas brûlée : feu moyen" },
  images: {
    heroAlt:
      "Pintade rôtie entière à la peau dorée, posée sur un plat blanc parmi des légumes rôtis, une carafe de vin rouge derrière.",
    detailAlt:
      "Gros plan sur la cuisse d’une pintade rôtie, peau dorée et brillante, entourée de pommes de terre et de choux de Bruxelles.",
    credits: {
      hero: {
        photographer: "Jeremy Keith",
        url: "https://commons.wikimedia.org/w/index.php?curid=39555444",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Jeremy Keith",
        url: "https://commons.wikimedia.org/w/index.php?curid=39555444",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
    },
  },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  hero,
  detail,
  theme: {
    accent: "#C06A2B",
    onAccent: "#1B1712",
    ink: "#8A4317",
    tint: "#F9EEE4",
    deep: "#1B0F08",
    focus: "55% 50%",
  },
});
