"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFDocumentStyled = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const jspdf_1 = __importDefault(require("jspdf"));
const html2canvas_1 = __importDefault(require("html2canvas"));
const PDFPage_1 = __importDefault(require("./PDFPage"));
const styled_components_1 = __importDefault(require("styled-components"));
const common_1 = require("../../common");
exports.PDFDocumentStyled = styled_components_1.default.div `
  position: relative;
  @keyframes btn-wrapper-fade-in {
    0% {
      top: 0;
      opacity: 0;
    }
    100% {
      top: 25px;
    }
  }

  &:hover {
    .btn-wrapper {
      animation: btn-wrapper-fade-in 0.2s ease-in-out forwards;
      display: block;
    }
  }

  .btn-wrapper {
    position: absolute;
    top: 25px;
    right: 0;
    left: 0;
    margin: auto;
    width: 100px;
    display: none;
  }
`;
const PDFDocument = ({ content, itemsPerPage }) => {
    const containerRef = (0, react_1.useRef)(null);
    const pages = [];
    for (let i = 0; i < content.length; i += itemsPerPage) {
        pages.push(content.slice(i, i + itemsPerPage));
    }
    const handleGeneratePDF = () => __awaiter(void 0, void 0, void 0, function* () {
        const pdf = new jspdf_1.default("p", "mm", "a4");
        if (containerRef.current) {
            for (let i = 0; i < pages.length; i++) {
                if (i > 0) {
                    pdf.addPage();
                }
                const canvas = yield (0, html2canvas_1.default)(containerRef.current.children[i], {
                    scale: 3,
                });
                const imgData = canvas.toDataURL("image/png");
                const imgWidth = 210; // dimensions of an A4 in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            }
        }
        pdf.save("document.pdf");
    });
    return ((0, jsx_runtime_1.jsxs)(exports.PDFDocumentStyled, { ref: containerRef, dir: "rtl", children: [pages.map((pageContent, index) => ((0, jsx_runtime_1.jsx)(PDFPage_1.default, { content: pageContent, pageNumber: index + 1, pageAmount: pages.length }, index))), (0, jsx_runtime_1.jsx)("div", { className: "btn-wrapper", children: (0, jsx_runtime_1.jsx)(common_1.Button, { onClick: handleGeneratePDF, children: "PDF \u05D4\u05D5\u05E8\u05D3" }) })] }));
};
exports.default = PDFDocument;
