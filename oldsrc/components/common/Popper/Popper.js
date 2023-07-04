"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Popper_styled_1 = require("./Popper.styled");
const Popper = ({ children, positionY, positionX }) => {
    return ((0, jsx_runtime_1.jsx)(Popper_styled_1.PopperStyled, { className: "popper", positionY: positionY, positionX: positionX, children: children }));
};
exports.default = Popper;
