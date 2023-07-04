"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const RenderPages = ({ routeList, notFoundComponent, notFoundPath = "/*" }) => {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [routeList.map((route, index) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: route.path, element: route.component }, index))), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: notFoundPath, element: notFoundComponent })] }));
};
exports.default = RenderPages;
