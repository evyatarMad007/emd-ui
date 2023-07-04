import { jsx as _jsx } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { CustomLinkStyle } from "./CustomLink.styled";
const CustomLink = ({ href, children, classNameList, linkType, onClick, }) => {
    const location = useLocation();
    const getCurrentLink = (linkType, pathname) => {
        const links = {
            sideBar: `/${pathname.split("/")[1]}`,
            subHeader: pathname,
            sideBarSettings: pathname,
            login: pathname,
            register: pathname,
            logoImg: pathname,
        };
        return links[linkType];
    };
    const getClass = () => {
        let className = `nav-link ${classNameList || ""}`;
        const selectedPath = getCurrentLink(linkType, location.pathname);
        // if the current path is the same as the main path for the linkType, add the active class
        if (selectedPath === href)
            className += " active";
        return className;
    };
    return (_jsx(CustomLinkStyle, { linkType: linkType, className: "CustomLink unable-to-mark", onClick: onClick, children: _jsx(Link, { to: `${href}`, className: getClass(), children: children }) }));
};
export default CustomLink;
