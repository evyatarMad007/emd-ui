import React, { forwardRef } from "react";
import { ButtonStyled, disableStyle } from "./Button.styled";
import Icon from "../Icon/Icon";
import { colors } from "../../../../uiSettings";


const Button = forwardRef(
  (
    {
      value,
      btnType = "button",
      dir = "ltr",
      disable,
      padding,
      id,
      onClick,
      borderRadius,
      style,
      background,
      icon = {
        type: null,
        size: 15.5,
        color: colors.baseFont,
      },
    },
    ref
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        type={btnType}
        dir={dir}
        onClick={onClick}
        id={id && id}
        style={disable ? disableStyle : style}
        borderRadius={borderRadius}
        background={background}
        padding={padding}
      >
        <div className="button-wrapper" dir={dir}>
          {value && (
            <span
              className="value"
              style={!icon?.type ? { marginRight: 0, marginLeft: 0 } : {}}
            >
              {value}
            </span>
          )}
          {icon?.type && (
            <span className="icon">
              <Icon
                iconType={icon?.type}
                iconSize={icon?.size}
                iconColor={icon?.color}
              />
            </span>
          )}
        </div>
      </ButtonStyled>
    );
  }
);

export default Button;
