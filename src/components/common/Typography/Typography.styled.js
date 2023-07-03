import styled from "styled-components";
import { fonts } from "../../../../uiSettings";

export const TypographyStyled = styled.span`
  position: ${({ position }) => (position ? position : "static")};
  width: max-content;
  top: ${({ top }) => (top ? top : "0")};
  right: ${({ right }) => (right ? right : "0")};
  left: ${({ left }) => (left ? left : "0")};
  display: ${({ display }) => (display ? display : "inline-block")};
  margin: ${({ margin }) => (margin ? margin : "0")};

  font-family: ${({ fWeight }) => {
    if (fWeight === "b") {
      return fonts.documentFontMedium;
    } else if (fWeight === "m") {
      return fonts.documentFontMedium;
    } else if (fWeight === "r") {
      return fonts.documentFontRegular;
    } else {
      return fonts.documentFontRegular;
    }
  }};

  font-weight: ${({ fWeight }) => {
    if (fWeight === "b") {
      return "900";
    } else if (fWeight === "m") {
      return "600";
    } else if (fWeight === "r") {
      return "400";
    } else {
      return "400";
    }
  }};

  font-size: ${({ fSize }) => (fSize ? fSize : "1rem")};
  text-decoration: ${({ underLine }) => (underLine ? "underline" : "none")};

  ${({ location }) => {
    if (location === "center") {
      return `
          display: block;
          position: absolute;
          right: -110px;
          text-align: center;
          width: calc(100% + 110px);
        `;
    } else if (location === "right") {
      return `
        display: block;
          position: absolute;
          right: -110px;
          width: calc(100% + 110px);
          text-align: right;
        `;
    } else if (location === "left") {
      return `
        display: block;
          position: absolute;
          right: -110px;
          width: calc(100% + 110px);
          text-align: left;
        `;
    }
  }}
`;
