import styled from "styled-components";
import uiSettings from "../../../../uiSettings";

export const SectionItemStyled = styled.li`
  .section-number {
      position: absolute;
      font-weight: bold;
    font-family: ${uiSettings.fonts.documentFontMedium};
  }
  .section-content {
    display: inline-block;
    margin-right: 30px;
    line-height: 1.4;
    margin-bottom: 5px;
    font-size: 1rem;
    font-family: ${uiSettings.fonts.documentFontMedium};
    letter-spacing: -0.7px;
    word-spacing: 0.5px;
  }
`;
