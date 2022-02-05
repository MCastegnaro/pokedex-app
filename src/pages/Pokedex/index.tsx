import { useEffect, useLayoutEffect, useState } from "react";
import { pokeApi } from "../../services/api";
import { Checkbox, Filter, Search, Wrapper } from "./styles";

interface IPokeResult {}

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [pokeTypes, setPokeTypes] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    pokeApi
      .get("pokemon?limit=151")
      .then((response) => setPokemons(response.data.results))
      .catch()
      .finally(() => setLoading(false));
  }, []);

  useLayoutEffect(() => {
    pokeApi
      .get("type")
      .then((response) => setPokeTypes(response.data.results))
      .catch()
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      {loading && <h1>Loading ...</h1>}

      <Filter>
        <Search>
          <h3>
            800 <strong>Pokemons</strong> for you to choose your favorite
          </h3>
          <input type="text" placeholder="Encuentra tu pokémon..." />
        </Search>

        <Checkbox>
          <select name="" id=""></select>

          <select name="" id="">
            <option value="">fire</option>
            <option value="">normal</option>
          </select>
          <select name="" id="">
            <option value="">fire</option>
            <option value="">normal</option>
          </select>
        </Checkbox>
      </Filter>

      {/* {pokemons.map((pokemon: any) => (
        <div key={pokemon.name}>
          <h1>{pokemon.name} - </h1>
          <h1>{pokemon.url}</h1>
        </div>
      ))} */}
    </Wrapper>
  );
};

export default Pokedex;
