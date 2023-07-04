"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
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
    return (<CustomLink_styled_1.CustomLinkStyle linkType={linkType} className="CustomLink unable-to-mark" onClick={onClick}>
      <react_router_dom_1.Link to={`${href}`} className={getClass()}>
        {children}
      </react_router_dom_1.Link>
    </CustomLink_styled_1.CustomLinkStyle>);
};
exports.default = CustomLink;
