import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "sables-bretons",
  title: "Sablés bretons",
  seoTitle: "Sablés bretons épais au beurre demi-sel, en cercles",
  tagline: "Épais, dorés, et ils s’effritent.",
  description:
    "Les sablés bretons épais pour 12 : 3 jaunes, 130 g de beurre demi-sel, de la levure, une pâte étalée à 8 mm, cuite 18 à 20 minutes à 180 °C en cercles.",
  summary:
    "Pour 12 sablés de 8 cm, blanchissez 3 jaunes d’œufs avec 125 g de sucre, ajoutez 130 g de beurre demi-sel mou puis 180 g de farine et 8 g de levure chimique. Étalez la pâte à 8 mm entre deux feuilles de papier cuisson, laissez-la durcir 2 h au réfrigérateur, découpez-la avec des cercles, dorez au jaune et rayez à la fourchette. Cuisson 18 à 20 minutes à 180 °C dans les cercles. Comptez 3 h 15 en tout, dont 25 minutes de travail.",
  intro: [
    "Le sablé breton épais ressemble à une petite galette : 8 mm de haut, une surface vernie au jaune d’œuf, des sillons croisés à la fourchette, et une mie qui s’effrite sous la dent. Le beurre demi-sel fait tout le goût.",
    "La pâte est très molle, presque collante, parce qu’elle contient peu de farine. Inutile d’essayer de l’étaler tout de suite sur le plan de travail : on la passe entre deux feuilles de papier cuisson, puis au froid.",
    "Et on la cuit dans des cercles. Avec la levure, elle gonfle et s’étale en cuisant ; le cercle l’oblige à monter, ce qui donne ces bords droits et cette épaisseur.",
  ],
  category: "Goûter",
  cuisine: "Française",
  keywords: [
    "sablés bretons",
    "sablé breton",
    "recette sablés bretons",
    "sablés bretons beurre demi-sel",
    "sablé breton épais",
    "galettes bretonnes maison",
    "palets bretons maison",
    "sablés bretons sans levure",
  ],
  diet: ["vegetarian"],
  servings: 12,
  servingsLabel: { one: "sablé", other: "sablés" },
  times: { prep: 25, cook: 20, rest: 150 },
  difficulty: "Facile",
  cost: "€",
  season: ["Toute l’année"],
  tags: [],
  equipment: [
    "cercles à pâtisserie de 8 cm (12, ou 6 et deux fournées)",
    "rouleau à pâtisserie et papier cuisson",
    "plaque de cuisson",
    "pinceau et fourchette",
  ],
  ingredients: [
    {
      title: "La pâte",
      items: [
        { qty: 3, name: "jaune d’œuf", plural: "jaunes d’œufs", step: 1 },
        { qty: 125, unit: "g", name: "sucre en poudre", step: 5 },
        { qty: 130, unit: "g", name: "beurre demi-sel", note: "très mou, en pommade", step: 5 },
        { qty: 180, unit: "g", name: "farine", note: "type 55", step: 5 },
        { qty: 8, unit: "g", name: "levure chimique", step: 1 },
      ],
    },
    {
      title: "La dorure et les cercles",
      items: [
        { qty: 1, name: "jaune d’œuf", plural: "jaunes d’œufs", fixed: true },
        { qty: 1, unit: "cac", name: "lait", fixed: true },
        { qty: 10, unit: "g", name: "beurre", note: "mou, pour les cercles", fixed: true },
      ],
    },
  ],
  method: [
    {
      title: "La pâte",
      steps: [
        {
          title: "Blanchir les jaunes",
          text: "Dans un saladier, fouettez les 3 jaunes avec le sucre jusqu’à ce que le mélange pâlisse, épaississe et forme un ruban qui s’efface lentement quand vous soulevez le fouet.",
        },
        {
          title: "Ajouter le beurre",
          text: "Ajoutez le beurre demi-sel en pommade et mélangez à la spatule jusqu’à obtenir une crème homogène, sans morceaux de beurre visibles. Le beurre doit être mou comme une pommade, pas fondu.",
          tip: "Un beurre fondu donne une pâte huileuse et des sablés plats. S’il a trop chauffé, laissez la pâte raffermir au froid plus longtemps.",
        },
        {
          title: "Incorporer la farine",
          text: "Tamisez la farine avec la levure au-dessus du saladier. Mélangez à la spatule juste assez pour qu’il ne reste plus de farine sèche, sans insister. La pâte est très molle et colle aux doigts : c’est normal.",
        },
        {
          title: "Étaler et refroidir",
          text: "Posez la pâte entre deux feuilles de papier cuisson et étalez-la au rouleau sur 8 mm d’épaisseur, régulière partout. Glissez-la à plat sur une plaque et laissez-la durcir 2 heures au réfrigérateur. Elle doit être ferme au toucher et se casser plutôt que plier.",
          timer: { minutes: 120, label: "Pâte au froid" },
          tip: "Étalée avant d’être refroidie, la pâte molle se travaille sans farine ni effort. Froide, elle se découpe net.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Préparer les cercles",
          text: "Préchauffez le four à 180 °C, chaleur statique. Beurrez l’intérieur des cercles au pinceau et posez-les sur une plaque couverte de papier cuisson. Mélangez le jaune de la dorure avec la cuillère à café de lait.",
        },
        {
          title: "Découper",
          text: "Sortez la pâte, retirez la feuille du dessus et découpez des disques avec un cercle ou un emporte-pièce de même taille. Déposez chaque disque dans un cercle beurré. Rassemblez les chutes, étalez-les de nouveau entre deux feuilles et remettez-les au froid, le temps de cuire la première fournée.",
        },
        {
          title: "Dorer et rayer",
          text: "Badigeonnez le dessus de chaque disque de dorure au pinceau, sans en faire couler sur les bords. Tracez des sillons avec les dents d’une fourchette, d’un bord à l’autre, puis une seconde série en travers pour dessiner un quadrillage.",
          tip: "Appuyez juste assez pour marquer la dorure et la surface de la pâte. Les sillons brunissent plus que le reste et donnent le relief.",
        },
        {
          title: "Cuire",
          text: "Enfournez à mi-hauteur pour 18 à 20 minutes. Les sablés sont cuits quand le dessus est d’un doré foncé et brillant, et que les bords, visibles en soulevant un cercle avec une pince, ont bruni. Le centre reste un peu souple : il durcit en refroidissant.",
          timer: { minutes: 20, label: "Sablés au four" },
        },
        {
          title: "Démouler et refroidir",
          text: "Laissez reposer 5 minutes sur la plaque, puis passez la lame d’un petit couteau entre le sablé et le cercle et soulevez le cercle. Faites refroidir les sablés sur une grille 30 minutes avant d’y toucher : chauds, ils sont trop friables pour être manipulés.",
          timer: { minutes: 35, label: "Démoulage et grille" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi « sablé »",
      text: "La pâte contient beaucoup de beurre et de sucre pour peu de farine, et aucune eau ajoutée. Le gras enrobe la farine et le sucre retient le peu d’humidité disponible : le gluten n’a presque pas de quoi se former. Sans ce réseau élastique, la mie se défait en grains, comme du sable.",
    },
    {
      title: "La levure et le cercle",
      text: "En chauffant, la levure chimique libère du gaz carbonique qui fait gonfler la pâte. Laissée libre, cette pâte riche en beurre s’étale en même temps qu’elle gonfle. Le cercle bloque l’étalement : la poussée ne peut aller que vers le haut, d’où un sablé épais, aux bords droits, à la mie plus aérée.",
    },
    {
      title: "Ce que fait la dorure",
      text: "Le jaune d’œuf apporte des protéines et des sucres qui brunissent à la chaleur par les réactions de Maillard, et un peu de gras qui donne le brillant. Le lait détend le jaune pour qu’il s’étale en couche fine et régulière, sans faire de traces.",
    },
  ],
  tips: [
    "Sortez le beurre 2 heures avant : il doit s’écraser du bout du doigt sans résistance, mais garder sa forme.",
    "Pour un dessus plus foncé, passez une première couche de dorure, laissez sécher 5 minutes au réfrigérateur, puis une seconde avant de rayer.",
    "Si vous n’avez que 6 cercles, cuisez en deux fournées et gardez le reste de la pâte au froid entre les deux.",
    "Rangez-les complètement froids dans une boîte en fer : ils restent croustillants dehors et friables dedans.",
  ],
  mistakes: [
    "Une pâte trop travaillée après l’ajout de la farine : les sablés sont durs au lieu d’être friables. Mélangez juste jusqu’à disparition de la farine.",
    "Découper une pâte pas assez froide : elle colle au cercle et se déforme. Remettez-la 20 minutes au congélateur.",
    "Cuire sans cercle avec la levure : les sablés s’étalent en galettes fines et irrégulières. Sans cercle, faites plutôt la version fine, sans levure.",
    "Les sortir trop pâles : le centre reste pâteux et le goût de beurre noisette n’apparaît pas. Attendez un doré franc, presque ambré sur les bords.",
    "Les démouler brûlants : ils se cassent. Les 5 minutes sur la plaque ne sont pas facultatives.",
  ],
  variations: [
    {
      title: "Fins et croquants, sans levure",
      text: "Supprimez la levure, étalez la pâte à 4 mm et découpez-la à l’emporte-pièce de 6 cm, sans cercle, en espaçant les disques de 3 cm. Dorez, rayez, et faites cuire 12 à 14 minutes à 180 °C. Vous obtenez une vingtaine de galettes fines et croquantes.",
    },
    {
      title: "Au beurre doux",
      text: "Remplacez le beurre demi-sel par du beurre doux et ajoutez 2 g de fleur de sel à la farine. Le sel est mieux réparti dans le demi-sel, mais les petits grains de fleur de sel croquent sous la dent.",
    },
    {
      title: "En tarte sablée",
      text: "Gardez des disques de 8 cm cuits et refroidis comme fonds : une cuillère de crème pâtissière ou de mascarpone fouetté, quelques fraises ou framboises dessus, et vous avez une tartelette sans fond de pâte à cuire à blanc.",
    },
  ],
  storage:
    "Jusqu’à 10 jours dans une boîte en fer bien fermée, à température ambiante, loin de toute humidité. La pâte crue, étalée et filmée, se garde 2 jours au réfrigérateur ou 2 mois au congélateur ; découpez-la encore dure et dorez-la juste avant la cuisson.",
  pairing:
    "Un thé noir, un café, un bol de lait pour les enfants. En dessert, à côté d’une salade de fraises, d’une compote de pommes ou d’une crème au caramel.",
  faq: [
    {
      q: "Faut-il de la levure dans les sablés bretons ?",
      a: "Non, ce n’est pas obligatoire. Avec 8 g de levure et des cercles, ils sont épais et friables. Sans levure, étalés à 4 mm et cuits sans cercle, ils sont fins et croquants. Les deux existent en Bretagne.",
    },
    {
      q: "Beurre doux ou demi-sel pour des sablés bretons ?",
      a: "Demi-sel. C’est lui qui donne le goût salé qui équilibre le sucre. Avec du beurre doux, ajoutez 2 g de fleur de sel à la farine.",
    },
    {
      q: "Pourquoi mes sablés bretons s’étalent-ils à la cuisson ?",
      a: "Pour trois raisons possibles : la pâte n’était pas assez froide, le beurre avait fondu au lieu d’être simplement mou, ou ils ont cuit sans cercle avec de la levure. Les cercles de 8 cm règlent la question.",
    },
    {
      q: "Peut-on faire des sablés bretons sans cercle ?",
      a: "Oui, mais faites-les sans levure. Étalez la pâte à 4 mm, découpez à l’emporte-pièce et espacez les disques de 3 cm sur la plaque. Ils cuisent en 12 à 14 minutes à 180 °C et restent fins.",
    },
    {
      q: "Combien de temps se conservent les sablés bretons ?",
      a: "10 jours environ dans une boîte en fer bien fermée, à température ambiante. Une boîte en plastique ou un sachet les ramollit plus vite. Attendez qu’ils soient complètement froids avant de les ranger.",
    },
    {
      q: "Peut-on congeler la pâte à sablés bretons ?",
      a: "Oui, jusqu’à 2 mois, étalée à 8 mm et bien filmée. Découpez les disques encore congelés, laissez-les 10 minutes dans les cercles le temps que la surface s’assouplisse, puis dorez, rayez et faites cuire comme d’habitude.",
    },
  ],
  nutrition: {
    calories: 200,
    protein: 3,
    fat: 11,
    saturatedFat: 7,
    carbs: 22,
    sugar: 10,
    fiber: 0,
    sodium: 145,
  },
  annotations: { hero: "des sillons croisés, à la fourchette", detail: "le cercle l’empêche de s’étaler" },
  images: {
    heroAlt: "Un sablé breton épais et doré, quadrillé de sillons de fourchette, posé seul sur une assiette en étain",
    detailAlt:
      "Disque de pâte à sablé breton dans un cercle en inox, nappé de jaune d’œuf et rayé en croix avant cuisson",
    credits: {
      hero: {
        photographer: "8pixelz _",
        url: "https://www.pexels.com/photo/delicious-sable-cookie-on-a-metal-plate-30707767/",
      },
      detail: {
        photographer: "Roozitaa",
        url: "https://commons.wikimedia.org/wiki/File:Making_galette_bretonne_(3).jpg",
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
    accent: "#D98A2B",
    onAccent: "#1B1712",
    ink: "#86500F",
    tint: "#FCF2E2",
    deep: "#1C1206",
    focus: "42% 50%",
  },
});
