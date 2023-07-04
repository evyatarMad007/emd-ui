"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableStyle = exports.ButtonStyled = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const ui_settings_1 = require("../../../../ui-settings");
exports.ButtonStyled = styled_components_1.default.button `
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  direction: ltr;
  border-radius: 0.5rem;
  border: 0.5px solid #00000011;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 1.3px 1.5px #00000060;
  background: ${ui_settings_1.colors.appMainPrimary2};

  ${({ padding }) => padding &&
    (0, styled_components_1.css) `
      padding: ${padding} !important;
      width: max-content;
      height: auto;
    `};

  &:hover {
    opacity: 0.8;
    transition: all 0.1s;
  }

  &:active {
    filter: brightness(0.9);
    border: 0.5px solid #0000001a;
    transform: translateY(1.2px);
    box-shadow: 0 0 0 #00000076;
    transition: all 0s;
  }

  .button-wrapper {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.1s;
    width: 100%;
    text-align: center;

    .value {
      font-size: 1rem;
      direction: ltr;
      color: white;
      font-weight: bold;
      text-shadow: 0px 0px 1px #000000;

      ${({ dir }) => dir === "ltr"
    ? (0, styled_components_1.css) `
              margin-right: 0.25rem;
            `
    : dir === "rtl"
        ? (0, styled_components_1.css) `
              margin-left: 0.25rem;
            `
        : (0, styled_components_1.css) `
              margin-right: 0.25rem;
            `}
    }

    .icon {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
exports.disableStyle = {
    backgroundColor: "#e0e0e0",
    color: "#9a9a9a",
    cursor: "not-allowed",
    boxShadow: "none",
    borderColor: "#e0e0e00",
    opacity: "0.5",
    pointerEvents: "none",
    userSelect: "none",
};
