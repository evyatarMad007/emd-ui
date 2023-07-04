"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const RenderPages = ({ routeList, notFoundComponent, notFoundPath = "/*" }) => {
    return (<react_router_dom_1.Routes>
      {routeList.map((route, index) => (<react_router_dom_1.Route key={index} path={route.path} element={route.component}/>))}
      {/* 404 */}
      <react_router_dom_1.Route path={notFoundPath} element={notFoundComponent}/>
    </react_router_dom_1.Routes>);
};
exports.default = RenderPages;
// example to use: 
// import Lobby from "../pages";
// import Products from "../pages/Products";
// import PremiumProducts from "../pages/Products/PremiumProducts";
// import About from "../pages/About";
// import Page404 from "../pages/404";
// const routeList = [
//   { path: "/", component: <Lobby /> },
//   { path: "/products", component: <Products /> },
//   { path: "/products/premium", component: <PremiumProducts /> },
//   { path: "/about", component: <About /> },
// ];
// Usage
//  <RenderPages routeList={routeList} notFoundComponent={<Page404 />} /> 
