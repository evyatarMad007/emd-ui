import React from "react";
interface ModalTemplateProps {
    children: React.ReactNode;
    modalTitle: string;
    isModalActive: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    iconType?: string;
    iconColor?: string;
    modalError?: string;
}
declare const ModalTemplate: React.FC<ModalTemplateProps>;
export default ModalTemplate;
