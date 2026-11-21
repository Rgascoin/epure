import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "petit-sale-aux-lentilles",
  title: "Petit salé aux lentilles",
  seoTitle: "Petit salé aux lentilles du Puy, porc demi-sel dessalé",
  tagline: "On ne sale qu’à la fin.",
  description:
    "Petit salé aux lentilles pour 6 : poitrine et palette demi-sel dessalées, 1 h 15 de frémissement, puis les lentilles du Puy 30 minutes dans le bouillon.",
  summary:
    "Pour 6 personnes, faites dessaler 1,5 kg de poitrine et de palette de porc demi-sel 2 heures dans l’eau froide, blanchissez-les, puis laissez-les frémir 1 h 15 avec un oignon piqué de girofle et un bouquet garni. Les carottes suivent, puis 400 g de lentilles vertes du Puy pour les 25 à 30 dernières minutes, sans sel ajouté. Comptez 4 h 45 en tout, dont 30 minutes de travail.",
  intro: [
    "Le petit salé, c’est du porc conservé dans le sel, poitrine et palette le plus souvent, qu’on cuit longuement à l’eau avec quelques aromates avant d’y verser des lentilles vertes. Elles cuisent dans le bouillon de la viande et en prennent le goût.",
    "Le sel fait le plat, et il peut aussi le gâcher. Si la viande n’est pas dessalée, il passe dans le bouillon, puis dans les lentilles, et plus rien ne le rattrape. D’où les deux heures d’eau froide, le blanchiment, et pas une pincée de sel avant de goûter à la fin.",
    "Les lentilles n’arrivent que pour la dernière demi-heure. Versées plus tôt, elles éclatent et finissent en purée.",
  ],
  category: "Plat",
  cuisine: "Française",
  keywords: [
    "petit salé aux lentilles",
    "recette petit salé aux lentilles",
    "petit salé lentilles du puy",
    "lentilles au petit salé",
    "dessaler du petit salé",
    "temps de cuisson petit salé",
    "petit salé poitrine palette",
    "petit salé traditionnel",
  ],
  servings: 6,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 30, cook: 135, rest: 120 },
  difficulty: "Facile",
  cost: "€€",
  season: ["Automne", "Hiver"],
  tags: ["hiver"],
  equipment: ["faitout de 6 à 8 l avec couvercle", "grand saladier", "écumoire", "passoire"],
  ingredients: [
    {
      title: "La viande et le bouillon",
      items: [
        { qty: 600, unit: "g", name: "poitrine de porc demi-sel", note: "en un morceau", step: 50 },
        { qty: 900, unit: "g", name: "palette de porc demi-sel", note: "avec l’os", step: 50 },
        { qty: 1, name: "oignon", plural: "oignons", step: 1 },
        { qty: 3, name: "clou de girofle", plural: "clous de girofle", step: 1 },
        {
          qty: 1,
          name: "bouquet garni",
          note: "2 brins de thym, 1 feuille de laurier, 5 queues de persil",
          fixed: true,
        },
        { qty: 2, unit: "gousse", name: "ail", note: "pelées, entières", step: 1 },
        { qty: 1, unit: "cac", name: "poivre noir en grains", step: 0.5 },
        { qty: 3, unit: "l", name: "eau froide", step: 0.5 },
        { qty: 4, name: "carotte", plural: "carottes", note: "environ 400 g", step: 1 },
      ],
    },
    {
      title: "Les lentilles et le service",
      items: [
        { qty: 400, unit: "g", name: "lentilles vertes du Puy", step: 20 },
        { qty: 4, unit: "brin", name: "persil plat", step: 1 },
        { qty: 3, unit: "cas", name: "moutarde de Dijon", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Dessaler et blanchir",
      steps: [
        {
          title: "Dessaler la viande",
          text: "Rincez la poitrine et la palette sous l’eau froide. Plongez-les dans un grand saladier d’eau froide et laissez-les dessaler 2 heures au réfrigérateur, en changeant l’eau au bout d’une heure.",
          timer: { minutes: 120, label: "Dessalage" },
          tip: "Demandez au boucher s’il s’agit d’un demi-sel doux ou d’un salé plus fort : ce dernier demande une nuit d’eau froide, avec deux changements d’eau.",
        },
        {
          title: "Blanchir",
          text: "Mettez la viande dans le faitout, couvrez largement d’eau froide et portez à ébullition à feu vif. Laissez bouillir 5 minutes : une écume grise monte à la surface. Égouttez, rincez la viande à l’eau froide et lavez le faitout.",
          timer: { minutes: 5, label: "Blanchiment" },
        },
        {
          title: "Préparer les aromates",
          text: "Pelez l’oignon et piquez-le des clous de girofle. Ficelez le bouquet garni. Pelez les carottes et coupez-les en tronçons de 4 cm, en fendant les plus grosses en deux dans la longueur.",
        },
      ],
    },
    {
      title: "La cuisson",
      steps: [
        {
          title: "Lancer le bouillon",
          text: "Remettez la viande dans le faitout avec l’oignon, le bouquet garni, l’ail et le poivre en grains. Versez les 3 litres d’eau froide : la viande doit être couverte. Portez doucement à frémissement, environ 15 minutes, en retirant l’écume à l’écumoire. Ne salez pas.",
          timer: { minutes: 15, label: "Montée à frémissement" },
        },
        {
          title: "Mijoter la viande",
          text: "Couvrez en laissant un espace pour la vapeur et laissez frémir 1 h 15 : quelques bulles doivent à peine troubler la surface. Si le niveau descend sous la viande, complétez avec de l’eau chaude.",
          timer: { minutes: 75, label: "Frémissement de la viande" },
          tip: "Un bouillon qui bout à gros bouillons durcit la viande et la rend filandreuse. Baissez le feu au minimum, quitte à poser le faitout sur un diffuseur.",
        },
        {
          title: "Ajouter les carottes",
          text: "Ajoutez les carottes et poursuivez 10 minutes. Pendant ce temps, rincez les lentilles dans une passoire et retirez les petits cailloux éventuels.",
          timer: { minutes: 10, label: "Carottes" },
        },
        {
          title: "Cuire les lentilles",
          text: "Versez les lentilles autour de la viande. Le bouillon doit les couvrir d’environ 2 cm : prélevez l’excédent à la louche et gardez-le au chaud. Couvrez et laissez frémir 25 à 30 minutes, en remuant deux ou trois fois. Elles sont prêtes quand elles sont tendres sous la dent mais restent entières.",
          timer: { minutes: 25, label: "Cuisson des lentilles" },
          tip: "Si les lentilles boivent tout le liquide avant d’être cuites, rajoutez une louche du bouillon mis de côté.",
        },
        {
          title: "Découper et servir",
          text: "Vérifiez la viande : celle de la palette se détache de l’os et la pointe d’un couteau entre sans résistance dans la poitrine. Retirez l’oignon et le bouquet garni. Ôtez l’os, coupez la viande en tranches épaisses. Goûtez les lentilles, salez seulement si besoin, poivrez, et servez-les avec un peu de jus, la viande et les carottes dessus, le persil ciselé et la moutarde à part.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Le sel sort par l’eau",
      text: "Plongée dans l’eau froide, la viande perd son sel par diffusion : il passe de la chair, très salée, vers l’eau, qui l’est peu, jusqu’à ce que les deux s’équilibrent. Changer l’eau relance l’échange. Le blanchiment enlève ensuite le sel de surface et les protéines qui troubleraient le bouillon, celles qui forment l’écume grise.",
    },
    {
      title: "Un bouillon déjà assaisonné",
      text: "Même dessalée, la viande garde une partie de son sel, qu’elle cède au bouillon pendant la cuisson. Les lentilles cuisent dans ce bouillon et l’absorbent en gonflant. Saler avant la fin, c’est ajouter du sel à un liquide qui en contient déjà sans qu’on sache combien.",
    },
    {
      title: "La palette devient tendre",
      text: "L’épaule de porc est riche en collagène. Maintenu longtemps dans un liquide qui frémit, ce collagène se transforme peu à peu en gélatine, et la viande se détache de l’os. Un bouillon qui bout trop fort fait au contraire se resserrer les fibres, qui expulsent leur jus.",
    },
  ],
  tips: [
    "Choisissez des lentilles vertes du Puy : petites et à peau fine, elles cuisent en une demi-heure sans trempage et se tiennent dans le bouillon.",
    "Gardez le bouillon en trop. Allongé d’eau, car il est salé, il fait une bonne base de soupe avec les restes de lentilles.",
    "Laissez la viande dans le faitout jusqu’au dernier moment : sortie trop tôt, elle sèche pendant que les lentilles finissent de cuire.",
    "Servez une moutarde forte à part et, pour ceux qui aiment, quelques cornichons.",
  ],
  mistakes: [
    "Sauter le dessalage : le bouillon devient trop salé et les lentilles avec. Pour rattraper, égouttez les lentilles, jetez une partie du jus et allongez avec de l’eau chaude.",
    "Saler l’eau de cuisson par habitude : le sel du porc suffit presque toujours. On goûte à la fin, et seulement là.",
    "Verser les lentilles en même temps que la viande : elles éclatent bien avant que la palette soit tendre et le tout tourne en purée.",
    "Laisser les lentilles nager dans trop de bouillon : elles restent fades et le plat ressemble à une soupe. Retirez l’excédent avant de les verser.",
  ],
  variations: [
    {
      title: "Avec une saucisse de Morteau",
      text: "Ajoutez une saucisse de Morteau d’environ 400 g en même temps que les carottes, sans la piquer, pour 40 minutes de frémissement en tout. Coupez-la en rondelles épaisses au moment de servir.",
    },
    {
      title: "Au jarret demi-sel",
      text: "Remplacez la palette par un jarret demi-sel d’environ 1 kg. Plus ferme, il demande 1 h 45 de frémissement seul avant les carottes, au lieu de 1 h 15. Il est cuit quand la chair se détache de l’os.",
    },
    {
      title: "En salade, le lendemain",
      text: "Égouttez les restes de lentilles, mélangez-les tièdes avec 3 cuillerées à soupe d’huile de colza, 1 de vinaigre de vin et une échalote ciselée, et ajoutez la viande froide en dés. La vinaigrette se goûte avant de saler.",
    },
  ],
  storage:
    "Laissez tiédir, puis mettez au réfrigérateur dans les 2 heures, viande et lentilles ensemble dans une boîte fermée, avec un peu de bouillon pour qu’elles ne sèchent pas. Le petit salé se garde 2 à 3 jours. Réchauffez à feu doux, à couvert, avec une louche d’eau ou de bouillon, jusqu’à ce que ce soit bien chaud au cœur. Il se congèle 3 mois ; une fois décongelé, ne le recongelez pas.",
  pairing: "Un rouge léger et fruité, comme un beaujolais ou un saint-pourçain, ou simplement un cidre brut.",
  faq: [
    {
      q: "Faut-il dessaler le petit salé ?",
      a: "Oui, presque toujours. Pour un demi-sel de boucherie, 2 heures dans l’eau froide au réfrigérateur, en changeant l’eau à mi-temps, suffisent. Un morceau plus salé demande une nuit. Le blanchiment qui suit enlève encore un peu de sel.",
    },
    {
      q: "Combien de temps cuire le petit salé aux lentilles ?",
      a: "Environ 1 h 50 de frémissement pour 1,5 kg de poitrine et de palette : 1 h 15 pour la viande seule, 10 minutes avec les carottes, puis 25 à 30 minutes avec les lentilles. La palette est cuite quand la chair se détache de l’os.",
    },
    {
      q: "Faut-il saler les lentilles du petit salé ?",
      a: "Non, pas pendant la cuisson. La viande, même dessalée, sale le bouillon dans lequel cuisent les lentilles. Goûtez au moment de servir et ajoutez du sel seulement s’il en manque, ce qui arrive rarement.",
    },
    {
      q: "Faut-il faire tremper les lentilles vertes ?",
      a: "Non. Les lentilles vertes du Puy cuisent en 25 à 30 minutes sans trempage. Rincez-les simplement dans une passoire et retirez les petits cailloux qui s’y glissent parfois.",
    },
    {
      q: "Quel morceau choisir pour un petit salé ?",
      a: "Un mélange de poitrine et de palette demi-sel, environ 250 g par personne avec l’os. La poitrine apporte le moelleux et un peu de gras, la palette une viande plus maigre qui se tranche bien. Le jarret ou l’échine demi-sel conviennent aussi.",
    },
    {
      q: "Peut-on préparer le petit salé la veille ?",
      a: "Oui, et il n’y perd rien. Mettez-le au réfrigérateur dans les 2 heures après la cuisson, avec un peu de bouillon, puis réchauffez-le doucement à couvert. Il se garde 2 à 3 jours.",
    },
  ],
  nutrition: {
    calories: 720,
    protein: 55,
    fat: 38,
    saturatedFat: 14,
    carbs: 39,
    sugar: 4,
    fiber: 10,
    sodium: 1500,
  },
  annotations: { hero: "les lentilles, la dernière demi-heure", detail: "pas de sel avant de goûter" },
  images: {
    heroAlt:
      "Petit salé aux lentilles dans un plat en terre vernissée : lentilles vertes, carottes, oignon, tranches de porc et rondelles de saucisse",
    detailAlt:
      "Gros plan sur le petit salé : lentilles vertes, carottes, oignon fondu et tranches de porc dans leur jus",
    credits: {
      hero: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Petit_sal%C3%A9_01.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: {
        photographer: "Arnaud 25",
        url: "https://commons.wikimedia.org/wiki/File:Petit_sal%C3%A9_02.jpg",
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
    accent: "#B5562E",
    onAccent: "#FFFFFF",
    ink: "#8E3F1F",
    tint: "#F8EAE2",
    deep: "#1E120C",
    focus: "50% 50%",
  },
});
