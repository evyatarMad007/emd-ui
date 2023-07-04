"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputContainerStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ui_settings_1 = require("../../../../ui-settings");
exports.InputContainerStyled = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  position: relative;

  .TextInput-label {
    padding: ${(props) => (props.inpDir === "rtl" ? "0 2px 0 0" : "0 0 0 2px")};
    text-transform: uppercase;
    margin-bottom: 3px;
    font-size: 13px;
    text-align: ${(props) => (props.inpDir === "rtl" ? "right" : "left")};
    direction: ${(props) => props.inpDir};
  }

  .TextInput-inp {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    text-align: ${(props) => (props.inpDir === "rtl" ? "right" : "left")};
    direction: ${(props) => props.inpDir};

    &:focus {
      outline: none;
      border-color: ${ui_settings_1.colors.appMainPrimary2};
      box-shadow: 0 0 3px ${ui_settings_1.colors.appMainPrimary2};
    }
  }

  .TextInput-error {
    position: absolute;
    bottom: -15px;
    color: red;
    font-size: 12.5px;
    ${(props) => {
    if (props.inpDir === "rtl") {
        return `
          right: 2px;
        `;
    }
    else {
        return `
          left: 2px;
        `;
    }
}};
    direction: ${(props) => props.inpDir};
    width: max-content;
  }
`;
