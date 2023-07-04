import styled, { css } from "styled-components";
import { colors } from "../../../../ui-settings";
export const ButtonStyled = styled.button `
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  direction: ltr;
  border-radius: 0.5rem;
  border: 0.5px solid #00000011;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 1.3px 1.5px #00000060;
  background: ${colors.appMainPrimary2};

  ${({ padding }) => padding &&
    css `
      padding: ${padding} !important;
      width: max-content;
      height: auto;
    `};

  &:hover {
    opacity: 0.8;
    transition: all 0.1s;
  }

  &:active {
    filter: brightness(0.9);
    border: 0.5px solid #0000001a;
    transform: translateY(1.2px);
    box-shadow: 0 0 0 #00000076;
    transition: all 0s;
  }

  .button-wrapper {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.1s;
    width: 100%;
    text-align: center;

    .value {
      font-size: 1rem;
      direction: ltr;
      color: white;
      font-weight: bold;
      text-shadow: 0px 0px 1px #000000;

      ${({ dir }) => dir === "ltr"
    ? css `
              margin-right: 0.25rem;
            `
    : dir === "rtl"
        ? css `
              margin-left: 0.25rem;
            `
        : css `
              margin-right: 0.25rem;
            `}
    }

    .icon {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const disableStyle = {
    backgroundColor: "#e0e0e0",
    color: "#9a9a9a",
    cursor: "not-allowed",
    boxShadow: "none",
    borderColor: "#e0e0e00",
    opacity: "0.5",
    pointerEvents: "none",
    userSelect: "none",
};
