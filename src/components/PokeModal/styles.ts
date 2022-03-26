import styled from "styled-components";
import { getBackgroundColor } from "../../utils";
import Pokebola from "../../assets/pokebola.svg";
import Close from "../../assets/close.svg";

interface WrapperProps {
  backgroundColor: string;
  gradientBackgroundColor: string;
}

export const CloseIcon = styled.img.attrs({
  src: `${Close}`,
  alt: "Ícone para fechar a modal",
})`
  position: absolute;
  left: 15px;
  top: 15px;

  width: 15px;
  height: 15px;

  cursor: url(${Pokebola}), auto;
`;

export const Wrapper = styled.article<WrapperProps>`
  display: flex;
  min-height: inherit;
  width: inherit;
  padding: 16px;
  background: linear-gradient(
    206deg,
    ${(props) =>
        getBackgroundColor[props.gradientBackgroundColor] ||
        getBackgroundColor[props.backgroundColor]}
      30.4%,
    ${(props) => getBackgroundColor[props.backgroundColor]} 70.88%
  );
`;

export const PokeImage = styled.article`
  display: flex;
  justify-content: center;
  flex: 1;

  img {
    max-width: 300px;
  }
`;

export const PokeInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
`;

export const PokeStatus = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.article`
  background-color: var(--light-color);
  padding: 16px;

  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;

  span.circle {
    border: 3px solid var(--dark-color);
    box-sizing: border-box;
    border-radius: 50%;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2px;

    font-style: normal;
    font-weight: normal;
    font-size: var(--paragraph-size);
    line-height: 18px;

    color: var(--dark-color);
  }
`;

export const PokeHeader = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;

    color: var(--light-color);

    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    text-transform: capitalize;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--primary-color);
    border-radius: 50%;
    width: 70px;
    height: 70px;

    font-weight: 600;
    font-size: 20px;
  }
`;
