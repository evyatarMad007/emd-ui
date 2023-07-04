"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Spinner_styled_1 = require("./Spinner.styled");
const Spinner = ({ size = "big" }) => {
    if (size === "small")
        return (0, jsx_runtime_1.jsx)(Spinner_styled_1.SpinnerContainerSmall, {});
    if (size === "big")
        return (0, jsx_runtime_1.jsx)(Spinner_styled_1.SpinnerContainerBig, {});
    return null; // Add a default return statement if needed
};
exports.default = Spinner;
