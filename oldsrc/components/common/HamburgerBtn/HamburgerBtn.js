"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const HamburgerBtn_styled_1 = require("./HamburgerBtn.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const HamburgerBtn = ({ onClick, whiteColor = false }) => {
    return ((0, jsx_runtime_1.jsx)(HamburgerBtn_styled_1.HamburgerBtnStyle, { onClick: onClick, whiteColor: whiteColor, children: (0, jsx_runtime_1.jsx)(Icon_1.default, { iconType: "hamburger", iconSize: 17 }) }));
};
exports.default = HamburgerBtn;
