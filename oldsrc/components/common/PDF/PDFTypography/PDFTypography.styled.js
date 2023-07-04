"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFTypographyStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ui_settings_1 = require("../../../../../ui-settings");
exports.PDFTypographyStyled = styled_components_1.default.span `
  position: ${({ position }) => (position ? position : "static")};
  width: max-content;
  top: ${({ top }) => (top ? top : "0")};
  right: ${({ right }) => (right ? right : "0")};
  left: ${({ left }) => (left ? left : "0")};
  display: ${({ display }) => (display ? display : "inline-block")};
  margin: ${({ margin }) => (margin ? margin : "0")};

  font-family: ${({ fWeight }) => {
    if (fWeight === "b") {
        return ui_settings_1.fonts.documentFontMedium;
    }
    else if (fWeight === "m") {
        return ui_settings_1.fonts.documentFontMedium;
    }
    else if (fWeight === "r") {
        return ui_settings_1.fonts.documentFontRegular;
    }
    else {
        return ui_settings_1.fonts.documentFontRegular;
    }
}};

  font-weight: ${({ fWeight }) => {
    if (fWeight === "b") {
        return "900";
    }
    else if (fWeight === "m") {
        return "600";
    }
    else if (fWeight === "r") {
        return "400";
    }
    else {
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
    }
    else if (location === "right") {
        return `
        display: block;
          position: absolute;
          right: -110px;
          width: calc(100% + 110px);
          text-align: right;
        `;
    }
    else if (location === "left") {
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
