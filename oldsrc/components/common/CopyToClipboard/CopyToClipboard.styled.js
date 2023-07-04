"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyToClipboardStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.CopyToClipboardStyled = styled_components_1.default.div `
  position: absolute;
  top: 0;
  bottom: 0;
  right: 6.2rem;
  margin: auto;
  background-color: #141423c8;
  border: 1px solid #000000ff;
  box-shadow: rgba(0, 0, 0, 0.376) 0px 1.3px 1.5px;
  color: white;
  height: 70%;
  width: 50%;
  font-weight: lighter;
  /* min-width: 25rem; */
  max-width: 55rem;
  border-radius: 0.3rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    & > .popper {
      display: flex;
    }
  }

  .CopyToClipboard-text {
    width: 100%;
  }

  .CopyToClipboard-button {
    background-color: #2c2f32ff;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    border-radius: 0.3rem;
    padding: 0 0.4rem;
    font-size: 0.65rem;
    border: 0.5px solid #696969ec;
    box-shadow: inset 5px 5px 5px 0px #6b6b6bd8;
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
  }
`;
