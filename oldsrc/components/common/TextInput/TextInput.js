"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TextInput_styled_1 = require("./TextInput.styled");
const validate_utils_1 = __importDefault(require("../../../internal-utils/validate-utils"));
const TextInput = ({ label, inpData, disabled = false, errorMessage, placeholder = "", initValue = "", fieldType, type = "text", inpDir = "ltr", }) => {
    const [isValid, setIsValid] = (0, react_1.useState)({
        isError: false,
        errorMessage: "",
    });
    const inputRef = (0, react_1.useRef)(null);
    const inpName = label.toLowerCase().replace(" ", "-");
    const validateInputHandler = () => {
        var _a, _b, _c;
        if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value) === "") {
            inpData({ value: "", isValid: false });
        }
        const validate = (0, validate_utils_1.default)(fieldType, ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.value) || "");
        setIsValid({
            isError: validate.isError,
            errorMessage: validate.errorMessage,
        });
        inpData({ value: ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value) || "", isValid: !validate.isError });
    };
    return ((0, jsx_runtime_1.jsxs)(TextInput_styled_1.InputContainerStyled, { inpDir: inpDir, children: [(0, jsx_runtime_1.jsx)("label", { className: "TextInput-label", htmlFor: inpName, children: label }), (0, jsx_runtime_1.jsx)("input", { className: "TextInput-inp", onChange: validateInputHandler, placeholder: placeholder, type: type, disabled: disabled, id: inpName, ref: inputRef, "aria-label": label, "aria-describedby": `${inpName}-error`, "aria-invalid": !!errorMessage, defaultValue: initValue }), isValid.isError && ((0, jsx_runtime_1.jsx)("p", { className: "TextInput-error", id: `${inpName}-error`, children: isValid.errorMessage }))] }));
};
exports.default = TextInput;
