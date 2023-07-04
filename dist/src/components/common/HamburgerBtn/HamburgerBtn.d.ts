import React, { MouseEventHandler } from "react";
interface HamburgerBtnProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    whiteColor?: boolean;
}
declare const HamburgerBtn: React.FC<HamburgerBtnProps>;
export default HamburgerBtn;
