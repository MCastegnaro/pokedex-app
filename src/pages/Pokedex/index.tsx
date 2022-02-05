import { useEffect, useLayoutEffect, useState } from "react";
import { pokeApi } from "../../services/api";
import { Categories, Checkbox, Filter, Search, Wrapper } from "./styles";

interface IPokeResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<IPokeResult>({} as IPokeResult);
  const [pokeTypes, setPokeTypes] = useState<IPokeResult>({} as IPokeResult);
  const [loading, setLoading] = useState<boolean>(false);

  let expanded = false;

  function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes!.style.display = "block";
      expanded = true;
    } else {
      checkboxes!.style.display = "none";
      expanded = false;
    }
  }

  useEffect(() => {
    setLoading(true);

    pokeApi
      .get("pokemon?limit=151")
      .then((response) => setPokemons(response.data as IPokeResult))
      .catch()
      .finally(() => setLoading(false));
  }, []);

  useLayoutEffect(() => {
    pokeApi
      .get("type")
      .then((response) => setPokeTypes(response.data as IPokeResult))
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
        <form>
          <Categories>
            <div className="selectBox" onClick={() => showCheckboxes()}>
              <select name="poketypes" id="poketypes">
                <option>Tipo</option>
              </select>
              <div className="overSelect"></div>
            </div>

            <Checkbox id="checkboxes">
              {pokeTypes.results?.map((type) => (
                <label key={type.name} htmlFor={type.name}>
                  <input type="checkbox" id={type.name} />

                  {type.name}
                </label>
              ))}
            </Checkbox>
          </Categories>
        </form>
      </Filter>

      {/* {pokemons.results?.map((pokemon) => (
        <div key={pokemon.name}>
          <h1>{pokemon.name} - </h1>
          <h1>{pokemon.url}</h1>
        </div>
      ))} */}
    </Wrapper>
  );
};

export default Pokedex;
