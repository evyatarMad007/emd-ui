"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const CustomLink_styled_1 = require("./CustomLink.styled");
const CustomLink = ({ href, children, classNameList, linkType, onClick, }) => {
    const location = (0, react_router_dom_1.useLocation)();
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
    return ((0, jsx_runtime_1.jsx)(CustomLink_styled_1.CustomLinkStyle, { linkType: linkType, className: "CustomLink unable-to-mark", onClick: onClick, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `${href}`, className: getClass(), children: children }) }));
};
exports.default = CustomLink;
