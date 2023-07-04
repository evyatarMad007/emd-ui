import React from "react";
type GlobalIconTypes = string;
type RouteIconTypes = string;
interface IconProps {
    iconType: GlobalIconTypes | RouteIconTypes;
    iconSize?: string | number;
    iconColor?: string;
    group?: "global" | "routes";
    margin?: string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
