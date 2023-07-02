import React from "react";
import { ExitBtnStyle } from "./ExitBtn.styled";
import Icon from "../Icon/Icon";
import { colors } from "../../../uiSettings";

const ExitBtn = ({ onClick }) => {
  return (
    <ExitBtnStyle onClick={onClick}>
      <Icon iconType={"close"} iconSize={17} iconColor={colors.fontLightColor} />
    </ExitBtnStyle>
  );
};

export default ExitBtn;
