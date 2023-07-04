"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PDFTypography_styled_1 = require("./PDFTypography.styled");
const PDFTypography = ({ value, fWeight, location, margin, fSize, br, top, right, left, position, display, underLine, }) => {
    const getBr = (brs) => {
        let brArr = [];
        for (let i = 0; i < brs; i++) {
            brArr.push(<br key={i}/>);
        }
        return brArr;
    };
    return (<>
      <PDFTypography_styled_1.PDFTypographyStyled fWeight={fWeight} fSize={fSize} underLine={underLine} top={top} right={right} left={left} position={position} display={display} margin={margin} location={location}>
        {value}
      </PDFTypography_styled_1.PDFTypographyStyled>
      {location && getBr(2) || br && getBr(br)}
    </>);
};
exports.default = PDFTypography;
