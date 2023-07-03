import styled from "styled-components";
import { colors } from "../../../../uiSettings";


export const ButtonStyled = styled.button`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  direction: ltr;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "0.5rem"};
  border: 0.5px solid #00000011;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 1.3px 1.5px #00000060;
  background: ${({ background }) => (background ? background : colors.defaultPrimaryColor)};

  ${({ padding }) => {
    if (padding) {
      return `
      padding: ${padding} !important;
      width: max-content;
      height: auto; 
      `;
    }
  }};

  &:hover {
    opacity: 0.8;
    transition: all 0.1s;
    .popper {
      display: flex;
    }
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
    /* padding: 0 0.5rem; */
    width: 100%;
    text-align: center;

    .value {
      font-size: 1rem;
      direction: ltr;
      color: white;
      font-weight: bold;
      text-shadow: 0px 0px 1px #000000;

      ${(props) => {
        if (props.dir === "ltr") {
          return `margin-right: 0.25rem;`;
        } else if (props.dir === "rtl") {
          return `margin-left: 0.25rem;`;
        } else {
          return `margin-right: 0.25rem;`;
        }
      }}
    }
    .icon {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .popper {
    font-size: 0.6rem;
  }
`;

export const disableStyle = {
  backgroundColor: "#e0e0e0",
  color: "#9e9e9e",
  cursor: "not-allowed",
  boxShadow: "none",
  borderColor: "#e0e0e00",
  opacity: "0.5",
  pointerEvents: "none",
  userSelect: "none",
};
