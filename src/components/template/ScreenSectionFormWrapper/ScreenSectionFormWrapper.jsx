import React from "react";
import { ScreenSectionFormWrapperStyled } from "./ScreenSectionFormWrapper.style";
import Icon from "../../common/Icon/Icon";
import { appData, colors } from "../../../uiSettings";
import CustomLink from "../../common/CustomLink/CustomLink";

const ScreenSectionFormWrapper = ({ pageName, children }) => {
  const getPageData = () => {
    const pageData = {
      login: {
        showcaseBackgroundColor: "#c9dd2e",
        showcaseImg:
          "https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png",
        title: "התחברות",
        description: "התחבר עם פרטי הכניסה שלך",
      },
      register: {
        showcaseBackgroundColor: "blue",
        showcaseImg:
          "https://www.allen.ac.in/ace2324/assets/images/register.png",
        title: "הרשמה",
        description: "הרשם לאתר והתחל להשתמש בשירותים שלנו",
      },
      resetPassword: {
        showcaseBackgroundColor: "#f1f1f1",
        showcaseImg:
          "https://png.pngtree.com/png-clipart/20230118/original/pngtree-reset-password-to-gain-more-secure-account-png-image_8920326.png",
        title: "איפוס סיסמה",
        description: "גם אנחנו שוכחים פעם בחיים",
      },
      forgotPassword: {
        showcaseBackgroundColor: "#FFE050",
        showcaseImg:
          "https://t4.ftcdn.net/jpg/04/20/32/53/360_F_420325313_0tgC68egfuhtzKf1OhVlZRHG6Dvv36Xt.jpg",
        title: "שכחת סיסמה?",
        description: "אנחנו נעזור לך לאפס אותה",
      },
    };

    return pageData[pageName];
  };

  return (
    <ScreenSectionFormWrapperStyled pageData={getPageData()}>
      <div className="showcase-container">
        <div className="showcase-img-wrapper">
          <img
            className="showcase-img"
            src={getPageData().showcaseImg}
            alt={`${getPageData().title} showcase img`}
          />
        </div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1 className="title">{getPageData().title}</h1>
          <p className="subTitle">{getPageData().description}</p>
          <div className="logoLink">
            <CustomLink href={appData.websiteUrl}>
              <span className="icon">
                <Icon
                  iconColor={colors.appMainPrimary2}
                  iconSize={22}
                  iconType={"bizantip"}
                />
              </span>
              <span className="text">{appData.appName}</span>
            </CustomLink>
          </div>
        </div>
        <div className="form-body">{children}</div>
      </div>
    </ScreenSectionFormWrapperStyled>
  );
};

export default ScreenSectionFormWrapper;
