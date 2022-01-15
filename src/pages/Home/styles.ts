import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 40px 160px;

  background: linear-gradient(
    180deg,
    var(--tertiary-color) 0%,
    var(--primary-color) 100%
  );

  img {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  width: 516px;

  h1 {
    font-style: normal;
    font-size: var(--h1-size);
    font-weight: 400;
    line-height: 84px;
    letter-spacing: 4px;

    margin-bottom: 16px;
  }

  p {
    font-size: var(--h4-size);
    font-style: normal;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: left;
  }

  button {
    height: 66px;
    width: 231px;
    border-radius: 12px;

    margin-top: 48px;

    background: #73d677;
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
