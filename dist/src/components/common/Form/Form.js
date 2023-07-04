import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "../Button/Button";
import { FormStyled } from "./Form.styled";
const Form = ({ onSubmit, submitButton, children, isValidForm, maxWidth = "400px", }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit();
    };
    return (_jsxs(FormStyled, { onSubmit: onSubmitHandler, maxWidth: maxWidth, children: [_jsx("div", { className: "inputs-container", children: children }), _jsx("div", { className: "buttons-container", children: _jsx("div", { className: "btn-wrapper", children: _jsx(Button, { btnType: "submit", className: !isValidForm ? "btn-submit-disabled" : "", onClick: submitButton.onClick, disable: !isValidForm, dir: "rtl", icon: submitButton.icon, style: {
                            backgroundColor: submitButton.backgroundColor,
                        }, children: submitButton.value }) }) })] }));
};
export default Form;
