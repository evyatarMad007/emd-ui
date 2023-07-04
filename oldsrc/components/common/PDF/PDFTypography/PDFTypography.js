"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PDFTypography_styled_1 = require("./PDFTypography.styled");
const PDFTypography = ({ value, fWeight, location, margin, fSize, br, top, right, left, position, display, underLine, }) => {
    const getBr = (brs) => {
        let brArr = [];
        for (let i = 0; i < brs; i++) {
            brArr.push((0, jsx_runtime_1.jsx)("br", {}, i));
        }
        return brArr;
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(PDFTypography_styled_1.PDFTypographyStyled, { fWeight: fWeight, fSize: fSize, underLine: underLine, top: top, right: right, left: left, position: position, display: display, margin: margin, location: location, children: value }), location && getBr(2) || br && getBr(br)] }));
};
exports.default = PDFTypography;
