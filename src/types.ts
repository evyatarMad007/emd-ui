export type Variants = 'outlined' | 'contained' | 'text';
export type Sizes = 'small' | 'medium' | 'large';
export type Directions = 'ltr' | 'rtl';
export type Colors = 'primary' | 'secondary' | 'default' | 'error' | 'success';
export type ThemeType =  'light' | 'dark';



export interface IColorPlatte {
    main: string;
    lighter: string;
    lightTheme: string;
    darkTheme: string;
    contrastText: string;
}

export interface IColorsPlatte {
    primary: IColorPlatte;
    secondary: IColorPlatte;
    default: IColorPlatte;
    error: IColorPlatte;
    success: IColorPlatte;
}
