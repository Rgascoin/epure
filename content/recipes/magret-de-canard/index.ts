import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "magret-de-canard",
  title: "Magret de canard à la poêle",
  seoTitle: "Magret de canard à la poêle, rosé et peau croustillante",
  tagline: "Tout se joue côté peau.",
  description:
    "Magret de canard pour 4 : deux magrets partis à froid côté peau, 15 min de cuisson, 15 min de repos, et une sauce miel et vinaigre faite dans la poêle.",
  summary:
    "Pour 4 personnes, quadrillez la peau de 2 magrets de 350 à 400 g, posez-les dans une poêle froide côté peau et faites fondre la graisse 12 minutes à feu moyen-doux en la vidant régulièrement. Retournez-les 3 minutes, sortez-les à 50–52 °C et laissez-les reposer 15 minutes sous aluminium : ils finissent rosés, à 55–57 °C. La sauce au miel et au vinaigre de Xérès se fait pendant le repos. Comptez 45 minutes en tout.",
  intro: [
    "Un magret, c’est une chair rouge qui se cuit comme une pièce de bœuf, sous une épaisse couche de gras. Tout le travail consiste à faire fondre ce gras jusqu’à ce qu’il ne reste qu’une peau fine et croustillante, sans que la chair dépasse le rosé.",
    "Le raté habituel vient d’une poêle trop chaude : la peau noircit en trois minutes, la graisse reste épaisse et molle dessous, et on retourne le magret bien trop tôt.",
    "Démarrez donc à froid, à feu moyen-doux, et soyez patient côté peau. Le côté chair ne demande que trois minutes, puis un vrai repos.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "magret de canard",
    "magret de canard à la poêle",
    "cuisson magret de canard",
    "temps de cuisson magret",
    "comment cuire un magret",
    "magret de canard au miel",
    "température magret rosé",
    "sauce pour magret de canard",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 15, rest: 15 },
  difficulty: "Intermédiaire",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["noel"],
  equipment: [
    "une grande poêle de 28 cm",
    "un couteau bien aiguisé",
    "un thermomètre sonde",
    "un bol résistant à la chaleur pour la graisse",
    "du papier aluminium",
  ],
  ingredients: [
    {
      title: "Les magrets",
      items: [
        { qty: 2, name: "magret de canard", plural: "magrets de canard", note: "de 350 à 400 g chacun", step: 1 },
        { name: "sel fin" },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "La sauce",
      items: [
        { qty: 2, unit: "cas", name: "miel liquide", note: "acacia ou toutes fleurs", step: 0.5 },
        { qty: 3, unit: "cas", name: "vinaigre de Xérès", note: "ou balsamique", step: 0.5 },
        { qty: 10, unit: "cl", name: "eau", note: "ou bouillon de volaille", step: 1 },
        { name: "fleur de sel" },
      ],
    },
  ],
  method: [
    {
      title: "Les magrets",
      steps: [
        {
          title: "Parer les magrets",
          text: "Retirez au couteau le gras qui déborde de la chair sur les côtés, puis le petit nerf blanc côté chair s’il y en a un. Épongez les magrets au papier absorbant, surtout côté peau : une peau sèche dore mieux.",
        },
        {
          title: "Quadriller la peau",
          text: "Incisez la peau en croisillons, un trait tous les centimètres dans un sens puis dans l’autre, en traversant la graisse sans toucher la chair. Salez généreusement les deux faces, en faisant entrer le sel dans les entailles.",
          tip: "Si le fond d’une entaille est rouge, vous êtes allé trop loin : la chair perdra son jus à cet endroit.",
        },
        {
          title: "Cuire côté peau",
          text: "Posez les magrets côté peau dans la poêle froide, sans matière grasse, puis allumez à feu moyen-doux. Laissez cuire 12 minutes sans les bouger. Toutes les 4 minutes, videz la graisse fondue dans le bol. C’est prêt quand la peau est brun doré, croustillante sous l’ongle, et que la couche de gras a fondu de moitié.",
          timer: { minutes: 12, label: "Magrets côté peau" },
          tip: "Gardez toute cette graisse : filtrée, elle sert à faire sauter des pommes de terre.",
        },
        {
          title: "Saisir côté chair",
          text: "Retournez les magrets, montez à feu moyen et cuisez 3 minutes côté chair. Piquez la sonde au plus épais : sortez-les à 50–52 °C pour un magret rosé.",
          timer: { minutes: 3, label: "Magrets côté chair" },
        },
        {
          title: "Laisser reposer",
          text: "Posez les magrets peau dessus sur une planche et couvrez-les d’une feuille d’aluminium, sans serrer. Laissez reposer 15 minutes, autant que la cuisson : la température à cœur monte à 55–57 °C et le jus se répartit dans la chair.",
          timer: { minutes: 15, label: "Repos des magrets" },
          tip: "Aluminium posé lâchement : bien emballée, la peau ramollit dans sa propre vapeur.",
        },
      ],
    },
    {
      title: "Sauce et service",
      steps: [
        {
          title: "Faire la sauce",
          text: "Pendant le repos, videz la graisse restante en gardant les sucs collés à la poêle. À feu moyen, faites buller le miel 1 minute, jusqu’à ce qu’il sente le caramel. Versez le vinaigre en reculant le visage, puis l’eau, et grattez les sucs à la spatule. Laissez réduire 3 à 4 minutes, jusqu’à ce que la sauce nappe la cuillère. Ajoutez le jus rendu par les magrets.",
          timer: { minutes: 4, label: "Réduction de la sauce" },
        },
        {
          title: "Trancher et servir",
          text: "Posez chaque magret peau contre la planche et tranchez-le en biais, en tranches de 1 cm : la lame traverse la chair puis finit nette sur la peau croustillante. Disposez les tranches sur des assiettes chaudes, nappez de sauce, ajoutez fleur de sel et poivre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi partir à froid",
      text: "En chauffant progressivement, la graisse sous la peau a le temps de fondre et de s’écouler avant que la surface ne brunisse. Dans une poêle déjà brûlante, la peau colore en quelques minutes alors que la couche de gras dessous est encore épaisse et molle.",
    },
    {
      title: "À quoi sert le quadrillage",
      text: "En chauffant, la peau se rétracte et tire la chair en arc : le magret se recroqueville et cuit mal. Les entailles coupent cette tension, multiplient la surface en contact avec la poêle et ouvrent des chemins à la graisse fondue.",
    },
    {
      title: "Ce que fait le repos",
      text: "À la sortie de la poêle, l’extérieur est bien plus chaud que le cœur. Sous l’aluminium, la chaleur continue de migrer vers le centre, qui gagne encore quelques degrés, et la température s’égalise. La chair, plus détendue, perd moins de jus à la découpe.",
    },
  ],
  tips: [
    "Un magret vient d’un canard engraissé pour le foie gras. Un filet de canard est plus petit et plus maigre : il cuit plus vite et rend beaucoup moins de graisse.",
    "Le thermomètre sonde évite de deviner : 47 °C à la sortie de la poêle pour un magret saignant, 50–52 °C pour rosé, 57 °C pour à point.",
    "Filtrez la graisse encore tiède au-dessus d’un bocal et gardez-la au réfrigérateur pour des pommes de terre sarladaises, recette sur /recettes/pommes-de-terre-sarladaises.",
    "Si les magrets ne tiennent pas tous à plat dans la poêle, cuisez-les en deux fois ou dans deux poêles : serrés, ils rendent de l’eau et la peau ne croustille pas.",
    "Sortez les assiettes et passez-les quelques minutes au four tiède pendant le repos : les tranches de magret refroidissent vite.",
  ],
  mistakes: [
    "Démarrer dans une poêle chaude : la peau brûle dehors, la graisse reste caoutchouteuse dessous. Si c’est parti, baissez le feu au minimum et prolongez côté peau jusqu’à ce que le gras ait fondu.",
    "Inciser jusqu’à la chair : le jus s’échappe par les entailles et le magret sèche. Gardez la pointe du couteau dans le gras.",
    "Laisser la graisse s’accumuler dans la poêle : le magret confit dans son gras au lieu de dorer, et ses bords cuisent trop. Videz-la régulièrement.",
    "Trancher dès la sortie du feu : le jus inonde la planche et la chair paraît sèche. Les 15 minutes de repos ne sont pas une option.",
  ],
  variations: [
    {
      title: "Sauce à l’orange",
      text: "Remplacez l’eau par le jus de 2 oranges, soit 15 cl environ, et gardez 1 cas de vinaigre seulement. Laissez réduire 5 minutes au lieu de 3 à 4, et ajoutez le zeste d’une orange à la fin.",
    },
    {
      title: "Sauce au poivre vert",
      text: "Après avoir vidé la graisse, déglacez avec 3 cl de cognac et laissez-le s’évaporer 1 minute, puis ajoutez 15 cl de crème liquide et 1 cas de poivre vert égoutté. Réduisez 3 minutes, sans miel ni vinaigre.",
    },
    {
      title: "Aux figues",
      text: "Faites revenir 6 figues fraîches coupées en deux, côté coupé dans la poêle, 2 minutes avant d’ajouter le miel. Elles caramélisent légèrement et finissent dans la sauce.",
    },
  ],
  storage:
    "Le magret cuit se garde 2 jours au réfrigérateur, bien emballé. Mangez-le froid, en tranches fines sur une salade, plutôt que de le réchauffer : il cuirait encore. La graisse filtrée se garde plusieurs semaines au réfrigérateur dans un bocal fermé.",
  pairing:
    "Un rouge du Sud-Ouest qui a de la mâche, madiran ou cahors. À côté, des pommes de terre sautées dans la graisse que vous venez de récupérer, ou une poêlée de cèpes.",
  faq: [
    {
      q: "Quelle température à cœur pour un magret rosé ?",
      a: "55 à 57 °C après le repos. Sortez-le de la poêle à 50–52 °C : il gagne encore quelques degrés sous l’aluminium. Pour un magret saignant, sortez-le vers 47 °C ; à point, vers 57 °C.",
    },
    {
      q: "Combien de temps cuire un magret de canard ?",
      a: "15 minutes pour un magret de 350 à 400 g : 12 minutes côté peau en partant d’une poêle froide, puis 3 minutes côté chair. Ajoutez 15 minutes de repos sous aluminium. Pour un magret plus gros, prolongez de 2 à 3 minutes côté peau et fiez-vous au thermomètre.",
    },
    {
      q: "Peut-on manger du magret rosé quand on est enceinte ?",
      a: "Non, mieux vaut s’en abstenir. Pour une femme enceinte, un jeune enfant, une personne âgée ou immunodéprimée, cuisez le magret à cœur comme toute volaille, jusqu’à 74 °C : prolongez la cuisson côté chair à feu doux, couvercle posé. Il sera plus ferme, mais sans risque.",
    },
    {
      q: "Faut-il retirer le gras du magret avant la cuisson ?",
      a: "Non. Retirez seulement ce qui déborde sur les côtés. La couche de gras protège la chair pendant la cuisson et devient une peau croustillante en fondant ; elle doit perdre environ la moitié de son épaisseur dans la poêle.",
    },
    {
      q: "Que faire de la graisse de canard ?",
      a: "La garder. Filtrez-la encore tiède dans un bocal, fermez et mettez-la au réfrigérateur : elle se conserve plusieurs semaines. Elle sert à faire sauter des pommes de terre ou des champignons, et à rôtir des légumes.",
    },
    {
      q: "Pourquoi mon magret se recroqueville à la cuisson ?",
      a: "Parce que la peau n’a pas été assez incisée. En chauffant, elle se rétracte et tire la chair en arc. Des croisillons tous les centimètres, sur toute la surface, la gardent à plat ; appuyez aussi le magret 30 secondes avec une spatule quand il commence à grésiller.",
    },
  ],
  nutrition: {
    calories: 350,
    protein: 30,
    fat: 22,
    saturatedFat: 7,
    carbs: 8,
    sugar: 8,
    fiber: 0,
    sodium: 320,
  },
  annotations: { hero: "rosé à cœur, sorti à 51 °C", detail: "la graisse fond, on la garde" },
  images: {
    heroAlt:
      "Magret de canard poêlé tranché en biais, chair rosée et peau brunie, nappé d’une sauce sombre et brillante",
    detailAlt:
      "Magrets de canard retournés peau dorée vers le haut dans une poêle remplie de graisse fondue, une pince en main",
    credits: {
      hero: { photographer: "Valeria Boltneva", url: "https://www.pexels.com/photo/roasted-meat-on-a-plate-17751633/" },
      detail: {
        photographer: "Sergei Starostin",
        url: "https://www.pexels.com/photo/crispy-duck-breast-cooking-in-a-pan-33691821/",
      },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#B8473A",
    onAccent: "#FFFFFF",
    ink: "#8A2E25",
    tint: "#F8ECE9",
    deep: "#1A0A08",
    focus: "40% 60%",
  },
});
