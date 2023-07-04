import React, { CSSProperties } from "react";
interface IconProps {
    type: string | null;
    size: number;
    color: string;
}
interface ButtonProps {
    id?: string;
    children?: React.ReactNode;
    dir?: "ltr" | "rtl";
    disable?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    style?: CSSProperties;
    icon?: IconProps;
    className?: string;
    btnType?: "button" | "submit" | "reset";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
