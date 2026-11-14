import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "bouillon-de-volaille",
  title: "Bouillon de volaille maison",
  seoTitle: "Bouillon de volaille maison, limpide et sans sel",
  tagline: "Il doit trembler, jamais bouillir.",
  description:
    "Bouillon de volaille maison : 1,5 kg de carcasses et 1 kg d’ailes, 2 h 30 de frémissement sans sel. Limpide, il prend en gelée et se congèle 3 mois.",
  summary:
    "Pour 8 bols, soit environ 2,4 l de bouillon, mettez 1,5 kg de carcasses de poulet et 1 kg d’ailes dans 4 l d’eau froide, écumez 10 minutes, ajoutez les légumes et le bouquet garni, puis laissez frémir 2 h 30 à 3 h, sans sel. Filtrez, refroidissez 30 minutes dans l’eau glacée et dégraissez après 6 h au réfrigérateur. Comptez un peu plus de 10 h en tout, dont 25 minutes de travail.",
  intro: [
    "Un bouillon de volaille maison, c’est de l’eau, des os de poulet et du temps. Bien fait, il est doré, limpide, et il prend en gelée au réfrigérateur. C’est cette gelée qu’on cherche : elle donne de la tenue à un risotto, à une sauce ou à un simple bol de vermicelles.",
    "On le rate de deux façons. En le laissant bouillir, ce qui le rend trouble et gras. Et en le laissant refroidir tranquillement sur la cuisinière jusqu’au lendemain, ce qui le rend dangereux.",
    "Pour le reste, on ne le sale pas, on le refroidit vite dans un bain d’eau glacée et on le dégraisse le lendemain, quand la graisse a figé en surface. Il se garde ensuite 3 jours au frais ou 3 mois au congélateur, en portions.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "bouillon de volaille",
    "bouillon de volaille maison",
    "recette bouillon de poulet",
    "bouillon de poulet maison",
    "bouillon avec carcasse de poulet",
    "fond blanc de volaille",
    "congeler bouillon maison",
    "conservation bouillon de volaille",
    "bouillon de vermicelles",
  ],
  servings: 8,
  servingsLabel: { one: "bol", other: "bols" },
  times: { prep: 25, cook: 195, rest: 390 },
  difficulty: "Facile",
  cost: "€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: [
    "marmite ou faitout de 8 l",
    "écumoire et louche",
    "passoire fine et torchon fin propre",
    "grande bassine ou évier, avec des glaçons",
    "boîtes ou sacs de congélation",
  ],
  ingredients: [
    {
      title: "Le bouillon",
      items: [
        { qty: 1500, unit: "g", name: "carcasse de poulet", note: "crues, environ 4, avec les cous", step: 50 },
        { qty: 1000, unit: "g", name: "aile de poulet", note: "entières", step: 50 },
        { qty: 4, unit: "l", name: "eau froide", step: 0.5 },
        { qty: 2, name: "carotte", plural: "carottes", note: "environ 250 g, en tronçons de 5 cm", step: 1 },
        { qty: 1, name: "poireau", plural: "poireaux", note: "le blanc et un peu de vert, fendu et lavé", step: 1 },
        { qty: 2, name: "oignon", plural: "oignons", note: "pelés, coupés en deux", step: 1 },
        { qty: 2, name: "branche de céleri", plural: "branches de céleri", note: "avec les feuilles", step: 1 },
        { qty: 2, name: "gousse d’ail", plural: "gousses d’ail", note: "non pelées, écrasées", step: 1 },
        {
          qty: 1,
          name: "bouquet garni",
          plural: "bouquets garnis",
          note: "4 branches de thym, 2 feuilles de laurier, 10 queues de persil",
          step: 1,
        },
        { qty: 1, unit: "cac", name: "poivre noir en grains", step: 0.5 },
      ],
    },
    {
      title: "Pour servir en bouillon",
      items: [
        { qty: 120, unit: "g", name: "vermicelle", note: "15 g par bol", step: 5 },
        { name: "sel fin", note: "environ 8 g par litre, au moment de servir" },
      ],
    },
  ],
  method: [
    {
      title: "Le bouillon",
      steps: [
        {
          title: "Préparer les carcasses",
          text: "Rincez les carcasses et les ailes à l’eau froide. Retirez les poumons et les caillots rouges collés le long de la colonne : ce sont eux qui grisent l’écume. Coupez chaque carcasse en deux ou trois avec un couteau lourd, pour qu’elles se tassent bien au fond de la marmite.",
        },
        {
          title: "Démarrer à froid",
          text: "Mettez carcasses et ailes dans la marmite et versez les 4 l d’eau froide : elle doit couvrir les os de 3 à 4 cm. Faites chauffer à feu moyen, sans couvrir, 25 à 30 minutes, jusqu’à ce que de petites bulles apparaissent sur les bords.",
          timer: { minutes: 30, label: "Montée en température" },
        },
        {
          title: "Écumer",
          text: "Une écume grise monte juste avant le frémissement. Baissez le feu pour que ça ne bouille pas et retirez-la à l’écumoire pendant 10 minutes, en rinçant l’écumoire dans un bol d’eau entre deux passages. C’est fini quand il ne remonte plus qu’une mousse blanche et légère.",
          timer: { minutes: 10, label: "Écumage" },
          tip: "Ne mélangez pas : la cuillère renvoie l’écume dans le liquide au lieu de la laisser monter.",
        },
        {
          title: "Ajouter les aromates",
          text: "Ajoutez les carottes, le poireau, les oignons, le céleri, l’ail, le bouquet garni et le poivre en grains. Enfoncez-les entre les os sans remuer le fond, puis ramenez doucement au frémissement, à feu doux.",
        },
        {
          title: "Frémir sans bouillir",
          text: "Laissez cuire 2 h 30 à 3 h à feu très doux, sans couvercle ou à peine entrouvert. La surface doit tout juste trembler, avec une bulle qui crève ici ou là : au thermomètre, entre 85 et 95 °C. Retirez de temps en temps la graisse qui remonte. Si les os émergent, ajoutez juste assez d’eau bouillante pour les recouvrir.",
          timer: { minutes: 150, label: "Frémissement" },
          tip: "Au premier gros bouillon, décalez la marmite sur le bord du brûleur plutôt que de couper le feu.",
        },
        {
          title: "Filtrer sans presser",
          text: "Éteignez le feu. Retirez les os et les légumes à l’écumoire, sans les écraser. Versez le bouillon à la louche dans une passoire fine tapissée d’un torchon fin humide, posée sur un grand récipient. Ne pressez pas ce qui reste dans le torchon : vous gagneriez quelques cuillerées et perdriez la limpidité.",
        },
      ],
    },
    {
      title: "Refroidir, dégraisser, servir",
      steps: [
        {
          title: "Refroidir vite",
          text: "Le bouillon doit entrer au réfrigérateur moins de 2 h après la fin de la cuisson. Posez le récipient dans l’évier rempli d’eau froide et de glaçons, et remuez de temps en temps pendant 30 minutes, jusqu’à ce que la paroi soit à peine tiède sous la main. Répartissez-le dans des boîtes peu profondes, fermez et rangez au réfrigérateur.",
          timer: { minutes: 30, label: "Bain d’eau glacée" },
          tip: "Une grande marmite chaude posée telle quelle au réfrigérateur met des heures à refroidir et réchauffe tout ce qui l’entoure.",
        },
        {
          title: "Dégraisser à froid",
          text: "Laissez reposer au moins 6 h au réfrigérateur, ou une nuit. La graisse fige en une couche jaune pâle, et le bouillon dessous prend en gelée tremblante. Soulevez la graisse à la cuillère et jetez-la, ou gardez-la pour faire sauter des pommes de terre. Le bouillon est prêt à servir, à garder ou à congeler.",
          timer: { minutes: 360, label: "Prise au froid" },
        },
        {
          title: "Servir aux vermicelles",
          text: "Pour 8 bols, portez le bouillon à ébullition, salez à raison d’environ 8 g par litre et goûtez. Versez les vermicelles en pluie et laissez cuire 3 à 4 minutes à petits bouillons, jusqu’à ce qu’ils soient tendres sous la dent. Servez aussitôt : ils continuent de gonfler dans le bol.",
          timer: { minutes: 4, label: "Vermicelles" },
        },
      ],
    },
  ],
  science: [
    {
      title: "L’eau froide et l’écume",
      text: "Les protéines solubles de la viande et du sang passent dans l’eau pendant qu’elle chauffe, puis coagulent entre 60 et 80 °C et remontent en écume. En partant à froid, elles s’agrègent en gros flocons faciles à retirer. Un bouillon qui bout les brise en particules fines qui restent en suspension : c’est le trouble.",
    },
    {
      title: "Le collagène devient gélatine",
      text: "La peau, les cartilages et les articulations des ailes et des cous contiennent du collagène. Chauffé longtemps dans l’eau, il se défait en gélatine, qui se dissout dans le bouillon. À chaud, elle donne du corps en bouche ; au froid, elle fait prendre le bouillon en gelée.",
    },
    {
      title: "Pourquoi refroidir vite",
      text: "Certaines bactéries, comme Clostridium perfringens, survivent à la cuisson sous forme de spores et se multiplient vite entre 15 et 50 °C environ. Un grand volume laissé à refroidir sur la cuisinière passe des heures dans cette zone. Le bain d’eau glacée et les boîtes peu profondes raccourcissent ce passage.",
    },
    {
      title: "Pourquoi sans sel",
      text: "Le bouillon sert souvent de base à une sauce, un risotto ou une soupe qui réduisent. L’eau s’évapore, le sel reste : un bouillon salé normalement devient trop salé une fois réduit de moitié.",
    },
  ],
  tips: [
    "Gardez les carcasses crues au congélateur au fil des poulets découpés, et demandez-en au volailler : quatre carcasses, et le bouillon est lancé.",
    "Pour une gelée bien ferme, ajoutez 4 pattes de poulet, ébouillantées 1 minute et débarrassées de leur peau jaune, ou remplacez une partie des ailes par des cous.",
    "Coupez les légumes en gros morceaux : en petits dés, ils se défont en 3 heures et troublent le bouillon.",
    "Congelez-en une partie en bacs à glaçons, puis démoulez les cubes dans un sac : de quoi déglacer une poêle ou détendre une sauce sans décongeler un litre.",
    "Notez la date sur chaque boîte : au congélateur, tous les bouillons se ressemblent.",
  ],
  mistakes: [
    "Le laisser bouillir à gros bouillons : il devient trouble et sent la graisse. Il reste bon pour un risotto ou une sauce ; pour le servir clair, dégraissez-le soigneusement à froid et gardez un frémissement à peine visible la prochaine fois.",
    "Saler dès le début : impossible de le réduire ensuite. Si c’est fait, servez-le allongé d’un peu d’eau, ou ne salez plus rien dans le plat qui l’utilise.",
    "Le laisser refroidir sur la cuisinière jusqu’au lendemain : il a passé la nuit dans la zone où les bactéries se multiplient. Jetez-le, le faire rebouillir ne rattrape pas tout.",
    "Presser les légumes dans la passoire : on récupère quelques cuillerées de jus et des particules qui troublent tout le bouillon.",
    "Noyer les os sous trop d’eau : le bouillon reste pâle et ne prend pas. Faites-le réduire à découvert, à petit frémissement, jusqu’à ce qu’il ait du goût.",
  ],
  variations: [
    {
      title: "Avec une poule",
      text: "Remplacez carcasses et ailes par une poule entière de 2 à 2,5 kg et comptez 3 h de frémissement. Le bouillon est plus gras et plus parfumé, dégraissez-le avec soin. La chair, effilochée, finit en salade, en hachis ou dans les bols de vermicelles.",
    },
    {
      title: "En fond brun",
      text: "Faites d’abord dorer carcasses et ailes 40 minutes au four à 220 °C, en les retournant à mi-cuisson, jusqu’à ce qu’elles soient brun noisette. Décollez les sucs de la plaque avec 20 cl d’eau chaude et versez-les dans la marmite. Le bouillon est ambré, avec un goût de rôti, pour les sauces et les jus.",
    },
    {
      title: "À l’autocuiseur",
      text: "Écumez à couvercle ouvert comme dans la recette, ajoutez les légumes, fermez et comptez 1 h à partir de la mise en pression, puis laissez la pression retomber seule. Le bouillon est un peu moins limpide, mais il prend aussi en gelée.",
    },
  ],
  storage:
    "3 jours au réfrigérateur, en boîtes fermées, une fois dégraissé. 3 mois au congélateur, en portions de 25 à 50 cl ou en cubes. Décongelez au réfrigérateur ou directement dans la casserole, portez à ébullition avant de l’utiliser, et ne recongelez jamais un bouillon décongelé.",
  pairing:
    "Servi clair aux vermicelles, il ouvre un repas d’hiver avant un plat rôti. En base, il mouille un risotto, une blanquette ou une soupe de légumes.",
  faq: [
    {
      q: "Combien de temps se garde un bouillon de volaille maison ?",
      a: "3 jours au réfrigérateur, en boîte fermée, et 3 mois au congélateur. Il doit entrer au froid moins de 2 h après la cuisson. Portez-le à ébullition avant de l’utiliser, et ne recongelez pas un bouillon décongelé.",
    },
    {
      q: "Faut-il saler un bouillon de volaille ?",
      a: "Non, pas pendant la cuisson : il deviendrait trop salé une fois réduit dans une sauce ou un risotto. On le sale au moment de le servir, environ 8 g de sel par litre, en goûtant.",
    },
    {
      q: "Pourquoi mon bouillon de volaille est-il trouble ?",
      a: "Le plus souvent, il a bouilli, ou les légumes ont été pressés au filtrage. Le bouillonnement mélange la graisse au liquide et brise l’écume en particules trop fines pour remonter. Le goût reste bon : gardez-le pour une sauce ou un risotto.",
    },
    {
      q: "Peut-on faire un bouillon avec la carcasse d’un poulet rôti ?",
      a: "Oui. Comptez 2 h de frémissement : la viande déjà cuite rend vite ce qu’elle a. Le bouillon est plus ambré, avec un goût de rôti, et un peu moins limpide. Mélangée à des ailes crues, une carcasse rôtie donne un bouillon plus corsé.",
    },
    {
      q: "Pourquoi mon bouillon ne prend-il pas en gelée ?",
      a: "Il manquait de collagène, ou il y avait trop d’eau. Les ailes, les cous et les pattes en apportent le plus ; les carcasses seules, moins. Faites-le réduire d’un tiers à découvert, ou ajoutez des pattes la prochaine fois. Liquide au froid, il reste parfaitement bon.",
    },
    {
      q: "Quelle différence entre un bouillon de volaille et un fond blanc ?",
      a: "Presque aucune à la maison. En cuisine classique, le fond blanc de volaille n’est pas salé et sert de base aux sauces ; le bouillon se sale et se sert tel quel. Cette recette se prépare comme un fond et devient bouillon au moment où vous la salez.",
    },
    {
      q: "Peut-on congeler le bouillon dans des bocaux en verre ?",
      a: "Oui, s’ils sont droits et remplis aux trois quarts : le bouillon gonfle en gelant, et un bocal plein éclate. Laissez-le refroidir complètement au réfrigérateur avant. Les sacs de congélation remplis à plat prennent moins de place.",
    },
  ],
  nutrition: { calories: 95, protein: 7, fat: 2, saturatedFat: 0.6, carbs: 12, sugar: 1, fiber: 0.5, sodium: 950 },
  annotations: { hero: "doré, limpide, juste tremblé", detail: "les yeux de gras, avant dégraissage" },
  images: {
    heroAlt:
      "Bol blanc de bouillon de volaille doré et limpide, entouré de carottes, d’un oignon, de céleri, de thym et de laurier.",
    detailAlt:
      "Bouillon de volaille doré vu de près dans un bol, avec une cuillère en porcelaine et des yeux de gras en surface.",
    credits: {
      hero: {
        photographer: "TheCulinaryGeek",
        url: "https://commons.wikimedia.org/wiki/File:Chicken_Stock.jpg",
        source: "Wikimedia Commons",
        license: "CC BY 2.0",
      },
      detail: {
        photographer: "Alex Bayev",
        url: "https://www.pexels.com/photo/close-up-of-a-chicken-soup-in-a-bowl-12077982/",
      },
    },
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  hero,
  detail,
  theme: {
    accent: "#D4A017",
    onAccent: "#1B1712",
    ink: "#7A5A0C",
    tint: "#FBF3DC",
    deep: "#17120A",
    focus: "50% 55%",
  },
});
