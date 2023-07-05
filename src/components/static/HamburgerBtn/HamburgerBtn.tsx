import React, { MouseEventHandler } from "react";
import { HamburgerBtnStyle } from "./HamburgerBtn.styled";
import Icon from "../../common/Icon/Icon";

interface HamburgerBtnProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  whiteColor?: boolean;
}

const HamburgerBtn: React.FC<HamburgerBtnProps> = ({
  onClick,
  whiteColor = false,
}) => {
  return (
    <HamburgerBtnStyle onClick={onClick} whiteColor={whiteColor}>
      <Icon iconType={"hamburger"} iconSize={17} />
    </HamburgerBtnStyle>
  );
};

export default HamburgerBtn;
