"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Float = ({ position = 'relative', location, fullWidth, children, pX = "0px", pY = "0px" }) => {
    const [top, right, bottom, left] = location || [0, 0, 0, 0];
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: fullWidth ? "100%" : "380px",
            height: "max-content",
            position,
            top: `${top}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
            left: `${left}px`,
            padding: `${pX} ${pY}`,
        }, children: children }));
};
exports.default = Float;
