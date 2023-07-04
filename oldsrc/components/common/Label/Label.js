"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Label_styled_1 = require("./Label.styled");
const Label = ({ children, title }) => {
    return ((0, jsx_runtime_1.jsxs)(Label_styled_1.LabelStyled, { children: [(0, jsx_runtime_1.jsxs)("span", { className: "title", children: [title, ":"] }), (0, jsx_runtime_1.jsx)("span", { className: "label", children: children })] }));
};
exports.default = Label;
