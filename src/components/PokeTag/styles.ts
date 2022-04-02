import styled from "styled-components";
import { getBackgroundColor } from "../../utils";

export const Types = styled.article`
  width: inherit;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 8px;
`;

interface ITag {
  backgroundColor: string;
}

export const Tag = styled.span<ITag>`
  background: ${(props) => getBackgroundColor[props.backgroundColor]};
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 4px 24px;
  position: sticky;

  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-align: center;

  color: var(--light-color);
`;
