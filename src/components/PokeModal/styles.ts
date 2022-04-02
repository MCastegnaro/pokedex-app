import styled from "styled-components";
import { getBackgroundColor } from "../../utils";
import Pokebola from "../../assets/pokebola.svg";
import Close from "../../assets/close.svg";

interface WrapperProps {
  backgroundColor: string;
  gradientBackgroundColor: string;
}

interface ICard {
  hAlign?: "center" | "flex-start" | "flex-end";
  orientation?: "column" | "row";
  gap?: string | null;
}

interface IFakeProgress {
  color: string;
}

export const CloseIcon = styled.img.attrs({
  src: `${Close}`,
  alt: "Ícone para fechar a modal",
})`
  position: absolute;
  left: 20px;
  top: 20px;

  width: 20px;
  height: 20px;

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
  gap: 24px;
`;

export const PokeStatus = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const Card = styled.article<ICard>`
  background-color: var(--light-color);
  padding: 16px 8px;

  display: flex;
  flex-direction: ${(prop) => prop.orientation || "column"};
  align-items: ${(prop) => prop.hAlign || "flex-start"};

  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
  min-width: 80px;
  gap: ${(prop) => prop.gap || null};

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

  span.points {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: var(--dark-color);
  }

  div.point-group {
    display: flex;
    flex-direction: column;
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

    margin: 8px 0px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--primary-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;

    font-weight: 600;
    font-size: 20px;
  }
`;

export const FakeProgress = styled.hr<IFakeProgress>`
  width: 163px;
  height: 6px;

  background-color: ${(prop) => prop.color};
  border-radius: 4px;
  margin: 8px 0px;
`;
