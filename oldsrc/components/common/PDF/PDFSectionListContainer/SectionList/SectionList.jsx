"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionList_styled_1 = require("./SectionList.styled");
const SectionItem_1 = __importDefault(require("../SectionItem/SectionItem"));
const SectionList = ({ list }) => {
    return (<SectionList_styled_1.SectionListStyled>
      {list.map((item, index) => {
            return (<SectionItem_1.default section={item} key={index}/>);
        })}
    </SectionList_styled_1.SectionListStyled>);
};
exports.default = SectionList;
