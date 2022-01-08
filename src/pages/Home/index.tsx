import { Link } from "react-router-dom";
import Pokelogo from "../../assets/pokelogo.svg";

import "./index.css";

const Home = () => (
  <div className="container">
    <img src={Pokelogo} alt="" />
    <div className="links-content">
      <Link to="">Início</Link>
      <Link to="pokedex">Pokedex</Link>
    </div>
  </div>
);

export default Home;
