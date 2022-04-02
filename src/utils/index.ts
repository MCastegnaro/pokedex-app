import { Abilities } from "../models";

const getBackgroundColor: { [key: string]: string } = {
  normal: "#AAA67F",
  fighting: "#C12239",
  flying: "#A891EC",
  poison: "#A43E9E",
  ground: "#DEC16B",
  rock: "#B69E31",
  bug: "#A7B723",
  ghost: "#70559B",
  steel: "#B7B9D0",
  fire: "#F57D31",
  water: "#6493EB",
  grass: "#74CB48",
  electric: "#ebbc0c",
  psychic: "#FB5584",
  ice: "#9AD6DF",
  dragon: "#7037FF",
  dark: "#75574C",
  fairy: "#E69EAC",
  unknown: "#E0E0E0",
  shadow: "#70559B",
};

const formatAbilitiesToArray = (abilities: Abilities[]): string =>
  abilities.map((data) => toCapitalizeString(data.ability?.name)).join(" - ");

const toCapitalizeString = (string: string): string =>
  string?.trim().replace(/^\w/, (charOfString) => charOfString.toUpperCase());

export { getBackgroundColor, formatAbilitiesToArray };
