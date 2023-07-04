"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PDFTypography_1 = __importDefault(require("../PDFTypography/PDFTypography"));
const PDFSectionListContainer_styled_1 = require("./PDFSectionListContainer.styled");
const SectionList_1 = __importDefault(require("./SectionList/SectionList"));
const PDFSectionListContainer = ({ listTitle, sectionList }) => {
    return ((0, jsx_runtime_1.jsxs)(PDFSectionListContainer_styled_1.PDFSectionListContainerStyled, { children: [(0, jsx_runtime_1.jsx)(PDFTypography_1.default, { fWeight: "b", value: listTitle, margin: "7px 0 0 0" }), (0, jsx_runtime_1.jsx)(SectionList_1.default, { list: sectionList })] }));
};
exports.default = PDFSectionListContainer;
