import React, { useRef, useState, RefObject } from "react";
import { InputContainerStyled } from "./TextInput.styled";
import validateInput from "../../../internal-utils/validate-utils";

interface TextInputProps {
  label: string;
  inpData: (data: { value: string; isValid: boolean }) => void;
  disabled?: boolean;
  errorMessage?: string;
  placeholder?: string;
  initValue?: string;
  fieldValidation: string;
  maxWidth?: string;
  type?: string;
  inpDir?: "ltr" | "rtl";
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  inpData,
  disabled = false,
  errorMessage,
  placeholder = "",
  initValue = "",
  fieldValidation,
  maxWidth = "max-content",
  type = "text",
  inpDir = "ltr",
}) => {
  const [isValid, setIsValid] = useState<{ isError: boolean; errorMessage: string }>({
    isError: false,
    errorMessage: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const inpName = label.toLowerCase().replace(" ", "-");

  const validateInputHandler = () => {
    if (inputRef.current?.value === "") {
      inpData({ value: "", isValid: false });
    }

    const validate = validateInput(fieldValidation, inputRef.current?.value || "");
    setIsValid({
      isError: validate.isError,
      errorMessage: validate.errorMessage,
    });
    inpData({ value: inputRef.current?.value || "", isValid: !validate.isError });
  };

  return (
    <InputContainerStyled inpDir={inpDir} maxWidth={maxWidth}>
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
        ref={inputRef as RefObject<HTMLInputElement>}
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
