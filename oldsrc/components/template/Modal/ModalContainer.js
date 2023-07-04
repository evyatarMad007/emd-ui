"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ModalsContainer = ({ modalList }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: modalList.map((modal, index) => {
            const ModalComponent = modal.component;
            const { isOpen } = modal;
            return isOpen && (0, jsx_runtime_1.jsx)(ModalComponent, {}, index);
        }) }));
};
exports.default = ModalsContainer;
