import styled from "styled-components";
import { breakPoints, fonts } from "../../../ui-settings-configs";

interface LogoutButtonStyleProps {
  linkColor?: string;
  linkHoverColor?: string;
}

export const LogoutButtonStyle = styled.button<LogoutButtonStyleProps>`
  position: absolute;
  top: 20px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.mainFontBold};
  background: transparent;
  cursor: pointer;
  width: max-content !important;
  font-size: 15px;
  font-family: ${fonts.mainFontRegular};
  color: ${({ linkColor }) =>
    linkColor ? `${linkColor} !important` : `#000000 !important`};
  border: none;

  &:hover {
    span {
      color: ${({ linkHoverColor }) =>
        linkHoverColor ? `${linkHoverColor} !important` : `#000000 !important`};
      transition: all 0.15s;
    }
    svg {
      fill: ${({ linkHoverColor }) =>
        linkHoverColor ? `${linkHoverColor} !important` : `#000000 !important`};
      transition: all 0.15s;
    }
  }

  &:active {
    opacity: 0.95;
    transition: all 0s;
  }

  .icon {
    margin-right: 5px;
    font-size: 16px;
    svg {
      transform: translateY(2.5px);
    }
  }
`;
