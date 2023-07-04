"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Modal_styled_1 = require("./Modal.styled");
const Icon_1 = __importDefault(require("../../common/Icon/Icon"));
const ModalTemplate = ({ children, modalTitle, isModalActive, setModal, iconType, iconColor, modalError, }) => {
    if (!isModalActive)
        return null;
    return ((0, jsx_runtime_1.jsxs)(Modal_styled_1.ModalTemplateStyled, { children: [(0, jsx_runtime_1.jsx)("div", { className: "outside", onClick: () => setModal(false) }), (0, jsx_runtime_1.jsxs)("div", { className: "inside", children: [(0, jsx_runtime_1.jsxs)("div", { className: "modal-header", children: [iconType && ((0, jsx_runtime_1.jsx)("span", { className: "icon", children: (0, jsx_runtime_1.jsx)(Icon_1.default, { iconType: iconType, iconSize: 20, iconColor: iconColor }) })), (0, jsx_runtime_1.jsx)("h2", { className: "title", children: modalTitle }), (0, jsx_runtime_1.jsx)("button", { className: "close-button", onClick: () => setModal(false), children: (0, jsx_runtime_1.jsx)(Icon_1.default, { iconType: "close", iconSize: 20, iconColor: "#adadadff" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "modal-body", children: children }), (0, jsx_runtime_1.jsx)("div", { className: "modal-footer", children: modalError && (0, jsx_runtime_1.jsx)("p", { className: "modal-error", children: modalError }) })] })] }));
};
exports.default = ModalTemplate;
