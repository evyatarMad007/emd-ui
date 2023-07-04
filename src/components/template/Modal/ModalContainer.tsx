import React from "react";

interface Modal {
  component: React.ComponentType;
  isOpen: boolean;
}

interface ModalProps {
  modalList: Modal[];
}


const ModalsContainer: React.FC<ModalProps> = ({ modalList }) => {
  return (
    <>
      {modalList.map((modal, index) => {
        const ModalComponent = modal.component;
        const { isOpen } = modal;
        return isOpen && <ModalComponent key={index} />;
      })}
    </>
  );
};

export default ModalsContainer;


// usage:
// const modalList = [
//   { component: ProjectModal, isOpen: isProjectModalOpen },
//   { component: EndPointModal, isOpen: isEndPointModalOpen },
//   { component: MethodModal, isOpen: isMethodModalOpen }
// ];

// <ModalsContainer modalList={modalList} />
