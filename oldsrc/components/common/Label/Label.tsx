import React, { ReactNode } from "react";
import { LabelStyled } from "./Label.styled";

interface LabelProps {
  children: ReactNode;
  title: string;
}

const Label: React.FC<LabelProps> = ({ children, title }) => {
  return (
    <LabelStyled>
      <span className="title">{title}:</span>
      <span className="label">{children}</span>
    </LabelStyled>
  );
};

export default Label;
