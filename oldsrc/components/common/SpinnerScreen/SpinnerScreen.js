"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SpinnerScreen_styled_1 = require("./SpinnerScreen.styled");
const Spinner_1 = __importDefault(require("../Spinner/Spinner"));
const SpinnerScreen = ({ spinnerScreenState }) => {
    if (!spinnerScreenState)
        return null;
    return ((0, jsx_runtime_1.jsx)(SpinnerScreen_styled_1.SpinnerOverlay, { children: (0, jsx_runtime_1.jsx)(Spinner_1.default, {}) }));
};
exports.default = SpinnerScreen;
