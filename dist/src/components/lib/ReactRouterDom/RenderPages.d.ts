import React from "react";
interface RouteConfig {
    path: string;
    component: React.ReactNode;
}
interface RenderPagesProps {
    routeList: RouteConfig[];
    notFoundComponent: React.ReactNode;
    notFoundPath?: string;
}
declare const RenderPages: React.FC<RenderPagesProps>;
export default RenderPages;
