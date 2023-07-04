import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { SelectContainerStyled } from "./SelectInput.styled";
const SelectInput = ({ label, options, defaultValue, inpDir = "ltr", disabled = false, onChange, }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const inpName = label.toLowerCase().replace(" ", "-");
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        if (onChange) {
            onChange({ value: event.target.value, isValid: true });
        }
    };
    useEffect(() => {
        if (defaultValue) {
            setSelectedOption(defaultValue);
            if (onChange) {
                onChange({ value: defaultValue, isValid: true });
            }
        }
    }, [defaultValue, onChange]);
    return (_jsxs(SelectContainerStyled, { inpDir: inpDir, children: [_jsx("label", { className: "SelectInput-label", htmlFor: inpName, children: label }), _jsx("select", { className: "SelectInput-select", id: inpName, value: selectedOption, onChange: handleChange, disabled: disabled, children: options.map((option, index) => (_jsx("option", { value: option.value, children: option.label }, index))) })] }));
};
export default SelectInput;
