import styled from "styled-components";
import { colors } from "../../../ui-settings";

interface HamburgerBtnStyleProps {
  whiteColor?: boolean;
}

export const HamburgerBtnStyle = styled.button<HamburgerBtnStyleProps>`
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

    ${(props): any => {
      if (props.whiteColor) {
        return `
          fill: ${colors.reverseFont}
        `;
      }
    }}
  }
`;
