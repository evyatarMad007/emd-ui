"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ExitBtn_styled_1 = require("./ExitBtn.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const ui_settings_1 = require("../../../../ui-settings");
const ExitBtn = ({ onClick }) => {
    return (<ExitBtn_styled_1.ExitBtnStyle onClick={onClick}>
      <Icon_1.default iconType="close" iconSize={17} iconColor={ui_settings_1.colors.fontLightColor}/>
    </ExitBtn_styled_1.ExitBtnStyle>);
};
exports.default = ExitBtn;
