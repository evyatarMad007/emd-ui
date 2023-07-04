"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutButtonStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ui_settings_1 = require("../../../../ui-settings");
exports.LogoutButtonStyle = styled_components_1.default.button `
  position: absolute;
  top: 20px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${ui_settings_1.fonts.mainFontBold};
  background: transparent;
  cursor: pointer;
  width: max-content !important;
  font-size: 15px;
  font-family: ${ui_settings_1.fonts.mainFontRegular};
  color: ${({ linkColor }) => linkColor ? `${linkColor} !important` : `#000000 !important`};
  border: none;

  &:hover {
    span {
      color: ${({ linkHoverColor }) => linkHoverColor ? `${linkHoverColor} !important` : `#000000 !important`};
      transition: all 0.15s;
    }
    svg {
      fill: ${({ linkHoverColor }) => linkHoverColor ? `${linkHoverColor} !important` : `#000000 !important`};
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
