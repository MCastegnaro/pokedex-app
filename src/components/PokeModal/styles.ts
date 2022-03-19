import styled from "styled-components";
import { getBackgroundColor } from "../../utils";

interface WrapperProps {
  backgroundColor: string;
  gradientBackgroundColor: string;
}

export const Wrapper = styled.article<WrapperProps>`
  min-height: inherit;
  width: inherit;
  padding: 16px;
  background: linear-gradient(
    205deg,
    ${(props) =>
        getBackgroundColor[props.gradientBackgroundColor] ||
        getBackgroundColor[props.backgroundColor]}
      48.4%,
    ${(props) => getBackgroundColor[props.backgroundColor]} 50.88%
  );
`;
