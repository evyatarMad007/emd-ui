import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useRouter from "../../hooks/useRouter";
import {
  setCurrentMainRoute,
  setCurrentSubRoute,
  setSubRoutes,
  setIsLobbyPage,
  setIs404Page,
} from "../../../src/store/features/NavigationSlice";
import uiSettings from "../../../src/uiSettings";
import { links } from "../../../uiSettings";

const RouteListener = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const routes = links.routeList;

  const getMainRoute = (route) => {
    const currentRoute = routes[route];
    if (!currentRoute) return null;
    return {
      name: currentRoute.name,
      link: currentRoute.link,
      icon: currentRoute.icon,
      label: currentRoute.label,
    };
  };

  const getSubRoutes = (route) => {
    const currentRoute = routes[route];
    return currentRoute.subLinks;
  };

  const getSubRoute = (route, subRoute) => {
    const currentRoute = routes[route];
    const currentSubRoute = currentRoute.subLinks.find(
      (sub) => sub.name === subRoute
    );
    if (!currentSubRoute) return null;
    return currentSubRoute;
  };

  const set404Page = () => {
    dispatch(setIs404Page(true));
    dispatch(setCurrentMainRoute(null));
    dispatch(setSubRoutes(null));
    dispatch(setCurrentSubRoute(null));
    dispatch(setIsLobbyPage(false));
  };

  useEffect(() => {
    // Split the path into segments
    const pathSegments = pathname.split("/").filter((segment) => segment);

    // Set main and sub routes based on path segments
    if (pathSegments.length === 0) {
      dispatch(setCurrentMainRoute(getMainRoute("lobby")));
      dispatch(setCurrentSubRoute(null));
      dispatch(setSubRoutes(getSubRoutes("lobby")));
      dispatch(setIsLobbyPage(true));
      dispatch(setIs404Page(false));
    }

    if (pathSegments.length === 1) {
      dispatch(setIsLobbyPage(false));
      const mainRoute = getMainRoute(pathSegments[0]);
      if (!mainRoute) {
        return set404Page();
      }
      dispatch(setCurrentMainRoute(mainRoute));
      dispatch(setSubRoutes(getSubRoutes(pathSegments[0])));
      dispatch(setCurrentSubRoute(null));
      dispatch(setIsLobbyPage(false));
    }

    if (pathSegments.length === 2) {
      dispatch(setIsLobbyPage(false));
      const mainRoute = getMainRoute(pathSegments[0]);
      if (!mainRoute) {
        return set404Page();
      }
      dispatch(setCurrentMainRoute(mainRoute));
      dispatch(setSubRoutes(getSubRoutes(pathSegments[0])));

      const subRoute = getSubRoute(pathSegments[0], pathSegments[1]);
      if (!subRoute) {
        return set404Page();
      }
      dispatch(setCurrentSubRoute(subRoute));
    }
  }, [pathname, dispatch]);

  return null; // This component does not render anything
};

export default RouteListener;
