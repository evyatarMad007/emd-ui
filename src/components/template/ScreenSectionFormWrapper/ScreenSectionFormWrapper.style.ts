import styled from "styled-components";
import { breakPoints, colors, fonts } from "../../../../ui-settings";

interface ScreenSectionFormWrapperStyledProps {
  showcaseColor?: string;
}

export const ScreenSectionFormWrapperStyled = styled.div<ScreenSectionFormWrapperStyledProps>`
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
            color: ${colors.lightFont};
            font-family: ${fonts.mainFontBold};
        }
        .subTitle {
            margin-top: 35px;
            font-size: 18px;
            line-height: 1.5;
            text-align: center;
            width: 80%;
            max-width: 500px;
            color: ${colors.lightFont};
            font-family: ${fonts.mainFontRegular};
        }
        .logoLink {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${colors.appMainPrimary2};
          font-family: ${fonts.mainFontSemiBold};
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

  @media (max-width: ${breakPoints.width.laptop}) {
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
