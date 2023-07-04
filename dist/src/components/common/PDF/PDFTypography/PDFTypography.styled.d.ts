import { StyledComponent } from "styled-components";
interface PDFTypographyStyledProps {
    position?: string;
    top?: string;
    right?: string;
    left?: string;
    display?: string;
    margin?: string;
    fWeight?: 'b' | 'm' | 'r';
    fSize?: string;
    underLine?: boolean;
    location?: 'center' | 'right' | 'left';
}
export declare const PDFTypographyStyled: StyledComponent<"span", any, PDFTypographyStyledProps, never>;
export {};
