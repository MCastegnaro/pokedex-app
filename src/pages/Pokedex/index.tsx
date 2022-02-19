import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { pokeApi } from "../../services/api";

import {
  Card,
  Content,
  Filter,
  Info,
  PokeImage,
  PokeTag,
  Search,
  Skills,
  Types,
  Wrapper,
} from "./styles";

interface IPokeResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

interface IPokeDetails {
  id: number;
  name: string;
  stats: Array<{
    base_stat: number;
  }>;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<IPokeDetails[]>(
    [] as IPokeDetails[]
  );

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    pokeApi
      .get("pokemon?limit=9")
      .then((response: AxiosResponse<IPokeResult>) => {
        return response.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((element) => pokeApi.get(element.url)));
      })
      .then((results: AxiosResponse<IPokeDetails>[]) => {
        setPokemons(results.map((res) => res.data));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      <Filter>
        <Search>
          <h3>
            905 <strong>Pokemons</strong> for you to choose your favorite
          </h3>
          <input type="text" placeholder="Encuentra tu pokémon..." />
        </Search>
      </Filter>

      {loading && <h1>Loading ...</h1>}

      <Content>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id}>
            <Info>
              <h5>{pokemon.name}</h5>
              <Skills>
                <div>
                  <span>{pokemon.stats[1].base_stat}</span>
                  <span>{pokemon.stats[2].base_stat}</span>
                </div>
                <div>
                  <span>Attack</span>
                  <span>Defense</span>
                </div>
              </Skills>
              <Types>
                {pokemon.types.map((element) => (
                  <PokeTag
                    backgroundColor={element.type.name}
                    key={element.type.name + Math.random() * (1000 - 0) + 0}
                  >
                    {element.type.name}
                  </PokeTag>
                ))}
              </Types>
            </Info>
            <PokeImage
              backgroundColor={pokemon.types[0].type.name}
              gradientBackgroundColor={pokemon.types[1]?.type.name}
            >
              <img
                src={
                  pokemon.sprites.other.dream_world.front_default ||
                  pokemon.sprites.other["official-artwork"].front_default
                }
                alt="Imagen de pokémon"
              />
            </PokeImage>
          </Card>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Pokedex;
