import styled from "styled-components";
import { getBackgroundColor } from "../../utils";

interface ITag {
  backgroundColor: string;
}

interface ITypes {
  tagQuantity: number;
}

export const Types = styled.article<ITypes>`
  width: inherit;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 8px;

  &.isInModal {
    position: absolute;
    bottom: 16px;
    left: ${(props) => (props.tagQuantity > 1 ? 180 : 265)}px;
  }
`;

export const Tag = styled.span<ITag>`
  background: ${(props) => getBackgroundColor[props.backgroundColor]};
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 4px 0px;
  min-width: 80px;
  position: sticky;

  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-align: center;

  color: var(--light-color);
`;
