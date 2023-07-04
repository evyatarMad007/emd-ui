import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LogoutButtonStyle } from './LogoutButton.styled';
import Icon from '../Icon/Icon';
const LogoutButton = ({ linkColor }) => {
    return (_jsxs(LogoutButtonStyle, { children: [_jsx(Icon, { margin: '0 3.25px 0 0', iconType: "logout", iconSize: 17 }), _jsx("span", { className: 'text', children: "\u05D4\u05EA\u05E0\u05EA\u05E7" })] }));
};
export default LogoutButton;
