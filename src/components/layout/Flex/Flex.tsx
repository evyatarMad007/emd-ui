import React from "react";

interface IProps {
  children: React.ReactNode | string;
  flexX?: string;
  flexY?: string;
  padding?: string;
  flexDir?: "row" | "column" | "row-reverse" | "column-reverse";
  fullWidth?: boolean;
  mW?: string;
  margin?: string;
  relative?: boolean;
}

const Flex: React.FC<IProps> = ({
  flexX,
  flexY,
  children,
  padding,
  flexDir,
  fullWidth,
  mW,
  margin,
  relative
}) => {
  return (
    <div
      style={{
        width: fullWidth ? "100%" : "380px",
        maxWidth: mW || "100%",
        margin: margin || "0 auto",
        display: "flex",
        flexDirection: flexDir || "row",
        justifyContent: flexX || "flex-start",
        alignItems: flexY || "flex-start",
        direction: "rtl",
        padding: padding || "0",
        position: relative ? "relative" : "static"
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
