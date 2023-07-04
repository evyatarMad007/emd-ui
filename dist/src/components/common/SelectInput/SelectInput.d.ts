import React from "react";
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
    onChange?: (event: {
        value: string;
        isValid: boolean;
    }) => void;
}
declare const SelectInput: React.FC<SelectInputProps>;
export default SelectInput;
