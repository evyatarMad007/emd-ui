"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LogoutButton_styled_1 = require("./LogoutButton.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const LogoutButton = ({ linkColor }) => {
    return ((0, jsx_runtime_1.jsxs)(LogoutButton_styled_1.LogoutButtonStyle, { children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { margin: '0 3.25px 0 0', iconType: "logout", iconSize: 17 }), (0, jsx_runtime_1.jsx)("span", { className: 'text', children: "\u05D4\u05EA\u05E0\u05EA\u05E7" })] }));
};
exports.default = LogoutButton;
