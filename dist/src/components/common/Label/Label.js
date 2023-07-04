import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { LabelStyled } from "./Label.styled";
const Label = ({ children, title }) => {
    return (_jsxs(LabelStyled, { children: [_jsxs("span", { className: "title", children: [title, ":"] }), _jsx("span", { className: "label", children: children })] }));
};
export default Label;
