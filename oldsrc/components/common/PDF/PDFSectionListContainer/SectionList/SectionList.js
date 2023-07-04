"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SectionList_styled_1 = require("./SectionList.styled");
const SectionItem_1 = __importDefault(require("../SectionItem/SectionItem"));
const SectionList = ({ list }) => {
    return ((0, jsx_runtime_1.jsx)(SectionList_styled_1.SectionListStyled, { children: list.map((item, index) => {
            return ((0, jsx_runtime_1.jsx)(SectionItem_1.default, { section: item }, index));
        }) }));
};
exports.default = SectionList;
