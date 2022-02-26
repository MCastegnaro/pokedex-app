import axios, { AxiosResponse } from "axios";
import { PokeDetails, PokeResult } from "../models";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const listPokemons = async (): Promise<PokeDetails[]> => {
  const allPokemonsRequest: AxiosResponse<PokeResult> = await pokeApi.get(
    "pokemon?limit=9"
  );
  const resultsAllPokemons = allPokemonsRequest.data.results;

  const uniquePokemonsResult: AxiosResponse<PokeDetails>[] = await Promise.all(
    resultsAllPokemons.map((element) => pokeApi.get(element.url))
  );

  return uniquePokemonsResult.map((res) => res.data);
};

const getPokemon = async (pokename: string): Promise<PokeDetails[]> => {
  const url = `pokemon/${pokename}`;
  const response: AxiosResponse<PokeDetails> = await pokeApi.get(url);

  return [response.data];
};

export { listPokemons, getPokemon };
