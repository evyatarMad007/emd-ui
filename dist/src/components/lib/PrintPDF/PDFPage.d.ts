import React from "react";
interface PDFPageProps {
    content: any[];
    pageNumber: number;
    pageAmount: number;
}
declare const PDFPage: React.FC<PDFPageProps>;
export default PDFPage;
