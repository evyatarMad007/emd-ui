"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Popper_styled_1 = require("./Popper.styled");
const Popper = ({ children, positionY, positionX }) => {
    return (<Popper_styled_1.PopperStyled className="popper" positionY={positionY} positionX={positionX}>
      {children}
    </Popper_styled_1.PopperStyled>);
};
exports.default = Popper;
