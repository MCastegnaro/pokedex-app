import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/404.svg";
import { Content, Wrapper } from "./styles";

const NotFound = () => (
  <Wrapper>
    <img src={NotFoundImage} alt="Jessie, James and miau doing a pose" />
    <Content>
      <h1>
        The rocket team <span>has won this time.</span>
      </h1>
      <Link to="/">
        <button>Return</button>
      </Link>
    </Content>
  </Wrapper>
);

export default NotFound;
