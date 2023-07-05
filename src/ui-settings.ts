export const colors = {
  // main colors
  appMainPrimary1: "#00D28B",
  appMainPrimary2: "#0DAC81",
  appMainColorBold1: "#033841",
  // font colors
  baseFont: "#343434",
  lightFont: "#4d4d4d",
  reverseFont: "#e2e2e2",
  fontLightColor: "#ffffff",
  // background colors
  headerBgc: "#FEFFFF",
  screenBgc: "#F5F6FA",
};

export const breakPoints = {
  width: {
    mobile: "500px",
    tablet: "794px",
    laptop: "1024px",
    desktop: "1400px",
  },
  height: {
    xs: "585px",
    sm: "680px",
    md: "770px",
    lg: "900px",
  },
};

export const fonts = {
  mainFont: "Rubik-Regular",
  mainFontLight: "Rubik-Light",
  mainFontRegular: "Rubik-Regular",
  mainFontMedium: "Rubik-Medium",
  mainFontSemiBold: "Rubik-SemiBold",
  mainFontBold: "Rubik-Bold",
  documentFontBold: "David-Bold",
  documentFontRegular: "David-Regular",
  documentFontMedium: "David-Medium",
};

export const layout = {
  header: {
    background: "white",
    linkStyle: {
      linkColor: colors.baseFont,
      linkBackgroundColor: "",
      linkHoverColor: colors.appMainPrimary2,
      linkHoverBackgroundColor: "",
      activeLinkColor: colors.appMainPrimary2,
      activeLinkBackgroundColor: "",
    },
    desktop: {
      height: 60,
    },
    mobile: {
      height: 110,
    },
  },
  main: {
    background: colors.screenBgc,
    screensContainer: {
      background: colors.screenBgc,
      linkStyle: {
        linkColor: colors.baseFont,
        linkBackgroundColor: "",
        linkHoverColor: colors.appMainPrimary1,
        linkHoverBackgroundColor: "",
        activeLinkColor: colors.appMainPrimary1,
        activeLinkBackgroundColor: "",
      },
      desktop: {},
      mobile: {},
    },
  },
  sideBar: {
    background: colors.appMainColorBold1,
    linkStyle: {
      linkColor: colors.reverseFont,
      linkBackgroundColor: "",
      linkHoverColor: colors.appMainPrimary1,
      linkHoverBackgroundColor: "",
      activeLinkColor: colors.appMainPrimary1,
      activeLinkBackgroundColor: "",
    },
    desktop: {
      width: 69,
    },
    mobile: {
      width: 315,
    },
  },
};

export const linkTypes = {
  sideBar: "sideBar",
  sideBarSettings: "sideBarSettings",
  subHeader: "subHeader",
  login: "login",
  register: "register",
  logoImg: "logoImg",
};
