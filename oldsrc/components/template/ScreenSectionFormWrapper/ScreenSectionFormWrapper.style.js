"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenSectionFormWrapperStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ui_settings_1 = require("../../../../ui-settings");
exports.ScreenSectionFormWrapperStyled = styled_components_1.default.div `
  height: 100vh;
  width: 100%;
  padding: 0;
  display: flex;
  position: relative;
  overflow: hidden;

  .showcase-container {
    background-color: ${({ showcaseColor }) => showcaseColor || "default-color"};
    width: 25.7%;
    position: relative;

    .showcase-img-wrapper {
      position: absolute;
      top: 46%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      
      .showcase-img {
        width: 100%;
        height: auto;
      }
      
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        
      }
    }
  }

  .form-container {
    width: 74.3%;

    .form-header {
        height: 33%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        .title {
            margin-top: 150px;
            /* font-size: 38px; */
            font-size: clamp(30px, 5vw, 38px);
            letter-spacing: 0.5px;
            color: ${ui_settings_1.colors.lightFont};
            font-family: ${ui_settings_1.fonts.mainFontBold};
        }
        .subTitle {
            margin-top: 35px;
            font-size: 18px;
            line-height: 1.5;
            text-align: center;
            width: 80%;
            max-width: 500px;
            color: ${ui_settings_1.colors.lightFont};
            font-family: ${ui_settings_1.fonts.mainFontRegular};
        }
        .logoLink {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${ui_settings_1.colors.appMainPrimary2};
          font-family: ${ui_settings_1.fonts.mainFontSemiBold};
          cursor: pointer;
          user-select: none;

          .icon {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

        }
    }

    .form-body {
        height: 67%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 10px 0 10px;
    }
  }

  @media (max-width: ${ui_settings_1.breakPoints.width.laptop}) {
    .showcase-container {
      display: none;
      width: 0;
      .showcase-img-wrapper {
        .showcase-img {
        }
      }
    }

    .form-container {
      width: 100%;
    }
  }
`;
