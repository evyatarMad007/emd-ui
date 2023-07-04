"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ExitBtn_styled_1 = require("./ExitBtn.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const ui_settings_1 = require("../../../../ui-settings");
const ExitBtn = ({ onClick }) => {
    return ((0, jsx_runtime_1.jsx)(ExitBtn_styled_1.ExitBtnStyle, { onClick: onClick, children: (0, jsx_runtime_1.jsx)(Icon_1.default, { iconType: "close", iconSize: 17, iconColor: ui_settings_1.colors.fontLightColor }) }));
};
exports.default = ExitBtn;
