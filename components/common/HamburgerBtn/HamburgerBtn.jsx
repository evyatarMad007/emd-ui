import React from "react";
import { HamburgerBtnStyle } from "./HamburgerBtn.styled";
import Icon from "../Icon/Icon";

const HamburgerBtn = ({ onClick, whiteColor = false }) => {
  return (
    <HamburgerBtnStyle onClick={onClick} whiteColor={whiteColor}>
      <Icon iconType={"hamburger"} iconSize={17} />
    </HamburgerBtnStyle>
  );
};

export default HamburgerBtn;
