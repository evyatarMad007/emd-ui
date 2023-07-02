import React from "react";
import { TypographyStyled } from "./Typography.styled";

const Typography = ({
  value,
  fWeight,
  location,
  margin,
  fSize,
  br,
  top,
  right,
  left,
  position,
  display,
  underLine,
}) => {
  const getBr = (brs) => {
    let brArr = [];
    for (let i = 0; i < brs; i++) {
      brArr.push(<br key={i} />);
    }
    return brArr;
  };

  return (
    <>
      <TypographyStyled
        fWeight={fWeight}
        fSize={fSize}
        underLine={underLine}
        top={top}
        right={right}
        left={left}
        position={position}
        display={display}
        margin={margin}
        location={location}
      >
        {value}
      </TypographyStyled>
      {location && getBr(2) || br && getBr(br)}
    </>
  );
};

export default Typography;
