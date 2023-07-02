import React from "react";
import { ModalBodyStyled } from "./ModalBody.styled";
import { getGenericModalText } from "../../../../utils/general-utils";
import ConfirmDialog from "../../../common/ConfirmDialog/ConfirmDialog";

const ModalBody = ({ action, modalName, actionCallback }) => {
  const actionType = getGenericModalText(action, modalName).iconType;

  if (actionType === "remove") {
    return (
      <ModalBodyStyled>
        <ConfirmDialog
          modalType={modalName}
          cancelCB={() => actionCallback("cancel", null)}
          removeCB={() => actionCallback("remove", null)}
        />
      </ModalBodyStyled>
    );
  }

  if (actionType === "edit") {
    return (
      <ModalBodyStyled>
        <form action="">edit</form>
      </ModalBodyStyled>
    );
  }

  if (actionType === "add") {
    return (
      <ModalBodyStyled>
        <form action="">add</form>
      </ModalBodyStyled>
    );
  }
};

export default ModalBody;
