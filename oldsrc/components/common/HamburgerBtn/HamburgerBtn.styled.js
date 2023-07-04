"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamburgerBtnStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ui_settings_1 = require("../../../../ui-settings");
exports.HamburgerBtnStyle = styled_components_1.default.button `
  display: block;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;

  svg {
    font-size: 27px;
    fill: ${ui_settings_1.colors.baseFont};

    ${(props) => {
    if (props.whiteColor) {
        return `
          fill: ${ui_settings_1.colors.reverseFont}
        `;
    }
}}
  }
`;
