import { describe, expect, it } from "vitest";
import {
  activeCollections,
  collections,
  easter,
  fathersDay,
  formatWindow,
  mothersDay,
  nextWindow,
  parisToday,
  publishedCollections,
  recipesInCollection,
} from "@/lib/collections";

describe("calendrier", () => {
  it("calcule Pâques", () => {
    expect(easter(2026)).toBe("2026-04-05");
    expect(easter(2027)).toBe("2027-03-28");
    expect(easter(2030)).toBe("2030-04-21");
  });
  it("calcule la fête des mères (décalée si Pentecôte)", () => {
    expect(mothersDay(2026)).toBe("2026-05-31");
    expect(mothersDay(2027)).toBe("2027-05-30");
    expect(mothersDay(2024)).toBe("2024-05-26");
  });
  it("calcule la fête des pères", () => {
    expect(fathersDay(2026)).toBe("2026-06-21");
  });
  it("donne la date de Paris", () => {
    expect(parisToday(new Date("2026-12-31T23:30:00Z"))).toBe("2027-01-01");
  });
});

describe("collections", () => {
  const slugs = (today: string) => activeCollections(today).map((c) => c.slug);

  it("met Noël en avant en novembre, avant l’automne", () => {
    expect(slugs("2026-11-11")[0]).toBe("noel");
    expect(slugs("2026-11-11")).toContain("automne");
  });
  it("passe au Nouvel An après Noël, d’une année sur l’autre", () => {
    expect(slugs("2026-12-28")[0]).toBe("nouvel-an");
    expect(slugs("2027-01-01")[0]).toBe("nouvel-an");
  });
  it("met la Chandeleur en avant fin janvier", () => {
    expect(slugs("2027-01-28")).toContain("chandeleur");
  });
  it("affiche les fenêtres en français", () => {
    const noel = collections.find((c) => c.slug === "noel")!;
    expect(formatWindow(nextWindow(noel, "2026-11-11"))).toBe("du 1er novembre au 25 décembre");
  });
  it("chaque collection a des textes aux bonnes longueurs", () => {
    for (const c of collections) {
      expect(c.seoTitle.length, c.slug).toBeLessThanOrEqual(52);
      expect(c.description.length, c.slug).toBeGreaterThanOrEqual(110);
      expect(c.description.length, c.slug).toBeLessThanOrEqual(160);
      expect(c.tags?.length || c.match, c.slug).toBeTruthy();
    }
  });
  it("publie seulement les collections assez fournies", () => {
    for (const c of publishedCollections()) expect(recipesInCollection(c).length).toBeGreaterThanOrEqual(3);
  });
});
