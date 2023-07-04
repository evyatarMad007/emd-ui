"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SpinnerScreen_styled_1 = require("./SpinnerScreen.styled");
const Spinner_1 = __importDefault(require("../Spinner/Spinner"));
const SpinnerScreen = ({ spinnerScreenState }) => {
    if (!spinnerScreenState)
        return null;
    return (<SpinnerScreen_styled_1.SpinnerOverlay>
      <Spinner_1.default />
    </SpinnerScreen_styled_1.SpinnerOverlay>);
};
exports.default = SpinnerScreen;
