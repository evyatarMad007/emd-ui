import React, { useRef, useState } from "react";
import { InputContainerStyled } from "./TextInput.styled";
import validateInput from "../../../utils/validator";

const TextInput = ({
  label,
  inpData,
  disabled = false,
  errorMessage,
  placeholder = "",
  initValue = "",
  fieldType,
  type = "text",
  inpDir = "ltr",
}) => {
  const [isValid, setIsValid] = useState({ isError: false, errorMessage: "" });
  const inputRef = useRef();
  const inpName = label.toLowerCase().replace(" ", "-");

  const validateInputHandler = () => {
    if (inputRef.current.value === "") {
      inpData({ value: "", isValid: false });
    }

    const validate = validateInput(fieldType, inputRef.current.value);
    setIsValid({
      isError: validate.isError,
      errorMessage: validate.errorMessage,
    });
    inpData({ value: inputRef.current.value, isValid: !validate.isError });
  };

  return (
    <InputContainerStyled inpDir={inpDir}>
      <label className="TextInput-label" htmlFor={inpName}>
        {label}
      </label>
      <input
        className="TextInput-inp"
        onChange={validateInputHandler}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        id={inpName}
        ref={inputRef}
        aria-label={label}
        aria-describedby={`${inpName}-error`}
        aria-invalid={!!errorMessage}
        defaultValue={initValue}
      />
      {isValid.isError && (
        <p className="TextInput-error" id={`${inpName}-error`}>
          {isValid.errorMessage}
        </p>
      )}
    </InputContainerStyled>
  );
};

export default TextInput;
