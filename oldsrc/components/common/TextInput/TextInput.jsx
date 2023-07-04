"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
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
    return (<TextInput_styled_1.InputContainerStyled inpDir={inpDir}>
      <label className="TextInput-label" htmlFor={inpName}>
        {label}
      </label>
      <input className="TextInput-inp" onChange={validateInputHandler} placeholder={placeholder} type={type} disabled={disabled} id={inpName} ref={inputRef} aria-label={label} aria-describedby={`${inpName}-error`} aria-invalid={!!errorMessage} defaultValue={initValue}/>
      {isValid.isError && (<p className="TextInput-error" id={`${inpName}-error`}>
          {isValid.errorMessage}
        </p>)}
    </TextInput_styled_1.InputContainerStyled>);
};
exports.default = TextInput;
