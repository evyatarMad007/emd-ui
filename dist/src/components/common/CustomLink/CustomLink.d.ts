import React, { ReactNode, MouseEvent } from "react";
interface CustomLinkProps {
    href: string;
    children: ReactNode;
    classNameList?: string;
    linkType: "sideBar" | "subHeader" | "sideBarSettings" | "login" | "register" | "logoImg";
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
declare const CustomLink: React.FC<CustomLinkProps>;
export default CustomLink;
