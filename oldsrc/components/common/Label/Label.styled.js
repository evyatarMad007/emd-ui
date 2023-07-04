"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.LabelStyled = styled_components_1.default.p `
  font-size: 0.95rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #00000077;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  width: max-content;

  .title {
    margin-right: 0.2rem;
  }
    
  .label {
    color: black;
  }
`;
