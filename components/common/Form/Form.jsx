import React from "react";
import Button from "../Button/Button";
import { FormStyled } from "./Form.styled";

const Form = ({
  onSubmit,
  submitButton,
  children,
  isValidForm,
  maxWidth = "400px",
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormStyled onSubmit={onSubmitHandler} maxWidth={maxWidth}>
      <div className="inputs-container">{children}</div>
      <div className="buttons-container">
        <div className="btn-wrapper">
          <Button
            padding={submitButton.padding}
            btnType={"submit"}
            className={!isValidForm && "btn-submit-disabled"}
            onClick={submitButton.onClick && submitButton.onClick}
            disable={!isValidForm}
            value={submitButton.value}
            background={submitButton.backgroundColor}
            dir="rtl"
            icon={submitButton?.icon && submitButton?.icon}
          />
        </div>
      </div>
    </FormStyled>
  );
};

export default Form;
