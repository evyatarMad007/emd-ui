import React, { ReactNode } from "react";
interface SubmitButtonProps {
    onClick?: () => void;
    icon?: {
        type: string | null;
        size: number;
        color: string;
    };
    backgroundColor?: string;
    value: string;
}
interface FormProps {
    onSubmit: () => void;
    submitButton: SubmitButtonProps;
    children: ReactNode;
    isValidForm: boolean;
    maxWidth?: string;
}
declare const Form: React.FC<FormProps>;
export default Form;
