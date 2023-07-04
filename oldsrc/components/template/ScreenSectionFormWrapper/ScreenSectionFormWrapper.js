"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ScreenSectionFormWrapper_style_1 = require("./ScreenSectionFormWrapper.style");
const CustomLink_1 = __importDefault(require("../../common/CustomLink/CustomLink"));
const ScreenSectionFormWrapper = ({ pageName, children, showcaseSection = { backgroundColor: "", img: "" }, formSection, appData, }) => {
    return ((0, jsx_runtime_1.jsxs)(ScreenSectionFormWrapper_style_1.ScreenSectionFormWrapperStyled, { showcaseColor: showcaseSection.backgroundColor, children: [(0, jsx_runtime_1.jsx)("div", { className: "showcase-container", children: (0, jsx_runtime_1.jsx)("div", { className: "showcase-img-wrapper", children: (showcaseSection === null || showcaseSection === void 0 ? void 0 : showcaseSection.img) && ((0, jsx_runtime_1.jsx)("img", { className: "showcase-img", src: showcaseSection.img, alt: `${formSection === null || formSection === void 0 ? void 0 : formSection.title} showcase img` })) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "form-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-header", children: [(0, jsx_runtime_1.jsx)("h1", { className: "title", children: formSection === null || formSection === void 0 ? void 0 : formSection.title }), (0, jsx_runtime_1.jsx)("p", { className: "subTitle", children: formSection === null || formSection === void 0 ? void 0 : formSection.description }), (0, jsx_runtime_1.jsx)("div", { className: "logoLink", children: (appData === null || appData === void 0 ? void 0 : appData.websiteUrl) && (appData === null || appData === void 0 ? void 0 : appData.appName) && ((0, jsx_runtime_1.jsxs)(CustomLink_1.default, { href: appData.websiteUrl, linkType: "logoImg", children: [appData.icon && (0, jsx_runtime_1.jsx)("span", { className: "icon", children: appData.icon }), (0, jsx_runtime_1.jsx)("span", { className: "text", children: appData.appName })] })) })] }), (0, jsx_runtime_1.jsx)("div", { className: "form-body", children: children })] })] }));
};
exports.default = ScreenSectionFormWrapper;
