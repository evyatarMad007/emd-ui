import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { SectionItemStyled } from "./SectionItem.styled";
const SectionItem = ({ section }) => {
    return (_jsxs(SectionItemStyled, { className: section.name, children: [_jsxs("div", { className: "section-number", children: [section.number, "."] }), _jsx("div", { className: "section-content", children: section.content })] }));
};
export default SectionItem;
