import styled, { css } from "styled-components";
import {
  breakPoints,
  colors,
  fonts,
  layout,
  linkTypes,
} from "../../../../oldsrc/ui-settings";
const { sideBar, header } = layout;
const {
  sideBar: sideBarLink,
  subHeader: subHeaderLink,
  sideBarSettings: sideBarSettingsLink,
} = linkTypes;

type TypeLinkType =
  | typeof sideBarLink
  | typeof subHeaderLink
  | typeof sideBarSettingsLink
  | typeof linkTypes.logoImg
  | typeof linkTypes.login
  | typeof linkTypes.register
  | typeof linkTypes.sideBar;

interface CustomLinkStyleProps {
  linkType: TypeLinkType;
}

export const CustomLinkStyle = styled.div<CustomLinkStyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .nav-link {
    color: inherit;
    width: 100% !important;
    height: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: inherit;
    transition: all 0.15s ease-in-out;
  }
  ${({ linkType }): any => {
    if (linkType === sideBarLink) {
      return css`
        .nav-link {
          background-color: ${sideBar.linkStyle.linkBackgroundColor};
          color: ${sideBar.linkStyle.linkColor};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column-reverse;
          font-family: ${fonts.mainFontLight};

          &:hover {
            .label {
              color: ${sideBar.linkStyle.linkHoverColor} !important;
            }
            .icon {
              border-color: ${sideBar.linkStyle.linkHoverColor} !important;
              svg {
                color: ${sideBar.linkStyle.linkHoverColor} !important;
                fill: ${sideBar.linkStyle.linkHoverColor} !important;
              }
            }
          }
        }

        .active {
          .label {
            color: ${sideBar.linkStyle.linkHoverColor} !important;
          }
          .icon {
            border-color: ${sideBar.linkStyle.linkHoverColor} !important;
            svg {
              color: ${sideBar.linkStyle.linkHoverColor} !important;
              fill: ${sideBar.linkStyle.linkHoverColor} !important;
            }
          }
        }
      `;
    }
    if (linkType === subHeaderLink) {
      return css`
        .nav-link {
          display: flex;
          width: max-content !important;
          font-size: 15px;
          font-family: ${fonts.mainFontRegular};
          color: ${header.linkStyle.linkColor} !important;

          &:hover {
            color: ${header.linkStyle.linkHoverColor} !important;
          }
        }

        .active {
          color: ${header.linkStyle.activeLinkColor} !important;
        }

        @media (max-width: ${breakPoints.width.laptop}) {
          .nav-link {
            border-radius: 150px;
            max-height: 27px;
            height: 27px;
            padding: 0 12px;

            &:hover {
              background-color: ${header.linkStyle.activeLinkColor} !important;
              color: ${colors.fontLightColor} !important;
            }
            &:active {
              opacity: 0.95;
              transition: all 0s;
            }
          }
          .active {
            background-color: ${header.linkStyle.activeLinkColor} !important;
            color: ${colors.fontLightColor} !important;
          }
        }
      `;
    }
    if (linkType === sideBarSettingsLink) {
      return css`
        .nav-link {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: center;

          &:hover {
            color: ${header.linkStyle.linkHoverColor} !important;

            .label {
              color: ${layout.sideBar.linkStyle.linkHoverColor};
            }
          }

          .label {
            display: block;
            line-height: 1;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.8px;
            max-width: 85%;
            text-transform: uppercase;
            color: ${layout.sideBar.linkStyle.linkColor};
          }

          .icon {
            border: 2px solid #ffffffff;
            border-radius: 50%;
            display: block;
            height: 40px;
            width: 40px;
            margin-bottom: 6px;
            overflow: hidden;

            .profile-icon {
              display: block;
              height: 100%;
              width: 100%;
              border-radius: 50%;
            }
            .mock-user-icon {
              display: block;
              height: 100%;
              width: 100%;
              border-radius: 50%;
              background-color: #ffffff;

              svg {
                fill: ${colors.lightFont};
                height: 85%;
                width: 90%;
                display: flex;
                align-items: flex-start;
                margin: auto;
                transform: translateY(9px);
              }
            }
          }
        }
        .active {
          .label {
            color: ${layout.sideBar.linkStyle.linkHoverColor} !important;
          }
        }
      `;
    }
  }}
`;
