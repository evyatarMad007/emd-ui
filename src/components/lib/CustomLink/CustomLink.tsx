import React, { ReactNode, MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { CustomLinkStyle } from "./CustomLink.styled";

interface CustomLinkProps {
  href: string;
  children: ReactNode | ReactNode[] | string;
  classNameList?: string;
  linkType: "sideBar" | "subHeader" | "sideBarSettings" | "login" | "register" | "logoImg";
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  classNameList,
  linkType,
  onClick,
}) => {
  const location = useLocation();

  const getCurrentLink = (linkType: CustomLinkProps['linkType'], pathname: string) => {
    const links = {
      sideBar: `/${pathname.split("/")[1]}`,
      subHeader: pathname,
      sideBarSettings: pathname,
      login: pathname,
      register: pathname,
      logoImg: pathname,
    };
    return links[linkType];
  }

  const getClass = () => {
    let className = `nav-link ${classNameList || ""}`;
    const selectedPath = getCurrentLink(linkType, location.pathname);
    // if the current path is the same as the main path for the linkType, add the active class
    if (selectedPath === href) className += " active";
    return className;
  };

  return (
    <CustomLinkStyle
      linkType={linkType}
      className="CustomLink unable-to-mark"
      onClick={onClick}
    >
      <Link to={`${href}`} className={getClass()}>
        {children}
      </Link>
    </CustomLinkStyle>
  );
};

export default CustomLink;
