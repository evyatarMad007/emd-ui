"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const ui_settings_1 = require("../../../../ui-settings");
// PDFPage Component: This component renders content within a single PDF page.
const PDFPageStyled = styled_components_1.default.div `
  height: 297mm;
  width: 210mm;
  page-break-after: always;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;

  .page-number {
    position: absolute;
    bottom: 15px;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    letter-spacing: 0.8px;
    font-weight: bold;
    font-size: 12px;
    font-family: ${ui_settings_1.fonts.documentFontMedium};
  }
`;
const PDFPage = ({ content, pageNumber, pageAmount }) => {
    return ((0, jsx_runtime_1.jsx)(PDFPageStyled, { children: content.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "PDFPage", children: [(0, jsx_runtime_1.jsx)("div", { className: "page-content", children: item }), (0, jsx_runtime_1.jsxs)("span", { className: "page-number", children: [pageNumber, "/", pageAmount] })] }, index))) }));
};
exports.default = PDFPage;
