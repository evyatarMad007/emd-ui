"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_styled_1 = require("./Button.styled");
const Icon_1 = __importDefault(require("../Icon/Icon"));
const ui_settings_1 = require("../../../../ui-settings");
const Button = (0, react_1.forwardRef)(({ id, children, dir = "ltr", disable = false, onClick, style, className, btnType = "button", icon = { type: null, size: 15.5, color: ui_settings_1.colors.baseFont }, }, ref) => {
    const getStyle = (disable, style) => {
        // if disable is true then return style merged with disableStyle, else return style or an empty object
        return disable && style ? Object.assign(Object.assign({}, style), Button_styled_1.disableStyle) : style || {};
    };
    return ((0, jsx_runtime_1.jsx)(Button_styled_1.ButtonStyled, { className: className, ref: ref, type: btnType, dir: dir, onClick: onClick, id: id && id, style: getStyle(disable, style), children: (0, jsx_runtime_1.jsxs)("div", { className: "button-wrapper", dir: dir, children: [children && ((0, jsx_runtime_1.jsx)("span", { className: "value", style: !(icon === null || icon === void 0 ? void 0 : icon.type) ? { marginRight: 0, marginLeft: 0 } : {}, children: children })), (icon === null || icon === void 0 ? void 0 : icon.type) && ((0, jsx_runtime_1.jsx)("span", { className: "icon", children: (0, jsx_runtime_1.jsx)(Icon_1.default, { iconType: icon.type, iconSize: icon.size, iconColor: icon.color }) }))] }) }));
});
exports.default = Button;
