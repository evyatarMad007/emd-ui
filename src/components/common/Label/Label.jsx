import React from "react";
import { LabelStyled } from "./Label.styled";

const Label = ({ children, title}) => {
  return (
    <LabelStyled>
      <span className="title">{title}:</span>
      <span className="label">{children}</span>
    </LabelStyled>
  );
};

export default Label;
