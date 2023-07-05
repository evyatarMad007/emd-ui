import React, { ReactNode } from "react";
import { ScreenSectionFormWrapperStyled } from "./ScreenSectionFormWrapper.style";
import CustomLink from "../../lib/CustomLink/CustomLink";

export interface ShowcaseSection {
  backgroundColor: string;
  img?: string;
}

interface FormSection {
  title: string;
  description: string;
}

interface AppData {
  appName: string;
  websiteUrl: string;
  appColor: string;
  icon: string;
}

interface ScreenSectionFormWrapperProps {
  pageName: string;
  children: ReactNode;
  showcaseSection?: ShowcaseSection;
  formSection?: FormSection;
  appData?: AppData;
}

const ScreenSectionFormWrapper: React.FC<ScreenSectionFormWrapperProps> = ({
  pageName,
  children,
  showcaseSection = { backgroundColor: "", img: "" },
  formSection,
  appData,
}) => {
  return (
    <ScreenSectionFormWrapperStyled
      showcaseColor={showcaseSection.backgroundColor}
    >
      <div className="showcase-container">
        <div className="showcase-img-wrapper">
          {showcaseSection?.img && (
            <img
              className="showcase-img"
              src={showcaseSection.img}
              alt={`${formSection?.title} showcase img`}
            />
          )}
        </div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1 className="title">{formSection?.title}</h1>
          <p className="subTitle">{formSection?.description}</p>
          <div className="logoLink">
            {appData?.websiteUrl && appData?.appName && (
              <CustomLink href={appData.websiteUrl} linkType="logoImg">
                {appData.icon && <span className="icon">{appData.icon}</span>}
                <span className="text">{appData.appName}</span>
              </CustomLink>
            )}
          </div>
        </div>
        <div className="form-body">{children}</div>
      </div>
    </ScreenSectionFormWrapperStyled>
  );
};

export default ScreenSectionFormWrapper;
