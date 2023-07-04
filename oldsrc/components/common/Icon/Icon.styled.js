"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.IconStyle = styled_components_1.default.span `
  display: flex;
  margin: ${({ margin }) => (margin ? margin : "0 2px")};
`;
