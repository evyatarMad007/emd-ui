"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ModalsContainer = ({ modalList }) => {
    return (<>
      {modalList.map((modal, index) => {
            const ModalComponent = modal.component;
            const { isOpen } = modal;
            return isOpen && <ModalComponent key={index}/>;
        })}
    </>);
};
exports.default = ModalsContainer;
// usage:
// const modalList = [
//   { component: ProjectModal, isOpen: isProjectModalOpen },
//   { component: EndPointModal, isOpen: isEndPointModalOpen },
//   { component: MethodModal, isOpen: isMethodModalOpen }
// ];
// <ModalsContainer modalList={modalList} />
