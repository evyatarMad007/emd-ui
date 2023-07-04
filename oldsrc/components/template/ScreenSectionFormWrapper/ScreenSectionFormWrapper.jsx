"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ScreenSectionFormWrapper_style_1 = require("./ScreenSectionFormWrapper.style");
const CustomLink_1 = __importDefault(require("../../common/CustomLink/CustomLink"));
const ScreenSectionFormWrapper = ({ pageName, children, showcaseSection = { backgroundColor: "", img: "" }, formSection, appData, }) => {
    return (<ScreenSectionFormWrapper_style_1.ScreenSectionFormWrapperStyled showcaseColor={showcaseSection.backgroundColor}>
      <div className="showcase-container">
        <div className="showcase-img-wrapper">
          {(showcaseSection === null || showcaseSection === void 0 ? void 0 : showcaseSection.img) && (<img className="showcase-img" src={showcaseSection.img} alt={`${formSection === null || formSection === void 0 ? void 0 : formSection.title} showcase img`}/>)}
        </div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1 className="title">{formSection === null || formSection === void 0 ? void 0 : formSection.title}</h1>
          <p className="subTitle">{formSection === null || formSection === void 0 ? void 0 : formSection.description}</p>
          <div className="logoLink">
            {(appData === null || appData === void 0 ? void 0 : appData.websiteUrl) && (appData === null || appData === void 0 ? void 0 : appData.appName) && (<CustomLink_1.default href={appData.websiteUrl} linkType="logoImg">
                {appData.icon && <span className="icon">{appData.icon}</span>}
                <span className="text">{appData.appName}</span>
              </CustomLink_1.default>)}
          </div>
        </div>
        <div className="form-body">{children}</div>
      </div>
    </ScreenSectionFormWrapper_style_1.ScreenSectionFormWrapperStyled>);
};
exports.default = ScreenSectionFormWrapper;
