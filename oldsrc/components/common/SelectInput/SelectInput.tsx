import React, { useEffect, useState, ChangeEvent } from "react";
import { SelectContainerStyled } from "./SelectInput.styled";

interface OptionType {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  options: OptionType[];
  defaultValue?: string;
  inpDir?: "ltr" | "rtl";
  disabled?: boolean;
  onChange?: (event: { value: string; isValid: boolean }) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  defaultValue,
  inpDir = "ltr",
  disabled = false,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const inpName = label.toLowerCase().replace(" ", "-");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
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
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectContainerStyled>
  );
};

export default SelectInput;
