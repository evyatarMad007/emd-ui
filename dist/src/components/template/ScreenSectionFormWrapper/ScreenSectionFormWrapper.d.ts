import React, { ReactNode } from "react";
export interface ShowcaseSection {
    backgroundColor: string;
    img?: string;
}
interface FormSection {
    title: string;
    description: string;
}
interface AppData {
    appName: string;
    websiteUrl: string;
    appColor: string;
    icon: string;
}
interface ScreenSectionFormWrapperProps {
    pageName: string;
    children: ReactNode;
    showcaseSection?: ShowcaseSection;
    formSection?: FormSection;
    appData?: AppData;
}
declare const ScreenSectionFormWrapper: React.FC<ScreenSectionFormWrapperProps>;
export default ScreenSectionFormWrapper;
