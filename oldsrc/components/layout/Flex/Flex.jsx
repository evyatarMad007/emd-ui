"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Flex = ({ flexX, flexY, children, padding, flexDir, fullWidth, mW, margin, relative }) => {
    return (<div style={{
            width: fullWidth ? "100%" : "380px",
            maxWidth: mW || "100%",
            margin: margin || "0 auto",
            display: "flex",
            flexDirection: flexDir || "row",
            justifyContent: flexX || "flex-start",
            alignItems: flexY || "flex-start",
            direction: "rtl",
            padding: padding || "0",
            position: relative ? "relative" : "static"
        }}>
      {children}
    </div>);
};
exports.default = Flex;
