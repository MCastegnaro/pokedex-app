import Pokebanner from "../../assets/banner.svg";
import { Content, Wrapper } from "./styles";

const Home = () => (
  <Wrapper>
    <Content>
      <h1>
        <b>Find</b> all your favorite <b>Pokemon</b>
      </h1>
      <p>
        You can know the type of Pokemon, its strengths, disadvantages and
        abilities
      </p>
      <button>See pokemons</button>
    </Content>
    <img src={Pokebanner} alt="Pikachu com duas pokebolas" />
  </Wrapper>
);

export default Home;
