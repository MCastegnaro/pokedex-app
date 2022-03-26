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
      48.4%,
    ${(props) => getBackgroundColor[props.backgroundColor]} 48.88%
  );
`;

export const PokeImage = styled.article`
  display: flex;
  justify-content: center;
  flex: 1;
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
`;
