"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Float = ({ position = 'relative', location, fullWidth, children, pX = "0px", pY = "0px" }) => {
    const [top, right, bottom, left] = location || [0, 0, 0, 0];
    return (<div style={{
            width: fullWidth ? "100%" : "380px",
            height: "max-content",
            position,
            top: `${top}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
            left: `${left}px`,
            padding: `${pX} ${pY}`,
        }}>
      {children}
    </div>);
};
exports.default = Float;
