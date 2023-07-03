import React, { useEffect, useRef } from "react";
import { ButtonStyle, ConfirmDialogStyled } from "./ConfirmDialog.styled";
import Button from "../Button/Button";

const ConfirmDialog = ({ modalType, removeCB, cancelCB, itemName }) => {
  const deleteButtonRef = useRef(null);

  useEffect(() => {
    // set the focus to the delete button when the component mounts
    if (deleteButtonRef.current) {
      deleteButtonRef.current.focus();
    }
  }, []);

  return (
    <ConfirmDialogStyled>
      <p className="dialog-title">
        Are you sure you want to remove the {" "}
        <span
          className="modal-type"
          style={{ fontSize: "1.2rem", textDecoration: "underline" }}
        >
          {itemName}
        </span>{" "}
        {modalType}?
      </p>
      <div className="dialog-buttons">
        <div className="dialog-btn-wrapper">
          <Button
            ref={deleteButtonRef}
            onClick={() => removeCB()}
            value={"Yes, Delete it!"}
            style={{ ...ButtonStyle, backgroundColor: "#ff4d5097" }}
          />
        </div>
        <div className="dialog-btn-wrapper">
          <Button
            onClick={() => cancelCB()}
            value={"Cancel"}
            style={ButtonStyle}
          />
        </div>
      </div>
    </ConfirmDialogStyled>
  );
};

export default ConfirmDialog;
