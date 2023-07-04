import { jsx as _jsx } from "react/jsx-runtime";
import { ExitBtnStyle } from "./ExitBtn.styled";
import Icon from "../Icon/Icon";
import { colors } from "../../../../ui-settings";
const ExitBtn = ({ onClick }) => {
    return (_jsx(ExitBtnStyle, { onClick: onClick, children: _jsx(Icon, { iconType: "close", iconSize: 17, iconColor: colors.fontLightColor }) }));
};
export default ExitBtn;
