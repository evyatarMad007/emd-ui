"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HamburgerBtn_styled_1 = require("./HamburgerBtn.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const HamburgerBtn = ({ onClick, whiteColor = false }) => {
    return (<HamburgerBtn_styled_1.HamburgerBtnStyle onClick={onClick} whiteColor={whiteColor}>
      <Icon_1.default iconType={"hamburger"} iconSize={17}/>
    </HamburgerBtn_styled_1.HamburgerBtnStyle>);
};
exports.default = HamburgerBtn;
