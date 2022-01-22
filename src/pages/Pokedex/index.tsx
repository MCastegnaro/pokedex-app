import { useEffect, useState } from "react";
import { pokeApi } from "../../services/api";
import { Wrapper } from "./styles";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    pokeApi
      .get("pokemon?limit=151")
      .then((response) => setPokemons(response.data.results))
      .catch()
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      {loading && <h1>Loading ...</h1>}
      {pokemons.map((pokemon: any) => (
        <div key={pokemon.name}>
          <h1>{pokemon.name} - </h1>
          <h1>{pokemon.url}</h1>
        </div>
      ))}
    </Wrapper>
  );
};

export default Pokedex;
