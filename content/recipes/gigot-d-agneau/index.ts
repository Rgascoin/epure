import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "gigot-d-agneau",
  title: "Gigot d’agneau rôti à l’ail",
  seoTitle: "Gigot d’agneau au four : cuisson par kilo et à cœur",
  tagline: "Sortez le thermomètre, pas la calculette.",
  description:
    "Un gigot d’agneau de 2,2 kg piqué d’ail, saisi à 230 °C puis rôti à 180 °C : 30 minutes par kilo, 55 °C à cœur pour un rosé, 15 minutes de repos.",
  summary:
    "Pour 6 personnes, piquez un gigot de 2,2 kg avec 4 gousses d’ail et du romarin, saisissez-le 15 minutes à 230 °C puis finissez à 180 °C, soit environ 30 minutes par kilo en tout. Sortez-le à 55 °C à cœur pour un rosé, à 60 °C pour à point, et laissez-le reposer 15 à 20 minutes avant de le découper. Comptez 1 h 50 en tout, dont 20 minutes de préparation.",
  intro: [
    "Un gigot rôti, c’est une viande qu’on pique d’ail, qu’on glisse au four et qu’on découpe à table. Rien de compliqué, sauf qu’entre un cœur rosé et une viande grise, il n’y a qu’une dizaine de minutes.",
    "Les temps par kilo donnent une idée, environ 30 minutes pour un rosé, mais chaque gigot a sa forme et chaque four son caractère. Un thermomètre à sonde règle la question : 55 °C à la sortie du four pour un rosé, 60 °C pour à point.",
    "Ensuite, on attend. Quinze à vingt minutes sous une feuille d’aluminium, le temps de faire le jus et de chauffer les assiettes.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "gigot d’agneau",
    "recette gigot d’agneau",
    "gigot d’agneau au four",
    "gigot d’agneau à l’ail",
    "temps de cuisson gigot d’agneau",
    "cuisson gigot d’agneau par kilo",
    "température à cœur gigot d’agneau",
    "gigot d’agneau de pâques",
    "comment découper un gigot",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 70, rest: 20 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Printemps"],
  tags: ["paques", "printemps"],
  equipment: [
    "plat à rôtir en métal, qui va sur le feu",
    "thermomètre à sonde",
    "petit couteau pointu",
    "planche à découper avec rigole",
    "grand couteau à trancher",
    "papier aluminium",
  ],
  ingredients: [
    {
      items: [
        { qty: 2.2, unit: "kg", name: "gigot d’agneau", note: "avec l’os", step: 0.1 },
        { qty: 12, unit: "gousse", name: "ail", note: "4 épluchées pour piquer, 8 en chemise", step: 1 },
        { qty: 3, unit: "brin", name: "romarin", step: 1 },
        { qty: 4, unit: "brin", name: "thym", step: 1 },
        { qty: 3, unit: "cas", name: "huile d’olive", step: 1 },
        { name: "fleur de sel et poivre du moulin" },
        { qty: 25, unit: "cl", name: "eau chaude", note: "10 cl pour le plat, 15 cl pour le jus", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Préparer et rôtir",
      steps: [
        {
          title: "Préchauffer et parer",
          text: "Allumez le four à 230 °C. Épongez le gigot au papier absorbant et retirez l’excès de gras au couteau, en laissant une couche fine sur le dessus : elle protège la viande et dore bien.",
        },
        {
          title: "Piquer d’ail",
          text: "Coupez 4 gousses d’ail épluchées en trois ou quatre bâtonnets, sans le germe s’il est vert. Avec la pointe du petit couteau, faites une douzaine d’entailles de 2 cm sur le dessus et les côtés du gigot. Glissez dans chacune un bâtonnet d’ail et quelques aiguilles de romarin, enfoncés du bout du doigt.",
          tip: "Poussez l’ail bien au fond des entailles. Resté en surface, il brûle à 230 °C et devient amer.",
        },
        {
          title: "Huiler et assaisonner",
          text: "Posez le gigot dans le plat, côté bombé vers le haut. Massez-le avec l’huile d’olive, salez généreusement à la fleur de sel et poivrez. Disposez autour les 8 gousses d’ail en chemise, le thym et le reste du romarin.",
        },
        {
          title: "Saisir à 230 °C",
          text: "Enfournez à mi-hauteur pour 15 minutes. À la fin, la surface grésille et commence à blondir, et le gras fond sur les bords.",
          timer: { minutes: 15, label: "Saisie à 230 °C" },
        },
        {
          title: "Baisser et arroser",
          text: "Baissez le four à 180 °C et versez 10 cl d’eau chaude au fond du plat, pas sur la viande. Poursuivez 45 à 50 minutes pour un gigot de 2,2 kg, en l’arrosant de jus deux fois. Le fond doit rester humide : ajoutez un peu d’eau s’il commence à attacher.",
          timer: { minutes: 50, label: "Cuisson à 180 °C" },
        },
        {
          title: "Vérifier à cœur",
          text: "Plantez la sonde dans la partie la plus épaisse de la noix, sans toucher l’os. Pour un gigot rosé, sortez-le à 55 °C. Pour à point, prolongez la cuisson jusqu’à 60 °C. Il gagnera encore 2 à 3 °C pendant le repos.",
          tip: "Les temps par kilo ne sont qu’une piste : la forme du gigot, le four et la température de départ les font varier. Le thermomètre tranche.",
        },
      ],
    },
    {
      title: "Reposer et découper",
      steps: [
        {
          title: "Laisser reposer",
          text: "Posez le gigot sur la planche, couvrez-le d’une feuille d’aluminium posée en tente, sans serrer, et laissez-le reposer 15 à 20 minutes. Il reste bien chaud et le jus qui perle en surface devient rose clair.",
          timer: { minutes: 20, label: "Repos du gigot" },
        },
        {
          title: "Déglacer le jus",
          text: "Pendant ce temps, posez le plat sur feu moyen. Écrasez les gousses confites pour en faire sortir la purée, versez 15 cl d’eau chaude et grattez les sucs à la cuillère en bois. Laissez réduire 3 à 4 minutes, jusqu’à une couleur noisette. Ajoutez le jus rendu par le gigot sur la planche, goûtez et salez.",
          timer: { minutes: 4, label: "Réduction du jus" },
        },
        {
          title: "Découper le gigot",
          text: "Tenez le manche avec un torchon propre. Tranchez la noix, le côté le plus bombé, en tranches fines perpendiculaires à l’os jusqu’à le toucher, puis glissez la lame le long de l’os pour les libérer. Retournez le gigot et faites de même avec la sous-noix. Servez sur des assiettes chaudes, le jus à part.",
          tip: "Les tranches près du manche sont plus cuites que celles du centre. Gardez-les pour ceux qui n’aiment pas le rosé.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le rose disparaît",
      text: "La couleur rose vient de la myoglobine, le pigment du muscle. Elle commence à se dénaturer vers 60 °C et vire au gris-brun au-delà de 65 à 70 °C. Un gigot sorti à 55 °C reste rose au centre ; à 70 °C, il est gris d’un bord à l’autre.",
    },
    {
      title: "La cuisson continue hors du four",
      text: "À la sortie du four, la surface est bien plus chaude que le centre. Cette chaleur continue de migrer vers le cœur, qui gagne encore 2 à 3 °C pendant le repos, parfois plus pour une grosse pièce. D’où l’intérêt de sortir le gigot juste avant la température visée.",
    },
    {
      title: "Démarrer fort, finir doux",
      text: "Les 15 minutes à 230 °C font dorer la surface : la réaction de Maillard, entre sucres et acides aminés, demande une surface sèche et bien au-delà de 100 °C. À 180 °C ensuite, le cœur monte plus lentement et l’anneau gris sous la croûte reste fin.",
    },
  ],
  tips: [
    "Si vous achetez le gigot la veille, gardez-le au frigo sans film, posé sur une grille. La surface sèche un peu et dorera mieux.",
    "Plantez la sonde dans la partie la plus charnue de la noix. Au contact de l’os, la mesure est faussée.",
    "Chauffez les assiettes. Le gras d’agneau fige vite en refroidissant et les tranches tièdes perdent leur moelleux.",
    "Pour un jus plus corsé, ajoutez un oignon coupé en quatre dans le plat au moment de baisser le four.",
  ],
  mistakes: [
    "Se fier au seul temps par kilo. Un gigot plus plat ou un four qui chauffe fort, et le rosé est dépassé. Si c’est trop cuit, tranchez très fin et nappez de jus bien chaud.",
    "Le découper dès la sortie du four. Le jus file sur la planche et la viande paraît plus sèche ; quinze minutes de repos suffisent.",
    "Laisser le fond du plat à sec. Les sucs noircissent et le jus devient amer : un peu d’eau chaude dès que le four baisse, et on surveille.",
    "Emballer le gigot serré dans l’aluminium pour le repos. La vapeur ramollit la croûte ; posez la feuille en tente, sans la fermer.",
  ],
  variations: [
    {
      title: "Aux anchois",
      text: "Remplacez la moitié des bâtonnets d’ail par 6 filets d’anchois à l’huile coupés en deux, glissés dans les entailles. Ils fondent à la cuisson et salent la viande de l’intérieur : réduisez le sel de moitié.",
    },
    {
      title: "Avec les pommes de terre",
      text: "Disposez 1 kg de grenailles coupées en deux autour du gigot dès le départ, roulées dans un peu d’huile. Retournez-les à mi-cuisson. Faites alors le jus dans une petite casserole avec les sucs et l’eau chaude.",
    },
    {
      title: "Sans os",
      text: "Un gigot désossé, roulé et ficelé de 1,6 kg se cuit de la même façon. Commencez à vérifier la température 35 minutes après avoir baissé le four.",
    },
  ],
  storage:
    "Les restes se gardent 3 jours au frigo, bien emballés, et 2 mois au congélateur en tranches. Mangez-les froids avec de la moutarde, ou réchauffez-les quelques minutes à couvert dans le jus, sur feu doux.",
  pairing:
    "Des flageolets, des haricots verts ou un gratin dauphinois. Dans le verre, un rouge de Bordeaux comme un pauillac ou un saint-julien.",
  faq: [
    {
      q: "Combien de temps cuire un gigot d’agneau par kilo ?",
      a: "Environ 30 minutes par kilo en tout pour un gigot rosé : 15 minutes à 230 °C, puis le reste à 180 °C. Comptez 35 minutes par kilo pour un gigot à point. Ce sont des repères : c’est la température à cœur qui dit quand le sortir.",
    },
    {
      q: "Quelle température à cœur pour un gigot d’agneau rosé ?",
      a: "55 à 58 °C. Sortez-le du four à 55 °C, il gagne 2 à 3 °C pendant le repos. Pour un gigot à point, visez 60 à 63 °C en le sortant à 60 °C.",
    },
    {
      q: "Combien de gigot prévoir par personne ?",
      a: "Environ 350 g avec l’os, soit un gigot de 2,2 kg pour 6 personnes. Pour un gigot désossé, 250 g par personne suffisent.",
    },
    {
      q: "Faut-il couvrir le gigot pendant la cuisson ?",
      a: "Non. À découvert, la surface sèche et dore. Il se couvre seulement pendant le repos, d’une feuille d’aluminium posée sans serrer.",
    },
    {
      q: "Pourquoi laisser reposer le gigot avant de le couper ?",
      a: "Pour que la chaleur s’égalise entre la surface et le cœur, et que moins de jus s’échappe à la découpe. 15 à 20 minutes sous l’aluminium suffisent, la viande reste chaude.",
    },
    {
      q: "Comment découper un gigot d’agneau ?",
      a: "En tranches fines perpendiculaires à l’os. Tenez le manche avec un torchon, tranchez la noix jusqu’à l’os, libérez les tranches en glissant la lame le long de l’os, puis retournez le gigot pour la sous-noix.",
    },
  ],
  nutrition: { calories: 390, protein: 42, fat: 24, saturatedFat: 10, carbs: 2, sugar: 1, fiber: 0, sodium: 450 },
  annotations: { hero: "piqué d’ail, saisi à 230 °C", detail: "les pommes de terre prennent le jus" },
  images: {
    heroAlt: "Gigot d’agneau rôti au romarin, croûte brune et luisante, posé sur une planche claire",
    detailAlt: "Gigot d’agneau rôti dans son plat, entouré de pommes de terre, de carottes et d’herbes",
    credits: {
      hero: {
        photographer: "Beck",
        url: "https://commons.wikimedia.org/wiki/File:Roast_lamb_leg.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Roger469",
        url: "https://commons.wikimedia.org/wiki/File:Agnello_arrosto.03.con_patate,verdure_e_aromi_cotto.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#A4492F",
    onAccent: "#ffffff",
    ink: "#8A3A24",
    tint: "#F8ECE6",
    deep: "#1E0D08",
    focus: "50% 50%",
  },
});
