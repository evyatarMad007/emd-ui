import { jsx as _jsx } from "react/jsx-runtime";
import { HamburgerBtnStyle } from "./HamburgerBtn.styled";
import Icon from "../Icon/Icon";
const HamburgerBtn = ({ onClick, whiteColor = false }) => {
    return (_jsx(HamburgerBtnStyle, { onClick: onClick, whiteColor: whiteColor, children: _jsx(Icon, { iconType: "hamburger", iconSize: 17 }) }));
};
export default HamburgerBtn;
