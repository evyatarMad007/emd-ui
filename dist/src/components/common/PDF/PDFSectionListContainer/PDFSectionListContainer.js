import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../PDFTypography/PDFTypography";
import { PDFSectionListContainerStyled } from "./PDFSectionListContainer.styled";
import SectionList from "./SectionList/SectionList";
const PDFSectionListContainer = ({ listTitle, sectionList }) => {
    return (_jsxs(PDFSectionListContainerStyled, { children: [_jsx(Typography, { fWeight: "b", value: listTitle, margin: "7px 0 0 0" }), _jsx(SectionList, { list: sectionList })] }));
};
export default PDFSectionListContainer;
