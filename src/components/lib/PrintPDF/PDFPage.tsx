import React from "react";
import styled from "styled-components";
import { fonts } from "../../../../ui-settings";


// PDFPage Component: This component renders content within a single PDF page.
const PDFPageStyled = styled.div`
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

interface PDFPageProps {
  content: any[]; // replace 'any' with the type of your content
  pageNumber: number;
  pageAmount: number;
}

const PDFPage: React.FC<PDFPageProps> = ({ content, pageNumber, pageAmount }) => {
  return (
    <PDFPageStyled>
      {content.map((item, index) => (
        <div className="PDFPage" key={index}>
          <div className="page-content">{item}</div>
          <span className="page-number">
            {pageNumber}/{pageAmount}
          </span>
        </div>
      ))}
    </PDFPageStyled>
  );
};

export default PDFPage;
