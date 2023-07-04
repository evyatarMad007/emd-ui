"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../Button/Button"));
const Form_styled_1 = require("./Form.styled");
const Form = ({ onSubmit, submitButton, children, isValidForm, maxWidth = "400px", }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit();
    };
    return (<Form_styled_1.FormStyled onSubmit={onSubmitHandler} maxWidth={maxWidth}>
      <div className="inputs-container">{children}</div>
      <div className="buttons-container">
        <div className="btn-wrapper">
          <Button_1.default btnType="submit" className={!isValidForm ? "btn-submit-disabled" : ""} onClick={submitButton.onClick} disable={!isValidForm} dir="rtl" icon={submitButton.icon} style={{
            backgroundColor: submitButton.backgroundColor,
        }}>
            {submitButton.value}
          </Button_1.default>
        </div>
      </div>
    </Form_styled_1.FormStyled>);
};
exports.default = Form;
