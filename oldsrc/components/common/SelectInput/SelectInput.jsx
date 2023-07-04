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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const SelectInput_styled_1 = require("./SelectInput.styled");
const SelectInput = ({ label, options, defaultValue, inpDir = "ltr", disabled = false, onChange, }) => {
    const [selectedOption, setSelectedOption] = (0, react_1.useState)(defaultValue);
    const inpName = label.toLowerCase().replace(" ", "-");
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        if (onChange) {
            onChange({ value: event.target.value, isValid: true });
        }
    };
    (0, react_1.useEffect)(() => {
        if (defaultValue) {
            setSelectedOption(defaultValue);
            if (onChange) {
                onChange({ value: defaultValue, isValid: true });
            }
        }
    }, [defaultValue, onChange]);
    return (<SelectInput_styled_1.SelectContainerStyled inpDir={inpDir}>
      <label className="SelectInput-label" htmlFor={inpName}>
        {label}
      </label>
      <select className="SelectInput-select" id={inpName} value={selectedOption} onChange={handleChange} disabled={disabled}>
        {options.map((option, index) => (<option key={index} value={option.value}>
            {option.label}
          </option>))}
      </select>
    </SelectInput_styled_1.SelectContainerStyled>);
};
exports.default = SelectInput;
