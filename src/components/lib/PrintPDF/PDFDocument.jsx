import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PDFPage from "./PDFPage";
import Button from "../../common/Button/Button";
import styled from "styled-components";

// PDFDocument Component: This component wraps around multiple PDFPage components
// and includes a "Generate PDF" button. It is responsible for splitting content across pages
// and generating the PDF file.

//

export const PDFDocumentStyled = styled.div`
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
  const containerRef = useRef();

  const pages = [];
  for (let i = 0; i < content.length; i += itemsPerPage) {
    pages.push(content.slice(i, i + itemsPerPage));
  }

  const handleGeneratePDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {
      if (i > 0) {
        pdf.addPage();
      }

      const canvas = await html2canvas(containerRef.current.children[i], {
        scale: 3,
      });
      const imgData = canvas.toDataURL("image/png");

      // These values might need to be adjusted depending on the dimensions of your content
      const imgWidth = 210; // dimensions of an A4 in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save("document.pdf");
  };

  return (
    <PDFDocumentStyled ref={containerRef} dir="rtl">
      {pages.map((pageContent, index) => (
        <PDFPage
          key={index}
          content={pageContent}
          pageNumber={index + 1}
          pageAmount={pages.length}
        />
      ))}
      <div className="btn-wrapper">
        <Button
          onClick={handleGeneratePDF}
          iconColor={"#0DAC81"}
          value={"PDF הורד"}
          borderRadius={"3px"}
        />
      </div>
    </PDFDocumentStyled>
  );
};

export default PDFDocument;
