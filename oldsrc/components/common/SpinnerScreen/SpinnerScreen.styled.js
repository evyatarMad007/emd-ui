"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerOverlay = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SpinnerOverlay = styled_components_1.default.div `
  position: fixed;
  z-index: 55555;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(188, 188, 188, 0.756);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: screen-spinner-fade-in 0.05s;

  @keyframes screen-spinner-fade-in {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: rgba(188, 188, 188, 0.756);
    }
  }
`;
