"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SectionItem_styled_1 = require("./SectionItem.styled");
const SectionItem = ({ section }) => {
    return ((0, jsx_runtime_1.jsxs)(SectionItem_styled_1.SectionItemStyled, { className: section.name, children: [(0, jsx_runtime_1.jsxs)("div", { className: "section-number", children: [section.number, "."] }), (0, jsx_runtime_1.jsx)("div", { className: "section-content", children: section.content })] }));
};
exports.default = SectionItem;
