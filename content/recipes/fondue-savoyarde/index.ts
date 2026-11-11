import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "fondue-savoyarde",
  title: "Fondue savoyarde aux trois fromages",
  seoTitle: "Fondue savoyarde aux trois fromages, lisse jusqu’au bout",
  tagline: "On tourne en huit, sans jamais bouillir.",
  description:
    "Fondue savoyarde pour 6 : 1,2 kg de beaufort, comté et emmental de Savoie fondus dans 40 cl de vin blanc sec, pain rassis en cubes. Prête en 45 minutes.",
  summary:
    "Pour 6 personnes, frottez le caquelon d’ail, faites frémir 40 cl de vin blanc sec de Savoie, puis faites-y fondre peu à peu 400 g de beaufort, 400 g de comté et 400 g d’emmental de Savoie râpés, en tournant en huit sur feu doux. Liez avec 1 cac de fécule délayée dans 2 cas de kirsch ou de vin, et servez sur le réchaud avec 800 g de pain rassis en cubes. Comptez 45 minutes en tout.",
  intro: [
    "La fondue savoyarde, c’est du fromage fondu dans du vin blanc, posé au milieu de la table sur un réchaud, et dans lequel chacun trempe des cubes de pain piqués au bout d’une longue fourchette. Trois fromages de montagne, un vin sec, un peu d’ail.",
    "Le danger, c’est qu’elle tranche : le gras se sépare, le fromage fait une boule élastique au fond et le vin surnage.",
    "Ça arrive quand on chauffe trop fort ou qu’on verse tout le fromage d’un coup. On l’ajoute par poignées, sur feu doux, en tournant sans arrêt, et on ne la laisse jamais bouillir.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "fondue savoyarde",
    "recette fondue savoyarde",
    "fondue savoyarde trois fromages",
    "fromage pour fondue savoyarde",
    "quel vin pour fondue savoyarde",
    "fondue savoyarde sans alcool",
    "quantité fromage fondue par personne",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 25 },
  difficulty: "Facile",
  cost: "€€€",
  season: ["Hiver"],
  tags: ["hiver", "nouvel-an"],
  equipment: [
    "caquelon en fonte émaillée ou en terre de 2,5 l",
    "réchaud à fondue",
    "cuillère en bois",
    "râpe à gros trous",
    "fourchettes à fondue",
  ],
  ingredients: [
    {
      title: "Le pain",
      items: [
        {
          qty: 800,
          unit: "g",
          name: "pain de campagne rassis",
          note: "de la veille, en cubes de 3 cm avec un côté de croûte",
          step: 50,
        },
      ],
    },
    {
      title: "La fondue",
      items: [
        { qty: 400, unit: "g", name: "beaufort", note: "sans croûte, râpé ou en petits dés", step: 50 },
        { qty: 400, unit: "g", name: "comté", note: "sans croûte, râpé ou en petits dés", step: 50 },
        { qty: 400, unit: "g", name: "emmental de Savoie", note: "sans croûte, râpé ou en petits dés", step: 50 },
        { qty: 1, name: "gousse d’ail", plural: "gousses d’ail", note: "coupée en deux", fixed: true },
        { qty: 40, unit: "cl", name: "vin blanc sec de Savoie", note: "apremont, chignin ou jacquère", step: 5 },
        { qty: 1, unit: "cac", name: "fécule de maïs", step: 0.5 },
        { qty: 2, unit: "cas", name: "kirsch", note: "facultatif, ou 2 cas de vin blanc", step: 1 },
        { name: "poivre du moulin" },
        { name: "noix de muscade" },
      ],
    },
  ],
  method: [
    {
      title: "Préparer",
      steps: [
        {
          title: "Couper le pain",
          text: "Coupez le pain en cubes de 3 cm en gardant un morceau de croûte sur chacun. Mettez-les dans une corbeille, à l’air libre. Si votre pain est frais, passez les cubes 5 minutes au four à 150 °C pour les sécher.",
          timer: { minutes: 5, label: "Sécher le pain" },
          tip: "C’est la croûte qui tient sur la fourchette : on pique d’abord la mie, et la pointe ressort par la croûte. Un pain rassis boit le fromage sans se détremper.",
        },
        {
          title: "Râper les fromages",
          text: "Retirez les croûtes et râpez les trois fromages à gros trous, ou coupez-les en petits dés de 1 cm. Mélangez-les dans un saladier pour que chaque poignée contienne un peu des trois.",
        },
        {
          title: "Frotter le caquelon",
          text: "Frottez tout l’intérieur du caquelon avec les demi-gousses d’ail. Hachez-les finement et laissez-les au fond si vous aimez l’ail, sinon retirez-les.",
        },
      ],
    },
    {
      title: "Faire fondre",
      steps: [
        {
          title: "Chauffer le vin",
          text: "Versez le vin dans le caquelon et chauffez-le sur la cuisinière, à feu moyen, environ 5 minutes, jusqu’à ce que de petites bulles montent sur les bords.",
          timer: { minutes: 5, label: "Vin" },
        },
        {
          title: "Fondre par poignées",
          text: "Baissez à feu moyen-doux. Ajoutez le fromage une poignée à la fois, en tournant la cuillère en bois en forme de huit, et attendez que chaque poignée ait fondu avant la suivante. Comptez 15 minutes. La fondue doit être lisse, épaisse, et frémir à peine sans jamais bouillir.",
          timer: { minutes: 15, label: "Fondre les fromages" },
          tip: "Le mouvement en huit racle tout le fond du caquelon et mélange le centre avec les bords. Le fromage ne colle pas, et le gras reste pris dans la masse.",
        },
        {
          title: "Lier la fondue",
          text: "Délayez la fécule dans le kirsch, ou dans 2 cas de vin blanc. Versez dans la fondue et tournez encore 2 minutes : elle devient brillante et nappe la cuillère sans couler en fils trop liquides. Poivrez et râpez un peu de muscade.",
          timer: { minutes: 2, label: "Liaison" },
        },
        {
          title: "Passer à table",
          text: "Allumez le réchaud au centre de la table et posez-y le caquelon, flamme réglée pour que la fondue frémisse à peine. Chacun pique un cube de pain et le trempe en tournant en huit. Ce mouvement à chaque bouchée l’empêche d’attacher. Le fond gratiné qui reste à la fin, la religieuse, se décolle à la spatule et se partage.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi le vin blanc",
      text: "Son acidité, surtout l’acide tartrique, capte une partie du calcium qui relie entre elles les protéines du fromage (les caséines). Celles-ci restent dispersées au lieu de s’agglomérer en boule élastique.",
    },
    {
      title: "Ce que fait la fécule",
      text: "En gonflant dans le liquide chaud, les grains d’amidon épaississent la fondue et s’intercalent entre les gouttelettes de gras et les protéines. L’ensemble reste lié et ne se sépare pas en huile et en fromage.",
    },
    {
      title: "Pourquoi trois fromages",
      text: "Le beaufort et le comté, des pâtes pressées cuites affinées, apportent le goût. L’emmental, plus jeune et plus souple, apporte le filant. Râpés, ils fondent vite et régulièrement, sans surchauffer le fond.",
    },
  ],
  tips: [
    "Comptez 200 g de fromage par personne pour un plat unique, 150 g si vous servez aussi charcuterie et salade.",
    "Un vin très sec et assez acide fait une fondue plus stable qu’un vin rond.",
    "Si la fondue épaissit trop en cours de repas, ajoutez 2 à 3 cas de vin chaud en tournant.",
    "Un trait de jus de citron rattrape une fondue qui commence à se séparer, si vous n’avez pas de vin assez acide.",
  ],
  mistakes: [
    "Faire bouillir la fondue : les protéines se resserrent, le gras s’échappe et le fromage devient caoutchouteux. Si elle tranche, retirez du feu, ajoutez 1 cac de fécule délayée dans 1 cas de vin ou de jus de citron, et fouettez vivement.",
    "Mettre tout le fromage d’un coup : il forme un bloc qui fond mal pendant que le vin chauffe trop. Procédez par poignées.",
    "Utiliser du pain frais : il se gorge, se défait et tombe dans le caquelon. Prenez-le rassis ou séchez-le au four.",
    "Régler le réchaud trop fort : le fond brûle avant la fin du repas. La flamme doit juste maintenir un frémissement à peine visible.",
  ],
  variations: [
    {
      title: "Sans alcool",
      text: "Remplacez le vin par 40 cl de bouillon de légumes léger additionné de 2 cas de jus de citron, et supprimez le kirsch. Liez avec 2 cac de fécule au lieu d’1 : la fondue est moins stable sans l’acidité du vin.",
    },
    {
      title: "Aux cèpes",
      text: "Faites revenir 30 g de cèpes séchés, réhydratés 20 minutes et hachés, dans 10 g de beurre, puis ajoutez-les au vin avant le fromage.",
    },
    {
      title: "Avec de l’abondance",
      text: "Remplacez l’emmental par 400 g d’abondance. La fondue est un peu moins filante et plus parfumée.",
    },
  ],
  storage:
    "Elle se mange tout de suite. Le reste refroidi se garde 2 jours au réfrigérateur, bien filmé ; réchauffez-le à feu très doux avec 2 cas de vin en tournant, ou servez-le gratiné sur des pommes de terre. Ne la congelez pas : elle tranche à la décongélation.",
  pairing:
    "Le même vin blanc de Savoie que dans le caquelon, ou du thé chaud. Une salade verte et quelques cornichons à côté.",
  faq: [
    {
      q: "Quels fromages pour une fondue savoyarde ?",
      a: "Le trio classique : beaufort, comté et emmental de Savoie, à parts égales. Certains remplacent l’emmental par de l’abondance ou ajoutent un peu de reblochon. Choisissez des fromages bien affinés pour le goût.",
    },
    {
      q: "Combien de fromage par personne pour une fondue ?",
      a: "200 g par personne pour un repas où la fondue est le plat unique, avec environ 130 g de pain. Si vous servez de la charcuterie et une salade, 150 g suffisent.",
    },
    {
      q: "La fondue savoyarde convient-elle aux enfants et aux femmes enceintes ?",
      a: "Non, pas telle quelle. La fondue ne cuit pas assez longtemps pour que l’alcool du vin s’évapore entièrement, et le kirsch ajouté à la fin reste presque intact. Pour les enfants et les femmes enceintes, faites la version au bouillon de légumes et au citron, sans kirsch.",
    },
    {
      q: "Pourquoi ma fondue a-t-elle tranché ?",
      a: "Parce qu’elle a trop chauffé, ou que le fromage a été ajouté trop vite. Retirez-la du feu, ajoutez 1 cac de fécule délayée dans un peu de vin ou de jus de citron, et fouettez vivement jusqu’à ce qu’elle redevienne lisse.",
    },
    {
      q: "Quel vin pour une fondue savoyarde ?",
      a: "Un blanc de Savoie sec et vif : apremont, chignin ou jacquère. Son acidité aide le fromage à rester lisse. Évitez les vins ronds ou boisés.",
    },
    {
      q: "Faut-il mettre du kirsch dans la fondue ?",
      a: "Non, il est facultatif. Il parfume et sert à délayer la fécule, mais 2 cas de vin blanc font le même travail. Comme il n’a pas le temps de cuire, laissez-le de côté si des enfants ou des femmes enceintes sont à table.",
    },
  ],
  nutrition: { calories: 1110, protein: 65, fat: 64, saturatedFat: 40, carbs: 67, sugar: 3, fiber: 4, sodium: 1200 },
  annotations: { hero: "jamais d’ébullition, même au réchaud", detail: "trois fromages, à parts égales" },
  images: {
    heroAlt:
      "Fondue savoyarde dans un caquelon orange, une cuillère en bois soulève le fromage filant, corbeille de pain derrière",
    detailAlt: "Dés de fromage pour la fondue savoyarde dans une assiette sombre, prêts à fondre",
    credits: {
      hero: {
        photographer: "Camille Gévaudan",
        url: "https://commons.wikimedia.org/wiki/File:Fondue_savoyarde.JPG",
        source: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
      },
      detail: {
        photographer: "Caroline Léna Becker",
        url: "https://commons.wikimedia.org/wiki/File:Fondue_Savoyarde.JPG",
        source: "Wikimedia Commons",
        license: "CC BY 3.0",
      },
    },
  },
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  hero,
  detail,
  theme: {
    accent: "#E0B347",
    onAccent: "#1B1712",
    ink: "#755410",
    tint: "#FBF5E4",
    deep: "#19140A",
    focus: "55% 50%",
  },
});
