import React from "react";
import { Route, Routes } from "react-router-dom";

interface RouteConfig {
  path: string;
  component: React.ReactNode;
}

interface RenderPagesProps {
  routeList: RouteConfig[];
  notFoundComponent: React.ReactNode;
  notFoundPath?: string;
}

const RenderPages: React.FC<RenderPagesProps> = ({ routeList, notFoundComponent, notFoundPath = "/*" }) => {
  return (
    <Routes>
      {routeList.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
      {/* 404 */}
      <Route path={notFoundPath} element={notFoundComponent} />
    </Routes>
  );
};

export default RenderPages;

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

