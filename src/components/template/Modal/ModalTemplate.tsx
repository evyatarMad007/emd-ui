import React from "react";
import { ModalTemplateStyled } from "./Modal.styled";
import Icon from "../../../../src/components/common/Icon/Icon";

interface ModalTemplateProps {
  children: React.ReactNode;
  modalTitle: string;
  isModalActive: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  iconType?: string;
  iconColor?: string;
  modalError?: string;
}

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  children,
  modalTitle,
  isModalActive,
  setModal,
  iconType,
  iconColor,
  modalError,
}) => {
  if (!isModalActive) return null;

  return (
    <ModalTemplateStyled>
      <div className="outside" onClick={() => setModal(false)}></div>
      <div className="inside">
        <div className="modal-header">
          {iconType && (
            <span className="icon">
              <Icon iconType={iconType} iconSize={20} iconColor={iconColor} />
            </span>
          )}
          <h2 className="title">{modalTitle}</h2>
          <button className="close-button" onClick={() => setModal(false)}>
            <Icon iconType="close" iconSize={20} iconColor="#adadadff" />
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          {modalError && <p className="modal-error">{modalError}</p>}
        </div>
      </div>
    </ModalTemplateStyled>
  );
};

export default ModalTemplate;
