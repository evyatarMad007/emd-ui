import React from "react";
interface TextInputProps {
    label: string;
    inpData: (data: {
        value: string;
        isValid: boolean;
    }) => void;
    disabled?: boolean;
    errorMessage?: string;
    placeholder?: string;
    initValue?: string;
    fieldType: string;
    type?: string;
    inpDir?: "ltr" | "rtl";
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
