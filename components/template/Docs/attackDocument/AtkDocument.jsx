import React from "react";
import AtkDocHeader from "./AtkDocHeader";
import PDFDocument from "../../../lib/PrintPDF/PDFDocument";
import AtkDocBody from "./AtkDocBody/AtkDocBody";
import DocPage1 from "./DocPage1";


const AtkDocument = ({ headerContent, bodyContent }) => {
  const header = () => (
    <>
      <AtkDocHeader content={headerContent} />
      <DocPage1 content={bodyContent} />
    </>
  );

  const body = () => <AtkDocBody content={bodyContent} />;

  // return <PDFDocument content={[header(), body()]} itemsPerPage={1} />;
  return <PDFDocument content={[header(), body()]} itemsPerPage={2} />;
};

export default AtkDocument;
