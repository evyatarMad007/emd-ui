import { Colors, IColorPlatte, IColorsPlatte, ThemeType } from "./types";


// get hte theme from local storage
export const getTheme = (): ThemeType => {
    const theme = localStorage.getItem('theme');
    const currentTheme: ThemeType = theme ? theme as ThemeType : 'light';
    return currentTheme;
};


export const getColors = (color: Colors): IColorPlatte => {
    const colors: IColorsPlatte = {
        primary: {
            main: '#3A72CA',
            lighter: 'rgba(58, 113, 202, 0.004)',
            lightTheme: '#3A72CA',
            darkTheme: '#3A72CA',
            contrastText: '#fff',
        },
        secondary: {
            main: '#9580F1',
            lighter: 'rgba(149, 128, 241, 0.064)',
            lightTheme: '#9580F1',
            darkTheme: '#9580F1',
            contrastText: '#fff',
        },
        default: {
            main: '#0F172A',
            lighter: 'rgba(15, 23, 42, 0.06)',
            lightTheme: '#0F172A',
            darkTheme: '#0F172A',
            contrastText: '#fff',
        },
        error: {
            main: '#DD4C64',
            lighter: 'rgba(221, 76, 100, 0.053)',
            lightTheme: '#DD4C64',
            darkTheme: '#DD4C64',
            contrastText: '#fff',
        },
        success: {
            main: '#13A44C',
            lighter: 'rgba(19, 164, 77, 0.047)',
            lightTheme: '#13A44C',
            darkTheme: '#13A44C',
            contrastText: '#fff',
        },
    }

    const theme: ThemeType = getTheme(); 
    const colorPlatte: IColorPlatte = colors[color]; 
    return colorPlatte;
}


