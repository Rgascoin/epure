import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "osso-buco",
  title: "Osso buco à la milanaise",
  seoTitle: "Osso buco à la milanaise, braisé au four et gremolata",
  tagline: "La viande doit quitter l’os.",
  description:
    "Osso buco à la milanaise : jarret de veau fariné, doré puis braisé 2 h au four à 160 °C au vin blanc et à la tomate, avec une gremolata au citron.",
  summary:
    "Pour 4 personnes, ficelez 4 tranches de jarret de veau de 3 à 4 cm, farinez-les et faites-les dorer 4 minutes par face. Faites fondre oignon, carotte et céleri, déglacez avec 20 cl de vin blanc, ajoutez 400 g de tomates et 30 cl de bouillon, puis braisez 1 h 45 à 2 h au four à 160 °C. Une gremolata crue au citron, à l’ail et au persil se parsème au moment de servir. Comptez 3 h en tout, dont 30 minutes de travail.",
  intro: [
    "L’osso buco, c’est du jarret de veau coupé en tranches épaisses autour de l’os, braisé doucement jusqu’à ce que la viande se détache toute seule. Au centre de chaque tranche, la moelle fond à moitié dans la sauce. Le nom veut dire « os troué ».",
    "Il rate quand on va trop vite. Un jarret qui bout se rétracte et reste sec, et un jarret à peine doré donne une sauce plate. On prend donc le temps de bien colorer les tranches farinées, puis on les oublie deux heures dans un four à 160 °C.",
    "La gremolata arrive à la fin, crue : zeste de citron, ail et persil hachés ensemble. Elle tombe sur la viande au moment de servir, avec un risotto au safran ou une polenta.",
  ],
  category: "Plat",
  cuisine: "Italienne",
  keywords: [
    "osso buco",
    "recette osso buco",
    "osso buco à la milanaise",
    "osso buco de veau",
    "osso buco gremolata",
    "osso buco au four",
    "osso buco in bianco",
    "temps de cuisson osso buco",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 150 },
  difficulty: "Intermédiaire",
  cost: "€€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "cocotte en fonte de 28 cm avec couvercle",
    "ficelle de cuisine",
    "râpe fine pour le zeste",
    "spatule large",
  ],
  ingredients: [
    {
      title: "L’osso buco",
      items: [
        {
          qty: 4,
          name: "tranche de jarret de veau",
          plural: "tranches de jarret de veau",
          note: "3 à 4 cm d’épaisseur, environ 1,3 kg en tout",
          step: 1,
        },
        { name: "sel fin" },
        { name: "poivre noir" },
        { qty: 40, unit: "g", name: "farine", step: 5 },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 1 },
        { qty: 30, unit: "g", name: "beurre", step: 5 },
        { qty: 1, name: "oignon", plural: "oignons", note: "environ 150 g, en petits dés", step: 1 },
        { qty: 1, name: "carotte", plural: "carottes", note: "environ 100 g, en petits dés", step: 1 },
        { qty: 1, name: "branche de céleri", plural: "branches de céleri", note: "en petits dés", step: 1 },
        { qty: 1, name: "gousse d’ail", plural: "gousses d’ail", note: "hachée", step: 1 },
        { qty: 20, unit: "cl", name: "vin blanc sec", step: 5 },
        { qty: 400, unit: "g", name: "tomate pelée", note: "en boîte, concassée", step: 50 },
        { qty: 30, unit: "cl", name: "bouillon de volaille ou de veau", note: "non salé de préférence", step: 5 },
        { qty: 2, name: "feuille de laurier", plural: "feuilles de laurier", fixed: true },
      ],
    },
    {
      title: "La gremolata",
      items: [
        { qty: 1, name: "citron non traité", plural: "citrons non traités", note: "le zeste seulement", step: 1 },
        { qty: 1, name: "gousse d’ail", plural: "gousses d’ail", step: 1 },
        { qty: 10, unit: "g", name: "persil plat", note: "les feuilles, environ un demi-bouquet", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Saisir et braiser",
      steps: [
        {
          title: "Ficeler les jarrets",
          text: "Épongez les tranches de jarret avec du papier absorbant. Entourez chacune d’un tour de ficelle de cuisine, comme une ceinture, serré juste assez pour tenir : elle garde la viande collée à l’os et l’empêche de se recroqueviller. Salez et poivrez des deux côtés.",
        },
        {
          title: "Fariner",
          text: "Préchauffez le four à 160 °C. Passez les tranches dans la farine, sur les deux faces et sur le pourtour, puis tapotez-les pour ne garder qu’un voile. Farinez juste avant de saisir : en attendant, la farine boit l’humidité de la viande et fait une pâte.",
        },
        {
          title: "Saisir la viande",
          text: "Dans la cocotte, chauffez l’huile et le beurre à feu moyen-vif, jusqu’à ce que le beurre mousse. Posez les tranches à plat sans qu’elles se touchent, en deux fois si besoin, et laissez-les 4 minutes par face, soit 8 minutes, sans y toucher, jusqu’à une croûte brun doré. Réservez-les sur une assiette.",
          timer: { minutes: 8, label: "Saisie des jarrets" },
          tip: "Ne bougez pas les tranches avant 4 minutes : tant que la croûte n’est pas formée, elles collent et la farine reste au fond.",
        },
        {
          title: "Faire suer les légumes",
          text: "Baissez à feu moyen. Mettez l’oignon, la carotte et le céleri dans la matière grasse de cuisson avec une pincée de sel, et faites-les fondre 8 minutes en remuant, jusqu’à ce que l’oignon soit translucide et tendre. Ajoutez l’ail haché pour 1 minute, sans le laisser colorer.",
          timer: { minutes: 9, label: "Légumes" },
        },
        {
          title: "Déglacer au vin blanc",
          text: "Versez le vin blanc et grattez le fond à la cuillère en bois pour décoller tous les sucs bruns. Laissez bouillir 3 minutes, jusqu’à ce qu’il ait réduit de moitié et que l’odeur d’alcool ait disparu.",
          timer: { minutes: 3, label: "Réduction du vin" },
        },
        {
          title: "Mouiller et ranger",
          text: "Ajoutez les tomates, le bouillon et le laurier, et portez à frémissement. Remettez les tranches dans la cocotte en une seule couche, à plat, avec le jus qu’elles ont rendu. Le liquide doit arriver aux deux tiers de leur hauteur : complétez avec un peu d’eau si besoin.",
        },
        {
          title: "Braiser au four",
          text: "Couvrez et enfournez pour 1 h 45 à 2 h à 160 °C. À mi-cuisson, retournez les tranches une seule fois, avec une spatule large, pour garder la moelle en place. C’est prêt quand la viande se détache de l’os à la simple pression d’une fourchette.",
          timer: { minutes: 120, label: "Braisage" },
          tip: "Sous le couvercle, ça doit frémir doucement. Si vous entendez de gros bouillons, baissez le four à 150 °C.",
        },
      ],
    },
    {
      title: "Finir et servir",
      steps: [
        {
          title: "Hacher la gremolata",
          text: "Pendant les dernières minutes de cuisson, prélevez le zeste du citron à la râpe fine, sans le blanc qui est amer. Hachez finement l’ail et les feuilles de persil, puis hachez encore le tout avec le zeste, jusqu’à obtenir un mélange fin, vert et très parfumé.",
        },
        {
          title: "Réduire la sauce",
          text: "Sortez la cocotte, posez les tranches sur un plat et coupez les ficelles aux ciseaux. Retirez le laurier. Si la sauce est trop liquide, faites-la réduire 5 minutes à découvert sur feu moyen, jusqu’à ce qu’elle nappe le dos d’une cuillère. Goûtez et rectifiez en sel et en poivre.",
          timer: { minutes: 5, label: "Réduction de la sauce" },
        },
        {
          title: "Parsemer et servir",
          text: "Remettez les jarrets dans la sauce, parsemez de gremolata et servez aussitôt, avec un risotto au safran ou une polenta. Prévoyez une petite cuillère par personne pour la moelle.",
          tip: "La gremolata ne cuit pas : posée sur la viande brûlante, elle chauffe juste assez pour embaumer.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le jarret et son collagène",
      text: "Le jarret est un muscle qui travaille beaucoup, traversé de tissu conjonctif riche en collagène. Chauffé longtemps dans un liquide, au-delà de 70 °C, ce collagène se transforme lentement en gélatine : la viande se défait en fibres moelleuses et la sauce colle aux lèvres. Il faut du temps, pas une forte chaleur.",
    },
    {
      title: "La farine avant la saisie",
      text: "Le voile de farine dore vite au contact de la matière grasse et ajoute des arômes grillés. Pendant le braisage, son amidon passe dans le liquide et épaissit la sauce, sans qu’il faille la lier à la fin.",
    },
    {
      title: "Les sucs et le déglaçage",
      text: "La saisie laisse au fond de la cocotte des sucs bruns issus de la réaction de Maillard. Le vin blanc chaud, légèrement acide, les dissout : ce goût de rôti passe dans la sauce au lieu de brûler au fond.",
    },
    {
      title: "Pourquoi la gremolata reste crue",
      text: "Le parfum du zeste de citron vient d’huiles essentielles très volatiles, qui s’évaporent à la cuisson. Crue, avec l’ail et le persil, la gremolata garde son piquant et tranche avec le gras de la moelle et de la sauce.",
    },
  ],
  tips: [
    "Demandez au boucher des tranches de jarret arrière, plus charnu, toutes de la même épaisseur pour qu’elles soient prêtes en même temps.",
    "Choisissez une cocotte où les tranches tiennent juste à plat : trop grande, la sauce s’étale, réduit trop vite et attache.",
    "Si vous recevez, faites-le la veille : réchauffé doucement, il se tient mieux au service. Seule la gremolata attend le dernier moment.",
    "Hachez la gremolata au couteau plutôt qu’au mixeur : le persil reste vert et sec au lieu de tourner en pâte.",
  ],
  mistakes: [
    "Des tranches trop fines, autour de 2 cm : elles sèchent avant d’être tendres et se défont. Si c’est ce que vous avez, raccourcissez le four à 1 h 15 et surveillez.",
    "Laisser bouillir la cocotte : la viande se rétracte et devient filandreuse, même noyée de sauce. Il n’y a pas de vrai rattrapage, sinon l’effilocher dans la sauce et la servir sur des pâtes.",
    "Saisir les tranches entassées : elles rendent leur eau et bouillent au lieu de dorer. Faites-les en deux fois.",
    "Faire cuire la gremolata dans la sauce : le citron et le persil perdent toute leur fraîcheur. Elle se pose sur la viande, hors du feu.",
    "Oublier la ficelle : la viande se rétracte, se décolle de l’os, et la moelle s’échappe dans la sauce.",
  ],
  variations: [
    {
      title: "« In bianco », sans tomate",
      text: "Supprimez les tomates et passez le bouillon à 50 cl. La sauce reste claire et plus fluide : faites-la réduire 8 à 10 minutes à la fin au lieu de 5. Le citron de la gremolata y ressort beaucoup plus.",
    },
    {
      title: "Au jarret de dinde",
      text: "Des tranches de jarret de dinde de 3 cm remplacent le veau, pour bien moins cher. Même méthode, mais 1 h 15 à 1 h 30 de four suffisent : la viande doit se détacher de l’os, bien au-delà des 74 °C à cœur demandés pour la volaille.",
    },
    {
      title: "Sur le feu",
      text: "Sans four, laissez cuire à couvert sur feu très doux, avec un diffuseur si la plaque chauffe fort, pendant le même temps. Retournez les tranches deux fois et vérifiez que la sauce n’attache pas au fond.",
    },
  ],
  storage:
    "3 jours au réfrigérateur dans sa sauce, en boîte fermée, après l’avoir refroidi en moins de 2 h. 3 mois au congélateur, sans la gremolata. Réchauffez à couvert, à feu doux ou 30 minutes au four à 150 °C, jusqu’à ce que la sauce frémisse. Ne recongelez pas.",
  pairing:
    "Un rouge du Piémont peu tannique, comme un barbera, ou un blanc sec et ample du nord de l’Italie.",
  faq: [
    {
      q: "Quel morceau de veau pour un osso buco ?",
      a: "Du jarret, coupé en tranches de 3 à 4 cm avec l’os et sa moelle au centre. Le jarret arrière est plus charnu que l’avant. Demandez des tranches de même épaisseur pour qu’elles cuisent ensemble.",
    },
    {
      q: "Combien de temps faut-il cuire un osso buco ?",
      a: "1 h 45 à 2 h à 160 °C, cocotte fermée, pour des tranches de 3 à 4 cm. La viande est prête quand elle se détache de l’os à la fourchette. Sur le feu, à frémissement très doux, comptez le même temps en retournant les tranches deux fois.",
    },
    {
      q: "Faut-il mettre de la tomate dans l’osso buco ?",
      a: "Non, ce n’est pas obligatoire. La version « in bianco » se fait sans tomate, avec du vin blanc et du bouillon : la sauce est plus claire et le citron ressort davantage. Avec la tomate, comme ici, la sauce est plus ronde et plus colorée.",
    },
    {
      q: "Peut-on servir l’osso buco avec des pâtes ?",
      a: "Oui, des pâtes larges comme des tagliatelles ou des pappardelle tiennent bien la sauce. Le service classique reste le risotto au safran, dit à la milanaise ; une polenta crémeuse ou une purée vont aussi très bien.",
    },
    {
      q: "Peut-on préparer l’osso buco la veille ?",
      a: "Oui. Refroidissez-le en moins de 2 h et gardez-le au réfrigérateur dans sa sauce. Réchauffez-le à couvert, à feu doux ou 30 minutes au four à 150 °C, jusqu’à ce que la sauce frémisse. Faites la gremolata au dernier moment.",
    },
    {
      q: "La moelle de l’osso buco se mange-t-elle ?",
      a: "Oui. On la sort de l’os avec une petite cuillère ou le manche d’une fourchette, puis on l’étale sur du pain ou on la mélange au risotto. Elle est très riche : une bouchée par tranche suffit à la plupart des gens.",
    },
    {
      q: "Peut-on congeler l’osso buco ?",
      a: "Oui, 3 mois, dans sa sauce et sans la gremolata. Décongelez-le une nuit au réfrigérateur, réchauffez-le doucement à couvert jusqu’à ce que la sauce frémisse, et ne le recongelez pas.",
    },
  ],
  nutrition: { calories: 495, protein: 47, fat: 28, saturatedFat: 11, carbs: 14, sugar: 6, fiber: 3, sodium: 650 },
  annotations: { hero: "gremolata crue, polenta en dessous", detail: "la moelle, à la petite cuillère" },
  images: {
    heroAlt:
      "Osso buco à la milanaise : deux tranches de jarret de veau en sauce tomate sur une polenta, parsemées de gremolata.",
    detailAlt:
      "Gros plan d’une tranche d’osso buco montrant l’os rond et sa moelle fondante, entourés de viande braisée et de carottes.",
    credits: {
      hero: {
        photographer: "Kgbo",
        url: "https://commons.wikimedia.org/wiki/File:Osteria_Epoca_Cafe_Bar,_Yeronga,_Queensland,_Ossobuco_dish.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Xfigpower",
        url: "https://commons.wikimedia.org/wiki/File:Ossobuco_-_os_%C3%A0_moelle.JPG",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#C2502A",
    onAccent: "#FFFFFF",
    ink: "#8E3A1C",
    tint: "#FBEDE6",
    deep: "#1A0D08",
    focus: "48% 50%",
  },
});
