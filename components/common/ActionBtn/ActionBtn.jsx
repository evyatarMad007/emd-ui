import React from "react";
import { ActionBtnStyled } from "./ActionBtn.styled";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  setIsProjectModalOpen,
  setIsEndPointModalOpen,
  setIsMethodModalOpen,
} from "../../../store/features/UIStore/UIStoreSlice";
import {
  firstWordCapital,
  getColorByAction,
} from "../../../utils/general-utils";

const ActionBtn = ({
  action,
  item,
  style,
  onClick,
  popperPositionX = "center",
  popperPositionY = "top",
  dir = "rtl",
  id,
  disableValue = false,
}) => {
  const dispatch = useDispatch();

  const handleDispatch = () => {
    const itemUC = item.toUpperCase();
    const actionUC = action.toUpperCase();

    if (itemUC === "PROJECT") {
      dispatch(setIsProjectModalOpen(actionUC));
    } else if (itemUC === "ENDPOINT") {
      dispatch(setIsEndPointModalOpen(actionUC));
    } else if (itemUC === "METHOD") {
      dispatch(setIsMethodModalOpen(actionUC));
    }
  };

  const handleTexts = () => {
    const itemLC = item.toLowerCase();
    const actionLC = action.toLowerCase();

    const texts = {
      value: `${firstWordCapital(actionLC)} ${firstWordCapital(itemLC)}`,
      iconColor: getColorByAction(actionLC),
      iconType: actionLC,
      popperValue: `${firstWordCapital(actionLC)} ${firstWordCapital(itemLC)}`,
    };

    return texts;
  };

  return (
    <ActionBtnStyled style={{ ...style }} onClick={onClick && onClick}>
      <Button
        id={id && id}
        dir={dir}
        onClick={() => handleDispatch()}
        value={!disableValue ? handleTexts().value : null}
        icon={{
          type: handleTexts().iconType,
          color: handleTexts().iconColor,
        }}
        popper={{
          positionX: popperPositionX,
          positionY: popperPositionY,
          value: handleTexts().popperValue,
        }}
      />
    </ActionBtnStyled>
  );
};

export default ActionBtn;
