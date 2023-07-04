import React from "react";
interface IProps {
    children: React.ReactNode | string;
    flexX?: string;
    flexY?: string;
    padding?: string;
    flexDir?: "row" | "column" | "row-reverse" | "column-reverse";
    fullWidth?: boolean;
    mW?: string;
    margin?: string;
    relative?: boolean;
}
declare const Flex: React.FC<IProps>;
export default Flex;
