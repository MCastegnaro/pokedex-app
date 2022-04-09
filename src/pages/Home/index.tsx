import { Link } from "react-router-dom";
import Pokebanner from "../../assets/banner.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Content, Wrapper } from "./styles";

const Home = () => (
  <>
    <Header />
    <Wrapper>
      <Content>
        <h1>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </h1>
        <p>
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </p>
        <Link to="/pokedex">
          <button>See pokemons</button>
        </Link>
      </Content>
      <img src={Pokebanner} alt="Pikachu com duas pokebolas" />
    </Wrapper>
    <Footer />
  </>
);

export default Home;
