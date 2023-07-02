import React, { useEffect, useState } from "react";
import { SelectContainerStyled } from "./SelectInput.styled";

const SelectInput = ({
  label,
  options,
  defaultValue,
  inpDir = "ltr",
  disabled = false,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const inpName = label.toLowerCase().replace(" ", "-");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    if (onChange) {
      onChange({value: event.target.value, isValid: true});
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
      onChange({value: defaultValue, isValid: true});
    }
  }, []);

  return (
    <SelectContainerStyled inpDir={inpDir}>
      <label className="SelectInput-label" htmlFor={inpName}>
        {label}
      </label>
      <select
        className="SelectInput-select"
        id={inpName}
        value={selectedOption}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectContainerStyled>
  );
};

export default SelectInput;
