import { ChangeEvent, useEffect, useState } from "react";
import { getPokemon, listPokemons } from "../../services/api";
import { PokeDetails } from "../../models";

import {
  Card,
  Container,
  Filter,
  Info,
  PokeImage,
  Search,
  Skills,
  Wrapper,
} from "./styles";

import { Content } from "../../styles/global";

import { NotFoundPokemon } from "../../components/NotFoundPokemon";
import { PokeModal } from "../../components/PokeModal";
import { PokeTag } from "../../components/PokeTag";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<PokeDetails[]>([] as PokeDetails[]);
  const [pokemonDetail, setPokemonDetail] = useState<PokeDetails>({
    types: [{}],
    stats: [{}],
    abilities: [{}],
  } as PokeDetails);

  const [loading, setLoading] = useState<boolean>(false);
  const [isValidPokemon, setIsValidPokemon] = useState<boolean>(true);
  const [cachePokemons, setCachePokemons] = useState<PokeDetails[]>(
    [] as PokeDetails[]
  );

  const [modalIsOpen, setIsOpen] = useState(false);

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
    <>
      <Header />
      <Content>
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
                placeholder="Find your favorite pokemon..."
              />
            </Search>
          </Filter>

          {loading && <h1>Loading ...</h1>}
          <Container>
            {!isValidPokemon && <NotFoundPokemon />}
            {isValidPokemon &&
              pokemons?.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  onClick={() => {
                    setPokemonDetail(pokemon);
                    setIsOpen(true);
                  }}
                >
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
                    <PokeTag data={pokemon} />
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
          </Container>
          <PokeModal
            isOpen={modalIsOpen}
            setCloseModal={() => setIsOpen(false)}
            data={pokemonDetail}
          />
        </Wrapper>
      </Content>
      <Footer />
    </>
  );
};

export default Pokedex;
