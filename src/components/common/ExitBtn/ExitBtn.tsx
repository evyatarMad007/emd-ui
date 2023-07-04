import React, { FC, MouseEventHandler } from "react";
import { ExitBtnStyle } from "./ExitBtn.styled";
import Icon from "../Icon/Icon";
import { colors } from "../../../../ui-settings";

interface ExitBtnProps {
  onClick: MouseEventHandler;
}

const ExitBtn: FC<ExitBtnProps> = ({ onClick }) => {
  return (
    <ExitBtnStyle onClick={onClick}>
      <Icon iconType="close" iconSize={17} iconColor={colors.fontLightColor} />
    </ExitBtnStyle>
  );
};

export default ExitBtn;
