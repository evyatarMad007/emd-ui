import styled from "styled-components";
import { colors } from "../../../ui-settings-configs";
import { getColors } from "../../../ui-settings-tools";

interface InputContainerProps {
  inpDir: "rtl" | "ltr";
  maxWidth?: string;
}

export const InputContainerStyled = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.maxWidth};
  position: relative;

  .TextInput-label {
    padding: ${(props) => (props.inpDir === "rtl" ? "0 2px 0 0" : "0 0 0 2px")};
    margin-bottom: 10px;
    font-size: 15px;
    text-align: ${(props) => (props.inpDir === "rtl" ? "right" : "left")};
    direction: ${(props) => props.inpDir};
  }

  .TextInput-inp {
    padding: ${(props) => props.inpDir === "rtl" ? "0 10px 0 0" : "0 0 0 10px"};
    height: 40px;
    border: 1.5px solid ${colors.colorSilver};
    box-shadow: 0 0 1px 1px transparent;
    border-radius: 0.5rem;
    font-size: 15px;
    color: ${colors.baseFont};
    width: 100%;
    box-sizing: border-box;
    text-align: ${(props) => (props.inpDir === "rtl" ? "right" : "left")};
    direction: ${(props) => props.inpDir};

    &:focus {
      outline: none;
      border-color: ${getColors("primary").main};
      box-shadow: 0 0 1px 1px ${getColors("primary").main};
    }

  }

  .TextInput-error {
    position: absolute;
    bottom: -15px;
    color: red;
    font-size: 12.5px;
    ${(props) => {
      if (props.inpDir === "rtl") {
        return `
          right: 2px;
        `;
      } else {
        return `
          left: 2px;
        `;
      }
    }};
    direction: ${(props) => props.inpDir};
    width: max-content;
  }
`;
