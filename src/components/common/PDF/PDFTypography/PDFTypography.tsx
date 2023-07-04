import React, { ReactElement } from "react";
import { PDFTypographyStyled } from "./PDFTypography.styled";

interface PDFTypographyProps {
  value: string;
  fWeight?: 'b' | 'm' | 'r';
  top?: string;
  location?: 'center' | 'right' | 'left';
  margin?: string;
  fSize?: string;
  br?: number;
  right?: string;
  left?: string;
  position?: string;
  display?: string;
  underLine?: boolean;
}



const PDFTypography: React.FC<PDFTypographyProps> = ({
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
  const getBr = (brs: number): ReactElement[] => {
    let brArr: ReactElement[] = [];
    for (let i = 0; i < brs; i++) {
      brArr.push(<br key={i} />);
    }
    return brArr;
  };

  return (
    <>
      <PDFTypographyStyled
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
      </PDFTypographyStyled>
      {location && getBr(2) || br && getBr(br)}
    </>
  );
};

export default PDFTypography;
