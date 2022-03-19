import { ChangeEvent, useEffect, useState } from "react";
import { getPokemon, listPokemons } from "../../services/api";
import { PokeDetails } from "../../models";

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

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<PokeDetails[]>([] as PokeDetails[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isValidPokemon, setIsValidPokemon] = useState<boolean>(true);
  const [cachePokemons, setCachePokemons] = useState<PokeDetails[]>(
    [] as PokeDetails[]
  );

  let filterTimeout: NodeJS.Timeout;

  const doPokeFilter = (pokename: string) => {
    clearTimeout(filterTimeout);
    if (!pokename) {
      setIsValidPokemon(true);
      setPokemons(cachePokemons);
      return;
    }

    filterTimeout = setTimeout(() => {
      setLoading(true);

      getPokemon(pokename.toLowerCase())
        .then((pokeDetailsArray) => setPokemons(pokeDetailsArray))
        .catch(() => {
          setIsValidPokemon(false);
        })
        .finally(() => setLoading(false));
    }, 2000);
  };

  useEffect(() => {
    setLoading(true);

    listPokemons()
      .then((pokeDetailsArray) => {
        setPokemons(pokeDetailsArray);
        setCachePokemons(pokeDetailsArray);
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
          <input
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              doPokeFilter(event.target.value)
            }
            placeholder="Encuentra tu pokémon..."
          />
        </Search>
      </Filter>

      {loading && <h1>Loading ...</h1>}

      <Content>
        {!isValidPokemon && (
          <div>
            <h1>Who's that pokemon?</h1>
            <img
              src="http://pa1.narvii.com/6271/d03c2b28ac055a7695b8a66f092dca4f07498266_00.gif"
              alt=""
            />
            <h1>The pokemon was not found!</h1>
          </div>
        )}
        {isValidPokemon &&
          pokemons?.map((pokemon) => (
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
