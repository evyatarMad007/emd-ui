import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { fonts } from "../../../../ui-settings";
// PDFPage Component: This component renders content within a single PDF page.
const PDFPageStyled = styled.div `
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
    font-family: ${fonts.documentFontMedium};
  }
`;
const PDFPage = ({ content, pageNumber, pageAmount }) => {
    return (_jsx(PDFPageStyled, { children: content.map((item, index) => (_jsxs("div", { className: "PDFPage", children: [_jsx("div", { className: "page-content", children: item }), _jsxs("span", { className: "page-number", children: [pageNumber, "/", pageAmount] })] }, index))) }));
};
export default PDFPage;
