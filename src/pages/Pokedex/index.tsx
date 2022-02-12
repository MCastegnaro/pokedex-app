import { AxiosResponse } from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { pokeApi } from "../../services/api";
import {
  Card,
  Content,
  Filter,
  Info,
  PokeImage,
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
        return Promise.all(results.map((res) => pokeApi.get(res.url)));
      })
      .then((results) => {
        setPokemons(results.map((res) => res.data));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      {loading && <h1>Loading ...</h1>}

      <Filter>
        <Search>
          <h3>
            905 <strong>Pokemons</strong> for you to choose your favorite
          </h3>
          <input type="text" placeholder="Encuentra tu pokémon..." />
        </Search>
      </Filter>

      <Content>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id}>
            <Info>
              <h5>{pokemon.name}</h5>
              <Skills>
                <div>
                  <span>419</span>
                  <span>40</span>
                </div>
                <div>
                  <span>ataque</span>
                  <span>defesa</span>
                </div>
              </Skills>
              <Types>
                <span>Grass</span>
                <span>Poison</span>
              </Types>
            </Info>
            <PokeImage>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt=""
                height="136"
                width="160"
              />
            </PokeImage>
          </Card>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Pokedex;
