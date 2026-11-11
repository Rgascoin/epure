import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "tartiflette",
  title: "Tartiflette au reblochon",
  seoTitle: "Tartiflette au reblochon, pommes de terre fondantes",
  tagline: "Un reblochon entier, croûte vers le haut.",
  description:
    "La tartiflette savoyarde pour 6 : 1,5 kg de pommes de terre, des lardons, des oignons, du vin blanc et un reblochon entier fondu au four. Prête en 1 h 30.",
  summary:
    "Pour 6 personnes, cuisez 1,5 kg de pommes de terre à chair ferme dans leur peau, faites revenir 200 g de lardons fumés avec 2 oignons, déglacez avec 15 cl de vin blanc de Savoie, puis couvrez le tout d’un reblochon coupé en deux, croûte vers le haut. Comptez 25 minutes de four à 200 °C et 5 minutes de repos. Il faut 1 h 30 en tout, dont 25 minutes de travail.",
  intro: [
    "La tartiflette, ce sont des pommes de terre, des lardons et des oignons dorés à la poêle, mouillés d’un peu de vin blanc, puis recouverts d’un reblochon qui fond et coule dans tous les interstices. C’est un plat de montagne, généreux et franchement pas compliqué.",
    "Ce qui la fait rater, ce sont les pommes de terre. Trop cuites ou d’une variété farineuse, elles finissent en purée sous le fromage. On les veut à chair ferme, cuites dans leur peau, encore un peu fermes au moment de passer au four.",
    "Et le reblochon se pose croûte vers le haut : la pâte coule vers le bas, la croûte dore et garde son goût de cave.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "tartiflette",
    "recette tartiflette",
    "tartiflette au reblochon",
    "tartiflette traditionnelle",
    "tartiflette savoyarde",
    "tartiflette sans reblochon",
    "quel vin pour la tartiflette",
    "quelle pomme de terre pour tartiflette",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 25, cook: 60, rest: 5 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Hiver"],
  tags: ["hiver"],
  equipment: [
    "grande casserole",
    "sauteuse de 28 cm",
    "plat à gratin de 30 × 22 cm environ",
  ],
  ingredients: [
    {
      title: "Les pommes de terre",
      items: [
        { qty: 1500, unit: "g", name: "pomme de terre à chair ferme", plural: "pommes de terre à chair ferme", note: "charlotte, amandine ou ratte, de taille moyenne", step: 100 },
        { qty: 1, unit: "cas", name: "gros sel", fixed: true },
      ],
    },
    {
      title: "La garniture",
      items: [
        { qty: 200, unit: "g", name: "lardons fumés", step: 10 },
        { qty: 2, name: "oignon", plural: "oignons", note: "environ 300 g, émincés", step: 1 },
        { qty: 15, unit: "cl", name: "vin blanc sec de Savoie", note: "jacquère, apremont ou chignin", step: 1 },
        { name: "poivre du moulin" },
      ],
    },
    {
      title: "Le gratin",
      items: [
        { qty: 1, name: "gousse d’ail", plural: "gousses d’ail", note: "coupée en deux", fixed: true },
        { qty: 10, unit: "g", name: "beurre", note: "pour le plat", step: 5 },
        { qty: 1, name: "reblochon", plural: "reblochons", note: "fermier de préférence, environ 450 g", step: 0.5 },
      ],
    },
  ],
  method: [
    {
      title: "Préparer la garniture",
      steps: [
        {
          title: "Cuire les pommes de terre",
          text: "Mettez les pommes de terre entières, non épluchées, dans une grande casserole d’eau froide avec le gros sel. Portez à ébullition, puis laissez frémir 20 minutes. La pointe d’un couteau doit entrer en sentant encore une petite résistance au centre.",
          timer: { minutes: 20, label: "Pommes de terre" },
          tip: "Cuites dans leur peau, elles boivent moins d’eau et se tiennent au four. Arrêtez la cuisson un peu avant le moment où vous les serviriez à la vapeur : le four finit le travail.",
        },
        {
          title: "Dorer les lardons",
          text: "Pendant ce temps, faites revenir les lardons à sec dans la sauteuse sur feu moyen, 5 minutes, jusqu’à ce que leur gras fonde et qu’ils soient dorés sur les bords, sans plus aucune partie rosée.",
          timer: { minutes: 5, label: "Lardons" },
        },
        {
          title: "Fondre les oignons",
          text: "Ajoutez les oignons dans la graisse des lardons et laissez-les cuire 10 minutes à feu moyen, en remuant de temps en temps. Ils doivent devenir tendres, translucides et blonds.",
          timer: { minutes: 10, label: "Oignons" },
        },
        {
          title: "Éplucher et couper",
          text: "Allumez le four à 200 °C. Épluchez les pommes de terre encore tièdes (un torchon aide à les tenir) et coupez-les en rondelles de 1 cm, ou en gros dés si elles s’effritent.",
        },
        {
          title: "Déglacer au vin blanc",
          text: "Mettez les pommes de terre dans la sauteuse, versez le vin blanc et mélangez délicatement sur feu vif 3 minutes, en grattant le fond, jusqu’à ce que le vin soit presque entièrement absorbé. Poivrez généreusement. Salez à peine, voire pas du tout : lardons et reblochon le sont déjà.",
          timer: { minutes: 3, label: "Déglaçage" },
        },
      ],
    },
    {
      title: "Gratiner",
      steps: [
        {
          title: "Monter le plat",
          text: "Frottez l’intérieur du plat avec l’ail, puis beurrez-le. Étalez-y la garniture. Grattez légèrement la croûte du reblochon avec un couteau, sans l’enlever, puis coupez-le en deux dans l’épaisseur pour obtenir deux disques. Posez-les sur les pommes de terre, croûte vers le haut.",
          tip: "La croûte en haut, c’est elle qui dore et protège la pâte, qui fond vers le bas et nappe les pommes de terre. Dans l’autre sens, le dessus sèche et la croûte reste molle.",
        },
        {
          title: "Enfourner",
          text: "Glissez le plat au milieu du four pour 20 à 25 minutes. C’est prêt quand le reblochon s’est affaissé et a coulé jusqu’au fond, que la croûte est dorée et que ça bouillonne sur les bords.",
          timer: { minutes: 25, label: "Tartiflette au four" },
        },
        {
          title: "Laisser reposer",
          text: "Sortez le plat et attendez 5 minutes avant de servir : le fromage se raffermit un peu et se sert à la cuillère sans couler partout.",
          timer: { minutes: 5, label: "Repos" },
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi une chair ferme",
      text: "Les pommes de terre à chair ferme contiennent moins d’amidon que les farineuses, et leurs cellules restent soudées à la cuisson. Elles gardent leur forme sous le fromage au lieu de se défaire en purée.",
    },
    {
      title: "Pourquoi le reblochon fond si bien",
      text: "C’est un fromage à pâte pressée non cuite, riche en eau et en matière grasse. À la chaleur du four, sa pâte devient presque liquide sans devenir élastique ni rendre beaucoup d’huile, contrairement aux fromages plus secs.",
    },
    {
      title: "À quoi sert le vin",
      text: "L’acidité du vin blanc équilibre le gras des lardons et du fromage. Versé sur les pommes de terre encore chaudes, il est en partie absorbé et en partie évaporé : il reste le goût, pas le liquide.",
    },
  ],
  tips: [
    "Préparez la garniture la veille et gardez-la au frais dans le plat. Le jour même, posez le reblochon et comptez 5 minutes de four en plus.",
    "Un reblochon fermier (pastille verte sur la croûte) a plus de goût que le laitier (pastille rouge), mais les deux fondent aussi bien.",
    "Si le dessus n’est pas assez doré à la fin, passez 2 minutes sous le gril en surveillant.",
    "Servez avec une salade verte bien vinaigrée : elle rattrape le côté riche du plat.",
  ],
  mistakes: [
    "Prendre des pommes de terre farineuses comme la bintje : elles s’écrasent au mélange et la tartiflette tourne au gratin de purée.",
    "Cuire les pommes de terre jusqu’au bout dès le départ : elles se défont au four. Arrêtez-les quand le couteau sent encore une légère résistance.",
    "Saler comme d’habitude : entre les lardons fumés et le reblochon, le plat devient vite trop salé. Goûtez avant d’ajouter quoi que ce soit.",
    "Retirer la croûte du reblochon : la pâte coule d’un coup, rend de l’huile et le dessus ne dore plus. Un simple grattage suffit.",
  ],
  variations: [
    {
      title: "Sans reblochon",
      text: "Prenez 450 g d’un autre fromage à pâte souple qui fond bien : un pont-l’évêque, une tomme de Savoie ou du fromage à raclette en tranches épaisses. Ce n’est plus tout à fait une tartiflette, mais le gratin se tient et dore pareil.",
    },
    {
      title: "Sans lardons",
      text: "Remplacez les lardons par 250 g de champignons de Paris émincés, revenus 8 minutes dans 20 g de beurre avant les oignons. Salez-les légèrement.",
    },
    {
      title: "À la crème",
      text: "Pour une version plus fondante, ajoutez 10 cl de crème fraîche épaisse sur les pommes de terre juste avant de poser le reblochon.",
    },
  ],
  storage:
    "Elle se garde 2 jours au réfrigérateur, dans le plat filmé ou une boîte fermée. Réchauffez-la 15 minutes au four à 180 °C, couverte d’une feuille d’aluminium, jusqu’à ce qu’elle soit brûlante au centre. Elle ne se congèle pas bien : les pommes de terre deviennent spongieuses.",
  pairing:
    "Un vin blanc de Savoie, le même que celui de la cuisson : apremont, chignin ou roussette. Et une salade verte à côté.",
  faq: [
    {
      q: "Quelles pommes de terre pour une tartiflette ?",
      a: "Des pommes de terre à chair ferme : charlotte, amandine, ratte ou franceline. Elles gardent leur forme après la cuisson à l’eau et au four. Évitez la bintje et les variétés farineuses, qui finissent en purée.",
    },
    {
      q: "Comment faire une tartiflette sans reblochon ?",
      a: "Prenez 450 g d’un autre fromage qui fond bien, comme un pont-l’évêque, une tomme de Savoie ou du fromage à raclette. Le goût change, la recette reste la même : on le pose sur le dessus et on enfourne 20 à 25 minutes à 200 °C.",
    },
    {
      q: "Faut-il mettre de la crème dans la tartiflette ?",
      a: "Non, ce n’est pas obligatoire. Le reblochon apporte assez de gras et de fondant. Certains ajoutent 10 cl de crème fraîche pour une texture plus coulante, c’est une affaire de goût.",
    },
    {
      q: "Faut-il enlever la croûte du reblochon ?",
      a: "Non. On la gratte légèrement au couteau et on pose le fromage croûte vers le haut. Elle dore au four, protège la pâte et apporte du goût.",
    },
    {
      q: "Peut-on préparer la tartiflette la veille ?",
      a: "Oui. Montez la garniture dans le plat, laissez refroidir et gardez-la au frais jusqu’à 24 heures. Posez le reblochon juste avant d’enfourner et comptez 25 à 30 minutes à 200 °C.",
    },
    {
      q: "Combien de reblochon pour 6 personnes ?",
      a: "Un reblochon entier, soit environ 450 g, pour 1,5 kg de pommes de terre. Pour 4 personnes, un demi-reblochon suffit avec 1 kg de pommes de terre.",
    },
  ],
  nutrition: { calories: 565, protein: 27, fat: 30, saturatedFat: 17, carbs: 46, sugar: 4, fiber: 4, sodium: 950 },
  annotations: { hero: "le reblochon coule jusqu’au fond", detail: "lardons, oignons, pommes de terre" },
  images: {
    heroAlt: "Tartiflette vue de dessus dans une poêle noire, deux moitiés de reblochon fondues et dorées sur les pommes de terre et les lardons",
    detailAlt: "Tartiflette dans un plat en verre, le reblochon fondu au centre entouré de pommes de terre et de lardons",
    credits: {
      hero: { photographer: "Benoît Prieur", url: "https://commons.wikimedia.org/w/index.php?curid=95436241", source: "Wikimedia Commons", license: "CC0" },
      detail: { photographer: "Rémi Guillot", url: "https://commons.wikimedia.org/wiki/File:Tartiflette_reblochon.jpg", source: "Wikimedia Commons", license: "CC BY-SA 3.0" },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#D9A43C",
    onAccent: "#1B1712",
    ink: "#7A5412",
    tint: "#FAF2E2",
    deep: "#1A1309",
    focus: "50% 50%",
  },
});
