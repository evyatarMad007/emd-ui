import React from "react";

interface IProps {
  position?: "absolute" | "relative" | "fixed" | "static" | "sticky";
  location?: [number, number, number, number];
  fullWidth?: boolean;
  children: React.ReactNode | string;
  pX?: string;
  pY?: string;
}

const Float: React.FC<IProps> = ({ position = 'relative', location, fullWidth, children, pX = "0px", pY = "0px" }) => {
  const [top, right, bottom, left] = location || [0, 0, 0, 0];

  return (
    <div
      style={{
        width: fullWidth ? "100%" : "380px",
        height: "max-content",
        position,
        top: `${top}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
        left: `${left}px`,
        padding: `${pX} ${pY}`,
      }}
    >
      {children}
    </div>
  );
};

export default Float;
