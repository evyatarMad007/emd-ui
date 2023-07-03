import React from "react";
import Typography from "../Typography/Typography";
import { SectionListContainerStyled } from "./SectionListContainer.styled";
import SectionList from "./SectionList/SectionList";

const SectionListContainer = ({listTitle, sectionList}) => {
  return (
    <SectionListContainerStyled>
      <Typography fWeight={"b"} value={listTitle} margin="7px 0 0 0" />
      <SectionList list={sectionList}/>
    </SectionListContainerStyled>
  );
};

export default SectionListContainer;
