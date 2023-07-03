import React from "react";
import { useDispatch } from "react-redux";
import { ModalTemplateStyled } from "./ModalTemplate.styled";

import Icon from "../../common/Icon/Icon";
const ModalTemplate = ({
  children,
  modalTitle,
  isModalActive,
  setModal,
  iconType,
  iconColor,
  modalError,
}) => {
  const dispatch = useDispatch();

  if (isModalActive === false) return null;

  return (
    <ModalTemplateStyled>
      <div className="outside" onClick={() => dispatch(setModal(false))}></div>
      <div className="inside">
        <div className="modal-header">
          {iconType && (
            <span className="icon">
              <Icon iconType={iconType} iconSize={20} iconColor={iconColor} />
            </span>
          )}
          <h2 className="title">{modalTitle}</h2>
          <button
            className="close-button"
            onClick={() => dispatch(setModal(false))}
          >
            <Icon iconType={"close"} iconSize={20} iconColor={"#adadadff"} />
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
