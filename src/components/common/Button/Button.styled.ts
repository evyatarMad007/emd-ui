import styled, { CSSProperties, css } from "styled-components";
import { colors } from "../../../ui-settings-configs";
import { Colors, Variants } from "../../../types";
import { getColors } from "../../../ui-settings-tools";

interface PropsStyled {
  dir?: "ltr" | "rtl";
  color?: Colors;
  variant?: Variants;
}

export const ButtonStyled = styled.button<PropsStyled>`
  position: relative;
  cursor: pointer;
  width: max-content;
  height: 40px;
  display: flex;
  align-items: center;
  direction: ltr;
  padding: 0 10px;
  border-radius: 0.5rem;

  .button-wrapper {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.1s;
    width: 100%;
    text-align: center;

    .value {
      font-size: 0.8125rem;
      direction: ltr;

      ${({ dir }) =>
        dir === "ltr"
          ? css`
              margin-right: 0.25rem;
            `
          : dir === "rtl"
          ? css`
              margin-left: 0.25rem;
            `
          : css`
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

  &:active {
    filter: brightness(0.8);
  }

  ${(props) => {
    switch (props.variant) {
      case "contained":
        return css`
          border: 0.5px solid #fffefe0a;
          background: ${props.color && getColors(props.color).main};
          box-shadow: inset 0 0 5px #fffefe0a;

          &:hover {
            opacity: 0.9;
          }

          .button-wrapper {
            .value {
              color: ${props.color && getColors(props.color).contrastText};
              font-weight: bold;
            }
          }
        `;
      case "outlined":
        return css`
          border: 0.5px solid ${props.color && getColors(props.color).main};
          background: transparent;
          box-shadow: unset;

          &:hover {
            background: ${props.color && getColors(props.color).lighter};
          }

          .button-wrapper {
            .value {
              color: ${props.color && getColors(props.color).main};
              /* font-weight: bold; */
              /* text-shadow: 0px 0px 1px #000000; */
            }
          }
        `;
      case "text":
        return css`
          border: 1px solid transparent;
          background: transparent;
          box-shadow: unset;

          &:hover {
            background: #20202006;
          }
        `;
      default:
        return css``;
    }
  }}
`;

export const disableStyle: CSSProperties = {
  backgroundColor: "#e0e0e0",
  color: "#9a9a9a",
  cursor: "not-allowed",
  boxShadow: "none",
  borderColor: "#e0e0e00",
  opacity: "0.5",
  pointerEvents: "none",
  userSelect: "none",
};
