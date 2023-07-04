"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LogoutButton_styled_1 = require("./LogoutButton.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const LogoutButton = ({ linkColor }) => {
    return (<LogoutButton_styled_1.LogoutButtonStyle>
      <Icon_1.default margin='0 3.25px 0 0' iconType={"logout"} iconSize={17}/>
      <span className='text'>התנתק</span>
    </LogoutButton_styled_1.LogoutButtonStyle>);
};
exports.default = LogoutButton;
