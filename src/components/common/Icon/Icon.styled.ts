import styled from "styled-components";

interface PropsStyled {
  margin?: string;
}

export const IconStyle = styled.span<PropsStyled>`
  display: flex;
  margin: ${({ margin }) => (margin ? margin : "0 2px")};
`;
