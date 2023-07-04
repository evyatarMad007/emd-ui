import React from "react";
import Typography from "../PDFTypography/PDFTypography";
import { PDFSectionListContainerStyled } from "./PDFSectionListContainer.styled";
import SectionList from "./SectionList/SectionList";

interface PDFSectionListContainerProps {
  listTitle: string;
  sectionList: any[]; // specify a more detailed type if possible
}

const PDFSectionListContainer: React.FC<PDFSectionListContainerProps> = ({ listTitle, sectionList }) => {
  return (
    <PDFSectionListContainerStyled>
      <Typography fWeight={"b"} value={listTitle} margin="7px 0 0 0" />
      <SectionList list={sectionList} />
    </PDFSectionListContainerStyled>
  );
};

export default PDFSectionListContainer;
