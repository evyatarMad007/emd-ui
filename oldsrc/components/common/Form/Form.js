"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("../Button/Button"));
const Form_styled_1 = require("./Form.styled");
const Form = ({ onSubmit, submitButton, children, isValidForm, maxWidth = "400px", }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit();
    };
    return ((0, jsx_runtime_1.jsxs)(Form_styled_1.FormStyled, { onSubmit: onSubmitHandler, maxWidth: maxWidth, children: [(0, jsx_runtime_1.jsx)("div", { className: "inputs-container", children: children }), (0, jsx_runtime_1.jsx)("div", { className: "buttons-container", children: (0, jsx_runtime_1.jsx)("div", { className: "btn-wrapper", children: (0, jsx_runtime_1.jsx)(Button_1.default, { btnType: "submit", className: !isValidForm ? "btn-submit-disabled" : "", onClick: submitButton.onClick, disable: !isValidForm, dir: "rtl", icon: submitButton.icon, style: {
                            backgroundColor: submitButton.backgroundColor,
                        }, children: submitButton.value }) }) })] }));
};
exports.default = Form;
