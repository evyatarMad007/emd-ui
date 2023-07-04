// SelectInput.styled.ts
import styled from "styled-components";
import { colors } from "../../../../ui-settings";

interface SelectContainerStyledProps {
  inpDir?: "ltr" | "rtl";
}

export const SelectContainerStyled = styled.div<SelectContainerStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  position: relative;

  .SelectInput-label {
    padding: ${(props) => (props.inpDir === "rtl" ? "0 2px 0 0" : "0 0 0 2px")};
    text-transform: uppercase;
    margin-bottom: 3px;
    font-size: 13px;
    text-align: ${(props) => (props.inpDir === "rtl" ? "right" : "left")};
    direction: ${(props) => props.inpDir};
  }

  .SelectInput-select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    text-align: ${(props) => (props.inpDir === "rtl" ? "right" : "left")};
    direction: ${(props) => props.inpDir};

    &:focus {
      outline: none;
      border-color: ${colors.appMainPrimary2};
      box-shadow: 0 0 3px ${colors.appMainPrimary2};
    }

    option {
      color: ${colors.baseFont}; // text color
      background-color: #fff; // background color
      font-size: 15px; // text size
    }
  }
`;
