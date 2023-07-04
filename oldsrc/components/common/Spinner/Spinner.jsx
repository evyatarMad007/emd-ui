"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner_styled_1 = require("./Spinner.styled");
const Spinner = ({ size = "big" }) => {
    if (size === "small")
        return <Spinner_styled_1.SpinnerContainerSmall />;
    if (size === "big")
        return <Spinner_styled_1.SpinnerContainerBig />;
    return null; // Add a default return statement if needed
};
exports.default = Spinner;
