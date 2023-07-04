"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Label_styled_1 = require("./Label.styled");
const Label = ({ children, title }) => {
    return (<Label_styled_1.LabelStyled>
      <span className="title">{title}:</span>
      <span className="label">{children}</span>
    </Label_styled_1.LabelStyled>);
};
exports.default = Label;
