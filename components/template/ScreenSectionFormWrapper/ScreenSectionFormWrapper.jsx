import React from "react";
import { ScreenSectionFormWrapperStyled } from "./ScreenSectionFormWrapper.style";
import CustomLink from "../../common/CustomLink/CustomLink";

const ScreenSectionFormWrapper = ({ pageName, children, showcaseSection, formSection, appData}) => {
  
  // Example of showcase object
  // const showcaseSection = {
  //   backgroundColor: "#c9dd2e",
  //   img: "",
  // }
  // const formSection = {
  //   title: "התחברות",
  //   description: "התחבר עם פרטי הכניסה שלך",
  // }
  // const appData = {
  //   appName: "ביזנטיפ",
  //   websiteUrl: "https://bizantip.com",
  //   appColor: "#c9dd2e",
  //   icon: "bizantip",
  // }


  return (
    <ScreenSectionFormWrapperStyled showcaseSection={showcaseSection}>
      <div className="showcase-container">
        <div className="showcase-img-wrapper">
          { showcaseSection?.img && <img
            className="showcase-img"
            src={showcaseSection.img}
            alt={`${formSection.title} showcase img`}
          />}
        </div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1 className="title">{formSection?.title}</h1>
          <p className="subTitle">{formSection?.description}</p>
          <div className="logoLink">
            {
              appData?.websiteUrl && appData?.appName && (
              <CustomLink href={appData?.websiteUrl}>
                {appData?.icon && <span className="icon">
                  {appData?.icon}
                </span>}
                <span className="text">{appData?.appName}</span>
              </CustomLink>
              )
            }
          </div>
        </div>
        <div className="form-body">{children}</div>
      </div>
    </ScreenSectionFormWrapperStyled>
  );
};

export default ScreenSectionFormWrapper;
