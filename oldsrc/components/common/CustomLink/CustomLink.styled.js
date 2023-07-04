"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLinkStyle = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const ui_settings_1 = require("../../../../ui-settings");
const { sideBar, header } = ui_settings_1.layout;
const { sideBar: sideBarLink, subHeader: subHeaderLink, sideBarSettings: sideBarSettingsLink, } = ui_settings_1.linkTypes;
exports.CustomLinkStyle = styled_components_1.default.div `
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
  ${({ linkType }) => {
    if (linkType === sideBarLink) {
        return (0, styled_components_1.css) `
        .nav-link {
            background-color: ${sideBar.linkStyle.linkBackgroundColor};
            color: ${sideBar.linkStyle.linkColor};
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column-reverse;
            font-family: ${ui_settings_1.fonts.mainFontLight};

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
        return (0, styled_components_1.css) `
        .nav-link {
          display: flex;
          width: max-content !important;
          font-size: 15px;
          font-family: ${ui_settings_1.fonts.mainFontRegular};
          color: ${header.linkStyle.linkColor} !important;

            &:hover {
                color: ${header.linkStyle.linkHoverColor} !important;
            }
        }

        .active {
            color: ${header.linkStyle.activeLinkColor} !important;
        }

        @media (max-width: ${ui_settings_1.breakPoints.width.laptop}) {
          .nav-link {
              border-radius: 150px;
              max-height: 27px;
              height: 27px;
              padding: 0 12px;

              &:hover {
                background-color: ${header.linkStyle.activeLinkColor} !important;
                color: ${ui_settings_1.colors.fontLightColor} !important;
              }
              &:active {
                opacity: 0.95;
                transition: all 0s;
              }
          }
          .active {
            background-color: ${header.linkStyle.activeLinkColor} !important;
            color: ${ui_settings_1.colors.fontLightColor} !important;
          }
        }
      `;
    }
    if (linkType === sideBarSettingsLink) {
        return (0, styled_components_1.css) `
      .nav-link {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;

            &:hover {
                color: ${header.linkStyle.linkHoverColor} !important;

                .label {
                  color: ${ui_settings_1.layout.sideBar.linkStyle.linkHoverColor};
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
              color: ${ui_settings_1.layout.sideBar.linkStyle.linkColor};
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
                  fill: ${ui_settings_1.colors.lightFont};
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
              color: ${ui_settings_1.layout.sideBar.linkStyle.linkHoverColor} !important;
            }
          }
      `;
    }
}}
`;
