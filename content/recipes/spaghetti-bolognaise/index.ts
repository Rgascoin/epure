import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "spaghetti-bolognaise",
  title: "Spaghetti à la bolognaise",
  seoTitle: "Spaghetti bolognaise : un vrai ragù en une heure",
  tagline: "Le ragù des soirs de semaine.",
  description:
    "Spaghetti bolognaise maison : un ragù de bœuf, tomate et vin rouge mijoté 50 minutes, et des pâtes qui finissent dans la sauce. Prêt en 1 h 30.",
  summary:
    "Pour 4 personnes, les spaghetti bolognaise se font en 1 h 30. Faites revenir oignon, carotte et céleri hachés, saisissez 500 g de bœuf haché à feu vif, déglacez avec 10 cl de vin rouge, puis laissez mijoter 50 minutes avec 400 g de tomates pelées et 2 c. à soupe de concentré. Cuisez 400 g de spaghetti 1 minute de moins que le paquet, puis finissez-les 1 minute dans la sauce avec un peu d’eau de cuisson et 30 g de parmesan.",
  intro: [
    "Les spaghetti bolognaise, c’est le ragù de tous les jours. Une heure de mijotage au lieu des deux heures de nos lasagnes à la bolognaise, mais les mêmes bons gestes : des légumes hachés fin, une viande qu’on saisit franchement, du vin, de la tomate et un feu très doux.",
    "À Bologne, le ragù se sert avec des tagliatelle, et les spaghetti bolognaise sont une habitude d’ailleurs. On l’assume, à une condition : les pâtes finissent leur cuisson dans la sauce, avec un peu d’eau de cuisson. Elles ressortent enrobées, au lieu de glisser sous une louche de sauce posée dessus.",
    "Le seul vrai risque, c’est d’aller trop vite. Une sauce qui n’a mijoté qu’un quart d’heure a encore le goût de la tomate en boîte.",
  ],
  category: "Plat",
  cuisine: "Italienne",
  keywords: [
    "spaghetti bolognaise",
    "sauce bolognaise maison",
    "recette spaghetti bolognaise",
    "spaghetti bolognaise facile",
    "bolognaise au vin rouge",
    "temps de cuisson sauce bolognaise",
    "sauce bolognaise rapide",
    "spaghetti à la bolognaise",
  ],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 15, cook: 75 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Toute l’année"],
  equipment: [
    "grande sauteuse de 28 cm environ",
    "grande casserole (5 l)",
    "couteau de chef et planche",
    "pince à pâtes",
    "râpe fine",
  ],
  ingredients: [
    {
      title: "Le ragù",
      items: [
        { qty: 1, name: "oignon jaune", plural: "oignons jaunes", step: 0.5 },
        { qty: 1, name: "carotte", plural: "carottes", step: 0.5 },
        { qty: 1, unit: "branche", name: "céleri", step: 0.5 },
        { qty: 1, unit: "gousse", name: "ail", step: 1, optional: true },
        { qty: 2, unit: "cas", name: "huile d’olive", step: 0.5 },
        { qty: 500, unit: "g", name: "bœuf haché", note: "15 % de matières grasses", step: 50 },
        { qty: 10, unit: "cl", name: "vin rouge", note: "un rouge simple, pas trop boisé", step: 1 },
        { qty: 2, unit: "cas", name: "concentré de tomate", step: 0.5 },
        { qty: 400, unit: "g", name: "tomates pelées en conserve", note: "entières, écrasées à la main", step: 50 },
        { qty: 1, unit: "feuille", name: "laurier", step: 1 },
        { name: "sel et poivre du moulin" },
      ],
    },
    {
      title: "Les pâtes",
      items: [
        { qty: 400, unit: "g", name: "spaghetti", step: 10 },
        { qty: 20, unit: "g", name: "gros sel", note: "pour 4 l d’eau", fixed: true },
        { qty: 60, unit: "g", name: "parmigiano reggiano", note: "râpé finement", step: 5 },
      ],
    },
  ],
  method: [
    {
      title: "Le ragù",
      steps: [
        {
          title: "Hacher les légumes",
          text: "Épluchez l’oignon et la carotte, effilez le céleri, puis hachez-les en petits dés de 5 mm. Hachez l’ail à part, si vous en mettez. Pas besoin d’une brunoise parfaite : ils vont fondre pendant le mijotage.",
        },
        {
          title: "Faire revenir les légumes",
          text: "Chauffez l’huile dans la sauteuse sur feu moyen. Ajoutez l’oignon, la carotte, le céleri et une pincée de sel, et laissez cuire 8 à 10 minutes en remuant de temps en temps : ils ramollissent et dorent légèrement sur les bords. Ajoutez l’ail pour la dernière minute.",
          timer: { minutes: 9, label: "Légumes" },
        },
        {
          title: "Saisir la viande",
          text: "Poussez les légumes sur les côtés et montez sur feu vif. Étalez la viande au centre en une galette et n’y touchez plus pendant 3 minutes, pour qu’elle croûte dessous. Émiettez-la ensuite à la spatule et laissez cuire encore 5 minutes, jusqu’à ce qu’il ne reste plus de rose et que ça grésille.",
          timer: { minutes: 8, label: "Viande" },
          tip: "C’est le geste qui fait gagner une heure de goût. Une viande qu’on remue sans arrêt rend son eau et bout ; une viande qu’on laisse tranquille dore.",
        },
        {
          title: "Déglacer au vin rouge",
          text: "Versez le vin, grattez les sucs au fond de la sauteuse et laissez bouillir 2 minutes, jusqu’à ce qu’il ait réduit de moitié. Ajoutez le concentré de tomate et remuez 1 minute : il fonce légèrement et sent la tomate grillée.",
          timer: { minutes: 3, label: "Vin et concentré" },
        },
        {
          title: "Mijoter à feu doux",
          text: "Ajoutez les tomates écrasées, rincez la boîte avec 10 cl d’eau et versez-la aussi. Ajoutez le laurier, salez légèrement, poivrez. Laissez mijoter 45 à 60 minutes à feu très doux, à demi couvert, en remuant de temps en temps. C’est prêt quand l’huile perle en surface et que la cuillère laisse un sillon net.",
          timer: { minutes: 50, label: "Mijotage" },
          tip: "Si la sauce attache ou épaissit trop avant la fin, ajoutez quelques cuillerées d’eau. Si elle reste liquide, découvrez complètement.",
        },
      ],
    },
    {
      title: "Les pâtes",
      steps: [
        {
          title: "Cuire les spaghetti",
          text: "Un quart d’heure avant la fin du mijotage, portez 4 l d’eau à ébullition et ajoutez le gros sel. Faites cuire les spaghetti 1 minute de moins que ce qu’indique le paquet (le minuteur est réglé sur 9 minutes, pour un paquet à 10 minutes). Ils doivent rester un peu fermes au centre.",
          timer: { minutes: 9, label: "Cuisson des pâtes" },
        },
        {
          title: "Lier pâtes et sauce",
          text: "Gardez une louche d’eau de cuisson, égouttez les pâtes et versez-les dans la sauteuse, après avoir retiré le laurier. Sur feu moyen, mélangez 1 minute à la pince avec la moitié du parmesan et un peu d’eau de cuisson, jusqu’à ce que la sauce enrobe chaque spaghetti.",
          timer: { minutes: 1, label: "Liaison" },
        },
        {
          title: "Servir",
          text: "Servez aussitôt dans des assiettes chaudes, avec le reste du parmesan et un tour de poivre.",
        },
      ],
    },
  ],
  science: [
    {
      title: "La croûte avant tout",
      text: "La viande ne dore qu’une fois son eau évaporée, quand la surface dépasse largement 100 °C : c’est la réaction de Maillard. Laisser la viande immobile sur une poêle très chaude permet d’y arriver vite. La remuer sans cesse la refroidit, et elle bout dans son jus.",
    },
    {
      title: "Pourquoi faire revenir le concentré",
      text: "Le concentré de tomate est riche en sucres et en acides aminés. Une minute dans le gras chaud suffit à le faire foncer : il perd son goût de conserve et apporte une note grillée à toute la sauce.",
    },
    {
      title: "L’eau de cuisson qui lie",
      text: "L’eau de cuisson des pâtes contient de l’amidon. En mélangeant pâtes, sauce et un peu de cette eau sur le feu, l’amidon aide le gras et l’eau de la sauce à rester liés. La sauce accroche aux spaghetti au lieu de couler au fond de l’assiette.",
    },
  ],
  tips: [
    "Prenez une sauteuse large plutôt qu’une casserole haute. La viande dore mieux, et la sauce réduit plus vite.",
    "Achetez des tomates pelées entières et écrasez-les à la main. Vous gardez quelques morceaux, et c’est souvent la meilleure conserve du rayon.",
    "Faites une double dose de ragù et congelez la moitié : c’est un dîner de gagné pour une autre semaine.",
    "Si vous avez des tagliatelle aux œufs, prenez-les : le ragù y accroche encore mieux.",
    "Râpez le parmesan au dernier moment. Il fond dans la sauce au lieu de faire des grumeaux.",
  ],
  mistakes: [
    "Poser la sauce sur des spaghetti nature. Les pâtes glissent, la sauce reste à part et il y a de l’eau au fond de l’assiette.",
    "Remuer la viande sans arrêt dans une poêle trop petite. Elle rend son eau, bout et reste grise.",
    "Ne laisser mijoter qu’un quart d’heure. La sauce garde un goût acide de tomate crue.",
    "Rincer les pâtes après cuisson. Vous enlevez l’amidon qui aide la sauce à accrocher.",
  ],
  variations: [
    {
      title: "Avec des tagliatelle",
      text: "C’est ainsi qu’on mange le ragù à Bologne. Remplacez les spaghetti par 400 g de tagliatelle aux œufs et liez-les de la même façon dans la sauce.",
    },
    {
      title: "Version longue",
      text: "Laissez mijoter 2 heures au lieu de 50 minutes, avec 20 cl de lait ajouté pour la dernière demi-heure. C’est le ragù de nos lasagnes à la bolognaise : plus fondant et plus rond.",
    },
    {
      title: "Bœuf et saucisse",
      text: "Remplacez 200 g de bœuf par 200 g de chair à saucisse. La sauce est plus grasse et plus parfumée ; salez-la moins.",
    },
  ],
  storage:
    "Le ragù seul se garde 3 jours au réfrigérateur en boîte fermée et 3 mois au congélateur. Réchauffez-le à frémissement en ajoutant un peu d’eau. Les pâtes déjà mélangées se gardent 2 jours et se réchauffent à la poêle avec un trait d’eau.",
  pairing: "Un rouge italien simple et fruité, un chianti ou un montepulciano d’abruzzo.",
  faq: [
    {
      q: "Combien de temps faire mijoter une sauce bolognaise ?",
      a: "Au moins 45 minutes, idéalement 1 heure pour cette version du quotidien. Pour un ragù plus fondant, comme celui des lasagnes, comptez 2 heures à feu très doux, avec du lait en fin de cuisson.",
    },
    {
      q: "Peut-on congeler la sauce bolognaise ?",
      a: "Oui, sans les pâtes, 3 mois en boîte fermée. Faites-la décongeler une nuit au réfrigérateur, puis réchauffez-la jusqu’à frémissement. Ne recongelez pas une sauce déjà décongelée.",
    },
    {
      q: "Combien de temps se garde la bolognaise au frigo ?",
      a: "3 jours dans une boîte fermée, à mettre au réfrigérateur dans les 2 heures qui suivent la cuisson. Réchauffez-la bien à cœur, jusqu’à ce qu’elle frémisse, et une seule fois.",
    },
    {
      q: "Quelle viande pour une sauce bolognaise ?",
      a: "Du bœuf haché à 15 % de matières grasses. Le 5 % sèche et donne une sauce granuleuse. Vous pouvez remplacer une partie du bœuf par du porc ou de la chair à saucisse.",
    },
    {
      q: "Faut-il mettre du vin dans la bolognaise ?",
      a: "Non, mais il apporte de l’acidité et de la profondeur. Remplacez-le par 10 cl de bouillon si vous préférez. Après une heure de cuisson, il reste un peu d’alcool : pour des enfants ou une femme enceinte, faites sans.",
    },
    {
      q: "Pourquoi ma sauce bolognaise est-elle acide ?",
      a: "Elle n’a sans doute pas assez mijoté, ou le concentré n’a pas été revenu. Prolongez la cuisson de 15 à 20 minutes. Un trait de lait ou une noisette de beurre arrondissent aussi l’acidité ; le sucre la masque surtout.",
    },
  ],
  nutrition: {
    calories: 790,
    protein: 42,
    fat: 31,
    saturatedFat: 12,
    carbs: 81,
    sugar: 10,
    fiber: 6,
    sodium: 1050,
  },
  annotations: {
    hero: "les pâtes finissent dans la sauce",
    detail: "la viande croûte avant d’être émiettée",
  },
  images: {
    heroAlt:
      "Spaghetti bolognaise dans une assiette creuse blanche, sauce tomate à la viande et fromage râpé sur le dessus",
    detailAlt: "Spaghetti à la sauce bolognaise vus de dessus dans une assiette grise, parmesan et persil",
    credits: {
      hero: {
        photographer: "Mariana Zurita",
        url: "https://www.pexels.com/photo/spaghetti-bolognese-on-a-white-plate-15500451/",
      },
      detail: {
        photographer: "Shameel Mukkath",
        url: "https://www.pexels.com/photo/traditional-pasta-spaghetti-with-bolognese-sauce-in-gray-ceramic-plate-14930646/",
      },
    },
  },
  datePublished: "2026-11-06",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#C2461A",
    onAccent: "#ffffff",
    ink: "#A63A0E",
    tint: "#FDEEE4",
    deep: "#200E06",
    focus: "58% 50%",
  },
});
