import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
const RenderPages = ({ routeList, notFoundComponent, notFoundPath = "/*" }) => {
    return (_jsxs(Routes, { children: [routeList.map((route, index) => (_jsx(Route, { path: route.path, element: route.component }, index))), _jsx(Route, { path: notFoundPath, element: notFoundComponent })] }));
};
export default RenderPages;
