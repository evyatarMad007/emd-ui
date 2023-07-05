import React from "react";
import { SectionItemStyled } from "./SectionItem.styled";

interface SectionItemProps {
  section: {
    name: string;
    number: number;
    content: string;
  };
}

const SectionItem: React.FC<SectionItemProps> = ({ section }) => {
  return (
    <SectionItemStyled className={section.name}>
      <div className="section-number">{section.number}.</div>
      <div className="section-content">{section.content}</div>
    </SectionItemStyled>
  );
};

export default SectionItem;
