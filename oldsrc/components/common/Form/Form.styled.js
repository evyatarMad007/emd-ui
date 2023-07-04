"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.FormStyled = styled_components_1.default.form `
  width: 100%;

  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: ${({ maxWidth }) => maxWidth};
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    gap: 25px;
    width: 100%;
    margin: 0 auto;
    max-width: ${({ maxWidth }) => maxWidth};

    .btn-wrapper {
      button {
        padding: 1rem;
        text-align: center;
      }
    }
  }
`;
