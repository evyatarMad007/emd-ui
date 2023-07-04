import React from "react";
interface Modal {
    component: React.ComponentType;
    isOpen: boolean;
}
interface ModalProps {
    modalList: Modal[];
}
declare const ModalsContainer: React.FC<ModalProps>;
export default ModalsContainer;
