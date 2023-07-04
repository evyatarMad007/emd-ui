import React from "react";
interface IProps {
    position?: "absolute" | "relative" | "fixed" | "static" | "sticky";
    location?: [number, number, number, number];
    fullWidth?: boolean;
    children: React.ReactNode | string;
    pX?: string;
    pY?: string;
}
declare const Float: React.FC<IProps>;
export default Float;
