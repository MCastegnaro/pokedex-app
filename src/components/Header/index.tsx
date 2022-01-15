import { Link } from "react-router-dom";
import Pokelogo from "../../assets/pokelogo.svg";
import { NavBar, Wrapper } from "./styles";

const Header = () => (
  <Wrapper>
    <img src={Pokelogo} alt="Logo do pokemon" />
    <NavBar>
      <Link to="">Início</Link>
      <Link to="pokedex">Pokedex</Link>
    </NavBar>
  </Wrapper>
);

export { Header };
