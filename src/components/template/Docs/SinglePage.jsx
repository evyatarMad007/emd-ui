import React from "react";
import styled from "styled-components";
import uiSettings from "../../../uiSettings";

const SinglePageStyled = styled.div`
  height: 297mm;
  width: 210mm;
`;

const SinglePage = ({ children }) => {
  return <SinglePageStyled>{children}</SinglePageStyled>;
};

export default SinglePage;
