// SelectInput.styled.ts
import styled from "styled-components";
import { colors } from "../../../ui-settings-configs";
import { getColors } from "../../../ui-settings-tools";

interface SelectContainerStyledProps {
  inpDir?: "ltr" | "rtl";
  maxWidth?: string;
}

export const SelectContainerStyled = styled.div<SelectContainerStyledProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.maxWidth};
  min-width: 150px;
  position: relative;

  .SelectInput-label {
    padding: ${(props) => (props.inpDir === "rtl" ? "0 2px 0 0" : "0 0 0 2px")};
    margin-bottom: 10px;
    font-size: 15px;
    text-align: ${(props) => (props.inpDir === "rtl" ? "right" : "left")};
    direction: ${(props) => props.inpDir};
  }

  .SelectInput-select {
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
    

    option {
      color: ${colors.baseFont}; // text color
      background-color: #fff; // background color
      font-size: 15px; // text size
    }
  }
`;
