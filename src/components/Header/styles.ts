import styled from "styled-components";

import Pokersor from "../../assets/pokersor.svg";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: #f5db13;
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

    cursor: url(${Pokersor}), auto;

    :hover {
      color: black;
      background-color: #f2b7078c;
      border-radius: 8px;
    }
  }
`;
