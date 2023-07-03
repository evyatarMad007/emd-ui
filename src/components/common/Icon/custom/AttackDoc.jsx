import React from "react";
import styled from "styled-components";
import { VscLaw } from "react-icons/vsc";
import { CgFileDocument } from "react-icons/cg";
export const WrapperStyle = styled.span`
  position: relative;
  display: block;
  .icon-1 {
    transform: translateY(-2px);
    display: block;
  }
  .icon-2 {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
`;

const AttackDoc = ({ color }) => {
  return (
    <WrapperStyle>
      <span className="icon-1">
        <CgFileDocument fontSize={32} color={color} />
      </span>
      <span className="icon-2">
        <VscLaw fontSize={15} color={color} />
      </span>
    </WrapperStyle>
  );
};

export default AttackDoc;
