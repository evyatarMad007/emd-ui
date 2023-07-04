"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionItem_styled_1 = require("./SectionItem.styled");
const SectionItem = ({ section }) => {
    return (<SectionItem_styled_1.SectionItemStyled className={section.name}>
      <div className="section-number">{section.number}.</div>
      <div className="section-content">{section.content}</div>
    </SectionItem_styled_1.SectionItemStyled>);
};
exports.default = SectionItem;
