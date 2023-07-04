import React from "react";
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
declare const PDFTypography: React.FC<PDFTypographyProps>;
export default PDFTypography;
