import styled from "styled-components";

import Pokebola from "../../assets/pokebola.svg";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  position: relative;

  background-color: var(--tertiary-color);
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  justify-content: space-between;
  padding: 16px 160px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4d4c4c;
    padding: 24px;

    cursor: url(${Pokebola}), auto;

    :hover {
      color: black;
      background-color: var(--primary-color);
      border-radius: 8px;
    }
  }
`;
