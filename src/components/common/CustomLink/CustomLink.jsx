import { Link, useLocation } from "react-router-dom";
import { CustomLinkStyle } from "./CustomLink.styled";
import { useSelector } from "react-redux";
import { getSelectedLinkType } from "../../../uiSettings";

const CustomLink = ({ href, children, classNameList, linkType, onClick }) => {
  const location = useLocation();
  const { currentMainRoute, subRoutes } = useSelector(
    (state) => state.navigation
  );

  const getClass = () => {
    let className = `nav-link ${classNameList || ""}`;
    const selectedPath = getSelectedLinkType(linkType, location.pathname);
    // if the current path is the same as the main path for the linkType, add the active class
    if (selectedPath === href) className += " active";
    return className;
  };

  return (
    <CustomLinkStyle
      $linkType={linkType}
      className="CustomLink unable-to-mark"
      onClick={onClick}
    >
      <Link to={`${href}`} className={getClass()}>
        {children}
      </Link>
    </CustomLinkStyle>
  );
};

export default CustomLink;
