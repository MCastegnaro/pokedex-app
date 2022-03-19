import { Wrapper } from "./styles";

const NotFoundPokemon = () => {
  const GIF_LINK = `http://pa1.narvii.com/6271/d03c2b28ac055a7695b8a66f092dca4f07498266_00.gif`;
  return (
    <Wrapper>
      <h1>Who's that pokemon?</h1>
      <img src={GIF_LINK} alt="sad pikachu crying when not found a pokemon" />
      <h1>The pokemon was not found!</h1>
    </Wrapper>
  );
};

export { NotFoundPokemon };
