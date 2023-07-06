import React, { forwardRef, ForwardedRef, CSSProperties } from "react";
import { ButtonStyled, disableStyle } from "./Button.styled";
import Icon from "../Icon/Icon";
import { colors } from "../../../ui-settings-configs";
import { Colors, Variants } from "../../../types";

interface IconProps {
  type: string | null;
  size: number;
  color: string;
}

interface ButtonProps {
  id?: string;
  children?: React.ReactNode;
  dir?: "ltr" | "rtl";
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  icon?: IconProps;
  className?: string;
  btnType?: "button" | "submit" | "reset";
  color?: Colors;
  variant: Variants;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      id,
      children,
      dir = "ltr",
      disable = false,
      onClick,
      style,
      className,
      color,
      variant,
      btnType = "button",
      icon = { type: null, size: 15.5, color: colors.baseFont },
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const getStyle = (
      disable: boolean,
      style?: CSSProperties
    ): CSSProperties => {
      // if disable is true then return style merged with disableStyle, else return style or an empty object
      return disable ? { ...style, ...disableStyle } : style || {};
    };

    return (
      <ButtonStyled
        className={className}
        color={color}
        ref={ref}
        type={btnType}
        dir={dir}
        onClick={onClick}
        id={id && id}
        style={getStyle(disable, style)}
        variant={variant}
      >
        <div className="button-wrapper" dir={dir}>
          {children && (
            <span
              className="value"
              style={!icon?.type ? { marginRight: 0, marginLeft: 0 } : {}}
            >
              {children}
            </span>
          )}
          {icon?.type && (
            <span className="icon">
              <Icon
                iconType={icon.type}
                iconSize={icon.size}
                iconColor={icon.color}
              />
            </span>
          )}
        </div>
      </ButtonStyled>
    );
  }
);

export default Button;
