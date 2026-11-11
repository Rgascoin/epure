/**
 * Controlled vocabulary for recipe tags. Tags drive the seasonal collections
 * (lib/collections.ts): a recipe tagged « noel » is highlighted automatically
 * from November to Christmas, and listed all year on /collections/noel.
 *
 * Tag a recipe only when it is a genuine, expected choice for the occasion
 * (a bûche for Christmas, crêpes for the Chandeleur), not merely compatible.
 */
export const TAGS = {
  // Seasons: produce at its best, or dishes people crave then.
  printemps: "printemps",
  ete: "été",
  automne: "automne",
  hiver: "hiver",
  // Occasions of the French calendar.
  noel: "Noël",
  "nouvel-an": "Nouvel An",
  epiphanie: "Épiphanie",
  chandeleur: "Chandeleur",
  "mardi-gras": "Mardi gras",
  "saint-valentin": "Saint-Valentin",
  paques: "Pâques",
  "fete-des-meres": "Fête des mères",
  "fete-des-peres": "Fête des pères",
  "fete-des-grands-meres": "Fête des grands-mères",
  halloween: "Halloween",
  // Moments.
  "pique-nique": "pique-nique",
  barbecue: "barbecue",
  apero: "apéro",
  montagne: "montagne",
} as const;

export type Tag = keyof typeof TAGS;

export const isTag = (value: string): value is Tag => Object.hasOwn(TAGS, value);
