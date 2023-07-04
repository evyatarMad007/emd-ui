"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
    return ((0, jsx_runtime_1.jsxs)(SelectInput_styled_1.SelectContainerStyled, { inpDir: inpDir, children: [(0, jsx_runtime_1.jsx)("label", { className: "SelectInput-label", htmlFor: inpName, children: label }), (0, jsx_runtime_1.jsx)("select", { className: "SelectInput-select", id: inpName, value: selectedOption, onChange: handleChange, disabled: disabled, children: options.map((option, index) => ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.label }, index))) })] }));
};
exports.default = SelectInput;
