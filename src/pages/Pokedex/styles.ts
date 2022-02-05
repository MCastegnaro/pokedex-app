import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px 160px;
`;

export const Filter = styled.section``;

export const Search = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: var(--h3-size);
    line-height: 40px;

    letter-spacing: 4px;
    color: var(--dark-color);
  }

  input {
    width: 100%;
    height: 56px;
    padding: 0 32px;

    border-radius: 40px;
    border: none;

    background: var(--light-color);
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);

    font-style: normal;
    font-weight: normal;
    font-size: var(--paragraph-size);
    line-height: 20px;

    color: var(--dark-color);

    :focus {
      border-color: var(--primary-color);
      box-shadow: 0 1px 1px var(--primary-color), 0 0 8px var(--primary-color);
      outline: 0 none;
    }
  }
`;

export const Categories = styled.article`
  width: 200px;

  .selectBox {
    position: relative;
  }

  .selectBox select {
    width: 100%;
    font-weight: bold;
  }

  .overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export const Checkbox = styled.section`
  display: none;
  border: 1px #dadada solid;

  label {
    display: block;

    :hover {
      background-color: #1e90ff;
    }
  }
`;
