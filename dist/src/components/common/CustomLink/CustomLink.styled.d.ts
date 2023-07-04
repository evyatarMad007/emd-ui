import { linkTypes } from "../../../../ui-settings";
declare const sideBarLink: string, subHeaderLink: string, sideBarSettingsLink: string;
type TypeLinkType = typeof sideBarLink | typeof subHeaderLink | typeof sideBarSettingsLink | typeof linkTypes.logoImg | typeof linkTypes.login | typeof linkTypes.register | typeof linkTypes.sideBar;
interface CustomLinkStyleProps {
    linkType: TypeLinkType;
}
export declare const CustomLinkStyle: import("styled-components").StyledComponent<"div", any, CustomLinkStyleProps, never>;
export {};
