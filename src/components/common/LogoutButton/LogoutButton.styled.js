import styled from "styled-components";
import uiSettings from "../../../uiSettings";

export const LogoutButtonStyle = styled.button`
  position: absolute;
  top: 20px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${uiSettings.fonts.mainFontBold};
  background: transparent;
  cursor: pointer;
  width: max-content !important;
  font-size: 15px;
  font-family: ${uiSettings.fonts.mainFontRegular};
  color: ${uiSettings.layout.header.linkStyle.linkColor} !important;
  border: none;

  &:hover {
    span {
      color: ${uiSettings.layout.main.screensContainer.linkStyle
        .linkHoverColor} !important;
      transition: all 0.15s;
    }
    svg {
      fill: ${uiSettings.layout.main.screensContainer.linkStyle
        .linkHoverColor} !important;
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

  @media (max-width: ${uiSettings.breakPoints.width.laptop}) {
  }
`;
