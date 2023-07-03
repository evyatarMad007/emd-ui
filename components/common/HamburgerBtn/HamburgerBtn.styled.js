import styled from "styled-components";
import uiSettings, { colors } from "../../../uiSettings";

export const HamburgerBtnStyle = styled.button`
  display: block;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;

  svg {
    font-size: 27px;
    fill: ${colors.baseFont};

    ${(props) => {
      if (props.whiteColor) {
        return `
          fill: ${colors.reverseFont}
        `;
      }
    }}
  }
`;
