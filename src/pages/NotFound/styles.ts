import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 160px;

  background: var(--danger-color);

  img {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  align-items: inherit;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;

    color: var(--light-color);

    span {
      color: var(--dark-color);
    }
  }

  button {
    height: 66px;
    width: 231px;
    border-radius: 12px;

    margin-top: 48px;

    background: var(--primary-color);
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    border: none;

    font-style: normal;
    font-weight: bold;
    font-size: var(--h5-size);
    line-height: 27px;
    text-align: center;

    color: var(--dark-color);

    :hover {
      filter: brightness(1.03);
    }

    :active {
      filter: brightness(0.95);
      box-shadow: none;
    }
  }
`;
