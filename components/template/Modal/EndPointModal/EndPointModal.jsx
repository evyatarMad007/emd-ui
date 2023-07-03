import React, { useEffect, useState } from "react";
import { EndPointModalStyled } from "./EndPointModal.styled";
import { useDispatch, useSelector } from "react-redux";
import ModalTemplate from "../ModalTemplate";
import {
  setEndPointSelected,
  setIsEndPointModalOpen,
  setIsSpinnerScreenOpen,
  setProjectSelected,
} from "../../../../store/features/UIStore/UIStoreSlice";
import { getGenericModalText } from "../../../../utils/general-utils";
import { constants } from "../../../../constants/constants";
import ConfirmDialog from "../../../common/ConfirmDialog/ConfirmDialog";
import Form from "../../../common/Form/Form";
import TextInput from "../../../common/TextInput/TextInput";
import { InpWrapperStyled } from "../../../common/Form/Form.styled";
import {
  useAddEndPointMutation,
  useUpdateEndPointMutation,
  useDeleteEndPointMutation,
  useProjectsQuery,
} from "../../../../store/api/project/projectApi";

const EndPointModal = () => {
  const { isEndPointModalOpen, endPointSelected, projectSelected } =
    useSelector((state) => state.UIStore);
  const [deleteEndPoint, { error: deleteError }] = useDeleteEndPointMutation();
  const [updateEndPoint, { error: updateError }] = useUpdateEndPointMutation();
  const [createEndPoint, { error: createError }] = useAddEndPointMutation();
  const { data: projects } = useProjectsQuery();
  const [endPointName, setEndPointName] = useState({
    value: "",
    isValid: false,
  });
  const [error, setError] = useState("");

  const modalName = "endPoint";
  const modalText = getGenericModalText(isEndPointModalOpen, modalName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEndPointModalOpen === constants.edit) {
      setEndPointName({ value: endPointSelected.endPointName, isValid: true });
    }
  }, []);

  useEffect(() => {
    if (deleteError || updateError || createError) {
      setError(
        deleteError?.message || updateError?.message || createError?.message
      );
    }
  }, [deleteError, updateError, createError]);

  const removeHandler = async () => {
    // show the loading spinner.
    dispatch(setIsSpinnerScreenOpen(true));

    try {
      await deleteEndPoint({
        projectId: projectSelected._id,
        endPointId: endPointSelected._id,
      });

      // update the selected endPoint.
      dispatch(setEndPointSelected(null));
    } catch (error) {
      setError(error.message);
    } finally {
      // hide the loading spinner.
      dispatch(setIsSpinnerScreenOpen(false));

      // close the modal.
      dispatch(setIsEndPointModalOpen(null));
    }
  };

  const submitFormHandler = async () => {
    // open the loading spinner.
    dispatch(setIsSpinnerScreenOpen(true));

    try {
      if (isEndPointModalOpen === constants.edit) {
        await updateEndPoint({
          projectId: projectSelected._id,
          endPointId: endPointSelected._id,
          endPointData: {
            endPointName: endPointName.value,
          },
        }).unwrap();
      }

      if (isEndPointModalOpen === constants.add) {
        await createEndPoint({
          projectId: projectSelected._id,
          endPointData: {
            endPointName: endPointName.value,
          },
        })
          .unwrap()
          .then((data) => {
            const newProject = projects.find(
              (project) => project._id === data.projectId
            );
            dispatch(setProjectSelected(newProject));
          });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      // close the modal.
      dispatch(setIsEndPointModalOpen(null));
      // hide the loading spinner.
      dispatch(setIsSpinnerScreenOpen(false));
    }
  };

  return (
    <EndPointModalStyled>
      <ModalTemplate
        iconType={modalText.iconType}
        iconColor={modalText.iconColor}
        modalTitle={modalText.modalTitle}
        isModalActive={isEndPointModalOpen}
        setModal={setIsEndPointModalOpen}
        modalError={error}
      >
        {isEndPointModalOpen === constants.add && (
          <Form
            onSubmit={submitFormHandler}
            cancelCB={() => dispatch(setIsEndPointModalOpen(null))}
            action={isEndPointModalOpen}
            modalName={modalName}
            isValidForm={endPointName.isValid}
          >
            <InpWrapperStyled maxWidth={400}>
              <TextInput
                inpData={setEndPointName}
                fieldType={constants.name}
                label={"EndPoint Name"}
              />
            </InpWrapperStyled>
          </Form>
        )}

        {isEndPointModalOpen === constants.edit && (
          <Form
            onSubmit={submitFormHandler}
            cancelCB={() => dispatch(setIsEndPointModalOpen(null))}
            action={isEndPointModalOpen}
            modalName={modalName}
            isValidForm={endPointName.isValid}
          >
            <InpWrapperStyled maxWidth={400}>
              <TextInput
                inpData={setEndPointName}
                initValue={endPointSelected.endPointName}
                fieldType={constants.name}
                label={"EndPoint Name"}
              />
            </InpWrapperStyled>
          </Form>
        )}

        {isEndPointModalOpen === constants.remove && (
          <ConfirmDialog
            itemName={endPointSelected.endPointName}
            modalType={modalName}
            cancelCB={() => dispatch(setIsEndPointModalOpen(null))}
            removeCB={() => removeHandler()}
          />
        )}
      </ModalTemplate>
    </EndPointModalStyled>
  );
};

export default EndPointModal;
