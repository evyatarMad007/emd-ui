import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { InputContainerStyled } from "./TextInput.styled";
import validateInput from "../../../internal-utils/validate-utils";
const TextInput = ({ label, inpData, disabled = false, errorMessage, placeholder = "", initValue = "", fieldType, type = "text", inpDir = "ltr", }) => {
    const [isValid, setIsValid] = useState({
        isError: false,
        errorMessage: "",
    });
    const inputRef = useRef(null);
    const inpName = label.toLowerCase().replace(" ", "-");
    const validateInputHandler = () => {
        if (inputRef.current?.value === "") {
            inpData({ value: "", isValid: false });
        }
        const validate = validateInput(fieldType, inputRef.current?.value || "");
        setIsValid({
            isError: validate.isError,
            errorMessage: validate.errorMessage,
        });
        inpData({ value: inputRef.current?.value || "", isValid: !validate.isError });
    };
    return (_jsxs(InputContainerStyled, { inpDir: inpDir, children: [_jsx("label", { className: "TextInput-label", htmlFor: inpName, children: label }), _jsx("input", { className: "TextInput-inp", onChange: validateInputHandler, placeholder: placeholder, type: type, disabled: disabled, id: inpName, ref: inputRef, "aria-label": label, "aria-describedby": `${inpName}-error`, "aria-invalid": !!errorMessage, defaultValue: initValue }), isValid.isError && (_jsx("p", { className: "TextInput-error", id: `${inpName}-error`, children: isValid.errorMessage }))] }));
};
export default TextInput;
