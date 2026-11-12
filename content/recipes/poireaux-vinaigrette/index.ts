import { defineRecipe } from "@/lib/define-recipe";
import hero from "./hero.jpg";
import detail from "./detail.jpg";

export default defineRecipe({
  slug: "poireaux-vinaigrette",
  title: "Poireaux vinaigrette",
  seoTitle: "Poireaux vinaigrette : cuisson juste et moutarde bien liée",
  tagline: "L’entrée de bistrot qui coûte trois sous.",
  description:
    "8 poireaux fins cuits 15 minutes à l’eau, bien égouttés, puis nappés tièdes d’une vinaigrette à la moutarde. Prêts en 55 minutes, œuf mimosa en option.",
  summary:
    "Pour 4 personnes, comptez 8 poireaux fins (environ 1,2 kg). Fendus, lavés et ficelés en bottes, ils cuisent 12 à 15 minutes à l’eau bouillante salée, s’égouttent 10 minutes, puis reçoivent tièdes une vinaigrette de 1 cuillère à soupe de moutarde, 1 de vinaigre de vin et 4 d’huile de colza. Deux œufs durs râpés en mimosa sont facultatifs. Il faut 55 minutes en tout, dont 20 de travail.",
  intro: [
    "Des blancs de poireaux fondants sous une vinaigrette qui pique un peu le nez : c’est l’entrée de bistrot par excellence, et l’une des moins chères qui soient en hiver.",
    "Deux choses la font rater. La terre, d’abord, qui se glisse entre les feuilles et crisse sous la dent. L’eau, ensuite : un poireau mal égoutté rend son jus dans l’assiette, et la vinaigrette tourne à la flaque grise.",
    "Prenez des poireaux fins, pas plus gros qu’un pouce, et assaisonnez-les tièdes. Ils boivent la sauce au lieu de la laisser glisser.",
  ],
  category: "Entrée",
  cuisine: "Française",
  keywords: [
    "poireaux vinaigrette",
    "recette poireaux vinaigrette",
    "poireaux vinaigrette moutarde",
    "cuisson poireaux vinaigrette",
    "poireaux vinaigrette œuf mimosa",
    "poireaux vinaigrette à l’ancienne",
    "poireaux à la vapeur",
    "entrée aux poireaux",
  ],
  diet: ["vegetarian"],
  servings: 4,
  servingsLabel: { one: "personne", other: "personnes" },
  times: { prep: 20, cook: 15, rest: 20 },
  difficulty: "Facile",
  cost: "€",
  season: ["Hiver", "Printemps"],
  tags: ["hiver", "printemps"],
  equipment: ["grande casserole ou cuit-vapeur", "ficelle de cuisine", "passoire et écumoire", "fouet", "râpe fine"],
  ingredients: [
    {
      title: "Les poireaux",
      items: [
        { qty: 8, name: "poireau fin", plural: "poireaux fins", note: "2 à 3 cm de diamètre, environ 1,2 kg", step: 1 },
        { qty: 30, unit: "g", name: "gros sel", note: "pour 3 l d’eau", fixed: true },
      ],
    },
    {
      title: "La vinaigrette",
      items: [
        { qty: 1, unit: "cas", name: "moutarde de Dijon", step: 1 },
        { qty: 1, unit: "cas", name: "vinaigre de vin rouge", step: 1 },
        { qty: 4, unit: "cas", name: "huile de colza", step: 1 },
        { qty: 1, name: "échalote", plural: "échalotes", note: "ciselée finement", step: 1 },
        { name: "sel fin" },
        { name: "poivre noir", note: "du moulin" },
      ],
    },
    {
      title: "Pour servir",
      items: [
        { qty: 2, name: "œuf", plural: "œufs", note: "pour le mimosa", step: 1, optional: true },
        { qty: 10, unit: "brin", name: "ciboulette", step: 1 },
      ],
    },
  ],
  method: [
    {
      title: "Les poireaux",
      steps: [
        {
          title: "Parer les poireaux",
          text: "Coupez la barbe des racines au ras, sans entamer la base qui tient les feuilles ensemble. Retirez la première feuille si elle est abîmée et coupez le vert foncé pour garder le blanc et le vert tendre, soit 15 à 18 cm. Fendez chaque poireau en deux dans la longueur, du vert jusqu’à 3 cm de la base.",
        },
        {
          title: "Laver et ficeler",
          text: "Passez-les sous l’eau froide, vert en bas, en écartant les feuilles du pouce pour chasser la terre. Regardez entre les couches : il ne doit plus rester un grain. Réunissez-les en deux bottes de quatre, serrées par deux tours de ficelle. Ficelés, ils ne s’effilochent pas dans l’eau et se sortent d’un coup.",
          tip: "Vert vers le bas sous le robinet : l’eau descend vers les feuilles et emporte la terre au lieu de la pousser vers la base.",
        },
        {
          title: "Cuire les poireaux",
          text: "Portez 3 l d’eau à ébullition avec le gros sel. Plongez les bottes et laissez cuire 12 à 15 minutes à petits bouillons. Ils sont cuits quand la pointe d’un couteau entre dans le blanc comme dans du beurre mou. À la vapeur, comptez 18 à 20 minutes.",
          timer: { minutes: 15, label: "Cuisson des poireaux" },
        },
        {
          title: "Cuire les œufs",
          text: "Pendant ce temps, si vous faites le mimosa, plongez les œufs dans une petite casserole d’eau bouillante et comptez 10 minutes. Refroidissez-les sous l’eau froide, puis écalez-les.",
          timer: { minutes: 10, label: "Œufs durs" },
        },
        {
          title: "Égoutter longuement",
          text: "Sortez les bottes à l’écumoire et posez-les dans une passoire, inclinées, pendant 10 minutes. Pressez-les ensuite doucement entre deux épaisseurs de torchon propre : il en sort encore pas mal d’eau.",
          timer: { minutes: 10, label: "Égouttage" },
          tip: "Ne les rafraîchissez pas sous l’eau froide : ils se gorgeraient d’eau et refroidiraient avant d’avoir bu la vinaigrette.",
        },
      ],
    },
    {
      title: "La vinaigrette et le service",
      steps: [
        {
          title: "Monter la vinaigrette",
          text: "Dans un bol, fouettez la moutarde, le vinaigre, une pincée de sel et du poivre jusqu’à ce que le sel fonde. Versez l’huile en filet sans cesser de fouetter : la sauce épaissit, devient opaque et crémeuse. Ajoutez l’échalote.",
          tip: "Le sel ne fond pas dans l’huile : mettez-le toujours dans le vinaigre d’abord.",
        },
        {
          title: "Assaisonner tièdes",
          text: "Coupez la ficelle, taillez les poireaux en tronçons de 6 à 8 cm et rangez-les dans un plat. Nappez-les de vinaigrette tant qu’ils sont tièdes, retournez-les une fois et laissez-les s’imprégner 10 minutes.",
          timer: { minutes: 10, label: "Imprégnation" },
        },
        {
          title: "Finir en mimosa",
          text: "Juste avant de servir, râpez finement les blancs d’œufs puis les jaunes au-dessus des poireaux. Parsemez de ciboulette ciselée. Servez tiède ou à température ambiante, jamais glacé.",
        },
      ],
    },
  ],
  science: [
    {
      title: "Pourquoi la terre se cache dedans",
      text: "Pour obtenir un long fût blanc, les maraîchers buttent les poireaux : ils remontent la terre le long de la tige pour la priver de lumière. La terre se glisse alors entre les feuilles, qui poussent emboîtées les unes dans les autres. D’où l’intérêt de fendre avant de laver.",
    },
    {
      title: "La moutarde tient la sauce",
      text: "L’huile et le vinaigre ne se mélangent pas. La moutarde apporte des composés émulsifiants, dont le mucilage de ses graines, qui entourent les gouttelettes d’huile et les empêchent de se regrouper. La vinaigrette reste liée et nappe le poireau au lieu de se séparer.",
    },
    {
      title: "Un poireau qui fond",
      text: "La cuisson dégrade peu à peu la pectine qui soude les cellules entre elles : les fibres se séparent et le blanc devient fondant. Trop longtemps, les couches se désolidarisent et le poireau s’écrase en lanières molles.",
    },
    {
      title: "Le jaune qui verdit",
      text: "Si l’œuf bout trop longtemps, le soufre du blanc réagit avec le fer du jaune et forme un sulfure de fer verdâtre à sa surface. Avec 10 minutes de cuisson puis un passage à l’eau froide, le jaune reste jaune vif pour le mimosa.",
    },
  ],
  tips: [
    "Choisissez des poireaux de même calibre : ils seront cuits en même temps.",
    "Au printemps, les poireaux primeurs, fins comme un crayon, cuisent en 8 minutes environ et n’ont presque pas de vert à retirer.",
    "Gardez les verts : bien lavés, ils parfument un bouillon ou une soupe.",
    "Goûtez la vinaigrette sur un morceau de poireau plutôt qu’à la cuillère : seule, elle paraît toujours trop acide.",
  ],
  mistakes: [
    "Laver sans fendre : la terre reste coincée entre les feuilles et crisse sous la dent. Fendez toujours jusqu’à 3 cm de la base.",
    "Servir des poireaux mal égouttés : ils rendent leur eau et la vinaigrette se dilue au fond du plat. Si c’est fait, videz le jus et ajoutez une cuillerée de vinaigrette.",
    "Trop les cuire : ils deviennent filandreux et s’effilochent à la découpe. Vérifiez au couteau dès 12 minutes.",
    "Assaisonner des poireaux sortis du réfrigérateur : la vinaigrette reste en surface. Cuits la veille, laissez-les revenir 30 minutes à température ambiante avant de les napper.",
  ],
  variations: [
    {
      title: "À l’huile de noix",
      text: "Remplacez 1 cuillère à soupe d’huile de colza par 1 cuillère d’huile de noix et parsemez de 20 g de cerneaux concassés. La noix est un fruit à coque : prévenez vos invités.",
    },
    {
      title: "Façon ravigote",
      text: "Ajoutez à la vinaigrette 1 cuillère à soupe de câpres, 2 cornichons hachés et 1 cuillère à soupe de persil ciselé. La sauce devient plus vive, plus acide.",
    },
    {
      title: "Poireaux snackés",
      text: "Après l’égouttage, taillez les tronçons et marquez-les 2 minutes côté coupé dans une poêle chaude huilée, avant de les assaisonner. Ils prennent un goût plus sucré, presque grillé.",
    },
  ],
  storage:
    "2 jours au réfrigérateur, dans une boîte fermée, assaisonnés ou non. Sortez-les 30 minutes avant de servir et râpez les œufs au dernier moment. Ne se congèle pas : le poireau décongelé devient filandreux et aqueux.",
  pairing:
    "Un blanc sec et vif, comme un aligoté de Bourgogne ou un muscadet. Ensuite, un plat mijoté ou un poisson au four.",
  faq: [
    {
      q: "Combien de temps faut-il cuire des poireaux pour une vinaigrette ?",
      a: "12 à 15 minutes à l’eau bouillante salée, 18 à 20 minutes à la vapeur, pour des poireaux de 2 à 3 cm de diamètre. Les poireaux primeurs, plus fins, cuisent en 8 minutes environ. Le vrai repère reste la pointe du couteau, qui doit entrer dans le blanc sans résistance.",
    },
    {
      q: "Faut-il servir les poireaux vinaigrette chauds ?",
      a: "Non, tièdes ou à température ambiante. Il faut en revanche les assaisonner encore tièdes, quand ils absorbent le mieux la sauce. Servis glacés, à la sortie du réfrigérateur, ils perdent beaucoup de goût.",
    },
    {
      q: "Peut-on préparer les poireaux vinaigrette la veille ?",
      a: "Oui. Cuits, égouttés et assaisonnés, ils se gardent 2 jours au réfrigérateur dans une boîte fermée. Sortez-les 30 minutes avant de servir et râpez les œufs au dernier moment, sinon le mimosa se dessèche.",
    },
    {
      q: "Peut-on utiliser de gros poireaux ?",
      a: "Oui, coupez-les en tronçons de 10 cm avant de les ficeler et comptez 18 à 20 minutes à l’eau. Leurs couches extérieures sont plus fibreuses : retirez-en une ou deux de plus qu’avec des poireaux fins.",
    },
    {
      q: "Quelle huile choisir pour une vinaigrette de poireaux ?",
      a: "Une huile neutre comme le colza ou le tournesol, qui laisse la moutarde et le poireau au premier plan. L’huile d’olive marque davantage ; si vous l’aimez, mélangez-la moitié-moitié avec du colza.",
    },
  ],
  nutrition: { calories: 205, protein: 5, fat: 16, saturatedFat: 2, carbs: 10, sugar: 4, fiber: 3, sodium: 330 },
  annotations: { hero: "tièdes, ils boivent la vinaigrette", detail: "des poireaux fins, pas plus" },
  images: {
    heroAlt:
      "Poireaux vinaigrette enroulés en nid dans une assiette creuse, nappés de vinaigrette moutardée, avec tomate cerise et oignon vert",
    detailAlt: "Poireaux frais entiers avec leurs racines, serrés les uns contre les autres sur un étal de marché",
    credits: {
      hero: {
        photographer: "Benreis",
        url: "https://commons.wikimedia.org/wiki/File:Poireaux_vinaigrette_Dijon.jpg",
        source: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
      },
      detail: { photographer: "Engin Akyurt", url: "https://www.pexels.com/photo/fresh-leeks-at-the-market-18121429/" },
    },
  },
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  hero,
  detail,
  theme: {
    accent: "#A8B545",
    onAccent: "#1B1712",
    ink: "#56611A",
    tint: "#F4F6E6",
    deep: "#141A0B",
    focus: "50% 50%",
  },
});
