import monsters from "@/data/mh1/monsters.json";
import items from "@/data/mh1/items.json";
import quests from "@/data/mh1/quests.json";
import weapons from "@/data/mh1/weapons.json";

export type Monster = {
  id: string;
  slug: string;
  name: string;
  game: string;
  class: string;
  weaknesses: string[];
  questIds: string[];
};

export type Item = {
  id: string;
  slug: string;
  name: string;
  game: string;
  rarity: number;
  buy: number;
  sell: number;
};

export type Quest = {
  id: string;
  slug: string;
  name: string;
  game: string;
  rank: string;
  location: string;
  targetMonsterIds: string[];
};

export type Weapon = {
  id: string;
  slug: string;
  name: string;
  game: string;
  weaponType: string;
  rarity: number;
  attack: number;
  affinity: number;
};

export function getMonsters(): Monster[] {
  return [...(monsters as Monster[])].sort((a, b) => a.name.localeCompare(b.name));
}

export function getItems(): Item[] {
  return [...(items as Item[])].sort((a, b) => a.name.localeCompare(b.name));
}

export function getQuests(): Quest[] {
  return [...(quests as Quest[])].sort((a, b) => a.name.localeCompare(b.name));
}

export function getWeapons(): Weapon[] {
  return [...(weapons as Weapon[])].sort((a, b) => a.name.localeCompare(b.name));
}
