import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PDFPage from "./PDFPage";
import styled from "styled-components";
import { Button } from "../../common";
export const PDFDocumentStyled = styled.div `
  position: relative;
  @keyframes btn-wrapper-fade-in {
    0% {
      top: 0;
      opacity: 0;
    }
    100% {
      top: 25px;
    }
  }

  &:hover {
    .btn-wrapper {
      animation: btn-wrapper-fade-in 0.2s ease-in-out forwards;
      display: block;
    }
  }

  .btn-wrapper {
    position: absolute;
    top: 25px;
    right: 0;
    left: 0;
    margin: auto;
    width: 100px;
    display: none;
  }
`;
const PDFDocument = ({ content, itemsPerPage }) => {
    const containerRef = useRef(null);
    const pages = [];
    for (let i = 0; i < content.length; i += itemsPerPage) {
        pages.push(content.slice(i, i + itemsPerPage));
    }
    const handleGeneratePDF = async () => {
        const pdf = new jsPDF("p", "mm", "a4");
        if (containerRef.current) {
            for (let i = 0; i < pages.length; i++) {
                if (i > 0) {
                    pdf.addPage();
                }
                const canvas = await html2canvas(containerRef.current.children[i], {
                    scale: 3,
                });
                const imgData = canvas.toDataURL("image/png");
                const imgWidth = 210; // dimensions of an A4 in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            }
        }
        pdf.save("document.pdf");
    };
    return (_jsxs(PDFDocumentStyled, { ref: containerRef, dir: "rtl", children: [pages.map((pageContent, index) => (_jsx(PDFPage, { content: pageContent, pageNumber: index + 1, pageAmount: pages.length }, index))), _jsx("div", { className: "btn-wrapper", children: _jsx(Button, { onClick: handleGeneratePDF, children: "PDF \u05D4\u05D5\u05E8\u05D3" }) })] }));
};
export default PDFDocument;
