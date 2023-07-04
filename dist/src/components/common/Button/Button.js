import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { ButtonStyled, disableStyle } from "./Button.styled";
import Icon from "../Icon/Icon";
import { colors } from "../../../../ui-settings";
const Button = forwardRef(({ id, children, dir = "ltr", disable = false, onClick, style, className, btnType = "button", icon = { type: null, size: 15.5, color: colors.baseFont }, }, ref) => {
    const getStyle = (disable, style) => {
        // if disable is true then return style merged with disableStyle, else return style or an empty object
        return disable && style ? { ...style, ...disableStyle } : style || {};
    };
    return (_jsx(ButtonStyled, { className: className, ref: ref, type: btnType, dir: dir, onClick: onClick, id: id && id, style: getStyle(disable, style), children: _jsxs("div", { className: "button-wrapper", dir: dir, children: [children && (_jsx("span", { className: "value", style: !icon?.type ? { marginRight: 0, marginLeft: 0 } : {}, children: children })), icon?.type && (_jsx("span", { className: "icon", children: _jsx(Icon, { iconType: icon.type, iconSize: icon.size, iconColor: icon.color }) }))] }) }));
});
export default Button;
