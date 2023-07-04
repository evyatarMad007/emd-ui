"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionItemStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ui_settings_1 = require("../../../../../../ui-settings");
exports.SectionItemStyled = styled_components_1.default.li `
  .section-number {
      position: absolute;
      font-weight: bold;
      font-family: ${ui_settings_1.fonts.documentFontMedium};
  }
  .section-content {
    display: inline-block;
    margin-right: 30px;
    line-height: 1.4;
    margin-bottom: 5px;
    font-size: 1rem;
    font-family: ${ui_settings_1.fonts.documentFontMedium};
    letter-spacing: -0.7px;
    word-spacing: 0.5px;
  }
`;
