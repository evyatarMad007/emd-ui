import React, { ReactNode, FormEvent } from "react";
import Button from "../Button/Button";
import { FormStyled } from "./Form.styled";

interface SubmitButtonProps {
  onClick?: () => void;
  icon?: { type: string | null; size: number; color: string}
  backgroundColor?: string;
  value: string;
}

interface FormProps {
  onSubmit: () => void;
  submitButton: SubmitButtonProps;
  children: ReactNode | ReactNode[] | string;
  isValidForm: boolean;
  maxWidth?: string;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  submitButton,
  children,
  isValidForm,
  maxWidth = "400px",
}) => {

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormStyled onSubmit={onSubmitHandler} maxWidth={maxWidth}>
      <div className="inputs-container">{children}</div>
      <div className="buttons-container">
        <div className="btn-wrapper">
          <Button
            btnType="submit"
            className={!isValidForm ? "btn-submit-disabled" : ""}
            onClick={submitButton.onClick}
            disable={!isValidForm}
            dir="rtl"
            icon={submitButton.icon}
            style={{
              backgroundColor: submitButton.backgroundColor,
            }}
          >
            {submitButton.value}
          </Button>
        </div>
      </div>
    </FormStyled>
  );
};

export default Form;
