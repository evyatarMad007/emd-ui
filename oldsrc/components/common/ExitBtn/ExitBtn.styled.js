"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitBtnStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ExitBtnStyle = styled_components_1.default.button `
  display: block;
  font-size: 27px;
  padding: 0;
  border: 0;
  background-color: unset;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  transition: all 0.1s ease-in-out;
  background-color: #c2c2c21e;
  
  &:hover {
    background-color: #c2c2c243;
  }
  &:active {
    background-color: #c2c2c27f;
  }
`;
