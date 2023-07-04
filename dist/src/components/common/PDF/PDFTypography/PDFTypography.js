import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { PDFTypographyStyled } from "./PDFTypography.styled";
const PDFTypography = ({ value, fWeight, location, margin, fSize, br, top, right, left, position, display, underLine, }) => {
    const getBr = (brs) => {
        let brArr = [];
        for (let i = 0; i < brs; i++) {
            brArr.push(_jsx("br", {}, i));
        }
        return brArr;
    };
    return (_jsxs(_Fragment, { children: [_jsx(PDFTypographyStyled, { fWeight: fWeight, fSize: fSize, underLine: underLine, top: top, right: right, left: left, position: position, display: display, margin: margin, location: location, children: value }), location && getBr(2) || br && getBr(br)] }));
};
export default PDFTypography;
